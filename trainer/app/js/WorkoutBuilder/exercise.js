import {
  Component
} from 'angular2/core';
import {
  upgradeAdapter
} from '../upgrade-adapter.js';

@Component({
  selector: 'exercise-nav',
  template: `<div id="left-nav-exercises">
                <h4>Exercises</h4>
                <div *ngFor="#exercise of exercises" class="row">
                    <button class="btn btn-info col-sm-12" (click)="addExercise(exercise)">{{exercise.title}}<span class="glyphicon glyphicon-chevron-right"></span></button>
                </div>
            </div>`
})
export class ExercisesNavComponent {
  static get parameters() {
    return ['WorkoutService', 'WorkoutBuilderService'];
  }
  constructor(WorkoutService, WorkoutBuilderService) {
    this.WorkoutService = WorkoutService;
    this.WorkoutBuilderService = WorkoutBuilderService;
    this.WorkoutService.Exercises.query().$promise.then((data) => {
      this.exercises = data.sort((a, b) => {
        if (a.title < b.title)
          return -1;
        else if (a.title > b.title)
          return 1;
        else
          return 0;
      })
    });
  }

  addExercise(exercise) {
    this.WorkoutBuilderService.addExercise(exercise);
  }
}

angular.module('WorkoutBuilder').directive('exerciseNav', upgradeAdapter.downgradeNg2Component(ExercisesNavComponent));


angular.module('WorkoutBuilder')
  .controller('ExerciseListController', ['$scope', 'WorkoutService', '$location', function($scope, WorkoutService, $location) {
    $scope.goto = function(exercise) {
      $location.path('/builder/exercises/' + exercise.name);
    }
    var init = function() {
      $scope.exercises = WorkoutService.Exercises.query();
    };
    init();
  }]);

angular.module('WorkoutBuilder')
  .controller('ExerciseDetailController', ['$scope', 'WorkoutService', '$routeParams', 'ExerciseBuilderService', '$location', function($scope, WorkoutService, $routeParams, ExerciseBuilderService, $location) {

    $scope.save = function() {
      $scope.submitted = true; // Will force validations
      if ($scope.formExercise.$invalid) return;
      ExerciseBuilderService.save().then(function(data) {
        $scope.formExercise.$setPristine();
        $scope.submitted = false;
      });
    };

    $scope.hasError = function(modelController, error) {
      return (modelController.$dirty || $scope.submitted) && error;
    };

    $scope.reset = function() {
      $scope.exercise = ExerciseBuilderService.startBuilding($routeParams.id);
      $scope.formExercise.$setPristine();
      $scope.submitted = false; // Will force validations
    };

    $scope.canDeleteExercise = function() {
      return ExerciseBuilderService.canDeleteExercise();
    }

    $scope.deleteExercise = function() {
      ExerciseBuilderService.delete().then(function(data) {
        $location.path('/builder/exercises/');
      });
    };

    $scope.addVideo = function() {
      ExerciseBuilderService.addVideo();
    };

    $scope.deleteVideo = function(index) {
      ExerciseBuilderService.deleteVideo(index);
    };

    var init = function() {
      // We do not use the resolve property on the route to load exercise as we do it with workout.
      $scope.exercise = ExerciseBuilderService.startBuilding($routeParams.id);

      if ($routeParams.id) { // In case of existing workout loaded from server need to wait to know whether the exercise exists.
        $scope.exercise.$promise.then(null, function(error) {
          // If exercise not found we redirect back to exercise list page.
          $location.path('/builder/exercises/');
        })
      }
    };

    init();
  }]);

import * as services from './services';
import {WorkoutListController, WorkoutDetailController} from './workout';
import {ExercisesNavController, ExerciseListController, ExerciseDetailController} from './exercise';
import {workoutTile} from './directives';

export default angular.module('WorkoutBuilder', [])
  .service('WorkoutBuilderService', services.WorkoutBuilderService)
  .service('ExerciseBuilderService', services.ExerciseBuilderService)
  .controller('WorkoutListController', WorkoutListController)
  .controller('WorkoutDetailController', WorkoutDetailController)
  .controller('ExercisesNavController', ExercisesNavController)
  .controller('ExerciseListController', ExerciseListController)
  .controller('ExerciseDetailController', ExerciseDetailController)
  .directive('workoutTile',workoutTile);

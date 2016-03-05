System.register(['../shared/model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var model_1;
    function WorkoutBuilderService(WorkoutService, $q) {
        var service = {};
        var buildingWorkout;
        var newWorkout;
        service.startBuilding = function (name) {
            //We are going to edit an existing workout
            if (name) {
                return WorkoutService.getWorkout(name).then(function (workout) {
                    buildingWorkout = workout;
                    newWorkout = false;
                    return buildingWorkout;
                });
            }
            else {
                buildingWorkout = new model_1.WorkoutPlan({});
                newWorkout = true;
                return $q.when(buildingWorkout);
            }
        };
        service.removeExercise = function (exercise) {
            buildingWorkout.exercises.splice(buildingWorkout.exercises.indexOf(exercise), 1);
        };
        service.addExercise = function (exercise) {
            buildingWorkout.exercises.push({ details: exercise, duration: 30 });
        };
        service.save = function () {
            var promise = newWorkout ? WorkoutService.addWorkout(buildingWorkout)
                : WorkoutService.updateWorkout(buildingWorkout);
            promise.then(function (workout) {
                newWorkout = false;
            });
            return promise;
        };
        service.moveExerciseTo = function (exercise, toIndex) {
            if (toIndex < 0 || toIndex >= buildingWorkout.exercises)
                return;
            var currentIndex = buildingWorkout.exercises.indexOf(exercise);
            buildingWorkout.exercises.splice(toIndex, 0, buildingWorkout.exercises.splice(currentIndex, 1)[0]);
        };
        service.canDeleteWorkout = function () {
            return !newWorkout;
        };
        service.delete = function () {
            if (newWorkout)
                return; // A new workout cannot be deleted.
            return WorkoutService.deleteWorkout(buildingWorkout.name);
        };
        return service;
    }
    exports_1("WorkoutBuilderService", WorkoutBuilderService);
    function ExerciseBuilderService(WorkoutService, $q) {
        var service = {};
        var buildingExercise;
        var newExercise;
        service.startBuilding = function (name) {
            //We are going to edit an existing exercise
            if (name) {
                buildingExercise = WorkoutService.Exercises.get({ id: name }, function (data) {
                    newExercise = false;
                });
            }
            else {
                buildingExercise = new model_1.Exercise({});
                newExercise = true;
            }
            return buildingExercise;
        };
        service.save = function () {
            if (!buildingExercise._id)
                buildingExercise._id = buildingExercise.name;
            var promise = newExercise ? WorkoutService.Exercises.save({}, buildingExercise).$promise
                : buildingExercise.$update({ id: buildingExercise.name });
            return promise.then(function (data) {
                newExercise = false;
                return buildingExercise;
            });
        };
        service.delete = function () {
            return buildingExercise.$delete({ id: buildingExercise.name });
        };
        service.addVideo = function () {
            buildingExercise.related.videos.push("");
        };
        service.canDeleteExercise = function () {
            return !newExercise;
        };
        service.deleteVideo = function (index) {
            if (index >= 0)
                buildingExercise.related.videos.splice(index, 1);
        };
        return service;
    }
    exports_1("ExerciseBuilderService", ExerciseBuilderService);
    return {
        setters:[
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            WorkoutBuilderService.$inject = ['WorkoutService', '$q'];
            ExerciseBuilderService.$inject = ['WorkoutService', '$q'];
        }
    }
});
//# sourceMappingURL=services.js.map
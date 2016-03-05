System.register(['./services', './workout', './exercise', './directives'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var services, workout_1, exercise_1, directives_1;
    return {
        setters:[
            function (services_1) {
                services = services_1;
            },
            function (workout_1_1) {
                workout_1 = workout_1_1;
            },
            function (exercise_1_1) {
                exercise_1 = exercise_1_1;
            },
            function (directives_1_1) {
                directives_1 = directives_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('WorkoutBuilder', [])
                .service('WorkoutBuilderService', services.WorkoutBuilderService)
                .service('ExerciseBuilderService', services.ExerciseBuilderService)
                .controller('WorkoutListController', workout_1.WorkoutListController)
                .controller('WorkoutDetailController', workout_1.WorkoutDetailController)
                .controller('ExercisesNavController', exercise_1.ExercisesNavController)
                .controller('ExerciseListController', exercise_1.ExerciseListController)
                .controller('ExerciseDetailController', exercise_1.ExerciseDetailController)
                .directive('workoutTile', directives_1.workoutTile));
        }
    }
});
//# sourceMappingURL=workout-builder.module.js.map
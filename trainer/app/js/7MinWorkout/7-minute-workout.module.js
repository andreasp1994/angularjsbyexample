System.register(['./services', './workout', './workoutvideos'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var services, workout_1, workoutvideos_1;
    return {
        setters:[
            function (services_1) {
                services = services_1;
            },
            function (workout_1_1) {
                workout_1 = workout_1_1;
            },
            function (workoutvideos_1_1) {
                workoutvideos_1 = workoutvideos_1_1;
            }],
        execute: function() {
            exports_1("default",angular.module('7minWorkout', [])
                .service('workoutHistoryTracker', services.workoutHistoryTracker)
                .controller('WorkoutController', workout_1.WorkoutController)
                .controller('WorkoutAudioController', workout_1.WorkoutAudioController)
                .controller('WorkoutVideosController', workoutvideos_1.WorkoutVideosController));
        }
    }
});
//# sourceMappingURL=7-minute-workout.module.js.map
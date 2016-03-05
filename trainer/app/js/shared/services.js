System.register(['./model'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var model_1;
    var appEvents;
    function workoutService() {
        var apiUrl = "https://api.mongolab.com/api/1/databases/";
        var collectionsUrl = null;
        var database = null;
        var apiKey = null;
        var configure = function (dbName) {
            collectionsUrl = apiUrl + dbName + "/collections";
        };
        var $get = function ($http, $q, $resource) {
            var service = {};
            var workouts = [];
            var exercises = [];
            service.Exercises = $resource(collectionsUrl + "/exercises/:id", {}, { update: { method: 'PUT' } });
            service.getWorkouts = function () {
                return $http.get(collectionsUrl + "/workouts")
                    .then(function (response) {
                    return response.data.map(function (workout) {
                        return new model_1.WorkoutPlan(workout);
                    });
                });
            };
            service.getWorkout = function (name) {
                return $q.all([service.Exercises.query().$promise, $http.get(collectionsUrl + "/workouts/" + name)])
                    .then(function (response) {
                    var allExercises = response[0];
                    var workout = new model_1.WorkoutPlan(response[1].data);
                    angular.forEach(response[1].data.exercises, function (exercise) {
                        exercise.details = allExercises.filter(function (e) { return e.name === exercise.name; })[0];
                    });
                    return workout;
                });
            };
            service.updateWorkout = function (workout) {
                return service.getWorkout(workout.name)
                    .then(function (original) {
                    if (original) {
                        var workoutToSave = angular.copy(workout);
                        workoutToSave.exercises = workoutToSave.exercises.map(function (exercise) { return { name: exercise.details.name, duration: exercise.duration }; });
                        return $http.put(collectionsUrl + "/workouts/" + original.name, workoutToSave);
                    }
                })
                    .then(function (response) {
                    return workout;
                });
            };
            service.addWorkout = function (workout) {
                if (workout.name) {
                    var workoutToSave = angular.copy(workout);
                    workoutToSave.exercises = workoutToSave.exercises.map(function (exercise) { return { name: exercise.details.name, duration: exercise.duration }; });
                    workoutToSave._id = workoutToSave.name;
                    return $http.post(collectionsUrl + "/workouts", workoutToSave)
                        .then(function (response) {
                        return workout;
                    });
                }
            };
            service.deleteWorkout = function (workoutName) {
                return $http.delete(collectionsUrl + "/workouts/" + workoutName);
            };
            return service;
        };
        $get.$inject = ['$http', '$q', '$resource'];
        return {
            '$get': $get,
            'configure': configure
        };
    }
    exports_1("workoutService", workoutService);
    function apiKeyAppenderInterceptor() {
        var apiKey = null;
        var setApiKey = function (key) {
            apiKey = key;
        };
        var $get = function ($q) {
            return {
                'request': function (config) {
                    if (apiKey && config && config.url.toLowerCase().indexOf("https://api.mongolab.com") >= 0) {
                        config.params = config.params || {};
                        config.params.apiKey = apiKey;
                    }
                    return config || $q.when(config);
                }
            };
        };
        $get.$inject = ['$q'];
        return {
            'setApiKey': setApiKey,
            '$get': $get
        };
    }
    exports_1("apiKeyAppenderInterceptor", apiKeyAppenderInterceptor);
    return {
        setters:[
            function (model_1_1) {
                model_1 = model_1_1;
            }],
        execute: function() {
            exports_1("appEvents", appEvents = {
                workout: { exerciseStarted: "event:workout:exerciseStarted" }
            });
        }
    }
});
//# sourceMappingURL=services.js.map
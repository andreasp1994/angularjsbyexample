System.register(['./7MinWorkout/7-minute-workout.module', './WorkoutBuilder/workout-builder.module', './root', './config', './shared/directives', './shared/filters', './shared/services'], function(exports_1, context_1) {
    'use strict';
    var __moduleName = context_1 && context_1.id;
    var _7_minute_workout_module_1, workout_builder_module_1, root_1, config_1, directives, filters, services;
    return {
        setters:[
            function (_7_minute_workout_module_1_1) {
                _7_minute_workout_module_1 = _7_minute_workout_module_1_1;
            },
            function (workout_builder_module_1_1) {
                workout_builder_module_1 = workout_builder_module_1_1;
            },
            function (root_1_1) {
                root_1 = root_1_1;
            },
            function (config_1_1) {
                config_1 = config_1_1;
            },
            function (directives_1) {
                directives = directives_1;
            },
            function (filters_1) {
                filters = filters_1;
            },
            function (services_1) {
                services = services_1;
            }],
        execute: function() {
            angular.module('app', ['ngRoute',
                'ngSanitize',
                _7_minute_workout_module_1.default.name,
                workout_builder_module_1.default.name,
                'mediaPlayer',
                'ui.bootstrap',
                'LocalStorageModule',
                'ngAnimate',
                'ngMessages',
                'ngResource',
                'pascalprecht.translate'])
                .controller('RootController', root_1.RootController)
                .config(config_1.configure)
                .directive('ngConfirm', directives.ngConfirm)
                .directive('remoteValidator', directives.remoteValidator)
                .directive('busyIndicator', directives.busyIndicator)
                .directive('ajaxButton', directives.ajaxButton)
                .directive('owlCarousel', directives.owlCarousel)
                .filter('secondsToTime', filters.secondsToTime)
                .value('appEvents', services.appEvents)
                .provider('WorkoutService', services.workoutService)
                .provider('ApiKeyAppenderInterceptor', services.apiKeyAppenderInterceptor);
            angular.bootstrap(document.documentElement, ['app']);
        }
    }
});
//# sourceMappingURL=app.js.map
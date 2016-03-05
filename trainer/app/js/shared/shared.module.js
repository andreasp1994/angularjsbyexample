System.register(['./directives', './model', './filters', './services'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var directives, models, filters, services;
    return {
        setters:[
            function (directives_1) {
                directives = directives_1;
            },
            function (models_1) {
                models = models_1;
            },
            function (filters_1) {
                filters = filters_1;
            },
            function (services_1) {
                services = services_1;
            }],
        execute: function() {
            angular.module('app')
                .directive('ngConfirm', directives.ngConfirm)
                .directive('remoteValidator', directives.remoteValidator)
                .directive('busyIndicator', directives.busyIndicator)
                .directive('ajaxButton', directives.ajaxButton)
                .directive('owlCarousel', directives.owlCarousel)
                .filter('secondsToTime', filters.secondsToTime)
                .factory('Exercise', models.Exercise)
                .factory('WorkoutPlan', models.WorkoutPlan)
                .value('appEvents', services.appEvents)
                .provider('WorkoutService', services.workoutService)
                .provider('ApiKeyAppenderInterceptor', services.apiKeyAppenderInterceptor);
        }
    }
});
//# sourceMappingURL=shared.module.js.map
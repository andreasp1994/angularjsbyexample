import * as directives from './directives';
import * as models from './model';
import * as filters from './filters';
import * as services from './services';

angular.module('app')
  .directive('ngConfirm', directives.ngConfirm)
  .directive('remoteValidator', directives.remoteValidator)
  //.directive('updateOnBlur', directives.updateOnBlur)
  .directive('busyIndicator', directives.busyIndicator)
  .directive('ajaxButton', directives.ajaxButton)
  .directive('owlCarousel', directives.owlCarousel)

  .filter('secondsToTime', filters.secondsToTime)

  .factory('Exercise', models.Exercise)
  .factory('WorkoutPlan', models.WorkoutPlan)

  .value('appEvents', services.appEvents)
  .provider('WorkoutService', services.workoutService)
  .provider('ApiKeyAppenderInterceptor', services.apiKeyAppenderInterceptor)

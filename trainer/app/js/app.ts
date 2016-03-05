'use strict';
import WorkoutRunner from './7MinWorkout/7-minute-workout.module';
import WorkoutBuilder from './WorkoutBuilder/workout-builder.module';
import {RootController} from './root';
import {configure} from './config';
import * as directives from './shared/directives';
import * as models from './shared/model';
import * as filters from './shared/filters';
import * as services from './shared/services';

angular.module('app', ['ngRoute',
  'ngSanitize',
  WorkoutRunner.name,
  WorkoutBuilder.name,
  'mediaPlayer',
  'ui.bootstrap',
  'LocalStorageModule',
  'ngAnimate',
  'ngMessages',
  'ngResource',
  'pascalprecht.translate'])
  .controller('RootController', RootController)
  .config(configure)
  .directive('ngConfirm', directives.ngConfirm)
  .directive('remoteValidator', directives.remoteValidator)
  //.directive('updateOnBlur', directives.updateOnBlur)
  .directive('busyIndicator', directives.busyIndicator)
  .directive('ajaxButton', directives.ajaxButton)
  .directive('owlCarousel', directives.owlCarousel)

  .filter('secondsToTime', filters.secondsToTime)

  .value('appEvents', services.appEvents)
  .provider('WorkoutService', services.workoutService)
  .provider('ApiKeyAppenderInterceptor', services.apiKeyAppenderInterceptor);

angular.bootstrap(document.documentElement, ['app']);

import * as services from './services';
import {WorkoutController, WorkoutAudioController} from './workout';
import {WorkoutVideosController} from './workoutvideos';

export default angular.module('7minWorkout', [])
  .service('workoutHistoryTracker', services.workoutHistoryTracker)
  .controller('WorkoutController', WorkoutController)
  .controller('WorkoutAudioController', WorkoutAudioController)
  .controller('WorkoutVideosController', WorkoutVideosController);

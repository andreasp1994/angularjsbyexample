import {Component, Inject} from 'angular2/core';
import {Location} from 'angular2/router';
import {OrderByPipe, SearchPipe} from '../shared/pipes';
import {ModalDialogInstance} from 'angular2-modal';

@Component({
  selector: 'workout-history',
  templateUrl: `/js/root/workout-history-component.tpl.html`,
  pipes: [OrderByPipe, SearchPipe]
})
export class WorkoutHistoryComponent {
  history: Array<any> = [];
  completed: boolean;
  constructor( @Inject('workoutHistoryTracker') private _tracker: any, private _dialog: ModalDialogInstance) { }

  ngOnInit() {
    this.history = this._tracker.getHistory() .map((item: any) => {
      item.startedOn = new Date(item.startedOn.toString());
      item.endedOn = item.endedOn == null ? null : new Date(item.endedOn.toString());
      return item;
    });
  }

  goBack() {
    this._dialog.close();
  }
}

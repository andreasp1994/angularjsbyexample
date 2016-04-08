import { Component, Inject} from 'angular2/core';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslateService, TranslatePipe} from 'ng2-translate';
import {ModalDialogInstance} from 'angular2-modal';
import {Ng2RootComponent} from '../ng2-root-component';
import {rootElement} from '../shared/root-element';

@Component({
  selector: 'video-player',
  template: `<div class="modal-header">
                <h3 class="modal-title">Workout Video</h3>
            </div>
            <div class="modal-body">
                <iframe width="100%" height="480" [src]="'//www.youtube.com/embed/' + videoId" frameborder="0" allowfullscreen></iframe>
            </div>
            <div class="modal-footer">
                <button class="btn btn-primary" (click)="ok()">OK</button>
            </div>`,
})
export class VideoPlayerComponent {
  constructor( @Inject('videoId') private videoId: string, private _dialog: ModalDialogInstance) { }

  ok() {
    this._dialog.close();
  }
}
angular.module('7minWorkout').directive('videoPlayer', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(VideoPlayerComponent));

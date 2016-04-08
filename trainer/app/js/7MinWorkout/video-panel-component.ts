import { Component, EventEmitter, Input, Injector, provide, Output} from 'angular2/core';
import {VideoPlayerComponent} from './video-player-component';
import {Modal, ModalConfig} from 'angular2-modal';
import { upgradeAdapter } from '../upgrade-adapter';
import {rootElement} from '../shared/root-element';
import {TranslatePipe} from 'ng2-translate';

@Component({
  selector: 'video-panel',
  templateUrl: `/js/7MinWorkout/video-panel-component.tpl.html`,
  providers: [Modal],
  directives: [VideoPlayerComponent],
  pipes: [TranslatePipe]
})
export class VideoPanelComponent {
  @Input() videos: Array<string>;
  @Output() playbackStarted: EventEmitter<any> = new EventEmitter<any>();
  @Output() playbackEnded: EventEmitter<any> = new EventEmitter<any>();
  constructor(private _modal: Modal) { }

  playVideo(videoId) {
    this.playbackStarted.emit(null);
    let resolvedBindings = Injector.resolve([provide('videoId', { useValue: videoId })]);
    var dialog = this._modal.open(VideoPlayerComponent,
      resolvedBindings,
      new ModalConfig('lg', true, 27),
      rootElement());
    dialog
      .then((d) => d.result)
      .then(() => { this.playbackEnded.emit(null); }, (error) => { this.playbackEnded.emit(null); });
  };
}
angular.module('7minWorkout').directive('videoPanel', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(VideoPanelComponent));

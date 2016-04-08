import { Component, ElementRef} from 'angular2/core';
import { upgradeAdapter } from '../upgrade-adapter';
import {TranslateService, TranslatePipe} from 'ng2-translate';
import {Modal, ModalConfig} from 'angular2-modal';
import {WorkoutHistoryComponent} from './workout-history-component';
import {rootElement} from '../shared/root-element';

@Component({
  selector: 'top-nav',
  templateUrl: `/js/root/top-nav-component.tpl.html`,
  providers: [Modal],
  pipes: [TranslatePipe],
  directives: [WorkoutHistoryComponent]
})
export class TopNavComponent {
  language: string;
  constructor(private _modal: Modal, private _translate: TranslateService) {
    this._translate.onLangChange.subscribe((event) => {
      this.language = event.lang;
    });
  }

  showWorkoutHistory() {
    this._modal.open(<any>WorkoutHistoryComponent,
      [],
      new ModalConfig('lg', true, 27),
      rootElement());
  }

  setLanguage(languageKey: string) {
    this._translate.use(languageKey);
  }
}
angular.module('app').directive('topNav', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(TopNavComponent));

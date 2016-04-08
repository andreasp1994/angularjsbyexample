import { Component, ElementRef, provide } from 'angular2/core';
import { upgradeAdapter } from './upgrade-adapter';
import {rootElement} from './shared/root-element';

@Component({
  selector: 'ng2-root',
  template: `<ng-content></ng-content>`
})
export class Ng2RootComponent {
  constructor(private _element: ElementRef) {
    // Hack: Set the rootElement global function to the app root element. Modal dialog requires this component.
    rootElement(this._element);
  }
}
angular.module('app').directive('ng2Root', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(Ng2RootComponent));

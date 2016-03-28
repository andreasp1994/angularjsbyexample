import { Component } from 'angular2/core';
import { upgradeAdapter } from '../upgrade-adapter';

@Component({
  selector: 'finish',
  templateUrl:'/js/finish/finish-component.tpl.html'
})
export class FinishComponent { }
angular.module('finish').directive('finish', <angular.IDirectiveFactory>upgradeAdapter.downgradeNg2Component(FinishComponent));

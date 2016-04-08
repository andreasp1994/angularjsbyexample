System.register(['angular2/core', '../upgrade-adapter', 'ng2-translate', 'angular2-modal', './workout-history-component', '../shared/root-element'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, upgrade_adapter_1, ng2_translate_1, angular2_modal_1, workout_history_component_1, root_element_1;
    var TopNavComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (ng2_translate_1_1) {
                ng2_translate_1 = ng2_translate_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            },
            function (workout_history_component_1_1) {
                workout_history_component_1 = workout_history_component_1_1;
            },
            function (root_element_1_1) {
                root_element_1 = root_element_1_1;
            }],
        execute: function() {
            TopNavComponent = (function () {
                function TopNavComponent(_modal, _translate) {
                    var _this = this;
                    this._modal = _modal;
                    this._translate = _translate;
                    this._translate.onLangChange.subscribe(function (event) {
                        _this.language = event.lang;
                    });
                }
                TopNavComponent.prototype.showWorkoutHistory = function () {
                    this._modal.open(workout_history_component_1.WorkoutHistoryComponent, [], new angular2_modal_1.ModalConfig('lg', true, 27), root_element_1.rootElement());
                };
                TopNavComponent.prototype.setLanguage = function (languageKey) {
                    this._translate.use(languageKey);
                };
                TopNavComponent = __decorate([
                    core_1.Component({
                        selector: 'top-nav',
                        templateUrl: "/js/root/top-nav-component.tpl.html",
                        providers: [angular2_modal_1.Modal],
                        pipes: [ng2_translate_1.TranslatePipe],
                        directives: [workout_history_component_1.WorkoutHistoryComponent]
                    }), 
                    __metadata('design:paramtypes', [(typeof (_a = typeof angular2_modal_1.Modal !== 'undefined' && angular2_modal_1.Modal) === 'function' && _a) || Object, ng2_translate_1.TranslateService])
                ], TopNavComponent);
                return TopNavComponent;
                var _a;
            }());
            exports_1("TopNavComponent", TopNavComponent);
            angular.module('app').directive('topNav', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(TopNavComponent));
        }
    }
});
//# sourceMappingURL=top-nav-component.js.map
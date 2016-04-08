System.register(['angular2/core', '../upgrade-adapter', 'angular2-modal'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, upgrade_adapter_1, angular2_modal_1;
    var VideoPlayerComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (upgrade_adapter_1_1) {
                upgrade_adapter_1 = upgrade_adapter_1_1;
            },
            function (angular2_modal_1_1) {
                angular2_modal_1 = angular2_modal_1_1;
            }],
        execute: function() {
            VideoPlayerComponent = (function () {
                function VideoPlayerComponent(videoId, _dialog) {
                    this.videoId = videoId;
                    this._dialog = _dialog;
                }
                VideoPlayerComponent.prototype.ok = function () {
                    this._dialog.close();
                };
                VideoPlayerComponent = __decorate([
                    core_1.Component({
                        selector: 'video-player',
                        template: "<div class=\"modal-header\">\n                <h3 class=\"modal-title\">Workout Video</h3>\n            </div>\n            <div class=\"modal-body\">\n                <iframe width=\"100%\" height=\"480\" [src]=\"'//www.youtube.com/embed/' + videoId\" frameborder=\"0\" allowfullscreen></iframe>\n            </div>\n            <div class=\"modal-footer\">\n                <button class=\"btn btn-primary\" (click)=\"ok()\">OK</button>\n            </div>",
                    }),
                    __param(0, core_1.Inject('videoId')), 
                    __metadata('design:paramtypes', [String, (typeof (_a = typeof angular2_modal_1.ModalDialogInstance !== 'undefined' && angular2_modal_1.ModalDialogInstance) === 'function' && _a) || Object])
                ], VideoPlayerComponent);
                return VideoPlayerComponent;
                var _a;
            }());
            exports_1("VideoPlayerComponent", VideoPlayerComponent);
            angular.module('7minWorkout').directive('videoPlayer', upgrade_adapter_1.upgradeAdapter.downgradeNg2Component(VideoPlayerComponent));
        }
    }
});
//# sourceMappingURL=video-player-component.js.map
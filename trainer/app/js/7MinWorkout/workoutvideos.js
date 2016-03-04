System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function WorkoutVideosController($scope, $modal) {
        $scope.playVideo = function (videoId) {
            $scope.pauseWorkout();
            var dailog = $modal.open({
                templateUrl: 'youtube-modal',
                controller: VideoPlayerController,
                scope: $scope.$new(true),
                resolve: {
                    video: function () {
                        return '//www.youtube.com/embed/' + videoId;
                    }
                },
                size: 'lg'
            }).result['finally'](function () {
                $scope.resumeWorkout();
            });
        };
        var VideoPlayerController = function ($scope, $modalInstance, video) {
            $scope.video = video;
            $scope.ok = function () {
                $modalInstance.close();
            };
        };
        VideoPlayerController['$inject'] = ['$scope', '$modalInstance', 'video'];
        var init = function () {
        };
        init();
    }
    exports_1("WorkoutVideosController", WorkoutVideosController);
    return {
        setters:[],
        execute: function() {
            WorkoutVideosController.$inject = ['$scope', '$modal'];
        }
    }
});
//# sourceMappingURL=workoutvideos.js.map
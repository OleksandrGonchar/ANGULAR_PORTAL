(function () {
    "use strict";

    angular.module("video-catalog.dashboard.videoAddEdit.controller", [])
        .controller("videoAddEditController", ["$scope", "$stateParams", "videoStore", "$state", videoAddController]);

    function videoAddController($scope, $stateParams, videoStore, $state) {
        var id = $stateParams.id,
            oldVideoItem;

        /*
         * Set old value to field
         * */
        if (id) {
            oldVideoItem = videoStore.getVideoItem(id);
            $scope.name = oldVideoItem.name;
            $scope.date = oldVideoItem.date;
            $scope.description = oldVideoItem.description;
            $scope.duration = oldVideoItem.duration;
        }

        console.log($state);

        $scope.search = function () {

        };

        $scope.addVideo = function () {
            /*
             * create new video item
             * */
            var newVideo = {
                name: $scope.name || "",
                date: $scope.date || "",
                description: $scope.description || "",
                duration: $scope.duration || ""
            };
            /*
             * put new video item to collection
             * */
            videoStore.setVideo(newVideo, id);
        }
    }
})();
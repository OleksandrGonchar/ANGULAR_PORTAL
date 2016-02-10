(function () {
    "use strict";

    angular.module("video-catalog.dashboard.listVideoCollection.controller", [])
        .controller("listVideoCollection.controller", ListVideoCollection);

    ListVideoCollection.$inject = ["$scope", "videoStore"];
    function ListVideoCollection($scope, videoStore) {
        $scope.videoCollection = videoStore.getVideo();
        $scope.delete = videoStore.removeVideo;


        $scope.change = /*videoStore.setVideo;*/function(a){
            console.log(a.item.name);
            console.log(a.$index);
           /* $state.go(".dashboard.refactorForm");
            $stateParams*/
        };


        var saveVideo = videoStore.saveVideo;

        $scope.$watch('videoCollection', function () {
            saveVideo();
        }, true);
    }
})();
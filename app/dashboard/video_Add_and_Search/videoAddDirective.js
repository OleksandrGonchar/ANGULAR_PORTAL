(function () {
    "use strict";

    angular.module("video-catalog.dashboard.videoAddEdit.Directive", [])
        .directive("videoAddEditSection", videoAddDirective);

    function videoAddDirective() {
        return {
            restrict: "A",
            templateUrl: "dashboard/video_Add_and_Search/videoAddController.html"
        }
    }
})();
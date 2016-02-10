(function () {
    "use strict";

    angular.module("video-catalog.footer.directive", [])
        .directive("footer", footer);

    function footer() {
        return {
            restrict: "A",
            templateUrl: 'footer/video-catalog.footer.html'
        }
    }
})();
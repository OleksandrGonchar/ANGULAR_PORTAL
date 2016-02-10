(function () {
    "use strict";

    angular.module("video-catalog.header.directive", [])
        .directive("header", headerDir);

    function headerDir() {
        return {
            restrict: "A",
            templateUrl: 'header/video-catalog.header.html',
            controller: Header
        }
    }

    function Header($scope, loginService) {
        $scope.logined = loginService.isLogined;
        $scope.logout = loginService.logout;
        $scope.user = loginService.getCurrentUser;
    }
})();
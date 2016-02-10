(function () {
    "use strict";

    angular.module("video-catalog.dashboard", [])
        .controller("video-catalog.dashboard.controller", dashboardController);

    dashboardController.$inject = ["$state", "loginService"];
    function dashboardController($state, loginService) {

        if (loginService.isLogined()) {
            $state.go('.list');
        } else {
            $state.go('login');
            throw Error("Access is denied!!!");
        }
    }
})();
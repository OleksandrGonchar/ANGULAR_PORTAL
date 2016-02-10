(function () {
    "use strict";

    angular.module("video-catalog.dashboard", [])
        .controller("video-catalog.dashboard.controller", ["$state", "loginService", dashboard]);

    function dashboard($state, loginService) {

        if (loginService.isLogined()) {
            $state.go('.list');
        } else {
            $state.go('login');
            throw Error("Access is denied!!!");
        }
    }
})();
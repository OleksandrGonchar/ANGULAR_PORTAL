(function () {
    "use strict";

    angular.module("video-catalog.login", [])
        .controller("video-catalog.login.controller", Login);

    Login.$inject = ["$scope", "$state", "loginService"];
    function Login($scope, $state, loginService) {

        $scope.log = log;

        function log() {
            if (loginService.setLogined($scope.loginval, $scope.loginPass)) {
                $state.go('dashboard');
            } else {
                alert("Trust me! this is Angular Modal \n" +
                    "Try to enter login:\"test\"\n" +
                    "With pass:\"test\"" );
            }
        }
    }
})();
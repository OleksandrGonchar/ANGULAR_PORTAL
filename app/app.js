(function () {
    "use strict";

    angular.module("app", [
            "ui.router",
            "header",
            "footer",
            "loginService",
            "videoStoreService",
            "login",
            "dashboard",
            "videoAddController",
            "videoAddDirective",
            "listVideoCollection"
        ])
        .config(uiRouterConfig);

    function uiRouterConfig($stateProvider, $urlRouterProvider) {
        /* state way */
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'login/loginPage.html',
                controller: 'Login'
            });

        /* dashboard way */
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/dashboard.html'
            })
            .state('dashboard.addForm', {
                url: '/addNewVideo',
                templateUrl: 'dashboard/video_Add_and_Search/addForm/addForm.html',
                controller: 'dashboard'
            });

        /* default wey */
        $urlRouterProvider.otherwise('/');
    }

    /*
     *   module for test
     *   remove after writing main code
     * */
    angular.module("pie", []).controller("pieController",
        ["$scope"
            , function ($scope) {
            $scope.eatSlice = function () {
                if ($scope.slice) {
                    $scope.slice--;
                }
            };

            this.requestFlavor = function (flavor) {
                $scope.lastRequestedFlavor = flavor;
            };

            //$scope.lastRequestedFlavor;
            $scope.slice = 8;
        }]);
})();
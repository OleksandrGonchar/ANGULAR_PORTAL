(function () {
    "use strict";

    angular.module("app", [
            "ui.router",
            "ncy-angular-breadcrumb",

            "video-catalog.header.directive",
            "video-catalog.footer.directive",
            "video-catalog.login.service",
            "video-catalog.videoStore.Service",
            "video-catalog.login",
            "video-catalog.dashboard",
            "video-catalog.dashboard.videoAddEdit.controller",
            "video-catalog.dashboard.videoAddEdit.Directive",
            "video-catalog.dashboard.listVideoCollection.controller"
        ])
        .config(["$stateProvider", "$urlRouterProvider",uiRouterConfig]);

    function uiRouterConfig($stateProvider, $urlRouterProvider) {
        /* state way */
        $stateProvider
            .state('login', {
                url: '/',
                templateUrl: 'login/video-catalog.login.html',
                controller: 'video-catalog.login.controller'
            });

        /* dashboard way */
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'dashboard/video-catalog.dashboard.html',
                controller: 'video-catalog.dashboard.controller',
                ncyBreadcrumb: {
                    label: 'Dashboard'
                }
            })
            .state('dashboard.addForm', {
                url: '/addNewVideo',
                templateUrl: 'dashboard/video_Add_and_Search/addForm/addForm.html',
                controller: 'videoAddEditController',
                ncyBreadcrumb: {
                    label: 'Add new video'
                }
            })
            .state('dashboard.refactorForm', {
                url: "/refactorForm/{id:[0-9a-fA-F]{1,8}}",
                templateUrl: 'dashboard/video_Add_and_Search/addForm/addForm.html',
                controller: 'videoAddEditController',
                ncyBreadcrumb: {
                    label: 'Refactoring video'
                }
            })
            .state('dashboard.list', {
                url: '/list',
                templateUrl: 'dashboard/listVideoCollection/video-catalog.dashboard.listVideoCollection.html',
                controller: 'listVideoCollection.controller',
                ncyBreadcrumb: {
                    label: 'Video collection'
                }
            });

        /* default wey */
        $urlRouterProvider.otherwise('/');
    }
})();
describe('Login Controller', function () {
    "use strict";

    var $scope,
        $rootScope,
        controller;

    beforeEach(function () {
        module('login');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('Login', {$scope: $scope});
        })
    });

    describe("Login", function () {

        xit('Should return true ', function () {
            expect(true).toBeTruthy();
        });
    });
});
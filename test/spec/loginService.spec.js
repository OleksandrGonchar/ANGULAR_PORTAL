describe('Login service', function () {
    "use strict";

    var $scope,
        $rootScope,
        service;

    beforeEach(function () {

        module('video-catalog.login.service');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            service = $injector.get('loginService');
        })
    });

    describe("Login Service", function () {

        it('Should return false ', function () {
            expect(service.isLogined()).toBeFalsy();
        });

        it('Should return true ', function () {
            service.setLogined('test', 'test');
            expect(service.isLogined()).toBeTruthy();
        });

        it('Should return "test"', function () {
            service.setLogined('test', 'test');
            expect(service.getCurrentUser()).toBe("test");
        });
    });

    describe("Logout", function () {

        it('Should return false', function () {
            expect(service.isLogined()).toBeFalsy();
        });

        it('Should return false ', function () {
            service.setLogined('test', 'test');
            service.logout();
            expect(service.isLogined()).toBeFalsy();
        });

        it('Should return false ', function () {
            service.setLogined('test', 'test');
            service.logout();
            expect(service.getCurrentUser()).toBe('No user - no problem');
        });
    })
});
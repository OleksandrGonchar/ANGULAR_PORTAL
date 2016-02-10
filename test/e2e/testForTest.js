/*
describe('This test for tests', function () {
    "use strict";

    var $scope,
        $rootScope,
        controller;

    beforeEach(function () {
        module('pie');

        inject(function ($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            controller = $injector.get('$controller')('pieController', {$scope: $scope});
            console.log(controller);
        })
    });

    describe("Initialization", function () {

        it('Should be instance slice of 8', function () {
            expect($scope.slice).toBe(8);
        });

        it('Should be equal 7 after slice', function () {
            $scope.eatSlice();
            expect($scope.slice).toBe(7);
        });

        it('Should be undefined ', function () {
            expect($scope.lastRequestedFlavor).toBeUndefined();
        });

        it('Should after set value be 2 ', function () {
            controller.requestFlavor(2);
            expect($scope.lastRequestedFlavor).toBe(2);
        });
    })
});

*/

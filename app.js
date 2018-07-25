(function() {
    'use strict';

    angular.module('LunchCheck', [])
        .controller('LCController', LCController);

    LCController.$inject = ['$scope'];

    function LCController($scope) {
        $scope.dishes = '';
        $scope.message = '';
        $scope.checked = false;

        $scope.checkLunch = function() {
            if ($scope.dishes.trim().length === 0) {
                $scope.empty = true;
            } else {
                $scope.checked = true;
                $scope.empty = false;
                var arrayDishes = $scope.dishes.split(',');
                var arrayDishesWithoutEmptys = arrayDishes.filter(function(t) {
                    return t.trim() !== '';
                });

                if (arrayDishesWithoutEmptys.length <= 3) {
                    $scope.message = 'Enjoy!';
                } else {
                    $scope.message = 'Too much!';
                }
            }
        };
    }
})();

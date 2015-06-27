var portfolioFilter = angular.module('portfolioFilter', []);

portfolioFilter.controller('PortfolioCtrl', function ($scope) {
  $scope.allCategories = ['web', 'art', 'graphic'];
  $scope.visibleCategories = $scope.allCategories.slice(0);

  $scope.toggleAll = function () {
    if ($scope.visibleCategories.length == $scope.allCategories.length) {
      $scope.visibleCategories = [];
    } else {
      $scope.visibleCategories = $scope.allCategories.slice(0);
    }
  };

  $scope.toggleCategory = function(category) {
    if ($scope.visibleCategories.indexOf(category) != -1) {
      $scope.visibleCategories.splice($scope.visibleCategories.indexOf(category), 1);
    } else {
      $scope.visibleCategories.push(category);
    }
  };

  $scope.showCategory = function(category) {
    return $scope.visibleCategories.indexOf(category) != -1;
  };

  $scope.filterButtonClassName = function(category) {
    if ($scope.showCategory(category)) {
      return '';
    } else {
      return 'inactive';
    }
  };

  $scope.filterAllButtonClassName = function() {
    if ($scope.visibleCategories.length == $scope.allCategories.length) {
      return '';
    } else {
      return 'inactive';
    }
  };
});
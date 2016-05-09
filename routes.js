angular.module('shoppingApp')
.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/shopview.html',
        controller: 'ShopController'
      })
      .when('/cart', {
        templateUrl: 'views/cartview.html',
        controller: 'CartController'
      })
      $locationProvider.html5Mode(true);
});

angular.module('shoppingApp')
.config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/shopview.html',
        controller: 'ShopController'
      })
      .when('/cart', {
        templateUrl: 'views/cartview.html',
        controller: 'CartController'
      })
});

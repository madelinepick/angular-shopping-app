angular.module('shoppingApp')
.directive('mpCart', ['$http', '$log', 'cartService', function($http,$log,cartService) {
  return {
    restrict: 'E',
    templateUrl: 'directives/cart/cart.html',
    scope: {

    },
    link: function(scope, element, attrs, fn){
      scope.products = cartService.products;
      scope.myCart = cartService.myCart;
    }
  }
}]);

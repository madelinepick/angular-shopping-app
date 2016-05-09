angular.module('shoppingApp')
.directive('mpCart', ['$http', '$log', 'cartService', function($http,$log,cartService) {
  return {
    restrict: 'E',
    templateUrl: 'directives/cart/cart.html',
    scope: {},
    link: function(scope, element, attrs, fn){
      scope.products = cartService.products;
      scope.myCart = cartService.myCart;
      scope.cartCount = cartService.cartCount;
      scope.showUpdate = false;

      scope.removeCart = function(product){
        cartService.removeCart(product);
        scope.cartCount = cartService.cartCount;
      }
      scope.toggleUpdate = function(product){
        cartService.toggleUpdate(product);  
      }
    }
  }
}]);

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
      scope.total = cartService.total;
      scope.showUpdate = false;

      scope.removeCart = function(product){
        cartService.removeCart(product);
        scope.cartCount = cartService.cartCount;
        cartService.updateTotal();
        scope.total = cartService.total;
      }
      scope.toggleUpdate = function(product){
        scope.showUpdate = !scope.showUpdate;
        cartService.updateTotal();
        scope.total = cartService.total;
      }
    }
  }
}]);

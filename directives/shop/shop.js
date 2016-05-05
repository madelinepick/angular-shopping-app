angular.module('shoppingApp')
.directive('mpShop', ['$http', '$log', 'cartService', function($http,$log,cartService) {
  return {
    restrict: 'E',
    templateUrl: 'directives/shop/shop.html',
    scope: {

    },
    link: function(scope, element, attrs, fn){
      scope.products = cartService.products;
      scope.myCart = cartService.myCart;
      scope.cartCount = cartService.myCart.length;

      scope.$watch(function(){
        return cartService.myCart;
      },
      function(newValue){
        scope.myCart = newValue;
        scope.cartCount = newValue.length;
      }, true);

      scope.addCart = function(product){
        scope.myCart.push(product);
      }
    }
  }
}]);

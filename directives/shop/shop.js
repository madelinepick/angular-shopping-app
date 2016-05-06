angular.module('shoppingApp')
.directive('mpShop', ['$http', '$log', 'cartService', function($http,$log,cartService) {
  return {
    restrict: 'E',
    templateUrl: 'directives/shop/shop.html',
    scope: {},
    link: function(scope, element, attrs, fn){
      scope.products = cartService.products;
      scope.cartCount = cartService.cartCount;

      scope.addCart = function(product){
        cartService.addCart(product);
        scope.cartCount = cartService.cartCount;
      }
    }
  }
}]);

// scope.$watchCollection('cart', function(newValue, ov){
//   scope.cartCount = newValue.length;
// })
// scope.$watch(function(){
//   return cartService.myCart;
// },
// function(newValue){
//   scope.cartCount = newValue.length;
// }, true);

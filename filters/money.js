angular.module('shoppingApp')
.filter('money', function () {
  return function (input) {
    var temp = (''+input).split("");
	  temp.splice(temp.length-2,0,".");
	  temp.splice(0,0,"$");
	  var arr = temp.join('')
	  return arr;
  };
});

// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var newArr = [];
  var body = document.body;

  (function addClassName(parent){
    if((parent.classList)&&(parent.classList).contains(className)){
      newArr.push(parent)
    }
    if(parent.childNodes){
      for(var i = 0 ; i < parent.childNodes.length ; i++ ){
        addClassName(parent.childNodes[i]);
      }
    }
  })(body)

  return newArr;
};

if ( typeof module === "object" && typeof module.exports === "object" ) {
  module.exports = getElementsByClassName;
}
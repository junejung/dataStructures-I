// Note: don't use javascript's native array functions to do this.
var makeStack = function(){

  var internalArray = [];
  var stack = {

  	add : function(arg){
  		var s = this.size;
  		internalArray[s] = arg;
  		this.size++
  	},
  	size : 0,
  	remove : function(){
  		var s = this.size;
  		internalArray[s] = undefined;
  		this.size--
  	}
  };
  return stack;
}




// var s = makeStack();
// s.add("June")
// s.size === 1
// s.add("computer")
// s.remove() === "computer"

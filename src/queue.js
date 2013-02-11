// Note: don't use javascript's native array functions to do this.
var makeQueue = function(){

	var queueArray = [];
	var firstIndex = 0;

  var queue = {
    queueArray: queueArray,
    length: 0,

    enqueue: function(arg){
    	queueArray[firstIndex + this.length] = arg;
    	this.length++;
    },
    
    dequeue: function(){
      var returnVal = queueArray[firstIndex];
      queueArray[firstIndex] = undefined;
      this.length--;
      firstIndex++;
      if (firstIndex > this.length/2){
        queueArray.splice(0,firstIndex); 
        firstIndex = 0;
      };
      return returnVal;
    }
  };
  return queue;
}

// queueArray = queueArray.slice(0,firstIndex); 
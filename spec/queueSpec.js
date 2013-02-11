describe("queue", function() {
  var queue;

  beforeEach(function() {
    queue = makeQueue();
  });

  it("should have a method named 'enqueue'", function() {
    expect(queue.enqueue).toEqual(jasmine.any(Function));
  });

  it("should have a method named 'dequeue'", function() {
    expect(queue.dequeue).toEqual(jasmine.any(Function));
  });

  it("should have a property named 'length'", function() {
    expect(queue.length).toEqual(jasmine.any(Number));
  });
 
  it("should be 0 length", function() {
    expect(queue.length).toBe(0);
  });
 
  it("should change the length to 1 after enqueue one new item", function() {
  	queue.enqueue("June");
    expect(queue.length).toBe(1);
  });
 
  it("should change the length of queue to 4 after enqueue four new items", function() {
  	queue.enqueue("Shawn");
  	queue.enqueue("Tony"); 
  	queue.enqueue("Marc");
  	queue.enqueue("Doug");  	  	 	
    expect(queue.length).toBe(4);
  });
 
  it("should change the length of queue to 3 after dequeue one item", function() {
  	queue.enqueue("Shawn");
  	queue.enqueue("Tony"); 
  	queue.enqueue("Marc");
  	queue.enqueue("Doug");
  	queue.dequeue();  	
    expect(queue.length).toBe(3);
  });
 
  it("should change the length to 3 after dequeue three items", function() {
  	queue.enqueue("June");
  	queue.dequeue();  	
    expect(queue.length).toBe(0);
  });

  it("should return June after dequeuing it", function() {
  	queue.enqueue("June");
    expect(queue.dequeue()).toEqual("June");
  });

  it("should delaying shift ", function() {
    queue.enqueue("willdequ");
    queue.enqueue("willdequ");
    queue.enqueue("this");
    queue.enqueue("is");
    queue.enqueue("the");
    queue.enqueue("test");
    queue.enqueue("I");
    queue.enqueue("said");                            
    queue.dequeue();
    queue.dequeue();
    expect(queue.queueArray.length).not.toEqual(queue.length);
  });

  it("should delaying shift ", function() {
    queue.enqueue("will be dequeued");
    queue.enqueue("will be dequeued");    
    queue.enqueue("will be dequeued");
    queue.enqueue("will be dequeued");
    queue.enqueue("this");
    queue.enqueue("is");
    queue.enqueue("the");
    queue.enqueue("test");                        
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();    
    expect(queue.queueArray.length).not.toEqual(queue.length);
  });
      // todo: what if there's nothing in the array when we dequeue?


  // add more tests here to test the functionality of queue
});
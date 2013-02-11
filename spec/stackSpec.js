describe("stack", function() {
  var stack;

  beforeEach(function() {
    stack = makeStack();
  });

  it("should have a method named 'add'", function() {
    expect(stack.add).toEqual(jasmine.any(Function));
  });

  it("should have a property named 'size'", function() {
    expect(stack.size).toEqual(jasmine.any(Number));
  });

  it("should have a method named 'remove'", function() {
    expect(stack.remove).toEqual(jasmine.any(Function));
  });  

  it("should change the size to 1 after adding one item", function() {
  	stack.add("June");
  	expect(stack.size).toBe(1);
  });

  it("should change the size to 0 after removing one item", function() {
  	stack.add("June");  	
  	stack.remove();
  	expect(stack.size).toBe(0);
  });

  it("should change the size to 3 after adding three items", function() {
  	stack.add("Computer");
  	stack.add("Phone");
  	stack.add("Keyborad");
  	expect(stack.size).toBe(3);
  });

  it("should change the size to 1 after removing two items", function() {
  	stack.add("Computer");
  	stack.add("Phone");
  	stack.add("Keyborad");  	
  	stack.remove();
  	stack.remove();
  	expect(stack.size).toBe(1);
  });

  // it("should retrun removing item when it removed", function() {
  // 	stack.add("Computer");  
  // 	var stackTest = stack.remove();
  // 	expect(stackTest).toBeUndifined;
  // });

  // it("should change the size to 0 after removing one item", function() {
  // 	var stackTest = stack.remove();
  // 	expect(stack.size).toBe(0);
  // });

  // add more tests here to test the functionality of stack
});
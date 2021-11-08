import Stack from "../src/data-structure/stack";

describe("Test the all functionality of stack", () => {
  // test the push functionality
  test("Push the stack", () => {
    let stack = new Stack<number>(3);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).toBe(3);
  });

  // test the pop functionalityS
  it("Pop the stack", () => {
    let stack = new Stack<number>(5);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.pop()).toBe(5);
    expect(stack.pop()).toBe(4);
    expect(stack.pop()).toBe(3);
    expect(stack.pop()).toBe(2);
    expect(stack.pop()).toBe(1);
    expect(stack.isEmpty()).toBe(true);
  });
  // test is empty functionality
  it("Check the stack is empty", () => {
    let stack = new Stack<number>(5);
    expect(stack.isEmpty()).toBe(true);
  });

  // test is full functionality
  it("Check the stack is full", () => {
    let stack = new Stack<number>(5);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.isFull()).toBe(true);
  });

  // test the peek functionality
  it("Peek the stack", () => {
    let stack = new Stack<number>(5);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);
    expect(stack.peek()).toBe(5);
  });
  // check stack overflow functionality
  it("Check the stack overflow", () => {
    let stack = new Stack<number>(5);
    stack.push(1);
    stack.push(2);
    stack.push(3);
    stack.push(4);
    stack.push(5);

    // expect an error
    expect(() => {
      stack.push(6);
    }).toThrow("Stack is full");
  });
});

import { FixedMultiStack } from '../src/books/chapter03/01_한개로세개.js';

describe('FixedMultiStack', () => {
  it('should push a value to the stack', () => {
    //given
    const stack = new FixedMultiStack(3);

    //when
    stack.push(0, 1);
    stack.push(0, 2);

    stack.push(1, 3);

    stack.push(2, 4);
    stack.push(2, 5);

    //then
    expect(stack.peek(0)).toBe(2);
    expect(stack.peek(1)).toBe(3);
    expect(stack.peek(2)).toBe(5);
  });

  it('should pop a value from the stack', () => {
    //given
    const stack = new FixedMultiStack(3);

    //when
    stack.push(0, 1);
    stack.push(0, 2);

    stack.push(1, 3);

    stack.push(2, 4);
    stack.push(2, 5);
    stack.push(2, 6);

    //then
    expect(stack.pop(0)).toBe(2);
    expect(stack.pop(0)).toBe(1);

    expect(stack.pop(1)).toBe(3);

    expect(stack.pop(2)).toBe(6);
    expect(stack.pop(2)).toBe(5);
    expect(stack.pop(2)).toBe(4);
  });

  it('should peek a value from the stack', () => {
    //given
    const stack = new FixedMultiStack(3);

    //when
    stack.push(0, 1);
    stack.push(0, 2);

    stack.push(1, 3);

    stack.push(2, 4);
    stack.push(2, 5);
    stack.push(2, 6);

    //then
    expect(stack.peek(0)).toBe(2);
    expect(stack.peek(1)).toBe(3);
    expect(stack.peek(2)).toBe(6);
  });

  it('should check if the stack is full', () => {
    //given
    const stack = new FixedMultiStack(3);

    //when
    stack.push(0, 1);
    stack.push(0, 2);

    stack.push(1, 3);

    stack.push(2, 4);
    stack.push(2, 5);
    stack.push(2, 6);

    //then
    expect(stack.isPull(0)).toBeFalsy();
    expect(stack.isPull(1)).toBeFalsy();
    expect(stack.isPull(2)).toBeTruthy();
  });

  it('should check if the stack is empty', () => {
    //given
    const stack = new FixedMultiStack(3);

    //when
    stack.push(0, 1);
    stack.push(0, 2);

    stack.push(2, 4);
    stack.push(2, 5);
    stack.push(2, 6);

    //then
    expect(stack.isEmpty(0)).toBeFalsy();
    expect(stack.isEmpty(1)).toBeTruthy();
    expect(stack.isEmpty(2)).toBeFalsy();
  });
});

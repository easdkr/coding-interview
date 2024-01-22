import { StackQueue } from '../src/books/chapter03/04_스택으로_큐.js';

describe('StackQueue', () => {
  it('should implement a queue using two stacks', () => {
    const queue = new StackQueue<number>();

    queue.add(1);
    queue.add(2);
    queue.add(3);

    expect(queue.peek()).toBe(1);
    expect(queue.remove()).toBe(1);
    expect(queue.remove()).toBe(2);
    expect(queue.remove()).toBe(3);
    expect(queue.isEmpty()).toBe(true);
  });
});

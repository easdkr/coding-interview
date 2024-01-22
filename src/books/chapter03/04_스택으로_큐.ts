/**
 * 문제 : 스택 두 개로 큐 하나를 구현하라.
 */

class Stack<T> {
  #values: Array<T> = [];

  public push(value: T): void {
    this.#values.push(value);
  }

  public pop(): T {
    return this.#values.pop();
  }

  public peek(): T {
    return this.#values[this.#values.length - 1];
  }

  public isEmpty(): boolean {
    return this.#values.length === 0;
  }

  public get length(): number {
    return this.#values.length;
  }
}

export class StackQueue<T> {
  #stackNewest: Stack<T>;
  #stackOldest: Stack<T>;

  public constructor() {
    this.#stackNewest = new Stack<T>();
    this.#stackOldest = new Stack<T>();
  }

  public add(value: T): void {
    this.#stackNewest.push(value);
  }

  public remove(): T {
    this.#shiftStacks();

    return this.#stackOldest.pop();
  }

  public peek(): T {
    this.#shiftStacks();

    return this.#stackOldest.peek();
  }

  public isEmpty(): boolean {
    return this.#stackNewest.isEmpty() && this.#stackOldest.isEmpty();
  }

  #shiftStacks(): void {
    if (this.#stackOldest.isEmpty()) {
      while (!this.#stackNewest.isEmpty()) {
        this.#stackOldest.push(this.#stackNewest.pop());
      }
    }
  }

  public size(): number {
    return this.#stackNewest.length + this.#stackOldest.length;
  }
}

/**
 * 한 개로 세 개: 배열 한 개로 스택 세 개를 어떻게 구현할지 설명하라.
 */

/**
 * 고정 크기 할당
 * 배열을 같은 크기의 세 부분으로 나누어 각각의 스택이 그 크기 내에서만 사용되도록 한다.
 *
 * 스택 #1: [0, n/3)
 * 스택 #2: [n/3, 2n/3)
 * 스택 #3: [2n/3, n)
 */
export class FixedMultiStack<T> {
  #NUMBER_OF_STACKS = 3;
  #stackCapacity: number;
  #values: Array<T>;
  #sizes: Array<number>;

  public constructor(stackSize: number) {
    this.#stackCapacity = stackSize;
    this.#values = new Array<T>(stackSize * this.#NUMBER_OF_STACKS);
    this.#sizes = new Array<number>(this.#NUMBER_OF_STACKS).fill(0);
  }

  public push(stackNum: number, value: T): void {
    if (this.isPull(stackNum)) throw new Error('Stack is full');

    this.#sizes[stackNum]++;
    this.#values[this.#indexOfTop(stackNum)] = value;
  }

  public pop(stackNum: number): T {
    if (this.isEmpty(stackNum)) throw new Error('Stack is empty');

    const topIndex = this.#indexOfTop(stackNum);
    const value = this.#values[topIndex];

    this.#values[topIndex] = undefined;
    this.#sizes[stackNum]--;

    return value;
  }

  public peek(stackNum: number): T {
    if (this.isEmpty(stackNum)) throw new Error('Stack is empty');

    return this.#values[this.#indexOfTop(stackNum)];
  }

  public isPull(stackNum: number): boolean {
    return this.#sizes[stackNum] === this.#stackCapacity;
  }

  public isEmpty(stackNum: number): boolean {
    return this.#sizes[stackNum] === 0;
  }

  #indexOfTop(stackNum: number): number {
    const offset = stackNum * this.#stackCapacity;
    const size = this.#sizes[stackNum];
    return offset + size - 1;
  }
}

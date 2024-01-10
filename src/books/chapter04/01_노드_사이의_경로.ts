/**
 * 문제 : 방향 그래프가 주어졌을 때 두 노드 사이에 경로가 존재하는지 확인하는 알고리즘을 작성하라.
 */

/**
 * 풀이
 * - BFS나 DFS를 이용하여 두 노드 사이에 경로가 존재하는지 확인할 수 있다.
 */

export class Node<T> {
  public data: T;
  public neighbors: Node<T>[];

  public constructor(data: T) {
    this.data = data;
    this.neighbors = [];
  }

  public addNeighbor(node: Node<T>): void {
    this.neighbors.push(node);
  }

  public getNeighbors(): Node<T>[] {
    return this.neighbors;
  }
}

export class Graph<T> {
  public nodes: Map<T, Node<T>>;

  public constructor() {
    this.nodes = new Map<T, Node<T>>();
  }

  public addNode(data: T): void {
    this.nodes.set(data, new Node<T>(data));
  }

  public addEdge(source: T, destination: T): void {
    if (!this.nodes.has(source)) this.addNode(source);
    if (!this.nodes.has(destination)) this.addNode(destination);

    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    sourceNode.addNeighbor(destinationNode);
  }
}

export enum State {
  Unvisited,
  Visited,
  Visiting,
}

export function dfs<T>(
  graph: Graph<T>,
  start: T,
  end: T,
  visited = new Map<T, State>(),
): boolean {
  // 목표 노드에 도달했을 때 true를 반환한다.
  if (start === end) return true;

  const startNode = graph.nodes.get(start);
  const endNode = graph.nodes.get(end);

  if (!startNode || !endNode) return false;

  visited.set(start, State.Visiting);

  for (const neighbor of startNode.getNeighbors()) {
    if (visited.get(neighbor.data) !== State.Visited)
      return dfs(graph, neighbor.data, end, visited);
  }

  visited.set(start, State.Visited);

  return false;
}

export function bfs<T>(
  graph: Graph<T>,
  start: T,
  end: T,
  visited = new Map<T, State>(),
): boolean {
  const queue: T[] = [];

  queue.push(start);

  while (queue.length > 0) {
    const node = queue.shift();

    if (node === end) return true;

    if (visited.get(node) !== State.Visited) {
      visited.set(node, State.Visited);

      const neighbors = graph.nodes.get(node)?.getNeighbors() ?? [];

      for (const neighbor of neighbors) queue.push(neighbor.data);
    }
  }

  return false;
}

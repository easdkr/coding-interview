import { Graph, bfs } from '../src/books/chapter04/01_노드_사이의_경로.js';

describe('bfs', () => {
  test('should return true if there is a path between two nodes', () => {
    // given
    const graph = new Graph<number>();
    graph.addEdge(1, 2);
    graph.addEdge(1, 3);
    graph.addEdge(2, 4);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);

    // when
    const received = bfs(graph, 1, 5);

    // then
    expect(received).toBe(true);
  });

  test('should return false if there is no path between two nodes', () => {
    // given
    const graph = new Graph<number>();
    graph.addEdge(1, 2);
    graph.addEdge(2, 4);
    graph.addEdge(3, 4);
    graph.addEdge(4, 5);
    graph.addEdge(3, 6);

    // when
    const received = bfs(graph, 1, 6);

    // then
    expect(received).toBe(false);
  });
});

export function knightMoves(vertex) {
  let moves = [
    [vertex[0] + 1, vertex[1] + 2],
    [vertex[0] + 1, vertex[1] - 2],
    [vertex[0] - 1, vertex[1] + 2],
    [vertex[0] - 1, vertex[1] - 2],
    [vertex[0] + 2, vertex[1] + 1],
    [vertex[0] + 2, vertex[1] - 1],
    [vertex[0] - 2, vertex[1] + 1],
    [vertex[0] - 2, vertex[1] - 1],
  ];
  moves = moves.filter(
    (move) => move[0] <= 7 && move[1] <= 7 && move[0] >= 0 && move[1] >= 0,
  );

  return moves;
}

function Node(current, parent = null) {
  return {
    current,
    parent,
  };
}

export function knightTravails(start, end) {
  start = Node(start);
  const queue = [start];
  const visited = new Set([start.current.toString()]);
  const path = [];
  while (queue.length) {
    let current = queue.shift();

    if (current.current.toString() === end.toString()) {
      while (current.parent) {
        path.push(current.current);
        current = current.parent;
      }
      path.push(current.current);
      return path.reverse();
    }
    const moves = knightMoves(current.current);
    moves.forEach((move) => {
      if (!visited.has(move.toString())) {
        const nextNode = Node(move, current);
        visited.add(move.toString());
        queue.push(nextNode);
      }
    });
  }
}

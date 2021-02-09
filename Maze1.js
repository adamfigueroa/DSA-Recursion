// You have entered a Maze and need to find your way out of it. There are more than one possible paths through the Maze to the single exit point. Write a recursive function that will help you find a possible path through the maze.

// You can use the following mazes to test your program.

// let mySmallMaze = [
//     [' ', ' ', ' '],
//     [' ', '*', ' '],
//     [' ', ' ', 'e']
// ];

let maze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e'],
];

// The Maze is represented as a N*M matrix (in the above case, a 3X3 or a 5X7 array). The starting point is the top left corner and the exit is indicated by e. For simplicity purpose, use the bottom right corner of the maze as the exit. You can't go outside the boundaries of the maze. The maze has passages that are blocked and you can't go through them. These blocked passages are indicated by *. Passing through a blocked cell as well as passing though a cell that you have already passed before are forbidden.

// For the above maze, a possible exit path can be RRDDLLDDRRRRRR

let mySmallMaze = [
  [' ', ' ', ' '],
  [' ', '*', ' '],
  [' ', ' ', 'e'],
];

function escapeTheMaze(maze, pos = 0, row = 0, col = 0, dir = 'S', path = []) {
  if (col < 0 || row < 0) return;
  if (col >= maze[0].length || row >= maze.length) return;

  path[pos] = dir;
  pos++;

  if (maze[row][col] === 'e') {
    console.log(path);
    return;
  }

  if (maze[row][col] === ' ') {
    // once you find a free space, mark it as start pos.
    maze[row][col] = 's';
    // recursively go in each direction(up, right, down, left)
    escapeTheMaze(maze, pos, row - 1, col, 'U', path);
    escapeTheMaze(maze, pos, row, col + 1, 'R', path);
    escapeTheMaze(maze, pos, row + 1, col, 'D', path);
    escapeTheMaze(maze, pos, row, col - 1, 'L', path);
  }
  pos--;
}
escapeTheMaze(maze);

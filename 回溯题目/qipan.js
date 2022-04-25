// 棋盘问题 51 - 37
// var solveNQueens = function(n) {
//     function isValid(row, col, chessBoard, n) {

//         for(let i = 0; i < row; i++) {
//             if(chessBoard[i][col] === 'Q') {
//                 return false
//             }
//         }

//         for(let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
//             if(chessBoard[i][j] === 'Q') {
//                 return false
//             }
//         }

//         for(let i = row - 1, j = col + 1; i >= 0 && j < n; i--, j++) {
//             if(chessBoard[i][j] === 'Q') {
//                 return false
//             }
//         }
//         return true
//     }

//     function transformChessBoard(chessBoard) {
//         let chessBoardBack = []
//         chessBoard.forEach(row => {
//             let rowStr = ''
//             row.forEach(value => {
//                 rowStr += value
//             })
//             chessBoardBack.push(rowStr)
//         })

//         return chessBoardBack
//     }

//     let result = []
//     function backtracing(row,chessBoard) {
//         if(row === n) {
//             result.push(transformChessBoard(chessBoard))
//             return
//         }
//         for(let col = 0; col < n; col++) {
//             if(isValid(row, col, chessBoard, n)) {
//                 chessBoard[row][col] = 'Q'
//                 backtracing(row + 1,chessBoard)
//                 chessBoard[row][col] = '.'
//             }
//         }
//     }
//     let chessBoard = new Array(n).fill([]).map(() => new Array(n).fill('.'))
//     backtracing(0,chessBoard)
//     return result

// };


const solveNQueens = (n) => {
    const board = new Array(n);
    for (let i = 0; i < n; i++) {
        board[i] = new Array(n).fill('.');//生成board
    }
    console.log('board====', board)
    const cols = new Set();  // 列集，记录出现过皇后的列
    const diag1 = new Set(); // 正对角线集
    const diag2 = new Set(); // 反对角线集
    const res = [];//结果数组

    const backtrack = (row) => {
        if (row == n) {//终止条件
            const stringsBoard = board.slice();

            for (let i = 0; i < n; i++) {//生成字符串
                stringsBoard[i] = stringsBoard[i].join('');
            }
            res.push(stringsBoard);
            return;
        }
        for (let col = 0; col < n; col++) {
            // 如果当前点的所在的列，所在的对角线都没有皇后，即可选择，否则，跳过
            if (!cols.has(col) && !diag1.has(row + col) && !diag2.has(row - col)) {
                board[row][col] = 'Q';  // 放置皇后
                cols.add(col);          // 记录放了皇后的列
                diag2.add(row - col);   // 记录放了皇后的正对角线
                diag1.add(row + col);   // 记录放了皇后的负对角线
                console.log('正对角线', diag2)
                console.log('负对角线', diag1)
                console.log('裂', cols )
                debugger
                backtrack(row + 1);
                board[row][col] = '.';  // 撤销该点的皇后
                cols.delete(col);       // 对应的记录也删一下
                diag2.delete(row - col);
                diag1.delete(row + col);
            }
        }
    };
    backtrack(0);
    return res;
};

// 36 判断数独
/**
 * @param {character[][]} board
 * @return {boolean}
 */
 var isValidSudoku = function(board) {
    // 1.初始化三个数组
    let rows = [];
    let columns = [];
    let boxs = [];
    // 初始化每一行，每一列，每一块的map
    // 之所以不用let rows = new Array(9).fill(new Map()) 的形式，是因为fill如果
    // 填充的是对象，则填充的是对象的浅拷贝
    for(let i = 0; i < 9; i++){
      rows[i] = new Map();
      columns[i] = new Map();
      boxs[i] = new Map();
    }

    // 从左到右，上到下遍历数组
    for(let i = 0; i < 9; i++){
      for(let j = 0; j < 9; j++){
        debugger
        let char = board[i][j];

        // 剪枝
        if(char === '.') continue;

        let block = Math.floor(j/3) + Math.floor(i/3) * 3;
        // 剪枝 如果当前字符所在 行/列/块 中已经有了此字符，直接return false
        if(rows[i].has(char) || columns[j].has(char) || boxs[block].has(char)) return false;
        else {
          // 如果当前 行/列/块 中没有此字符，添加此字符
          rows[i].set(char, 1);
          columns[j].set(char, 1);
          boxs[block].set(char, 1);
        }
      }
    }
    // 遍历完了，没找到毛病，return true
    return true;
  };
const arr =  [["5","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]
isValidSudoku(arr)

// solveNQueens(4)
// 37 解数独
var solveSudoku = function(board) {
    // 判断数独 是否合理
    function isValid(row, col, val, board) {
        let len = board.length
        // 行不能重复
        for(let i = 0; i < len; i++) {
            if(board[row][i] === val) {
                return false
            }
        }
        // 列不能重复
        for(let i = 0; i < len; i++) {
            if(board[i][col] === val) {
                return false
            }
        }
        // 验证九宫格里面不重复
        let startRow = Math.floor(row / 3) * 3
        let startCol = Math.floor(col / 3) * 3

        for(let i = startRow; i < startRow + 3; i++) {
            for(let j = startCol; j < startCol + 3; j++) {
                if(board[i][j] === val) {
                    return false
                }
            }
        }

        return true
    }

    function backTracking() {
        for(let i = 0; i < board.length; i++) {
            for(let j = 0; j < board[0].length; j++) {
                if(board[i][j] !== '.') continue
                for(let val = 1; val <= 9; val++) {
                    if(isValid(i, j, `${val}`, board)) {
                        board[i][j] = `${val}`
                        // 进行一个 递归
                        if (backTracking()) {
                            // 所有的值都填完
                            return true
                        }
                        // 回溯
                        board[i][j] = `.`
                    }
                }
                return false
            }
        }
        // 所有的值都填完，终止
        return true
    }
    backTracking(board)
    return board
};

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

solveNQueens(4)
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
                        if (backTracking()) {
                            return true
                        }
                        
                        board[i][j] = `.`
                    }
                }
                return false
            }
        }
        return true
    }
    backTracking(board)
    return board
    
};

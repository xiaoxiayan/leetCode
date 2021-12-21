/**
 *
   回溯 --> 递归。在达到某些条件的时候return
   用于 组合，切割， 子集， 棋盘
 */


// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
/**
 * 输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]
 *
 * @param {*} digits
 * @returns
 */

// var letterCombinations = function(digits) {
//   const k = digits.length;
//   const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
//   if(!k) return [];
//   if(k === 1) return map[digits].split("");

//   const res = [], path = [];
//   backtracking(digits, k, 0);
//   return res;

//   function backtracking(n, k, a) {
//     debugger
//       if(path.length === k) {
//           res.push(path.join(""));
//           return;
//       }
//       for(const v of map[n[a]]) {
//           path.push(v);
//           backtracking(n, k, a + 1);
//           path.pop();
//       }

//   }
// };


/** 77. 组合 */
// 给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

// 你可以按 任何顺序 返回答案。

var combine = function(n, k) {
  let result = [];
  /**
   *
   * @param {*} start 开始的数字
   * @param {*} path 已选择的列表，或者说已经走过的路
   */
  let dfs = (start, path) => {
    // 如果已经选满了的话，加入结果集中
    if (path.length == k) {
      result.push(path.slice());
      return;
    }
    // 从开始的数字到末尾的数字
    for (let i = start; i <= n; i++) {
      // 加入选择列表中
      path.push(i);
      // 继续深度搜索
      dfs(i + 1, path);
      // 撤销选择
      path.pop(i);
    }
  };
  dfs(1, []);
  return result;
};

console.log(combine(4, 2))
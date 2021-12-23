/**
 *
   回溯 --> 递归。在达到某些条件的时候return
   用于 组合，切割， 子集， 棋盘
 */

// 组合问题 77 - 216 - 17 - 39 -  40
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

// var combine = function(n, k) {
//   let result = [];
//   /**
//    *
//    * @param {*} start 开始的数字
//    * @param {*} path 已选择的列表，或者说已经走过的路
//    */
//   let dfs = (start, path) => {
//     // 如果已经选满了的话，加入结果集中
//     if (path.length == k) {
//       result.push(path.slice());
//       return;
//     }
//     // 从开始的数字到末尾的数字
//     for (let i = start; i <= n; i++) {
//       // 加入选择列表中
//       path.push(i);
//       // 继续深度搜索
//       dfs(i + 1, path);
//       // 撤销选择
//       path.pop(i);
//     }
//   };
//   dfs(1, []);
//   return result;
// };

/** 216. 组合总和 III */
/** 找出所有相加之和为 n 的 k 个数的组合。组合中只允许含有 1 - 9 的正整数，并且每种组合中不存在重复的数字。

说明：

所有数字都是正整数。
解集不能包含重复的组合。 */
/**
 * 示例 1:

输入: k = 3, n = 7
输出: [[1,2,4]]
示例 2:

输入: k = 3, n = 9
输出: [[1,2,6], [1,3,5], [2,3,4]]
 *
*/
  // 或Sn=
// var maxV = k => k * (9 + 10 - k) / 2;
// var minV = k => k * (1 + k) / 2;
// 等差数列前 N项和 公式 Sn = [n*(a1+an)]/2 。  因为当前数列是 1-9， 相当于等差 1 的数列 d = 1
// var maxV = k => k * (9 + 10 - k) / 2;  // 求前N项和最大值 MaxV  a1 = 9
// var minV = k => k * (1 + k) / 2;  // 求前N项和最小值 a1 = 1
// var combinationSum3 = function(k, n) {
//   if (k > 9 || k < 1) return [];
//   // if (n > maxV(k) || n < minV(k)) return [];
//   // if (n === maxV(k)) return [Array.from({length: k}).map((v, i) => 9 - i)];
//   // if (n === minV(k)) return [Array.from({length: k}).map((v, i) => i + 1)];

//   const res = [], path = [];
//   backtracking(k, n, 1, 0);
//   return res;
//   function backtracking(k, n, i, sum){
//       const len = path.length;
//       if (len > k || sum > n) return;
//       console.log('maxV==',maxV(k - len), n - sum )
//       console.log('minV==',minV(k - len), n - sum)
//       if (maxV(k - len) < n - sum) return;
//       if (minV(k - len) > n - sum) return;

//       if(len === k && sum == n) {
//           res.push(Array.from(path));
//           return;
//       }
//       // 定义最小值 等于   和 -  结果， 9 + 长度 - k + 1
//       const min = Math.min(n - sum, 9 + len - k + 1);
//       for(let a = i; a <= min; a++) {
//           path.push(a);
//           sum += a;
//           backtracking(k, n, a + 1, sum);
//           path.pop();
//           sum -= a;
//       }
//   }
// };
//
// 39. 组合总和
// 给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。
// candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 
// 对于给定的输入，保证和为 target 的不同组合数少于 150 个。
// 示例 1
// 输入：candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
// 解释：
// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
// 7 也是一个候选， 7 = 7 。
// 仅有这两种组合。
var combinationSum = function(candidates, target) {
    let res = [], path = []
    candidates.sort()
    function backtracking ( start, sum) {
      //  终止条件
      if (sum > target) {
        return
      }
      if(sum == target) {
        // 浅拷贝
        res.push(Array.from(path))
        return
      }
      for (let i = start; i < candidates.length; i++) {
        const n = candidates[i]
        // 减枝 在当前就判断，相加是否大于 target 跳过
        if(n > target - sum) continue;
        // 条件
        path.push(n)
        sum += n
        backtracking ( i, sum)
        path.pop()
        sum -= n
      }
    }
    backtracking(0, 0)
    return res
};



// 分割问题 131 - 93
// 子集问题 78 - 90
// 排列问题 46 - 47
// 棋盘问题 51 - 37
// 其他 491 - 332
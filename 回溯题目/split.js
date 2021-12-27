// 分割问题 131 - 93
// 131.
/**
 * 给你一个字符串 s，请你将 s 分割成一些子串，使每个子串都是 回文串 。返回 s 所有可能的分割方案。

回文串 是正着读和反着读都一样的字符串。
 *
输入：s = "aab"
输出：[["a","a","b"],["aa","b"]]
*/

/**
 * @param {string} s
 * @return {string[][]}
 */
 // 判断是否是回文， 使用双指针
 const isPalindrome = function (str, l , r) {
  // 双指针 i < j 的时候循环，
  //
  for (let i = l, j = r;  i < j; i++, j--) {
      if (str[i] != str[j]) {
          return false;
      }
  }
  return true;
}
var partition = function (s) {
let path = [], res = [], len = s.length;

// 传入 开始值
backtracking(0);
return res
// 回溯
function backtracking (i) {
  // 如果是 递归 的 i 大于等于 长度，str 整个都是回文数
  if(i >= len) {
      res.push(Array.from(path));
      return;
  }
  for(let j = i; j<len; j++) {
      // 判断是否是回文数，不是的话跳过
      if(!isPalindrome(s, i, j)) continue;
      // path 加入 分割的字符
      path.push(s.substr(i,  j - i + 1) ) // 从i开始切割，最少切割一个
      // 回溯
      backtracking(j+1)
      path.pop()
  }
}
};




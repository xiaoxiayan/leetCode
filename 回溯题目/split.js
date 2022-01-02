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
//  const isPalindrome = function (str, l , r) {
//   // 双指针 i < j 的时候循环，
//   //
//   for (let i = l, j = r;  i < j; i++, j--) {
//       if (str[i] != str[j]) {
//           return false;
//       }
//   }
//   return true;
// }
// var partition = function (s) {
// let path = [], res = [], len = s.length;

// // 传入 开始值
// backtracking(0);
// return res
// // 回溯
// function backtracking (i) {
//   // 如果是 递归 的 i 大于等于 长度，str 整个都是回文数
//   if(i >= len) {
//       res.push(Array.from(path));
//       return;
//   }
//   for(let j = i; j<len; j++) {
//       // 判断是否是回文数，不是的话跳过
//       if(!isPalindrome(s, i, j)) continue;
//       // path 加入 分割的字符
//       path.push(s.substr(i,  j - i + 1) ) // 从i开始切割，最少切割一个
//       // 回溯
//       backtracking(j+1)
//       path.pop()
//   }
// }
// };

/**93. 复原 IP 地址
 * 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你不能重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。
 *

示例 1：

输入：s = "25525511135"
输出：["255.255.11.135","255.255.111.35"]

示例 2：

输入：s = "0000"
输出：["0.0.0.0"]
 *
 *
 *
 *
*/
/**
 * @param {string} s
 * @return {string[]}
 */
// 思路：回溯 切割问题。
// 循环数组。然后一步一步去切割，
// staring : 开始的位置，记录切割点
// 终止条件  if( path.length > 4)  || +str > 255
// 这个递归到最后一部才往前 return 到最初走 下一步。 耗费性能太大了
//  var restoreIpAddresses = function(s) {
//     //
//     let res = [] , path = []
//     backtracking(0)
//     console.log('结果===',res )
//     return res
//     function backtracking (staring) {
//         const len  = path.length
//         // 终止条件， 如果path中分割的数据 超过4个 说明分割失败
//         if(len > 4) return
//         if(len === 4 && staring < s.length) return
//         // path 分割的数据刚好4个，循环完毕说明是成功的
//         if(len === 4 && staring === s.length) {
//             res.push(path.join("."));
//             return;
//         }
//         for(let i = staring; i < s.length; i++) {
//             const str = s.substr(staring, i - staring +1 )
//             console.log('str==',str )
//             // 判断子串是否合法 如果 str 长度超过3 或者 值超过 255.终止
//             if(str.length > 3 || +str > 255) break;
//             if(str.length > 1 && str[0] === "0") break;
//             // path 加入 str ,
//             path.push(str)
//             console.log(path, '数组')
//             backtracking(i + 1);
//             // 回溯 往上走
//             path.pop()
//         }
//     }
// };



var restoreIpAddresses = function(s) {
    const res = [];
    // 复原从start开始的子串
    const dfs = (subRes, start) => {
      if (subRes.length == 4 && start == s.length) { // 片段满4段，且耗尽所有字符
        res.push(subRes.join('.'));                  // 拼成字符串，加入解集
        return;                     // 返不返回都行，指针已经到头了，严谨的说还是返回
      }
      if (subRes.length == 4 && start < s.length) {  // 满4段，字符未耗尽，不用往下选了
        return;
      }
      for (let len = 1; len <= 3; len++) {           // 枚举出选择，三种切割长度
        if (start + len - 1 >= s.length) return;     // 加上要切的长度就越界，不能切这个长度
        if (len != 1 && s[start] == '0') return;     // 不能切出'0x'、'0xx'
        const str = s.substring(start, start + len); // 当前选择切出的片段
        if (len == 3 && +str > 255) return;          // 不能超过255

        subRes.push(str);
        console.log('结果集合===', subRes)                        // 作出选择，将片段加入subRes
        dfs(subRes, start + len);                    // 基于当前选择，继续选择，注意更新指针
        subRes.pop(); // 上面一句的递归分支结束，撤销最后的选择，进入下一轮迭代，考察下一个切割长度
      }
    };
    dfs([], 0);       // dfs入口
    return res;
  };

//   restoreIpAddresses('25525511135')



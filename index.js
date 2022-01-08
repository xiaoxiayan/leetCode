// 1 、两数之和
// 给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
// 你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
// 你可以按任意顺序返回答案。
/**
 *
输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

 *
 *
 * @param {*} nums
 * @param {*} target
 * @returns
 *
 *
 *
 */
 

// 最简单的方法 ，两个FOR 循环，两两相加，返回结果
// var twoSum = function(nums, target) {
//     for(let i= 0; i < nums.length; i++) {
//         for(let j = i + 1 ; j<nums.length; j++) {
//             if( nums[i] + nums[j] === target ) {
//                 return [ i, j ]
//             }
//         }
//     }
// };
// 方法2：使用 target 减去 当前循环的内容，得到剩余需要查找的数，然后在map中寻找对应的值，没有就存入MAP中备用（循环 I = 0 的时候MAP 是空的，所以第一个数是无法得出答案的）。
// var twoSum = function(nums, target) {
//     map = new Map()
//     for(let i = 0; i < nums.length; i++) {
//         x = target - nums[i]
//         if(map.has(x)) {
//             return [map.get(x),i]
//         }
//         map.set(nums[i],i)
//     }
// };
/**
 *

 * 2、两数相加
给你两个 非空 的链表，表示两个非负的整数。它们每位数字都是按照 逆序 的方式存储的，并且每个节点只能存储 一位 数字。

请你将两个数相加，并以相同形式返回一个表示和的链表。

你可以假设除了数字 0 之外，这两个数都不会以 0 开头。

 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
  @param {ListNode} l1
  @param {ListNode} l2
  @return {ListNode}
 */

//  function ListNode(val, next) {
//          this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//      }

// // fn1
//  var addTwoNumbers = function(l1, l2) {
//     let head = null, tail = null;
//     let carry = 0; // 进位符
//    while (l1 || l2) {
//        // 判断 这一位数 是否有，有就 是val, 没有就是 0
//        const n1 = l1 ? l1.val : 0;
//        const n2 = l2 ? l2.val : 0;
//        // 这一位数，相当于 n1+ n2 + 进位数。
//        const sum = n1 + n2 + carry;
//        if (!head) {
//        // 当第一位数进入的时候，头 == 尾 == 新建的函数，保存结果。 10的余数是0
//            head = tail = new ListNode(sum % 10);
//        } else {
//            // 如果已经有和 head 首位 -->  尾部 next --> 链表的下一节 == new ListNode
//            tail.next = new ListNode(sum % 10);
//            // 尾部 重新指向 fn 里面的 next
//            tail = tail.next;

//        }
//        // 向下取整
//        carry = Math.floor(sum / 10);
//        if (l1) {
//            l1 = l1.next;
//        }
//        if (l2) {
//            l2 = l2.next;
//        }
//    }
//    if (carry > 0) {
//        tail.next = new ListNode(carry);
//    }
//    return head;

// };

// // 创建新的节点
// let node1 = new ListNode(1);
// let node2 = new ListNode(2);
// let node3 = new ListNode(3);
// node1.next = node2;
// node2.next = node3



// let l1 = new ListNode(4)
// let l2 = new ListNode(5)
// let l3 = new ListNode(6)
// l1.next = l2
// l2.next = l3
// fn2

// var addTwoNumbers = function(l1, l2) {
//     const l3 = new ListNode(0) // 定义一个链表来存放结果
//     let p1 = l1 // 指向链表1的头部
//     let p2 = l2 // 指向链表2的头部
//     let p3 = l3
//     let carry = 0 // 进位的数，即留到下一轮相加的数
//     while(p1 || p2) {
//         // 这两个三元判断是为了防止相加的两个数长度不同
//         const v1 = p1 ? p1.val : 0
//         const v2 = p2 ? p2.val : 0
//         const val = v1 + v2 + carry
//         carry = Math.floor(val / 10) // 相加后的十位数
//         p3.next = new ListNode(val % 10) // 相加后的个位数
//         // 指针继续往后走
//         if(p1) p1 = p1.next
//         if(p2) p2 = p2.next
//         p3 = p3.next
//     }
//     // 处理特殊情况：如[2,2,7] + [5,6,4]这种加到最后一个还有进位的情况
//     if(carry) {
//         p3.next = new ListNode(carry)
//     }
//     return l3.next
// };

/**
 * 无重复字符的最长子串
 * 给定一个字符串 s ，请你找出其中不含有重复字符的 最长子串 的长度。
 *
 * 输入: s = "abcabcbb"
   输出: 3
   解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。
示例 2:

输入: s = "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:

输入: s = "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

示例 4:

输入: s = ""
输出: 0
 *
 *
 */
// 思考： 把字符传拆开，然后用数组 进去push, 取最长
 /**
 * @param {string}
 * @return {number}
 */
// var lengthOfLongestSubstring = function(s) {
//     let maxLength = 0
//     if(s === '') {
//         return maxLength
//     } else {
//         // 原始数组
//         let newArr = []
//         for(let i = 0; i <s.length; i++ ){
//             if(newArr.indexOf(s[i]) !== -1 ) {
//                 // 如果重复了。应该把直到那个位置的内容删除
//                 newArr.splice(0, newArr.indexOf(s[i]) + 1);
//             }
//             newArr.push(s[i])
//             maxLength = Math.max(maxLength, newArr.length)

//         }
//     }
//     return maxLength
// };
// var lengthOfLongestSubstring = function(s) {
//     // 哈希集合，记录每个字符是否出现过
//     const occ = new Set();
//     const n = s.length;
//     // 右指针，初始值为 -1，相当于我们在字符串的左边界的左侧，还没有开始移动
//     let rk = -1, ans = 0;
//     for (let i = 0; i < n; ++i) {
//         if (i != 0) {
//             // 左指针向右移动一格，移除一个字符
//             occ.delete(s.charAt(i - 1));
//         }
//         while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
//             // 不断地移动右指针
//             occ.add(s.charAt(rk + 1));
//             ++rk;
//         }
//         // 第 i 到 rk 个字符是一个极长的无重复字符子串
//         ans = Math.max(ans, rk - i + 1);
//     }
//     return ans;
// };
// var lengthOfLongestSubstring = function (s) {
//     const set = new Set(); // 判断滑动窗口内是否有重复元素
//     let i = 0,// 滑动窗口右边界
//         j = 0,// 滑动窗口左边界
//         maxLength = 0;
//     if (s.length === 0) {//极端情况
//         return 0;
//     }
//     for (i; i < s.length; i++) {
//         if (!set.has(s[i])) {//当前元素不在set中 就加入set 然后更新最大长度，i++继续下一轮循环
//             set.add(s[i]);
//             maxLength = Math.max(maxLength, set.size);
//         } else {
//             //set中有重复元素不断让j++ 并删除窗口之外的元素 直到滑动窗口内没有重复的元素
//             while (set.has(s[i])) {
//                 set.delete(s[j]);
//                 j++;
//             }
//             set.add(s[i]);//放心将s[i]加入set中
//         }
//     }
//     return maxLength;
// };
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
//  4. 寻找两个正序数组的中位数
//  给定两个大小分别为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的 中位数 。

//  算法的时间复杂度应该为 O(log (m+n)) 。
//  var findMedianSortedArrays = function(nums1, nums2) {
//     // 融合排序，然后寻找中位数
//     let arr = nums1.concat(nums2).sort(function(a, b){return a - b})
//     // 中位数分为 偶数 和 奇数的中位。偶数就是取 值的 max && min ，奇数就是取中间
//     let midIndex = arr.length/2
//     return !!(arr.length%2) ? (arr[Math.floor(midIndex)]) : ((arr[midIndex] + arr[midIndex -1] )/2)

// };
// 6. Z 字形变换
//
/***
 * 将一个给定字符串 s 根据给定的行数 numRows ，以从上往下、从左到右进行 Z 字形排列。

比如输入字符串为 "PAYPALISHIRING" 行数为 3 时，排列如下：

P   A   H   N
A P L S I I G
Y   I   R
之后，你的输出需要从左往右逐行读取，产生出一个新的字符串，比如："PAHNAPLSIIGYIR"。

请你实现这个将字符串进行指定行数变换的函数：

 */
/*
var convert = function(s, numRows) {
  if(numRows === 1) {
    // 只有一行直接返回
    return s
  }
  // 生成行的空数组，有几行就有几个内容
  let rows = []
  // 行数，如果字符串长度小于行数，就无法填满。
  // 如 s = 'ab' , numRows = 3
  let len = Math.min(s.length, numRows)
  for(let i = 0; i<len ; i++) {rows[i] = ''}
  // 循环到达底部或者顶部需要倒转
  let down = false
  // 循环中的行数
  let loc = 0

  for (const key of s) {
    // 赋值
     rows[loc] += key
    // 判断一下当前的位置和调整循环方向 0 ,1 ,2 行 numRows 3
     if(loc == 0 || loc == numRows - 1){
       down = !down
     }
    //  1-2-3-2-1
     loc += down ? 1 : -1
  }
  let res = ''
  for (const row of rows) {
    res += row
  }
  return res
  };
**/

  // leiaaaaa
  // 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

  /**
 * @param {number[]} height
 * @return {number}

var maxArea = function(height) {
  let max = 0;
  for (let i = 0, j = height.length - 1; i < j;) {//双指针i，j循环height数组
      //i，j较小的那个先向内移动 如果高的指针先移动，那肯定不如当前的面积大
      const minHeight = height[i] < height[j] ? height[i++] : height[j--];
      const area = (j - i + 1) * minHeight;//计算面积
      max = Math.max(max, area);//更新最大面积
  }
  return max;
};
*/

// 15。三数字之和
// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// let arr = [-1,0,1,2,-1,-4]
// console.log(arr.sort((a, b) => {
//   return a - b
// }))
//  [-4, -1, -1, 0, 1, 2,]
//  双指针，如果 走到 0 还没结果，那就回到原点， i ++
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
//  var threeSum = function(nums) {
//   if(nums == null || len < 3) return [];
//   //  排序
//   nums = nums.sort((a, b)=> {
//     return a - b
//   })
//   let res = new Set()
//   for (let i = 0; i < nums.length; i++ ) {
//       if(nums[i] > 0) break; //如果当前数大于0 ，那么三字相加必定大于零
//       if(i> 0 && nums[i] === nums[ (i-1) ]) continue // 去重
//       let L = i + 1
//       let R = nums.length - 1
//       while(L < R) {
//          const sum = nums[i] + nums[L] + nums[R]
//          if( sum === 0 ){
//            res.add([nums[i] + nums[L] + nums[R]])
//            while (L<R && nums[L] == nums[L+1]) L++; // 去重 进入到这边的时候已经匹配到 nums[L],所以后面的 L就是重复的
//            while (L<R && nums[R] == nums[R-1]) R--; // 去重
//            L++
//            R--
//          } else if (sum < 0) {
//            L++
//          } else if (sum > 0 ) {
//            R--
//          }
//       }
//   }
//   return res
// };


// console.log(threeSum([-1,0,1,2,-1,-4]))
// 17. 电话号码的字母组合
// 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

// 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
/**
 * 输入：digits = "23"
输出：["ad","ae","af","bd","be","bf","cd","ce","cf"]------
 *
 * @param {*} digits
 * @returns
 */

var letterCombinations = function(digits) {
  const k = digits.length;
  const map = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
  if(!k) return [];
  if(k === 1) return map[digits].split("");

  const res = [], path = [];
  backtracking(digits, k, 0);
  return res;

  function backtracking(n, k, a) {
    debugger
      if(path.length === k) {
          res.push(path.join(""));
          return;
      }
      for(const v of map[n[a]]) {
          path.push(v);
          backtracking(n, k, a + 1);
          path.pop();
      }

  }
};

// var letterCombinations = function (digits) {
//   // 为空特殊处理
//   if (digits.length === 0) return [];
//   let numMap = new Map([
//     ['0', ''],
//     ['1', ''],
//     ['2', 'abc'],
//     ['3', 'def'],
//     ['4', 'ghi'],
//     ['5', 'jkl'],
//     ['6', 'mno'],
//     ['7', 'pqrs'],
//     ['8', 'tuv'],
//     ['9', 'wxyz']
//   ])
//   let res = [];
//   dfs("", digits);
//   return res;

//   function dfs(str, digit) {
//     // 如果字符串为空了，将拼接好的字符加入数组
//     if (digit.length === 0) res.push(str);
//     else {
//       debugger
//       // 拿到字符串第一个字符，拿到其对应的数字
//       let numstr = numMap.get(digit[0]);
//       // 对可能性进行组合
//       for (let i = 0; i < numstr.length; i++) {
//         str += numstr[i];
//         // 递归组好的 str和下一段字符串
//         dfs(str, digit.slice(1))
//         // 回溯
//         str = str.slice(0, -1);
//       }
//     }
//   }
// };
// const str = '23'
// console.log(letterCombinations(str));


/**
 * 18.四数字之和
 *
 *
 */
 var fourSum = function(nums, target) {
  const len = nums.length;
  if(len < 4) return [];
  nums.sort((a, b) => a - b);
  const res = [];
  for(let i = 0; i < len - 3; i++) {
      // 去重i
      if(i > 0 && nums[i] === nums[i - 1]) continue;
      for(let j = i + 1; j < len - 2; j++) {
          // 去重j
          if(j > i + 1 && nums[j] === nums[j - 1]) continue;
          let l = j + 1, r = len - 1;
          while(l < r) {
              const sum = nums[i] + nums[j] + nums[l] + nums[r];
              if(sum < target) { l++; continue}
              if(sum > target) { r--; continue}
              res.push([nums[i], nums[j], nums[l], nums[r]]);
              while(l < r && nums[l] === nums[++l]);
              while(l < r && nums[r] === nums[--r]);
          }
      }
  }
  return res;
};

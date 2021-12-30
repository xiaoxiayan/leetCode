// 子集问题 78 - 90
//  78 .子集
/**
 * 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。
 * 示例 1：
输入：nums = [1,2,3]
输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
*/
// var subsets = function(nums) {
//   let res = new Set() , path = []
//   backtracking(0)

//   return [...res]
//   function backtracking(staring) {
//       if(!res.has(path)) {
//           res.add(Array.from(path))
//       } else{
//         return
//       }
//       for(let i = staring; i< nums.length; i++){
//         //  检测 是否包含 这个 递归的内容。
//           if(res.has(path)) continue;
//           path.push(nums[i])
//           f = n;
//           backtracking(i+1)
//           path.pop()
//       }
//   }

// };


// 90. 子集 II
// 给你一个整数数组 nums ，其中可能包含重复元素，请你返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。返回的解集中，子集可以按 任意顺序 排列。
// 示例 1：
// 输入：nums = [1,2,2]
// 输出：[[],[1],[1,2],[1,2,2],[2],[2,2]]
// 由于包含了 重复的 元素，使用 SET 去检测，无法实现
// 思路。在检测，是否和上一个元素相同。相同就 break；

var subsetsWithDup = function(nums) {
  let res = [] , path = []
  nums = nums.sort() // 排序，可以把 重复的堆积到一起。有利与判断
  backtracking(0)
  return res
  function backtracking(staring) {
    //  因为数组中本身就有 重复的元素，我们 只需要在重复 元素的时候 进行跳过 就不会添加到 重复 内容，无需检测
      // if(!res.has(path)) {
      //     res.add(Array.from(path))
      // } else{
      //   return
      // }
      res.push(path.slice(0))
      // 如果开始大于长度说明结束了
      if(staring > nums.length - 1 ) {
           return
         }
      // let f = null // 标记当前的值。？是否可以去除，只需要你
      for(let i = staring; i< nums.length; i++){
        //  检测 是否包含 这个 递归的内容。
          const n = nums[i]
          // if( n === f) continue;
          if( i > staring && nums[i] === nums[i-1]) continue
          path.push(nums[i])
          // f = n // 赋值，在下一次循环中可以去重
          backtracking(i+1)
          path.pop()
      }
  }
};


// var subsetsWithDup = function(nums) {
//   let result = []
//   let path = []
//   let sortNums = nums.sort((a, b) => {
//       return a - b
//   })
//   function backtracing(startIndex, sortNums) {
//       result.push(path.slice(0))
//       if(startIndex > nums.length - 1) {
//           return
//       }
//       for(let i = startIndex; i < nums.length; i++) {
//           if(i > startIndex && nums[i] === nums[i - 1]) {
//               continue
//           }
//           path.push(nums[i])
//           backtracing(i + 1, sortNums)
//           path.pop()
//       }
//   }
//   backtracing(0, sortNums)
//   return result
// };
console.log(subsetsWithDup([4,4,4,1,4]))
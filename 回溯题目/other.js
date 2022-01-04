// 其他 491 - 332
// 491. 递增子序列
/**
 * 给你一个整数数组 nums ，找出并返回所有该数组中不同的递增子序列，递增子序列中 至少有两个元素 。你可以按 任意顺序 返回答案。
数组中可能含有重复元素，如出现两个整数相等，也可以视作递增序列的一种特殊情况。
 *
*/

var findSubsequences = function(nums) {
  // Map。 Set 的值都取自索引。直接判断？
  let path = [], res = []
  function backtracking(staring) {
      // 如果后续没有递增了。就结束当前循环
      if( path.length > 1 ) {
          res.push(Array.from(path))
      }
      if(path.length == nums.length) {
          return
      }
      let uset = []
      for(let i = staring; i< nums.length; i++) {
          // 条件,判断是否使用过
          if((path.length > 0 && nums[i] < path[path.length - 1]) || uset[nums[i] + 100]) {
             continue
          }
          uset[nums[i] + 100] = true  // 标记
          path.push(nums[i])
          backtracking(i + 1)
          // 回溯
          path.pop()
      }
  }
  backtracking(0)
  return res
};

findSubsequences([4,6,7,7])
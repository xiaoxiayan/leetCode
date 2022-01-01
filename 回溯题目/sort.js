// 排列问题 46 - 47
/**
 * 46. 全排列
 * 给定一个不含重复数字的数组 nums ，返回其 所有可能的全排列 。你可以 按任意顺序 返回答案。
 * */
//  示例 1：

//  输入：nums = [1,2,3]
//  输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
 var permute = function(nums) {
  let path = [], res = []
  const len = nums.length
  // 思路。循环数组，递归深入
  function backtracking (i) {
      // 终止条件
      if(path.length === len) {
          res.push(Array.from(path))
          return
      }
      for(let j = 0; j < len; j++) {
          // 遇到自己需要跳过、
          if(path.includes(nums[j] )) continue;
          path.push(nums[j])
          backtracking()
          path.pop()
      }
  }

  backtracking(0)
  return res
};

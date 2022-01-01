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

/**
 * 47. 全排列 II
给定一个可包含重复数字的序列 nums ，按任意顺序 返回所有不重复的全排列。

*/
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
            // 标记一下，循环中 下位如果和前位 相同就 跳过
            // if(path.includes(nums[j] )) continue;

            path.push(nums[j])
            backtracking()
            path.pop()
        }
    }
  
    backtracking(0)
    return res
  };

  var permuteUnique = function (nums) {
    nums.sort((a, b) => {
        return a - b
    })
    let result = []
    let path = []

    function backtracing( used) {
        if (path.length === nums.length) {
            result.push(path.slice())
            return
        }
        for (let i = 0; i < nums.length; i++) {
            // !used  标记一下 集合 中这个元素是否使用过
            if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) {
                continue
            }
            // 第一次进来，!used[i] 是不存在的 可以去使用
            if (!used[i]) {
                // 标记一下 这一层中，这个元素已经使用了。
                used[i] = true
                path.push(nums[i])
                backtracing(used)
                path.pop()
                used[i] = false
            }


        }
    }
    backtracing([])
    return result
};

permuteUnique([1,1,2])

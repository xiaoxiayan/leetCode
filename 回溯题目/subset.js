// 子集问题 78 - 90
//  78
var subsets = function(nums) {
  let res = new Set() , path = []
  backtracking(0)

  return [...res]
  function backtracking(staring) {
      if(!res.has(path)) {
          res.add(Array.from(path))
      } else{
        return
      }
      for(let i = staring; i< nums.length; i++){
        //  检测 是否包含 这个 递归的内容。
          if(res.has(path)) continue;
          path.push(nums[i])
          backtracking(i+1)
          path.pop()
      }
  }

};
console.log(subsets([1,2,3]))

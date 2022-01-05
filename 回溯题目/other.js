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

// findSubsequences([4,6,7,7])

/**
 * 332. 重新安排行程
 *给你一份航线列表 tickets ，其中 tickets[i] = [fromi, toi] 表示飞机出发和降落的机场地点。请你对该行程进行重新规划排序。

所有这些机票都属于一个从 JFK（肯尼迪国际机场）出发的先生，所以该行程必须从 JFK 开始。如果存在多种有效的行程，请你按字典排序返回最小的行程组合。

例如，行程 ["JFK", "LGA"] 与 ["JFK", "LGB"] 相比就更小，排序更靠前。
假定所有机票至少存在一种合理的行程。且所有的机票 必须都用一次 且 只能用一次。
 *
 *  */


var findItinerary = function(tickets) {
  const graph = getGraph(tickets)
  const ans = []
  dfs(graph,'JFK', ans)
  //深度优先遍历是先进先出，所以reverse反转一下
  return ans.reverse()
};
//从JFS出发，深度优先遍历
function dfs(graph, cur, ans){
  // 题目要求就是 在目的地中 搜索出最佳的路线条件（按照最小的字母排序），前提是 从JFK 出发。
  if(!graph.has(cur)) return
  const neighbors = graph.get(cur)
  debugger
  //题目要求先遍历字典序小的元素
  while(neighbors.length) dfs(graph, neighbors.shift(), ans)
  // 因为深度优先遍历是先进先出，所以每次遍历出发点添加到最后，意为最先出
  ans.push(cur)
}
// 先存储所有机场之间的关系，哪怕tickets中没有给某个机场提供目的地记录，也要把它的目的地置为空数组
function getGraph(tickets){
  const map = new Map()
  // 收集每一个出发点的所有目的地
  for(let i = 0;i < tickets.length;i++){
      const from = tickets[i][0]
      const to = tickets[i][1]
      if(!map.has(from)) map.set(from, [])
      if(!map.has(to)) map.set(to, [])
      map.get(from).push(to)
  }
  for(let [key, value] of map){
      // 通过结果（目的地）的排序 得到 最优的目的地
      // 字典顺序排序目的地数组
      value.sort((a, b) => {
        a < b ? -1 : a > b ? 1 : 0
      })
  }
  console.log(map)
  return map
}

findItinerary([["MUC","LHR"],["JFK","MUC"],["SFO","SJC"],["LHR","SFO"]])
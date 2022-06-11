function getRulesNum(target, arr ) {
  arr = arr.sort()
  let size = arr.length
  console.log(arr)
  let res = ''

  // 找到 b + 2c
 for( let i = 0; i<size ; i++){
   for( let j = 0; j < size; j++) {
       for( let k = 0; k< size; k++) {
           if( (arr[i] == arr[j] + (arr[k] *2)) && ( i != j  && i != k  && k != j)  ){
               console.log(arr[i] + '' + arr[j] + arr[k])
               res = `arr[i] + '' + arr[j] + '' + arr[k]`
           }

       }
   }
  }

  if(res == '') {

      res = '0'
  }
  return res
}


// 875. 爱吃香蕉的珂珂
// 珂珂喜欢吃香蕉。这里有 n 堆香蕉，第 i 堆中有 piles[i] 根香蕉。警卫已经离开了，将在 h 小时后回来。

// 珂珂可以决定她吃香蕉的速度 k （单位：根/小时）。每个小时，她将会选择一堆香蕉，从中吃掉 k 根。如果这堆香蕉少于 k 根，她将吃掉这堆的所有香蕉，然后这一小时内不会再吃更多的香蕉。  

// 珂珂喜欢慢慢吃，但仍然想在警卫回来前吃掉所有的香蕉。

// 返回她可以在 h 小时内吃掉所有香蕉的最小速度 k（k 为整数）。


/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */
// 思路、二分法， 确定最小值和最大值，
// 本题目寻找的是最小值，也就是 最小速度K ，
// 最大值就是 数组中的最大值，一次吃 这么多，保证可以 在时间内吃完。
// piles = [3,6,7,11], h = 8
// 计算 target 的最左索引。
// f(x) == target  的 X 的最小值是多少？

var minEatingSpeed = function (piles, h) {
    const len = piles.length;
    // 确定出最大最小值， 最大值自然是 这个数组中最大的值了。因为一次只能吃一个数组那么多，就不会再吃
    // 最小值是 1 这个无所谓
    //  找出target 的最小值
    let kmin = 1, kmax = Math.max(...piles);
    let target = 1;
    while (kmin <= kmax) {
        let time = 0;
        // 使用二分法去计算，中间值，然后算出吃香蕉的时间
        // 如果这个时间内，可以吃完香蕉，说明 target 肯定是小于等于 这个mid,
        // 反之吃完说明 向右偏移
        const mid = (kmax + kmin) >> 1;
        for (let i = 0; i < len; ++i) {
            time += Math.ceil(piles[i] / mid);
        }
        if (time > h) {
            kmin = mid + 1;
        } else {
            kmax = mid - 1;
            target = mid;
        }
    }
    return target;
};
minEatingSpeed( [3,6,7,11] , 8)

// 动态规划
// 926. 将字符串翻转到单调递增
var minFlipsMonoIncr = function(s) {
    const n = s.length;
    let dp0 = 0, dp1 = 0;
    for (let i = 0; i < n; i++) {
        const c = s[i];
        debugger
        let dp0New = dp0, dp1New = Math.min(dp0, dp1);
        if (c === '1') {
            dp0New++;
        } else {
            dp1New++;
        }
        dp0 = dp0New;
        dp1 = dp1New;
    }
    return Math.min(dp0, dp1);
};

minFlipsMonoIncr('00110')
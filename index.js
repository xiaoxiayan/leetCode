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
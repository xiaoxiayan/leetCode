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
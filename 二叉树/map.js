 /**  Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 生成节点的 函数
  function TreeNode(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }

// 144 .二叉树的前序遍历
// 给你二叉树的根节点 root ，返回它节点值的 前序 遍历。
// 输入：root = [1,null,2,3]
// 输出：[1,2,3]
// 前序遍历: 中左右

var preorderTraversal = function(root, res = []) {
    if (!root) return res;
    res.push(root.val);
    preorderTraversal(root.left, res)
    preorderTraversal(root.right, res)
    return res;
};

// 94. 中序遍历: 左中右

var inorderTraversal = function(root, res = []) {
    if (!root) return res;
    inorderTraversal(root.left, res);
    res.push(root.val);
    inorderTraversal(root.right, res);
    return res;
};

// 145. 后序遍历
// 后序遍历:左右中

var postorderTraversal = function(root, res = []) {
    if (!root) return res;
    postorderTraversal(root.left, res);
    postorderTraversal(root.right, res);
    res.push(root.val);
    return res;
};
//  层序遍历


// 515.在每个树行中找最大值
// 116.填充每个节点的下一个右侧节点指针
// 117.填充每个节点的下一个右侧节点指针II
// 104.二叉树的最大深度
// 111.二叉树的最小深度


/**
 * 102 . 层序遍历
*/
var levelOrder = function(root) {
  //二叉树的层序遍历
  let res = [],queue = [];
  queue.push(root);
  if(root === null){
      return res;
  }
  while(queue.length !==0 ){
      // 记录当前层级节点数
      let length = queue.length;
      //存放每一层的节点
      let curLevel = [];
      for(let i = 0; i < length; i++){
          let node = queue.shift();
          curLevel.push(node.val);
          // 存放当前层下一层的节点
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
      }
      //把每一层的结果放到结果数组
      res.push(curLevel);
  }
  return res;
};
// 生成 二叉树
let root = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)))
levelOrder(root);

/**
 * 107.二叉树的层次遍历II
 * 给你二叉树的根节点 root ，返回其节点值 自底向上的层序遍历 。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
*/
var levelOrderBottom = function(root) {
  //二叉树的层序遍历
  let res = [],queue = [];
  queue.push(root);
  if(root === null){
      return res;
  }
  while(queue.length !==0 ){
      // 记录当前层级节点数
      let length = queue.length;
      //存放每一层的节点
      let curLevel = [];
      for(let i = 0; i < length; i++){
          let node = queue.shift();
          curLevel.push(node.val);
          // 先载入右边再载入左边，翻转的时候就
          node.left && queue.push(node.left);
          node.right && queue.push(node.right);
      }
      //把每一层的结果放到结果数组
      res.push(curLevel);
  }
  return res.reverse();
};

// levelOrderBottom(root)
// 199.二叉树的右视图
// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。
var rightSideView = function(root) {
    // 取从右边看的最后一个节点。也就是当前层级的最后一个节点
    let res = [], queue = []
    queue.push(root)

    while(queue.length && root !== null){
        let length= queue.length;
        while(length--) {
            let node = queue.shift();
            if(!length){
                // length == 0 到达最后一个节点
                res.push(node.val);
            }
             node.left && queue.push(node.left);
             node.right && queue.push(node.right);
        }
    }
    return res
};

// 637.二叉树的层平均值
var averageOfLevels = function(root) {
    let res = [], queue = []
    if( root == null ) {
        return res
    }
    queue.push(root)
    while(queue.length) {
        // 定义长度， 循环 相加 /2 赋值
        let len = queue.length
        let sum = 0
        let node = queue.splice(0, len)
        for(let i = 0; i< len; i++) {
            sum += node[i].val
            node[i].left && queue.push(node[i].left);
            node[i].right && queue.push(node[i].right);
        }
        res.push(sum / len)
    }
    return res
};

// 429.N叉树的前序遍历
var levelOrder = function(root) {
    let res = [] , queue = []
    // 据观察，节点用null 分离。子节点 的 null个数为 上一层的 节点数。 需要把 分离的 null 过滤
    // 最后一层 的时候 结尾无法检测
    // 数据结构 显示可以直接操作，只需要判断  children.length > 0 .循环即可
    queue.push(root)
    // 默认第一个节点是 1， 后面根据 节点的子集去获取
    while(queue.length && root !== null) {
        let current = []
        let len = queue.length
        while(len--) {
            let node = queue.shift()
            current.push(node.val)
            // 性能有点差，为空的数据也去循环了
            // for(item of node.children) {
            //     console.log(item)
            //     item && queue.push(item)
            // }
            // for提前判断了 是否可以进入，
            for(let j = 0 ; j < node.children.length; j++) {
                queue.push(node.children[j])
            }
        }
        res.push(current)
    }
    return res
};
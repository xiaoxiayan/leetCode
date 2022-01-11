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

// 199.二叉树的右视图
// 637.二叉树的层平均值
// 429.N叉树的前序遍历
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

levelOrderBottom(root)
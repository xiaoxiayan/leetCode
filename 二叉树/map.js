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

// 515.在每个树行中找最大值
// 层序遍历，遍历每一层最大的对比 ，记录一下

var largestValues = function(root) {
    let res = [] , queue = []
    queue.push(root)
    while(queue.length && root !== null) {
        let max = queue[0].val
        let len = queue.length
        while(len--) {
            let node = queue.shift()
            max = max>node.val?max:node.val;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
        res.push(max)
    }
    return res
};
// 在 JS 中 ，是一样的这两道题
// 116.填充每个节点的下一个右侧节点指针
// 117.填充每个节点的下一个右侧节点指针II

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

 var connect = function(root) {
    // next 指向 下一个节点， 如果没有下一个节点，指向 #
    let queue = []
    queue.push(root)
    while(queue.length && root !== null) {
        // 需要获取到这一层级的 全部子节点，然后指向。
        let len = queue.length
        for(let i = 0; i <len; i++) {
            let node = queue.shift()
            if(i < len - 1) {
                node.next = queue[0]
            }
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return root
};

// ### 二叉树的属性

// 104.二叉树的最大深度
// 递归，比较，省内存
var maxDepth = function(root) {
    if(!root) {
        return 0;
    } else {
        const left = maxDepth(root.left);
        const right = maxDepth(root.right);
        return Math.max(left, right) + 1;
    }
};

// 传统层序遍历
var maxDepth = function(root) {
    let queue = [], res = 0
    queue.push(root)
    while(queue.length && root !== null) {
        // 需要获取到这一层级的 全部子节点，然后指向。
        let len = queue.length
        for(let i = 0; i <len; i++) {
            let node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
        res++
    }
    return res
}

// 111.二叉树的最小深度(到达子叶节点)
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */

// 递归
/**
    * @param {TreeNode} root
    * @return {number}
    */
// 有点难理解
 var minDepth1 = function(root) {
    if(!root) return 0;
    // 到叶子节点 返回 1
    if(!root.left && !root.right) return 1;
    // 只有右节点时 递归右节点
    if(!root.left) return 1 + minDepth(root.right);
    // 只有左节点时 递归左节点
    if(!root.right) return 1 + minDepth(root.left);
    return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
};


// 迭代
/**
* @param {TreeNode} root
* @return {number}
*/
var minDepth = function(root) {
    if(!root) return 0;
    const queue = [root];
    let dep = 0;
    while(true) {
        let size = queue.length;
        dep++;
        while(size--){
            const node = queue.shift();
            // 到第一个叶子节点 返回 当前深度
            if(!node.left && !node.right) return dep;
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
};

/101----100----572 是相同类型题目/
// 101.对称二叉树
var isSymmetric = function(root) {
    //使用递归遍历左右子树 递归三部曲
    // 1. 确定递归的参数 root.left root.right和返回值true false
    const compareNode = function(left,right){
        //2. 确定终止条件 空的情况
        if(left === null && right !== null || left !== null && right === null){
            return false;
        }else if (left === null && right === null){
            return true;
        }else if (left.val !== right.val){
            return false;
        }
        //3. 确定单层递归逻辑
        let outSide = compareNode(left.left,right.right);
        let inSide = compareNode(left.right,right.left);
        return outSide&&inSide;
    }
    if(root===null){
        return true;
    }
    return compareNode(root.left,root.right);
};

// 100.相同的树
var isSameTree = function(p, q) {
    const compareNode = function (left, right) {
        // 终止条件，如果两个都是null
        if(left === null && right !== null || left !== null && right === null) {
            // 左边或者右边 一个有值 一个没值。都是 false
            return false
        } else if (left === null && right === null) {
            // 两个都是 null。说明相等。
            return true
        } else if (left.val !== right.val) {
            // 对比值。
            return false
        }
        // 递归返回值
        let leftSide = compareNode(left.left, right.left)
        let rightSide = compareNode(left.right, right.right)
        return leftSide && rightSide;

    }
    // 对比两颗树
    if(p == null && q == null) {
        return true
    }
    return compareNode(p, q)
};


// 572.另一个树的子树

var isSubtree = function(root, subRoot) {
    if (root == null) return subRoot == null;
    // 递归层层比对, 吧原树的 左右和 subRoot传进去
    const compareNode = function(left, right) {
        // 层序遍历需要对比值 再往下递归，否者没有意义
        if(left === null && right === null) {
            return true
        } else if (left !== null && right === null || left === null && right !== null) {
            return false
        } else if (left.val !== right.val ) {
            return false
        }
        const leftCompare = compareNode(left.left, right.left)
        const rightCompare = compareNode(left.right, right.right)
        return leftCompare && rightCompare
    }
    // 需要额外检测一下 根节点的树。
    return  isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot) || compareNode(root, subRoot)
};

// 222.完全二叉树的节点个数
// 有递归，层序遍历法。
var countNodes = function(root) {
    // 递归版本, 左右树递归
    const getNodeNum = function (node) {
        // 终止条件
        if(node === null) {
            return 0;
        }
        // 每一层的逻辑。 往下递归，然后返回 左右节点的 值
        let leftNode = getNodeNum(node.left);
        let rightNode = getNodeNum(node.right);
        return (leftNode + rightNode + 1);
    }
    return getNodeNum(root);
};
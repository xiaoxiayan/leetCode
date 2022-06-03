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

 var preorderTraversal = function (root, res = []) {
     if (!root) return res;
     res.push(root.val);
     preorderTraversal(root.left, res)
     preorderTraversal(root.right, res)
     return res;
 };

 // 94. 中序遍历: 左中右

 var inorderTraversal = function (root, res = []) {
     if (!root) return res;
     inorderTraversal(root.left, res);
     res.push(root.val);
     inorderTraversal(root.right, res);
     return res;
 };

 // 145. 后序遍历
 // 后序遍历:左右中

 var postorderTraversal = function (root, res = []) {
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
 var levelOrder = function (root) {
     //二叉树的层序遍历
     let res = [],
         queue = [];
     queue.push(root);
     if (root === null) {
         return res;
     }
     while (queue.length !== 0) {
         // 记录当前层级节点数
         let length = queue.length;
         //存放每一层的节点
         let curLevel = [];
         for (let i = 0; i < length; i++) {
             let node = queue.shift();
             curLevel.push(node.val);
             // 存放当前层下一层的节点
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

// 110.平衡二叉树
/**
 *
给定一个二叉树，判断它是否是高度平衡的二叉树。

本题中，一棵高度平衡二叉树定义为：

一个二叉树每个节点 的左右两个子树的高度差的绝对值不超过 1 。
 *
*/

var isBalanced = function(root) {
    //  递归寻找左右节点的最深层级
    let flag = true
    const maxDepth = function(node) {
        // null不需要传入 不需要传入
        if (node == null) return 0;
        // 定义左右节点深度， 对比两个深度，两个深度 ？
         let leftMaxDepth = maxDepth(node.left)
         let rightMaxDepth = maxDepth(node.right)
         if (Math.abs(rightMaxDepth - leftMaxDepth) > 1) {
            flag = false;
        }
        // 返回 最大深度
        return 1 + Math.max(leftMaxDepth, rightMaxDepth)
    }
    maxDepth(root);
    return flag
};
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
 var levelOrderBottom = function (root) {
     //二叉树的层序遍历
     let res = [],
         queue = [];
     queue.push(root);
     if (root === null) {
         return res;
     }
     while (queue.length !== 0) {
         // 记录当前层级节点数
         let length = queue.length;
         //存放每一层的节点
         let curLevel = [];
         for (let i = 0; i < length; i++) {
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
 var rightSideView = function (root) {
     // 取从右边看的最后一个节点。也就是当前层级的最后一个节点
     let res = [],
         queue = []
     queue.push(root)

     while (queue.length && root !== null) {
         let length = queue.length;
         while (length--) {
             let node = queue.shift();
             if (!length) {
                 // length == 0 到达最后一个节点
                 res.push(node.val);
             }
             node.left && queue.push(node.left);
             node.right && queue.push(node.right);
         }
     }
     return res
 };

 // 637.二叉树的层平均值 --
 var averageOfLevels = function (root) {
     let res = [],
         queue = []
     if (root == null) {
         return res
     }
     queue.push(root)
     while (queue.length) {
         // 定义长度， 循环 相加 /2 赋值
         let len = queue.length
         let sum = 0
         let node = queue.splice(0, len)
         for (let i = 0; i < len; i++) {
             sum += node[i].val
             node[i].left && queue.push(node[i].left);
             node[i].right && queue.push(node[i].right);
         }
         res.push(sum / len)
     }
     return res
 };

 // 429.N叉树的前序遍历
 var levelOrder = function (root) {
     let res = [],
         queue = []
     // 据观察，节点用null 分离。子节点 的 null个数为 上一层的 节点数。 需要把 分离的 null 过滤
     // 最后一层 的时候 结尾无法检测
     // 数据结构 显示可以直接操作，只需要判断  children.length > 0 .循环即可
     queue.push(root)
     // 默认第一个节点是 1， 后面根据 节点的子集去获取
     while (queue.length && root !== null) {
         let current = []
         let len = queue.length
         while (len--) {
             let node = queue.shift()
             current.push(node.val)
             // 性能有点差，为空的数据也去循环了
             // for(item of node.children) {
             //     console.log(item)
             //     item && queue.push(item)
             // }
             // for提前判断了 是否可以进入，
             for (let j = 0; j < node.children.length; j++) {
                 queue.push(node.children[j])
             }
         }
         res.push(current)
     }
     return res
 };

 // 515.在每个树行中找最大值
 // 层序遍历，遍历每一层最大的对比 ，记录一下

 var largestValues = function (root) {
     let res = [],
         queue = []
     queue.push(root)
     while (queue.length && root !== null) {
         let max = queue[0].val
         let len = queue.length
         while (len--) {
             let node = queue.shift()
             max = max > node.val ? max : node.val;
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

 var connect = function (root) {
     // next 指向 下一个节点， 如果没有下一个节点，指向 #
     let queue = []
     queue.push(root)
     while (queue.length && root !== null) {
         // 需要获取到这一层级的 全部子节点，然后指向。
         let len = queue.length
         for (let i = 0; i < len; i++) {
             let node = queue.shift()
             if (i < len - 1) {
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
 var maxDepth = function (root) {
     if (!root) {
         return 0;
     } else {
         const left = maxDepth(root.left);
         const right = maxDepth(root.right);
         return Math.max(left, right) + 1;
     }
 };

 // 传统层序遍历
 var maxDepth = function (root) {
     let queue = [],
         res = 0
     queue.push(root)
     while (queue.length && root !== null) {
         // 需要获取到这一层级的 全部子节点，然后指向。
         let len = queue.length
         for (let i = 0; i < len; i++) {
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
 var minDepth1 = function (root) {
     if (!root) return 0;
     // 到叶子节点 返回 1
     if (!root.left && !root.right) return 1;
     // 只有右节点时 递归右节点
     if (!root.left) return 1 + minDepth(root.right);
     // 只有左节点时 递归左节点
     if (!root.right) return 1 + minDepth(root.left);
     return Math.min(minDepth(root.left), minDepth(root.right)) + 1;
 };


 // 迭代
 /**
  * @param {TreeNode} root
  * @return {number}
  */
 var minDepth = function (root) {
     if (!root) return 0;
     const queue = [root];
     let dep = 0;
     while (true) {
         let size = queue.length;
         dep++;
         while (size--) {
             const node = queue.shift();
             // 到第一个叶子节点 返回 当前深度
             if (!node.left && !node.right) return dep;
             node.left && queue.push(node.left);
             node.right && queue.push(node.right);
         }
     }
 };

 /101----100----572 是相同类型题目/
 // 101.对称二叉树
 var isSymmetric = function (root) {
     //使用递归遍历左右子树 递归三部曲
     // 1. 确定递归的参数 root.left root.right和返回值true false
     const compareNode = function (left, right) {
         //2. 确定终止条件 空的情况
         if (left === null && right !== null || left !== null && right === null) {
             return false;
         } else if (left === null && right === null) {
             return true;
         } else if (left.val !== right.val) {
             return false;
         }
         //3. 确定单层递归逻辑
         let outSide = compareNode(left.left, right.right);
         let inSide = compareNode(left.right, right.left);
         return outSide && inSide;
     }
     if (root === null) {
         return true;
     }
     return compareNode(root.left, root.right);
 };

 // 100.相同的树
 var isSameTree = function (p, q) {
     const compareNode = function (left, right) {
         // 终止条件，如果两个都是null
         if (left === null && right !== null || left !== null && right === null) {
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
     if (p == null && q == null) {
         return true
     }
     return compareNode(p, q)
 };


 // 572.另一个树的子树

 var isSubtree = function (root, subRoot) {
     if (root == null) return subRoot == null;
     // 递归层层比对, 吧原树的 左右和 subRoot传进去
     const compareNode = function (left, right) {
         // 层序遍历需要对比值 再往下递归，否者没有意义
         if (left === null && right === null) {
             return true
         } else if (left !== null && right === null || left === null && right !== null) {
             return false
         } else if (left.val !== right.val) {
             return false
         }
         const leftCompare = compareNode(left.left, right.left)
         const rightCompare = compareNode(left.right, right.right)
         return leftCompare && rightCompare
     }
     // 需要额外检测一下 根节点的树。
     return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot) || compareNode(root, subRoot)
 };

 // 222.完全二叉树的节点个数
 // 有递归，层序遍历法。
 var countNodes = function (root) {
     // 递归版本, 左右树递归
     const getNodeNum = function (node) {
         // 终止条件
         if (node === null) {
             return 0;
         }
         // 每一层的逻辑。 往下递归，然后返回 左右节点的 值
         let leftNode = getNodeNum(node.left);
         let rightNode = getNodeNum(node.right);
         return (leftNode + rightNode + 1);
     }
     return getNodeNum(root);
 };

 // 257. 二叉树的所有路径
 var binaryTreePaths = function (root) {
     // 递归，

     let res = [],
         path = []
     const trackbacking = function (root) {
         // 1,参数，root.
         path.push(root.val)
         // 2，终止条件, 如果找到叶子节点，返回路径
         if (root.left === null && root.right === null) {
             res.push(path.join('->'))
             return
         }

         // 3. 单层逻辑，递归，回溯
         if (root.left) {
             trackbacking(root.left)
             path.pop()
         }

         if (root.right) {
             trackbacking(root.right)
             path.pop()
         }
     }
     trackbacking(root)
     return res
 };

 var binaryTreePaths = function (root) {
     // 递归，
     let res = []
     const trackbacking = function (root, curPath) {
         // 1,参数，root. curpath ， 路径字符串
         // 2，终止条件, 如果找到叶子节点，返回路径
         if (root.left === null && root.right === null) {
             // 在找到子叶节点后，添加，不需要 '->'
             curPath += root.val;
             res.push(curPath)
             return
         }
         // 3. 单层逻辑， 使用赋值的方式，并且传入递归中，这样递归中拿到的路径是单独的，而且在return 出来的时候 当前层级的节点还是不变的，也暗含了 回溯。

         curPath += root.val + '->'; // 非子叶节点需要加 ->
         root.left && trackbacking(root.left, curPath)
         root.right && trackbacking(root.right, curPath)

     }
     trackbacking(root, '')
     return res
 };

//  404 左叶子之和 （ 左子叶节点）
var sumOfLeftLeaves = function(root) {
    // 获取的是子叶节点
    let sum = 0
    const getLeftNode = function (root) {
        if(root === null) {
        return
        }
        if(root.left !== null && root.left.right === null && root.left.left === null) {
            // 判断是不是左子叶
            sum += root.left.val
        }
        getLeftNode(root.left)
        getLeftNode(root.right)
    }
    getLeftNode(root)
    return  sum
};

// 513.二叉树左下角的值

var findBottomLeftValue = function(root) {
    // 可以使用层序遍历，走到最后一层中，第0 个，但是怎么判断是否是最后一层呢。
    // 可以吧当前层的第一个 循环内容定义为 最左，循环完如果没下一层就是当前的最左
    let res = null , queue = [root]
    while(queue.length) {
        res = queue[0].val
        let len = queue.length
        while(len--) {
            let node  = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
        }
    }
    return res
}

// 112. 总路径之和
let haspathsum = function (root, targetsum) {
    // 递归法
    const traversal = (node, cnt) => {
      // 遇到叶子节点，并且计数为0
      if (cnt === 0 && !node.left && !node.right) return true;
      // 遇到叶子节点而没有找到合适的边(计数不为0)，直接返回
      if (!node.left && !node.right) return false;

      //  左（空节点不遍历）.遇到叶子节点返回true，则直接返回true
      if (node.left && traversal(node.left, cnt - node.left.val)) return true;
      //  右（空节点不遍历）
      if (node.right && traversal(node.right, cnt - node.right.val)) return true;
      return false;
    };
    if (!root) return false;
    return traversal(root, targetsum - root.val);
}

// 226. 翻转二叉树
// 对 node.left 和 right 重新赋
var invertTree = function(root) {

    const invertNode = function (node) {
        if(!node) return
        //翻转逻辑
        let holdNode = node.left
        node.left = node.right
        node.right = holdNode
        //  然后向下递归
        node.left && invertNode(node.left)
        node.right && invertNode(node.right)
    }

    if(!root) return root
    invertNode(root)
    return root

};

// 106.从中序与后序遍历序列构造二叉树

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
 var buildTree = function(inorder, postorder) {
    // 中序遍历,左中右，
    // 后序遍历 左右中
    // 后续遍历 中最后一位数是 根结点， 根据根结点 从中序遍历中去 切割，
    // 切割出来， 就是。root ,left = TreeNode[0] , right = TreeNode
    // 切割出来以后 ，获取 leftsize .然后去切割 postorder， 然后取最后一位 是根结点
    // 递归的时候，还是要依据 postorder 去切割
        let root = postorder.pop()
        let tree = new TreeNode(root)
        // 判断一下是不是根节点，如果是的话提前就返回
        if(!postorder.length) return tree
        let rootIndex = inorder.indexOf(root)
        let right = inorder.splice(rootIndex + 1)
        let left = inorder.splice(0, rootIndex)
        // 获取 postorder子节点对应的数组，找下一个子节点
        // 如果还有下面的节点，往下走
        if(left && left.length) {
            let postorderLeft = postorder.splice(0, left.length)
            tree.left =  buildTree(left, postorderLeft)
        }
        if(right && right.length) {
             let postorderRight = postorder.splice(0, right.length)
             tree.right =  buildTree(right, postorderRight)
        }
        return tree
    };
//  精简代码，但是性能不高。
    var buildTree = function(inorder, postorder) {
        if (!postorder.length) return null

        let root = new TreeNode(postorder[postorder.length - 1])

        let index = inorder.findIndex(number => number === root.val)

        root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
        root.right = buildTree(inorder.slice(index + 1, inorder.length), postorder.slice(index, postorder.length - 1))

        return root
    };
// 1305. 两棵二叉搜索树中的所有元素
// 因为 二叉搜索树特效， 左节点比 中节点小。 右节点比中节点大。 所以用中序遍历就可以完成 升序的排序， es6 可以合并并且排序。
// 中序遍历， 左中右
    var getAllElements = function(root1, root2) {
        let res = []
        function getNodeList (root, arr) {
              if (!root) return arr;
                getNodeList(root.left, arr);
                arr.push(root.val);
                getNodeList(root.right, arr);
                return arr;
        }
       return res.concat(getNodeList(root1, []), getNodeList(root2, [])).sort((a, b) => {
           return a-b
       })
    };

// 450. 删除二叉搜索树中的节点
// 给定一个二叉搜索树的根节点 root 和一个值 key，删除二叉搜索树中的 key 对应的节点，并保证二叉搜索树的性质不变。返回二叉搜索树（有可能被更新）的根节点的引用。

// 一般来说，删除节点可分为两个步骤：

// 首先找到需要删除的节点；
// 如果找到了，删除它。
var deleteNode = function (root, key) {
    if (root === null)
        return root;
    if (root.val === key) {
        if (!root.left)
            return root.right;
        else if (!root.right)
            return root.left;
        else {
            let cur = root.right;
            while (cur.left) {
                cur = cur.left;
            }
            cur.left = root.left;
            root = root.right;
            delete root;
            return root;
        }
    }
    if (root.val > key)
        root.left = deleteNode(root.left, key);
    if (root.val < key)
        root.right = deleteNode(root.right, key);
    return root;
};



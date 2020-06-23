#

## 两数之和

<https://leetcode-cn.com/problems/two-sum/>

```
给定 nums = [2, 7, 11, 15], target = 9

因为 nums[0] + nums[1] = 2 + 7 = 9
所以返回 [0, 1]
```

## 最长重复子数组

<https://leetcode-cn.com/problems/maximum-length-of-repeated-subarray/>

给两个整数数组 A 和 B ，返回两个数组中公共的、长度最长的子数组的长度。

## 二叉树中的最大路径和

<https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/>

```js
// 先求出左右节点的最大贡献值
let leftG = Math.max(maxG(node.left), 0)
let rightG = Math.max(maxG(node.right), 0)

// 递归中计算中更新结果
res = Math.max(node.val + leftG + rightG, res)

//
return node.val + Math.max(leftG, rightG)
```

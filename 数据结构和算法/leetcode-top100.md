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

## 136. 只出现一次的数字

<https://leetcode-cn.com/problems/single-number/>

线性时间复杂度, 不使用额外空间

异或操作

## 141. 环形链表

<https://leetcode-cn.com/problems/linked-list-cycle/>

快慢指针

## 160. 相交链表

<https://leetcode-cn.com/problems/intersection-of-two-linked-lists/>

## 169. 多数元素

<https://leetcode-cn.com/problems/majority-element/>

给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数大于 `⌊ n/2 ⌋` 的元素

哈希

投票算法

## 461. 汉明距离

<https://leetcode-cn.com/problems/hamming-distance/>

x^y

## 538. 把二叉搜索树转换为累加树

<https://leetcode-cn.com/problems/convert-bst-to-greater-tree/>

给定一个二叉搜索树（Binary Search Tree），把它转换成为累加树（Greater Tree)，使得每个节点的值是原来的节点值加上所有大于它的节点值之和。

公共累加值

## 543. 二叉树的直径

<https://leetcode-cn.com/problems/diameter-of-binary-tree/>

给定一棵二叉树，你需要计算它的直径长度。一棵二叉树的**直径长度**是**任意两个结点路径长度中的最大值**。

## 581. 最短无序连续子数组

<https://leetcode-cn.com/problems/shortest-unsorted-continuous-subarray/>

给定一个整数数组，你需要寻找一个连续的子数组，如果对这个子数组进行升序排序，那么整个数组都会变为升序排序。

你找到的子数组应是最短的，请输出它的长度。

1. `先排序，在对比`,`O(nlogn)`,`O(n)`
2. `用栈`,`O(n)`,`O(n)`
3. `4次循环`,`O(n)`,`O(1)`

## 437. 路径总和 III

<https://leetcode-cn.com/problems/path-sum-iii/>

给定一个二叉树，它的每个结点都存放着一个整数值。

找出路径和等于给定数值的路径总数。

路径不需要从根节点开始，也不需要在叶子节点结束，但是路径方向必须是向下的（只能从父节点到子节点）。

递归 + 数组存值

## 41. 缺失的第一个正数（困难）

<https://leetcode-cn.com/problems/first-missing-positive/>

给你一个未排序的整数数组，请你找出其中没有出现的最小的正整数。只能使用**常数级别的额外空间**

类似题，都可以整理原数组，再次遍历

## 55. 跳跃游戏

<https://leetcode-cn.com/problems/jump-game/>

1. 回溯
2. 贪心

## 56. 合并区间

<https://leetcode-cn.com/problems/merge-intervals/>

## 32. 最长有效括号(困难)

<https://leetcode-cn.com/problems/longest-valid-parentheses/>

给定一个只包含 '(' 和 ')' 的字符串，找出最长的包含有效括号的子串的长度。

dp，栈，双指针

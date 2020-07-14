---
title: BFC和IFC
tags:
    - css
    - bfc
---

## BFC块格式化上下文（Block Formatting Context，BFC）

- BFC就是页面上的一个隔离的独立容器，容器里面的子元素不会影响到外面的元素，反之亦然；
- 计算BFC的高度时，考虑BFC所包含的所有元素，连浮动元素也参与计算；

### 创建

- 根元素(`<html>`)
- 浮动元素（元素的 float 不是 none）
- 绝对定位元素（元素的 position 为 absolute 或 fixed）
- 行内块元素（元素的 display 为 inline-block）
- 表格单元格（元素的 display 为 table-cell）
- 表格标题（元素的 display 为 table-caption）
- 匿名表格单元格元素（元素的 display 为 table、inline-table）
- display 值为 flow-root 的元素（兼容性不好）
- 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
- 元素（display 为 grid 或 inline-grid 元素的直接子元素）
- overflow 值不为 visible 的块元素

主要：

- overflow属性不为visible
- float（不为 none 即可）
  - left
  - right
- position
  - absolute
  - fixed
  - sticky
- display
  - inline-block
  - flex、inline-flex
  - grid、inline-grid
  - table、table-cell、table-caption
  - flow-root

### 应用

- 自适应多栏布局
- 防止外边距折叠
- 清除浮动
- 阻止行内元素环绕浮动元素

## IFC(Inline Formatting Contexts) 直译为”内联格式化上下文”

IFC的line box（线框）高度由其包含行内元素中最高的实际高度计算而来（不受到竖直方向的padding/margin影响）
---
title: `flex`布局
categories:
    - [css]
tags:
    - css
date: 2020/9/15
---

## 容器

- `flex-direction`,主轴的方向,(`row`(默认) | `row-reverse` | `column` | `column-reverse`)
- `flex-wrap`,如何换行,[`nowrap`（默认）不换行。 | `wrap`换行向下 | `wrap-reverse`换行向上]
- `flex-flow`，`flex-direction`属性和`flex-wrap`属性的简写，默认值为`row nowrap`
- `justify-content`，在主轴上的对齐方式(水平)，`flex-start`(默认) | `flex-end` | `center` | `space-between` | `space-around`;
- `align-items`，在交叉轴上如何对齐，`flex-start` | `flex-end` | `center` | `baseline` | `stretch`(默认);
- `align-content`，定义了多根轴线的对齐方式

## item

- `order`，定义项目的排列顺序。数值越小，排列越靠前，默认为0。
- `flex-grow`，放大比例，默认为0
- `flex-shrink`，缩小比例，默认为1
- `flex-basis`，分配多余空间之前，项目占据的主轴空间
- `flex`，`flex-grow`, `flex-shrink` 和 `flex-basis`的简写，默认值为`0 1 auto`
- `align-self`，允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

## `flex`属性详解

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

`flex` 属性可以指定1个，2个或3个值。

**单值语法**:

- 一个无单位数，被当作`flex-grow`的值
- 一个有效的宽度(width)值，被当作`flex-basis`的值
- 关键字`none`，`auto`或`initial`
  - `initial`，相当于`flex: 0 1 auto`
  - `auto`，相当于`flex: 1 1 auto`
  - `none`，相当于`flex: 0 0 auto`

**双值语法**:

- `无单位数 无单位数`，被当作`flex-grow flex-shrink`
- `无单位数 有效的宽度值`，被当作`flex-grow flex-basis`

**三值语法**:

- `无单位数 无单位数 有效的宽度值`

**<font color=red>注意！！！！！！！！！</font>**:

当使用一个或两个无单位数时, `flex-basis`会从`auto`变为`0%`.

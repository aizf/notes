---
title: flex布局
tags:
    - css
---

## 容器

- flex-direction,主轴的方向,(row(默认) | row-reverse | column | column-reverse)
- flex-wrap,如何换行,[nowrap（默认）不换行。 | wrap换行向下 | wrap-reverse换行向上]
- flex-flow，flex-direction属性和flex-wrap属性的简写，默认值为row nowrap
- justify-content，在主轴上的对齐方式(水平)，flex-start(默认) | flex-end | center | space-between | space-around;
- align-items，在交叉轴上如何对齐，flex-start | flex-end | center | baseline | stretch(默认);
- align-content，定义了多根轴线的对齐方式

## item

- order，定义项目的排列顺序。数值越小，排列越靠前，默认为0。
- flex-grow，放大比例，默认为0
- flex-shrink，缩小比例，默认为1
- flex-basis，分配多余空间之前，项目占据的主轴空间
- flex，flex-grow, flex-shrink 和 flex-basis的简写，默认值为0 1 auto
- align-self，允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性

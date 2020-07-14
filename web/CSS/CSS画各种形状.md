---
title: CSS画各种形状
tags:
    - css
---

## 1 三角形，六角形,带小三角的对话框

各种方向形状的三角形，六角形,带小三角的对话框

原理：<http://caibaojian.com/css-border-triangle.html>

```css
.sanjiao {
/* 三角 */
width: 0;
height: 0;
border-top: 0 solid red;
border-right: 50px solid transparent;
border-bottom: 100px solid red;
border-left: 50px solid transparent;
}
```

```css
.liujiao {
    /* 六角形 */
    box-sizing: border-box;
    position: relative;
    width: 0;
    height: 0;
    border-top: 0;
    border-right: 50px solid transparent;
    border-bottom: 100px solid red;
    border-left: 50px solid transparent;
}

.liujiao::after {
    content: "";
    position: absolute;
    top: 34px;
    left: -50px;
    width: 0;
    height: 0;
    border-top: 100px solid red;
    border-right: 50px solid transparent;
    border-bottom: 0;
    border-left: 50px solid transparent;
}
```

## 2 圆环，实心圆，椭圆，胶囊，半圆，同心圆

```html
<div class="circle"></div>
<style>
.circle1 {
    /* 圆环 */
    width: 100px;
    height: 100px;
    border: 1px solid red;
    /* border-radius为50%或宽度(长度)的一半 */
    border-radius: 50%;
    }
.circle2 {
    /* 实心圆1 */
    width: 0;
    height: 0;
    /* border为半径 */
    border: 50px solid red;
    /* border-radius为边的50% */
    border-radius: 50%;
    }
.circle3 {
    /* 实心圆2 */
    width: 100px;
    height: 100px;
    /* border-radius为边的50% */
    border-radius: 50%;
    background-color: red;
    }
.circle4 {
    /* 胶囊 */
    width: 100px;
    height: 300px;
    border: 2px solid red;
    /* border-radius为短边的50% */
    border-radius: 50px;
    }
.circle5 {
    /* 左上1/4圆 */
    width: 0;
    height: 0;
    /* 半径为2*50px */
    border: 50px solid red;
    /* border-radius和象限顺序一样 */
    border-radius: 100% 0 0 0;
    }
.circle6 {
    /* 上1/4圆 */
    width: 0;
    height: 0;
    /* border为半径 */
    border-top: 50px solid red;
    border-right: 50px solid transparent;
    border-bottom: 50px solid transparent;
    border-left: 50px solid transparent;
    /* border-radius和象限顺序一样 */
    border-radius: 50%;
    }
.circle7 {
    /* 右上半圆(只显示上和右) */
    width: 0;
    height: 0;
    /* border为半径 */
    border-top: 50px solid red;
    border-right: 50px solid red;
    border-bottom: 50px solid transparent;
    border-left: 50px solid transparent;
    /* border-radius和象限顺序一样 */
    border-radius: 50%;
    }
</style>
```

## 3 正六边形

<https://www.cnblogs.com/a-cat/p/9053884.html>

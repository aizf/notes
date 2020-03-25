# CSS3

## 1 边框

- border-radius
- box-shadow
- border-image

### 1.1 CSS3 圆角

可以给**任何元素**制作 "圆角"

每个半径的四个值的顺序是：左上角，右上角，右下角，左下角。

在div中添加圆角元素：

```css
div
{
border:2px solid;
border-radius:25px;
}
```

### 1.2 CSS3 盒阴影

`box-shadow: h-shadow v-shadow blur spread color inset;`

值|说明
-|-
h-shadow|必需的。水平阴影的位置。允许负值
v-shadow|必需的。垂直阴影的位置。允许负值
blur|可选。模糊距离
spread|可选。阴影的大小
color|可选。阴影的颜色。在CSS颜色值寻找颜色值的完整列表
inset|可选。从外层的阴影（开始时）改变阴影内侧阴影

```css
div
{
    box-shadow: 10px 10px 5px #888888;
}
```

### 1.3 CSS3 边界图片

`border-image: source slice width outset repeat|initial|inherit;`

值|描述
-|-
border-image-source|用于指定要用于绘制边框的图像的位置
border-image-slice|图像边界向内偏移
border-image-width|图像边界的宽度
border-image-outset|用于指定在边框外部绘制 border-image-area 的量
border-image-repeat|用于设置图像边界是否应重复（repeat）、拉伸（stretch）或铺满（round）。

```css
#borderimg {
    -webkit-border-image: url(border.png) 30 round; /* Safari 3.1-5 */
    -o-border-image: url(border.png) 30 round; /* Opera 11-12.1 */
    border-image: url(border.png) 30 round;
}
```

## 2 背景（background）

- background-image
- background-size
- background-origin
- background-clip

## 3 CSS3 渐变（Gradients）

CSS3 定义了两种类型的渐变（gradients）：

线性渐变（Linear Gradients）- 向下/向上/向左/向右/对角方向
径向渐变（Radial Gradients）- 由它们的中心定义

## 4 CSS3 文本效果

- text-shadow(文本阴影)
- box-shadow(盒子阴影)
- text-overflow(指定应向用户如何显示溢出内容)
- word-wrap(自动换行属性允许您强制文本换行)
- word-break(单词拆分换行,`keep-all`,`break-all`)

## 5 CSS3 字体

使用以前 CSS 的版本，不得不使用用户计算机上已经安装的字体。

使用 CSS3，网可以使用任何字体。

```css
<style>
@font-face
{
    font-family: myFirstFont;
    src: url(sansation_light.woff);
}

div
{
    font-family:myFirstFont;
}
</style>
```

## 6 CSS3 2D 转换

移动(translate)、转动(rotate)、缩放(scale)、拉长或拉伸。

Internet Explorer 10, Firefox, 和 Opera支持transform 属性.

Chrome 和 Safari 要求前缀 -webkit- 版本.

注意： Internet Explorer 9 要求前缀 -ms- 版本.

### 6.1 translate() 方法

根据左(X轴)和顶部(Y轴)位置给定的参数，从当前元素位置移动。

```css
div
{
transform: translate(50px,100px);
-ms-transform: translate(50px,100px); /* IE 9 */
-webkit-transform: translate(50px,100px); /* Safari and Chrome */
}
```

### 6.2 rotate() 方法

顺时针旋转元素

```css
div
{
transform: rotate(30deg);
-ms-transform: rotate(30deg); /* IE 9 */
-webkit-transform: rotate(30deg); /* Safari and Chrome */
}
```

### 6.3 scale() 方法

```css
-ms-transform:scale(2,3); /* IE 9 */
-webkit-transform: scale(2,3); /* Safari */
transform: scale(2,3); /* 标准语法 */
```

`scale(2,3)`

转变宽度为原来的大小的2倍，和其原始大小3倍的高度。

### 6.4 skew() 方法

`transform:skew(<angle> [,<angle>]);`

包含两个参数值，分别表示X轴和Y轴倾斜的角度，如果第二个参数为空，则默认为0，参数为负表示向相反方向倾斜。

<https://www.runoob.com/try/try.php?filename=trycss3_transform_skew>

### 6.5 matrix() 方法

matrix 方法有六个参数，包含旋转，缩放，移动（平移）和倾斜功能。

## 7 CSS3 3D 转换

### 7.1 rotateX() 方法

`rotateX()`方法，围绕其在一个给定度数X轴旋转的元素。

### 7.2 rotateY() 方法

`rotateY()`方法，围绕其在一个给定度数Y轴旋转的元素。

### 8 CSS3 过渡

CSS3 过渡是元素从一种样式逐渐改变为另一种的效果。

要实现这一点，必须规定两项内容：

- 指定要添加效果的CSS属性
- 指定效果的持续时间。

```css
div
{
    transition: width 2s, height 2s, transform 2s;
    -webkit-transition: width 2s, height 2s, -webkit-transform 2s;
}
```

## 9 CSS3 动画

### 9.1 CSS3 `@keyframes` 规则

`@keyframes` 规则内指定一个 CSS 样式和动画将逐步从目前的样式更改为新的样式。

```css
@keyframes myfirst
{
    from {background: red;}
    to {background: yellow;}
}

@-webkit-keyframes myfirst /* Safari 与 Chrome */
{
    from {background: red;}
    to {background: yellow;}
}
```

百分比来规定变化发生的时间，或用关键词 "from" 和 "to"，等同于 0% 和 100%。

```css
@keyframes myfirst
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}

@-moz-keyframes myfirst /* Firefox */
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}

@-webkit-keyframes myfirst /* Safari 和 Chrome */
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}

@-o-keyframes myfirst /* Opera */
{
0%   {background: red;}
25%  {background: yellow;}
50%  {background: blue;}
100% {background: green;}
}
```

### 9.2 捆绑`@keyframes`

- 规定动画的名称
- 规定动画的时长

把 "myfirst" 动画捆绑到 div 元素，时长：5 秒：

```css
div
{
animation: myfirst 5s;
-moz-animation: myfirst 5s;     /* Firefox */
-webkit-animation: myfirst 5s;  /* Safari 和 Chrome */
-o-animation: myfirst 5s;       /* Opera */
}
```

## 10 CSS3 多列

多列属性：

- column-count
- column-gap
- column-rule

### 10.1 创建多列

文本分隔为三列

```css
div
{
-moz-column-count:3; 	/* Firefox */
-webkit-column-count:3; /* Safari 和 Chrome */
column-count:3;
}
```

### 10.2 规定列之间的间隔

```css
div {
    -webkit-column-gap: 40px; /* Chrome, Safari, Opera */
    -moz-column-gap: 40px; /* Firefox */
    column-gap: 40px;
}
```

### 10.3 列规则

`column-rule` 属性设置列之间的宽度、样式和颜色规则。

## 11 CSS3 用户界面

- resize
- box-sizing
- outline-offset

### 11.1 调整尺寸

resize 属性规定是否可由用户调整元素尺寸

### 11.2 方框大小调整

box-sizing 属性允许您以确切的方式定义适应某个区域的具体内容。

### 11.3 外形修饰

outline-offset 属性对轮廓进行偏移，并在超出边框边缘的位置绘制轮廓。

## 12 `@media` 查询

`@media` 可以针对不同的屏幕尺寸设置不同的样式，特别是如果你需要设置设计响应式的页面，`@media` 是非常有用的。

### 12.1 语法

```css
@media mediatype and|not|only (media feature) {
    CSS-Code;
}
```

你也可以针对不同的媒体使用不同 stylesheets :

`<link rel="stylesheet" media="mediatype and|not|only (media feature)" href="mystylesheet.css">`

#

## 1 多重样式优先级

（内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式

## 2 background 属性

`background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;`

## 3 Text(文本)格式

| 属性            | 描述                     |
| --------------- | ------------------------ |
| color           | 设置文本颜色             |
| direction       | 设置文本方向。           |
| letter-spacing  | 设置字符间距             |
| line-height     | 设置行高                 |
| text-align      | 对齐元素中的文本         |
| text-decoration | 向文本添加修饰           |
| text-indent     | 缩进元素中文本的首行     |
| text-shadow     | 设置文本阴影             |
| text-transform  | 控制元素中的字母         |
| unicode-bidi    | 设置或返回文本是否被重写 |
| vertical-align  | 设置元素的垂直对齐       |
| white-space     | 设置元素中空白的处理方式 |
| word-spacing    | 设置字间距               |

## 4 Fonts(字体)

CSS字体属性定义字体，加粗，大小，文字样式。

在计算机屏幕上，sans-serif字体被认为是比serif字体容易阅读

### 4.1 字体样式

- 正常 - 正常显示文本
- 斜体 - 以斜体字显示的文字
- 倾斜的文字 - 文字向一边倾斜（和斜体非常类似，但不太支持）

```css
p.normal {font-style:normal;}
p.italic {font-style:italic;}
p.oblique {font-style:oblique;}
```

### 4.2 字体大小

用em来设置字体大小

1em的默认大小是16px。可以通过下面这个公式将像素转换为em：px/16=em

不幸的是，仍然是IE浏览器的问题。调整文本的大小时，会比正常的尺寸更大或更小。

使用百分比和EM组合

```css
body {font-size:100%;}
h1 {font-size:2.5em;}
h2 {font-size:1.875em;}
p {font-size:0.875em;}
```

在所有浏览器中，可以显示相同的文本大小，并允许所有浏览器缩放文本的大小。

## 5 链接

四个链接状态

- a:link - 正常，未访问过的链接
- a:visited - 用户已访问过的链接
- a:hover - 当用户鼠标放在链接上时
- a:active - 链接被点击的那一刻

## 6 border

border:5px solid red;

## 7 CSS 轮廓（outline）

轮廓（outline）是绘制于元素周围的一条线，位于边框边缘的外围，可起到突出元素的作用。

轮廓（outline）属性指定元素轮廓的样式、颜色和宽度。

## 8 尺寸 (Dimension)

| 属性        | 描述                 |
| ----------- | -------------------- |
| height      | 设置元素的高度。     |
| line-height | 设置行高。           |
| max-height  | 设置元素的最大高度。 |
| max-width   | 设置元素的最大宽度。 |
| min-height  | 设置元素的最小高度。 |
| min-width   | 设置元素的最小宽度。 |
| width       | 设置元素的宽度       |

## 9 Display(显示) 与 Visibility（可见性）

### 9.1 外边距合并

当两个垂直外边距相遇时，它们将形成一个外边距。

只有普通文档流中块壮元素的垂直外边距才会发生外边距合并。

行内块左右不会合并。

行内块与上下块状不会。

行内框、浮动框或绝对定位之间的外边距不会合并。

## 10 Position(定位)

position 属性指定了元素的定位类型。

position 属性的五个值：

- static
- relative
- fixed
- absolute
- sticky

然后用top, bottom, left, right定位

### 10.1 static 定位

HTML 元素的**默认值**，即没有定位，遵循正常的文档流对象。

静态定位的元素不会受到 top, bottom, left, right影响。

### 10.2 fixed 定位

元素的位置相对于**浏览器窗口**是固定位置。

即使窗口是滚动的它也不会移动

与文档流无关，因此**不占据空间**。

### 10.3 relative 定位

相对定位元素的定位是**相对其正常位置**。

但是**原本所占的空间不会改变**。

相对定位元素经常被用来作为绝对定位元素的容器块。

iOS里APP右上角的红色圈圈:

通常的做法是将APP图片所处的div设成relative，然后红色圈圈设成absolute，再设top/right即可。这样无论用户怎么改变APP图片的位置，红色圈圈永远固定在右上角

### 10.4 absolute 定位

绝对定位的元素的位置相对于最近的已定位(`relative`、`absolute`、`fixed`)父元素，如果元素没有已定位的父元素，那么它的位置相对于`<html>`

与文档流无关，因此**不占据空间**。

绝对定位的元素忽略float属性

#### 10.4.1 定位点问题

父级元素`con`为`relative`，子级元素`child`为`absolute`时:

`child`的`top:0;left:0px;`为:

- `child`的`margin`的左上角
- `con`的`content`的(0,0)

### 10.5 sticky 定位

元素定位表现为在跨越特定阈值前为相对定位(relative)，之后为固定定位(fixed)。

### 10.6 脱离文档流

1. float
2. absolute
3. fixed

## 11 CSS 布局 - Overflow

用于控制内容溢出元素框时显示的方式。

| 值      | 描述                                                     |
| ------- | -------------------------------------------------------- |
| visible | 默认值。内容不会被修剪，会呈现在元素框之外。             |
| hidden  | 内容会被修剪，并且其余内容是不可见的。                   |
| scroll  | 内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。 |
| auto    | 如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。 |
| inherit | 规定应该从父元素继承 overflow 属性的值。                 |

## 12 Float(浮动)

浮动可以理解为让某个div元素脱离标准流，漂浮在标准流之上，和标准流不是一个层次。

CSS 的 Float（浮动），会使元素向左或向右移动，其周围的元素也会重新排列。

一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

浮动元素之后的元素将围绕它。

浮动元素之前的元素将不会受到影响。

例如：如果图像是右浮动，下面的文本流将环绕在它左边

**绝对定位**的元素忽略float属性

`float:[left,right,none,inherit]`

### 12.1 清除浮动 - 使用 clear

元素浮动之后，周围的元素会重新排列，为了避免这种情况，使用 clear 属性。

clear 属性指定元素两侧不能出现浮动元素。

通俗表示：该元素在两侧浮动元素中独占一行

`clear:[left,right,both,none,inherit]`

## 13 CSS 布局 - 水平 & 垂直对齐

### 13.1 居中对齐

#### 13.1.1 元素居中对齐

元素通过**指定宽度**，并将两边的空外边距平均分配

```css
.center {
    margin: auto;
    width: 50%;
    border: 3px solid green;
    padding: 10px;
}
```

#### 13.1.2 文本居中对齐

文本在元素内居中对齐，可以使用 `text-align: center;`

#### 13.1.3 图片居中对齐

```css
img {
    display: block; /*默认inline-block*/
    margin: auto;
    width: 40%;
}
```

### 13.2 左右对齐

#### 13.2.1 使用定位方式

```css
.container {
    position: relative;
    width: 100%;
}
.right {
    position: absolute;
    right: 0px;
    width: 300px;
    background-color: #b0e0e6;
}
```

#### 13.2.2 使用 float 方式

```css
.right {
    float: right;
    width: 300px;
    border: 3px solid #73AD21;
    padding: 10px;
}
```

### 13.3 垂直居中对齐

#### 13.3.1 使用 padding

实现：上下padding相同，容器不设高度。

缺点：多行会导致容器变大

#### 13.3.2 使用 line-height

设置以百分比计的行高

#### 13.3.3 使用 position 和 transform

```css
.center {
    height: 200px;
    position: relative;
    border: 3px solid green;
}

.center p {
    margin: 0;
    position: absolute;
    top: 50%;/*起始位置到中间*/
    left: 50%;/*起始位置到中间*/
    transform: translate(-50%, -50%);/*相对自己左移一半，上移一半*/
}
```

## 14 组合选择符

后代选择器`div p`

子元素选择器`div>p`

相邻兄弟选择器`div+p`,**只**选择**紧接的下一个**元素，且二者有相同父元素。

普通兄弟选择器`div~p`,选取指定元素**之后的所有相邻兄弟**元素。

## 15 伪类(Pseudo-classes)

CSS伪类是用来添加一些选择器的特殊效果。

伪类选择元素基于的是当前元素处于的状态,动态变化

### 15.1 链接(anchor)伪类

```css
a:link {color:#FF0000;} /* 未访问的链接 */
a:visited {color:#00FF00;} /* 已访问的链接 */
a:hover {color:#FF00FF;} /* 鼠标划过链接 */
a:active {color:#0000FF;} /* 已选中的链接 */
```

注意： 在CSS定义中，a:hover 必须被置于 a:link 和 a:visited 之后，才是有效的。

注意： 在 CSS 定义中，a:active 必须被置于 a:hover 之后，才是有效的。

注意：伪类的名称不区分大小写。

### 15.2 :first-child 伪类

选择父元素的第一个子元素

匹配第一个 `<p>` 元素

```css
p:first-child
{
    color:blue;
}
```

匹配所有`<p>` 元素中的第一个 `<i>` 元素

```css
p > i:first-child
{
    color:blue;
}
```

### 15.3 其他

`div:first-child`
>属于任意元素的第一个div元素

`div:last-child`
>属于任意元素的倒数第一个div元素

`div:nth-child(n)`
>属于任意元素的第n个div元素,没有第0个

`div:nth-last-child(n)`
>属于任意元素的倒数第n个div元素

## 16 伪元素(pseudo-element)

CSS伪元素是用来添加一些选择器的特殊效果。

伪元素是**对元素中的特定内容**进行操作，它所操作的层次比伪类更深了一层

### 16.1 `:first-line` 伪元素

用于向文本的首行设置特殊样式。

### 16.2 `:first-letter` 伪元素

用于向文本的首字母设置特殊样式

### 16.3 `:before` 伪元素

可以在元素的内容前面插入新内容

### 16.4  `:after` 伪元素

可以在元素的内容之后插入新内容。

## 17 导航栏

### 17.1 导航栏=链接列表

导航条基本上是一个链接列表，所以使用 `<ul>` 和 `<li>`元素非常有意义：

```html
<ul>
  <li><a href="#home">主页</a></li>
  <li><a href="#news">新闻</a></li>
  <li><a href="#contact">联系</a></li>
  <li><a href="#about">关于</a></li>
</ul>
```

### 17.2 首先

删除`margin`,`padding`和设置`list-style-type: none;`

### 17.3 垂直导航栏

在 17.2 的基础上：

```css
a
{
    display:block;
    width:60px;
}
```

显示块元素的链接，**让整体变为可点击链接区域**（不只是文本）

继续优化：

```css
/*以下为添加的内容*/
ul {
    /* list-style-type: none; */
    /* margin: 0; */
    /* padding: 0; */
    /* width: 200px; */
    background-color: #f1f1f1;
}
li a {
    /* display: block; */
    color: #000;
    padding: 8px 16px;
    text-decoration: none;
}
li a:hover {
    background-color: #555;
    color: white;
}
.active {
    /*当前激活的导航条*/
    background-color: #4CAF50;
    color: white;
}
```

全屏的固定导航条：

```css
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    width: 25%;
    background-color: #f1f1f1;
    height: 100%; /* 全屏高度 */
    position: fixed; /*不跟随滚动条移动*/
    overflow: auto; /* 如果导航栏选项多，允许滚动 */
}
```

### 17.4 水平导航栏

有两种方法创建横向导航栏。使用内联(inline)或浮动(float)的列表项。

这两种方法都很好，但如果你想链接到具有相同的大小，你必须使用浮动的方法。

#### 17.4.1 内联列表项

```css
li
{
    display:inline;
}
```

#### 17.4.2 浮动列表项

```css
li
{
    float:left;
}
a
{
    display:block;
    width:60px;
}
```

#### 17.4.3 样式

基本同上

## 18 下拉菜单

1. 菜单整体`position: relative;display: inline-block;`
2. `dropdown-content`设置`display: none;`
3. hover时变成block，`.dropdown:hover .dropdown-content {display: block;}`

实例解析

**HTML 部分**：

我们可以使用**任何的 HTML 元素来打开下拉菜单**，如：`<span>`, 或  `<button>` 元素。

使用容器元素 (如： `<div>`) 来创建下拉菜单的内容，并放在任何你想放的位置上。

使用 `<div>` 元素来包裹这些元素，并使用 CSS 来设置下拉内容的样式。

**CSS 部分**：

`.dropdown` 类使用 `position:relative`, 这将设置下拉菜单的内容放置在下拉按钮 (使用 position:absolute) 的右下角位置。

`.dropdown-content` 类中是实际的下拉菜单。默认是隐藏的，在鼠标移动到指定元素后会显示。 注意 `min-width` 的值设置为 `160px`。你可以随意修改它。 注意: 如果你想设置下拉内容与下拉按钮的宽度一致，可设置 `width` 为 100% ( `overflow:auto` 设置可以在小尺寸屏幕上滚动)。

我们使用 `box-shadow` 属性让下拉菜单看起来像一个"卡片"。

`:hover` 选择器用于在用户将鼠标移动到下拉按钮上时显示下拉菜单

## 19 提示工具(Tooltip)

hover时的提示气球

核心：

```css
.tooltip .tooltiptext {
visibility: hidden;
position: absolute;
z-index: 1;
}
.tooltip:hover .tooltiptext {
    visibility: visible;
}
```
#

## 1 多重样式优先级

（内联样式）Inline style > （内部样式）Internal style sheet >（外部样式）External style sheet > 浏览器默认样式

## 2 background 属性

`background:bg-color bg-image position/bg-size bg-repeat bg-origin bg-clip bg-attachment initial|inherit;`

## 3 Text(文本)格式

属性|描述
-|-
color|设置文本颜色
direction|设置文本方向。
letter-spacing|设置字符间距
line-height|设置行高
text-align|对齐元素中的文本
text-decoration|向文本添加修饰
text-indent|缩进元素中文本的首行
text-shadow|设置文本阴影
text-transform|控制元素中的字母
unicode-bidi|设置或返回文本是否被重写 
vertical-align|设置元素的垂直对齐
white-space|设置元素中空白的处理方式
word-spacing|设置字间距

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

属性|描述
-|-
height|设置元素的高度。
line-height|设置行高。
max-height|设置元素的最大高度。
max-width|设置元素的最大宽度。
min-height|设置元素的最小高度。
min-width|设置元素的最小宽度。
width|设置元素的宽度

## 9 Display(显示) 与 Visibility（可见性）

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

绝对定位的元素的位置相对于最近的已定位父元素，如果元素没有已定位的父元素，那么它的位置相对于`<html>`

与文档流无关，因此**不占据空间**。

### 10.5 sticky 定位

元素定位表现为在跨越特定阈值前为相对定位(relative)，之后为固定定位(fixed)。

## 11 CSS 布局 - Overflow

用于控制内容溢出元素框时显示的方式。

值|描述
-|-
visible|默认值。内容不会被修剪，会呈现在元素框之外。
hidden|内容会被修剪，并且其余内容是不可见的。
scroll|内容会被修剪，但是浏览器会显示滚动条以便查看其余的内容。
auto|如果内容被修剪，则浏览器会显示滚动条以便查看其余的内容。
inherit|规定应该从父元素继承 overflow 属性的值。

## 12 Float(浮动)

浮动可以理解为让某个div元素脱离标准流，漂浮在标准流之上，和标准流不是一个层次。

CSS 的 Float（浮动），会使元素向左或向右移动，其周围的元素也会重新排列。

一个浮动元素会尽量向左或向右移动，直到它的外边缘碰到包含框或另一个浮动框的边框为止。

浮动元素之后的元素将围绕它。

浮动元素之前的元素将不会受到影响。

例如：如果图像是右浮动，下面的文本流将环绕在它左边

`float:[left,right,none,inherit]`

### 12.1 清除浮动 - 使用 clear

元素浮动之后，周围的元素会重新排列，为了避免这种情况，使用 clear 属性。

clear 属性指定元素两侧不能出现浮动元素。

通俗表示：该元素在两侧浮动元素中独占一行

`clear:[left,right,both,none,inherit]`

## 13 CSS 布局 - 水平 & 垂直对齐

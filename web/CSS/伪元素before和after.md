#

一个`:`两个`:`

css3 为了区分伪类和伪元素两者，已经明确规定了**伪类**用`:`来表示，而**伪元素**则用`::`来表示。对于CSS2之前已有的伪元素，比如`:before`，单冒号和双冒号的写法作用是一样的。

## 1 基本

在 CSS 渲染层加入，不能通过js来操作

使用content 属性来指定要插入的内容，content必须有值，至少是空。

默认情况下，伪类元素的`display`是默认值`inline`，可以通过设置`display:block`来改变其显示。

content可取以下值:

1. `string`, 将会向元素内容中添加字符串
2. `attr()`,伪元素的内容跟主元素的某个属性值进行关联，其内容为主元素的某指定属性的值
3. `url()/uri()`, 引用外部资源，比如图片
4. `counter()`,调用计数器，可以不使用列表元素实现序号功能。

例如：

```css
p::before{
    /* ::before在<p>标签内，所有内容之前 */
    /* ::after同理 */
    content: "11111";
    }
```

## 2 实例

### 2.1 清除浮动

清除浮动方法有多种，现在最常用的就是下面这种方法，仅需要以下样式即可在元素尾部自动清除浮动

```css
.cf:after {
    clear: both;
}
```

### 2.2 模拟float:center的效果

float没有center这个取值，但是可以通过伪类来模拟实现。

### 2.3 做出各种图形效果

各种方向形状的三角形，六边形,带小三角的对话框

原理：<http://caibaojian.com/css-border-triangle.html>

### 2.4 超链接特效

<https://tympanus.net/Development/CreativeLinkEffects/>

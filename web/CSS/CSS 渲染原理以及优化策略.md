# CSS 渲染原理以及优化策略

<https://mp.weixin.qq.com/s?__biz=MzI4NDYxNTM0OQ==&mid=2247484761&idx=1&sn=6238b8343d9040e2c8d2274adccd3f66&chksm=ebf9f283dc8e7b9580293380f77d6458af960eccfea7709bd9f188bc3e20646c3fc0c03760e5&mpshare=1&scene=1&srcid=&sharer_sharetime=1586604482004&sharer_shareid=c6e16d86591fc6d7eac5c342d513ce8e#rd>

1. HTML Parser 生成的 DOM 树；
2. CSS Parser 生成的 Style Rules（CSSOM 树）；
3. 在这之后，DOM 树与 Style Rules 会生成一个新的对象，也就是我们常说的 Render Tree 渲染树，结合 Layout 绘制在屏幕上，从而展现出来。

## 1 CSS 特性

### 1.1 优先级

| 选择器                                             | 权重        |
| -------------------------------------------------- | ----------- |
| !important                                         | 1/0(无穷大) |
| 内联样式                                           | 1000        |
| ID                                                 | 100         |
| 伪类>类>属性                                       | 10          |
| 元素/伪元素                                        | 1           |
| 通配符/子选择器 > 继承 > 浏览器默认属性/相邻选择器 | 0           |

### 1.2 继承性

- 继承得到的样式的优先级是最低的，即使带有`!important`
- 在存在多个继承样式时，层级关系距离当前元素最近的父级元素的继承样式，具有相对最高的优先级。

哪些属性是可以继承?

- font-family、font-size、font-weight 等 f 开头的 CSS 样式。
- text-align、text-indent 等 t 开头的样式。
- color
- 等等

### 1.3 层叠性

...

## 2 CSS 语法解析过程

将 CSS 文件解析成 StyleSheet 对象，且每个对象都包含 CSS 规则。CSS 规则对象则包含选择器和声明对象，以及其他与 CSS 语法对应的对象。

`document.styleSheets`

## 3 CSS 选择器执行顺序

渲染引擎解析 CSS 选择器时是从右往左解析,因为父元素唯一，子元素不一定唯一

## 4 高效的 ComputedStyle

如果两个或多个 Element 的 ComputedStyle 不通过计算可以确认他们相等，那么这些 ComputedStyle 相等的 Elements 只会计算一次样式，其余的仅仅共享该 ComputedStyle。

如何高效共享 Computed Style ？

1. TagName 和 Class 属性必须一样。
2. 不能有 Style 属性。哪怕 Style 属性相等，他们也不共享。
3. 不能使用 Sibling selector，譬如: first-child、 :last-selector、 + selector。
4. mappedAttribute 必须相等。

## 5 CSS 书写顺序对性能有影响吗？

浏览器并不是一获取到 CSS 样式就立马开始解析，而是根据 CSS 样式的书写顺序将之按照 DOM 树的结构分布渲染样式，然后开始遍历每个树结点的 CSS 样式进行解析，此时的 CSS 样式的遍历顺序完全是按照之前的书写顺序。

例子：

```css
/* 当浏览器解析到 position 的时候突然发现该元素是绝对定位元素需要脱离文档流，而之前却是按照普通元素进行解析的，所以不得不重新渲染。 */
width: 150px;
height: 150px;
font-size: 24px;
position: absolute;
```

```css
/* 调整 */
position: absolute;
width: 150px;
height: 150px;
font-size: 24px;
```

### 5.1 在实际开发过程中，我们如何能保证自己的书写顺序是最优呢？

顺序大致如下：

1. 定位属性(position  display  float  left  top  right  bottom   overflow  clear   z-index)
2. 自身属性(width  height  padding  border  margin   background)
3. 文字样式
4. 文本属性
5. CSS3 中新增属性

当然，我们需要知道这个规则就够了，剩下的可以交给一些插件去做，譬如 CSSLint

## 6 优化策略

1. 使用 id selector 非常的高效
2. 避免深层次的css选择器
3. 不要使用 attribute selector
4. 将浏览器前缀置于前面，将标准样式属性置于最后
5. 遵守 CSSLint 规则
6. 减少 CSS 文档体积
   1. 移除空的 CSS 规则（Remove empty rules）。
   2. 值为 0 不需要单位。
   3. 使用缩写。
   4. 属性值为浮动小数 0.xx，可以省略小数点之前的 0。
   5. 不给 h1-h6 元素定义过多的样式。
7. CSS Will Change
   1. `WillChange` 属性，允许作者提前告知浏览器的默认样式，使用一个专用的属性来通知浏览器留意接下来的变化，从而优化和分配内存。
8. 不要使用 `@import`
   1. 使用 `@import` 引入 CSS 会进行懒加载，影响浏览器的并行下载。
9. 避免过分回流/重排（Reflow）
10. 高效利用 computedStyle
11. 减少昂贵属性
    1. box-shadow。
    2. border-radius。
    3. filter。
    4. :nth-child。
12. 依赖继承(如果某些属性可以继承，那么自然没有必要再写一遍。)
13. 遵守 CSS 顺序规则

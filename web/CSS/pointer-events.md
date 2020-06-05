#

指定在什么情况下 (如果有) 某个特定的图形元素可以成为鼠标事件的 target。

```css
/* Keyword values */
pointer-events: auto;
pointer-events: none;
pointer-events: visiblePainted; /* SVG only */
pointer-events: visibleFill;    /* SVG only */
pointer-events: visibleStroke;  /* SVG only */
pointer-events: visible;        /* SVG only */
pointer-events: painted;        /* SVG only */
pointer-events: fill;           /* SVG only */
pointer-events: stroke;         /* SVG only */
pointer-events: all;            /* SVG only */

/* Global values */
pointer-events: inherit;
pointer-events: initial;
pointer-events: unset;
```

## 值

auto
>默认，对于SVG内容，该值与visiblePainted效果相同

none
>不会成为鼠标事件的target。但是，当其后代元素的pointer-events属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在捕获或冒泡阶段触发父元素的事件侦听器。常应用为设置点击穿透

visiblePainted
>visibility为visible，1、指针在元素内部，且fill属性指定了none之外的值; 2、指针在元素边界上，且stroke属性指定了none之外的值

visibleFill
>visibility为visible，鼠标指针在元素内部时

visibleStroke
>visibility为visible，鼠标指针在元素边界时

visible
>visibility为visible，鼠标指针在元素内部或边界时,元素才会成为鼠标事件的目标，fill和stroke属性的值不影响事件处理。

painted
>visibility不影响事件处理。内部或边界

fill

stroke

all
>只有鼠标指针在元素内部或边界时,元素才会成为鼠标事件的目标，fill、stroke和visibility属性的值不影响事件处理。

## 应用

`pointer-events: none;`

- 设置事件穿透
- 滚动时设置该属性，从而提高的帧数


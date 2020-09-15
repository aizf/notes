---
title: CSS自定义变量
categories:
    - [css]
tags:
    - css
date: 2020/9/15
---

[MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Using_CSS_custom_properties)

CSS变量（也叫自定义属性或者级联变量），可以使变量值在整个文档中重复使用

通过`--`来声明，通过`var()` 来使用

自定义属性受级联的约束，并从其父级继承其值

## 基本用法

声明一个自定义属性，属性名需要以两个减号`--`开始

注意：属性名**大小写敏感**

例如：

```css
.abc {
    --main-bg-color: brown;
}

/* css变量拥有作用域，通常设置在根伪类:root下 */
:root {
    --main-bg-color: brown;
}
```

## 属性备用值

用 `var()` 函数可以定义多个备用值(fallback value)，当给定值未定义时将会用备用值替换。

```css
.two {
    color: var(--my-var, red); /* Red if --my-var is not defined */
}
```

## 无效变量

当浏览器遇到无效的 `var()` 时，会使用继承值或初始值代替。

`<p>This paragraph is initial black.</p>`

```css
:root { --text-color: 16px; }
p { color: blue; }
p { color: var(--text-color); }
```

浏览器会执行如下两个步骤：

1. 检查属性 `color` 是否为继承属性。如果是，但是 `<p>` 没有任何父元素定义了 `color` 属性。转到下一步。
2. 将该值设置为它的默认初始值，比如 `black`。

因此上边的`<p>`的颜色不是`blue`，而是默认的`black`

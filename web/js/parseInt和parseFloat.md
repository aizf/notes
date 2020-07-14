---
title: parseInt和parseFloat
tags:
    - js
---

## 用法

`parseInt(string, radix)`

`radix`可选，指定`string`进制，省略该参数或其值为 0，则为 10，该值介于 2 ~ 36 之间

`parseFloat(string)`

如果在解析过程中遇到了正负号（+ 或 -）、数字 (0-9)、小数点，或者科学记数法中的指数（e 或 E）**以外**的字符，则它**会忽略**该字符以及之后的所有字符，返回当前已经解析到的浮点数。同时参数字符串首位的空白符会被忽略。

`isNaN` 函数来判断 `parseInt`或`parseFloat` 的返回结果是否是 `NaN`

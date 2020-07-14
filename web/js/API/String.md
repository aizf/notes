---
title: js String
tags:
    - js
    - cheatsheet
---

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String>

## 方法

### String.fromCharCode(num1, ..., numN) 

返回由指定的**UTF-16**代码单元序列创建的字符串。

### String.fromCodePoint(num1[, ...[, numN]])

返回使用指定的代码点序列( **Unicode 编码**)创建的字符串。

### str.concat(string2, string3[, ..., stringN])

不影响原字符串

### str.startsWith(searchString[, position])

判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 true 或 false。

### str.endsWith(searchString[, length])

判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 true 或 false。

### str.match(regexp)

返回一个字符串匹配正则表达式的的结果。

参数:

- regexp
  - 如果传入一个非正则表达式对象，则会隐式地使用 new RegExp(obj) 将其转换为一个 RegExp 。如果你没有给出任何参数并直接使用match() 方法 ，你将会得到一 个包含空字符串的 Array ：[""] 。

返回值:

一个Array，其内容取决于global（g）标志的存在与否，如果未找到匹配则为null。

- 如果使用g标志，则将返回与完整正则表达式匹配的所有结果，但不会返回捕获组。
- 如果未使用g标志，则仅返回第一个完整匹配及其相关的捕获组（Array）。 在这种情况下，返回的项目将具有如下所述的其他属性。
- 附加属性
  - groups: 一个捕获组数组 或 undefined（如果没有定义命名捕获组）。
  - index: 匹配的结果的开始位置
  - input: 搜索的字符串.

如果正则表达式不包含 g 标志，`str.match()` 将返回与 `RegExp.exec()`. 相同的结果。

### str.search(regexp)

如果匹配成功，则 search() 返回正则表达式在字符串中首次匹配项的索引;否则，返回 -1。

### str.replace(regexp|substr, newSubStr|function)

#### newSubStr(使用字符串作为参数)

替换字符串可以插入下面的特殊变量名：

| 变量名 | 代表的值                                                                                                            |
| ------ | ------------------------------------------------------------------------------------------------------------------- |
| `$$`   | 插入一个 "$"。                                                                                                      |
| `$&`   | 插入匹配的子串。                                                                                                    |
| $`     | 插入当前匹配的子串左边的内容。                                                                                      |
| `$'`   | 插入当前匹配的子串右边的内容。                                                                                      |
| `$n`   | 假如第一个参数是 RegExp对象，并且 n 是个小于100的非负整数，那么插入第 n 个**括号**匹配的字符串。提示：索引是从1开始 |

#### function(指定一个函数作为参数)

| 变量名            | 代表的值                                                                                                                                                                              |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| match             | 匹配的子串。（对应于上述的$&。）                                                                                                                                                      |
| p1,p2, ...        | 假如replace()方法的第一个参数是一个RegExp 对象，则代表第n个括号匹配的字符串。（对应于上述的$1，$2等。）例如，如果是用 /(\a+)(\b+)/ 这个来匹配，p1 就是匹配的 \a+，p2 就是匹配的 \b+。 |
| offset            | 匹配到的子字符串在原字符串中的偏移量。（比如，如果原字符串是 'abcd'，匹配到的子字符串是 'bc'，那么这个参数将会是 1）                                                                  |
| string            | 被匹配的原字符串。                                                                                                                                                                    |
| NamedCaptureGroup | 命名捕获组匹配的对象                                                                                                                                                                  |

### str.padEnd(targetLength [, padString])

从字符串末尾填充到指定长度

```js
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```

### str.padStart(targetLength [, padString])

从字符串末尾填充到指定长度

```js
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

### str.substring(indexStart[, indexEnd])

相对于slice，不支持负数

### str.toLocaleLowerCase

返回调用字符串被转换为小写的格式。

```js
str.toLocaleLowerCase()
str.toLocaleLowerCase(locale) 
str.toLocaleLowerCase([locale, locale, ...])
```

参数:

- locale 可选
  - 参数 locale 指明要转换成小写格式的特定语言区域。 如果以一个数组 Array形式给出多个locales,  最合适的地区将被选出来应用（参见best available locale）。默认的locale是主机环境的当前区域(locale)设置。

### str.toLocaleUpperCase

### String.prototype.trim()

从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (space, tab, no-break space 等) 以及所有行终止符字符（如 LF，CR等）。

不影响原字符串本身

### String.prototype.trimStart() / String.prototype.trimLeft())

### String.prototype.trimEnd() / String.prototype.trimRight()

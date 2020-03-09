#

数据类型|例子|return
-|-|-
字符串|"foo".toString()|"foo"
数字|1.toString()|Uncaught SyntaxError: Invalid or unexpected token
布尔值|false.toString()|"false"
undefined|undefined.toString()|Uncaught TypeError: Cannot read property 'toString' of undefined
null|null.toString()|Uncaught TypeError: Cannot read property 'toString' of null
String|String.toString()|"function String() { [native code] }"
Number|Number.toString()|"function Number() { [native code] }"
Boolean|Boolean.toString()|"function Boolean() { [native code] }"
Array|Array.toString()|"function Array() { [native code] }"
Function|Function.toString()|"function Function() { [native code] }"
Date|Date.toString()|"function Date() { [native code] }"
RegExp|RegExp.toString()|"function RegExp() { [native code] }"
Error|Error.toString()|"function Error() { [native code] }"
Promise|Promise.toString()|"function Promise() { [native code] }"
Obejct|Object.toString()|"function Object() { [native code] }"
Math|Math.toString()|"[object Math]"

由于：

```js
Object.toString()//"function Object() { [native code] }"
Object.prototype.toString()//"[object Object]"
```

所以，

```js
Object.toString.call(Array)//"function Array() { [native code] }"
Object.toString.call(Array())
// Uncaught TypeError: Function.prototype.toString requires that 'this' be a Function

Object.prototype.toString.call(Array)//"[object Function]"
Object.prototype.toString.call(Array())//"[object Array]"
```

注意：

```js
Math.toString()
// "[object Math]"

Math.toString.call(Array)
// "[object Function]"

Math.toString.call(Array())
// "[object Array]"

```

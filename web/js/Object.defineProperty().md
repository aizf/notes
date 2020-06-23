#

<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty>

## 语法

`Object.defineProperty(obj, prop, descriptor)`

`obj`
>要定义属性的对象。

`prop`
>要定义或修改的属性的名称或 Symbol

`descriptor`
>要定义或修改的属性描述符。

### descriptor

`value`
>默认为 undefined。该属性对应的值。

`get`
>默认为 undefined。function(){return temp;}

`set`
>默认为 undefined。function(value){}

`configurable`
>默认为 false。表示对象的属性是否可以被删除，以及除 value 和 writable 特性外的其他特性是否可以被修改。

`enumerable`
>默认为 false。该属性是否是枚举属性

`writable`
>默认为 false。是否能被重新赋值

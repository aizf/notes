#

## 1 meta

可提供有关页面的元信息(meta-information),比如针对搜索引擎和更新频度的描述和关键词。

### 1.1 常用

设置编码格式

`<meta charset='utf-8'>`



设置关键字

`<meta name="keywords" content="音乐 播放器 H5">`



设置描述

`<meta name="description" content="用H5实现音乐播放器控件">`

`viewport` 可以让布局在移动端的浏览器上更好的显示

`width = device-width` 布局宽度等于设备宽度

`intial-scale`:页面首次被显示是可视区域的缩放级别，取值1.0则页面按实际尺寸显示，无任何缩放

`<meta name="viewport" content="width=device-width, initial-scale=1.0,maximum-scale=1.0, minimum-scale=1.0,user-scalable=no">`

IE 支持通过特定的 `<meta>` 标签来确定绘制当前页面所应该采用的 IE 版本。除非有强烈的特殊需求，否则最好是设置为`edge mode`，从而通知IE采用其所支持的最新的模式。

`<meta http-equiv="X-UA-Compatible" content="IE=Edge">`

## 2 link

`<link>` 标签定义文档与外部资源的关系。

此元素只能存在于 `head` 部分，不过它可出现任何次数。

不会阻塞dom tree的生成，但是会阻塞paint（也有可能是render tree）(阻止了css tree)

### 2.2 常用

浏览器左上角图标

`<link rel='icon' href='1.ico'>`

引入css文件路径

`<link rel='stylesheet' type='text/css' href=''>`

## 3 script

直接codeing js代码

`<script type='text/javascript'></script>`

引入js文件

`<script src=''></script>`

### 3.1 属性

#### `type`指示脚本的 MIME 类型

#### `async`规定异步执行脚本（仅适用于外部脚本）

`async`的执行，并不会按着script在页面中的顺序来执行，而是谁先加载完谁执行。

`DOMContentLoaded`事件的触发并不受`async`脚本加载的影响，在脚本加载完之前，就已经触发了`DOMContentLoaded`。

>`DOMContentLoaded` 事件：当初始的 HTML 文档被完全加载和解析完成之后，`DOMContentLoaded` 事件被触发，而无需等待样式表、图像和子框架的完成加载。

**应用场景**:脚本并不关心页面中的DOM元素,也不被依赖

#### `defer`规定是否对脚本执行进行延迟，直到页面加载为止

`defer`脚本会在文档渲染完毕后，DOMContentLoaded事件调用前执行。

**应用场景**:脚本代码依赖于页面中的DOM元素,或者被其他脚本文件依赖

`async`和`defer`，这两个属性使得script都不会阻塞DOM的渲染

#### `src`外部脚本文件的 URL

### 3.2 异步加载(defer、async、module)和预加载(preload、prefetch、dns-prefetch、preconnect 、prerender)

#### 3.2.1 module

- 默认使用了”use strict”模式
- 模块只会加载一次，无论前后你写了多少次。
- 不支持<!–const a = 1–>注释。
- module有自己的词法作用域，比如定义一个 var a = 1，并不会创建一个全局变量，因此你并不能通过window.a 访问到它的值。

#### 3.2.2 preload

preload翻译过来就是预加载，一旦启用后便会告知浏览器应该尽快的加载某个资源，如果提取的资源3s内未在当前使用，在谷歌开发工具将会触发警告消息

#### 3.2.3 prefetch

简而言之预提取就是在我们页面加载完成后，在带宽可用的情况下，加载用户下一步期待的页面资源

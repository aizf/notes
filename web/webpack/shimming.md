---
title: webpack shimming
tags:
    - js
    - webpack
date: 2019/11/3
---

有两种应用场景：

- 设置全局变量
- polyfill 浏览器功能

## shimming 全局变量

添加`ProvidePlugin`

```js
plugins: [
    new webpack.ProvidePlugin({
        _: 'lodash'
    })
]
```

### 暴露某个模块中单个值

```js
plugins: [
    new webpack.ProvidePlugin({
        // _: 'lodash',
        join: ['lodash', 'join']
    })
]
```

### 通过使用 `imports-loader` 覆写 `this`

当模块运行在 CommonJS 环境下， `this` 指向的是 `module.exports`。

### 使用 `exports-loader`，将一个全局变量作为一个普通的模块来导出

```js
// globals.js
var file = 'blah.txt';
var helpers = {
    test: function() { console.log('test something'); },
    parse: function() { console.log('parse something'); }
}
```

```js
// webpack.config.js
{
    test: require.resolve('globals.js'),
    use: 'exports-loader?file,parse=helpers.parse'
}
```

之后可以从 `entry` 入口文件中(即 `src/index.js`)，我们能 `import { file, parse } from './globals.js';` ，然后一切将顺利进行。

## 加载 polyfills

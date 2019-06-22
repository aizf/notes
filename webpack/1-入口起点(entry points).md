#

## 单个入口（简写）语法

`entry: string|Array<string>`

```js
const config = {
  entry: './path/to/my/entry/file.js'
};

module.exports = config;
```

## 对象语法

用于将关注点(concern)从环境(environment)、构建目标(build target)、运行时(runtime)中分离。然后使用专门的工具（如 webpack-merge）将它们合并。

`entry: {[entryChunkName: string]: string|Array<string>}`

```js
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```

## 常见场景

### 分离 应用程序(app) 和 第三方库(vendor) 入口

```js
const config = {
  entry: {
    app: './src/app.js',
    vendors: './src/vendors.js'
  }
};
```

### 多页面应用程序

```js
const config = {
  entry: {
    pageOne: './src/pageOne/index.js',
    pageTwo: './src/pageTwo/index.js',
    pageThree: './src/pageThree/index.js'
  }
};
```

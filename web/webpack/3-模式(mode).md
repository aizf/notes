---
title: webpack mode
tags:
    - webpack
---

## 用法

只在配置中提供 mode 选项：

```js
module.exports = {
  mode: 'production'
};
```

或者从 CLI 参数中传递：

`webpack --mode=production`

支持以下字符串值：

选项|描述
-|-
development|会将 process.env.NODE_ENV 的值设为 development。启用 NamedChunksPlugin 和 NamedModulesPlugin。
production|会将 process.env.NODE_ENV 的值设为 production。启用 FlagDependencyUsagePlugin, FlagIncludedChunksPlugin, ModuleConcatenationPlugin, NoEmitOnErrorsPlugin, OccurrenceOrderPlugin, SideEffectsFlagPlugin 和 UglifyJsPlugin.

**只设置 NODE_ENV，则不会自动设置 mode。**

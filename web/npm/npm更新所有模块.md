---
title: npm更新所有模块
categories:
    - [js,npm]
tags:
    - js
    - npm
date: 2020/8/11
---

在`npm@2.6.1`，`npm update`只会检测最上级的包

`npm@5.0.0`之后，`npm update`会改变package.json，除非指定`--no-save`

## 升级当前仓库的模块(local packages)

```shell
# 切到仓库根目录
cd /path/to/project

# 展示所有需要升级的包
npm outdated

# 展示所有需要升级的包(按照package.json的规则，升级到最新版本)
npm update
```

注：`npm update`会按照package.json的规则，升级到最新版本，比如package.json中的写的是`"package": "^1.0.0"`，那么只会升级到`"package": "^1.x.x"`

## 升级全局模块

```shell
# 展示过时的包
npm outdated -g --depth=0

# 只升级一个
npm update -g <package_name>

# 升级所有的
npm update -g
```

## 参考

<https://docs.npmjs.com/updating-packages-downloaded-from-the-registry>

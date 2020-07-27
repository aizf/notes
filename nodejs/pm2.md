---
title: pm2
categories:
    - nodejs
tags:
    - js
    - nodejs
date: 2020/7/27
---

PM2是一个守护进程管理器，它将帮助您管理和保持应用程序在线。

<https://pm2.keymetrics.io/docs/usage/quick-start/>

## 安装

```sh
npm install pm2 -g
# or
npm install pm2 -D
```

## 运行

```sh
pm2 start app.js
```

可选参数：

- `--name <app_name>`，指定一个名字
- `--watch`，热更新
- `--max-memory-restart <200MB>`，设置应用程序重新加载的内存阈值
- `--log <log_path>`，指定log文件位置
- `-- arg1 arg2 arg3`，额外参数
- `--restart-delay <delay in ms>`，设置自动重新启动之间的延迟
- `--time`，为日志添加时间前缀
- `--no-autorestart`，不自动重启
- `--cron <cron_pattern>`，为强制重新启动指定cron
- `--no-daemon`，前台模式
- `-i`，集群模式

## 管理进程

`pm2 restart|reload|stop|delete app_name|all|id`

## 集群模式(Cluster mode)

`pm2 start app.js -i max`
>`0`和`max`将使用LB启动最大进程，具体取决于可用的cpu

`pm2 scale app +3`
>增加三个workers

`pm2 scale app 2`
>调整workers数量至2

## 显示信息

`pm2 [list|ls|status]`
>展示所有的进程

`pm2 logs`
>显示进程的logs

## Ecosystem File

<https://pm2.keymetrics.io/docs/usage/application-declaration/#ecosystem-file>

## 热升级

1. `npm install pm2@latest -g`
2. `pm2 update`

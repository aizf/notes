---
title: git tag
tags:
    - git
---

`git tag <name>`
>打标签

>例如： `git tag v1.0`

`git tag`
>查看所有标签，注意，标签不是按时间顺序列出，而是**按字母排序**的。

`git show <tagname>`
>查看标签信息

>如果这个commit既出现在master分支，又出现在dev分支，那么在这两个分支上**都可以**看到这个标签。

`git tag <name> <commit>`
>指定`commit`打标签

`git tag -a v0.1 -m "version 0.1 released" 1094adb`
>创建带有说明的标签，用`-a`指定标签名，`-m`指定说明文字

`git tag -d <name>`
>删除tag

`git push origin <tagname>`
>推送某个标签到远程,因为创建的标签都只存储在本地，不会自动推送到远程

`git push origin --tags`
>一次性推送全部

`git push origin :refs/tags/<tagname>`
>可以删除一个远程标签

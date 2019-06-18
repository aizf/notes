#

需要找出来到底哪个规则写错了，可以用git check-ignore命令检查：

```bash
$ git check-ignore -v App.class
.gitignore:3:*.class App.class
```

Git会告诉我们，.gitignore的第3行规则忽略了该文件，于是我们就可以知道应该修订哪个规则。

#

## 1 name email

```bash
git config --global user.name "Your Name"
git config --global user.email "email@example.com"
```

## 2 general

`git init [dir]`

`git add <. | file | dir>`

`git commit -m xxx`

`git rebase -i HEAD~[number_of_commits]`
>之后将`pick`改为`s, squash`可将此`commit`合并

需要找出来到底哪个规则写错了，可以用`git check-ignore`命令检查：

```bash
$ git check-ignore -v App.class
.gitignore:3:*.class App.class
```

Git会告诉我们，.gitignore的第3行规则忽略了该文件，于是我们就可以知道应该修订哪个规则。

## 3 version control

### 3.1 修改

`git status`
>**工作区**的状态

`git diff <commit> -- <file>`
>显示的格式正是Unix通用的diff格式,能看看具体修改了什么内容

`git log --[graph | pretty=oneline]`
>历史记录

`git reset`
>变更版本

例如：回退到上一个版本

`git reset --hard HEAD^`

回到指定版本

```bash
$ git reset --hard <commit>
HEAD is now at 83b0afe append GPL

# 版本号没必要写全，前几位就可以了，Git会自动去找。当然也不能只写前一两位，因为Git可能会找到多个版本号，就无法确定是哪一个了。
```

在Git中，用HEAD表示当前版本，上一个版本就是`HEAD^`，上上一个版本就是`HEAD^^`，当然往上100个版本写100个^比较容易数不过来，所以写成`HEAD~100`。

`git reflog`
>记录历史命令

`git checkout -- <file>`
>discard changes in working directory,回到最近一次`git commit`或`git add`时的状态

`git reset HEAD <file>`
>可以把暂存区的修改撤销掉（unstage），重新放回工作区

最新版本的git已经使用`git restore` 代替了原来的`reset`和`checkout`命令了

`git restore <file>`
>to discard changes in working directory

`git restore --staged readme`
>to unstage

### 3.2 删除

删除文件，工作区和版本库就不一致了，`git status`命令会立刻告诉你哪些文件被删除了：

```bash
$ git status
On branch master
Changes not staged for commit:
  (use "git add/rm <file>..." to update what will be committed)
  (use "git checkout -- <file>..." to discard changes in working directory)

    deleted:    test.txt

no changes added to commit (use "git add" and/or "git commit -a")
```

#### 确定删除

`git rm <file>`

`git commit -m xxx`

#### 恢复删除

`git checkout -- <file>`
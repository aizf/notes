## 容器生命周期管理
* run 创建一个新的容器并运行一个命令
* rm 删除不需要的容器
* stop 停止
* start 启动
* restart 重启
* docker images 列出本地主机上的镜像
* kill 杀掉一个运行中的容器
* pause 暂停容器中所有的进程。
* unpause 恢复容器中所有的进程
* create 创建一个新的容器但不启动它
* exec 在运行的容器中执行命令

## 容器操作
* ps        列出容器
* logs  获取容器的日志
* top 查看容器中运行的进程信息，支持 ps 命令参数。
* port 列出指定的容器的端口映射，或者查找将PRIVATE_PORT NAT到面向公众的端口。
* attach 连接到正在运行中的容器。
* events  从服务器获取实时事件
* inspect   获取容器/镜像的元数据
* wait      阻塞运行直到容器停止，然后打印出它的退出代码。
* export    将文件系统作为一个tar归档文件导出到STDOUT。

## [OPTIONS]
- -P :是容器内部端口**随机**映射到主机的高端口。
- -p : 是容器内部端口**绑定**到指定的主机端口。

## 本地镜像管理
- images  列出本地镜像。
- rmi  删除本地一个或多少镜像。
- tag  标记本地镜像，将其归入某一仓库。
- build 命令用于使用 Dockerfile 创建镜像。
- save 将指定镜像保存成 tar 归档文件
- import  从归档文件中创建镜像。
- load  导入使用 docker save 命令导出的镜像。
- history  查看指定镜像的创建历史。

## 容器rootfs命令
- commit 从容器创建一个新的镜像
- cp 用于容器与主机之间的数据拷贝
- diff 检查容器里文件结构的更改

## 镜像仓库
- search : 从Docker Hub查找镜像
- login : 登陆到一个Docker镜像仓库
- logout : 登出一个Docker镜像仓库
- pull : 从镜像仓库中拉取或者更新指定镜像
- push : 将本地的镜像上传到镜像仓库,要先登陆到镜像仓库

## info|version
- info : 显示 Docker 系统信息，包括镜像和容器数
- version :显示 Docker 版本信息


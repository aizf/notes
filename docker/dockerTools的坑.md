#

## 目录挂载(`-v`)

window中，docker会将`c:...`中的`:`误读，应根据共享文件夹，写成`/c/`

## 端口映射(`-p`)

端口会映射到打开`Docker Quickstart Terminal`时显示的IP地址，即**docker虚拟机的IP**，而不是`localhost`

## 示例

启动

```bat
docker run  --name localserver --rm -v /c/Users/air/Documents/GitHub/vback_sys:/usr/share/nginx/html:ro -p 80:80 -d nginx:stable-alpine
```

浏览器输入

`http://192.168.99.100/:80`

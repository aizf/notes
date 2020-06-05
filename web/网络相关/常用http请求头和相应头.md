#

<https://juejin.im/post/5c17d3cd5188250d9e604628>

## 请求头

### Accept

`*/*`   代表浏览器可以处理所有类型

### Accept-Encoding

`gzip, deflate`:自己接收的编码方法

### Accept-Language

申明自己接收的语言

### Connection

`keep-alive`:用于传输HTTP数据的TCP连接不会关闭

`close`:用于传输HTTP数据的TCP连接会关闭,再次发送Request，需要重新建立TCP连接。

### Host

`www.baidu.com`:用于指定被请求资源的Internet主机和端口号

### Referer

告诉服务器我是从哪个页面链接过来的

### User-Agent

告诉HTTP服务器， 客户端使用的操作系统和浏览器的名称和版本。

### Cache-Control

`private`: 默认为private  响应只能够作为私有的缓存

`public`:多级缓存

`must-revalidate`:必须到服务器端去验证它是不是仍然是最新的

`no-cache`:不设置强缓存，设置弱缓存

`max-age=10`:最大的有效时间,单位是秒

`no-store`:强缓存,弱缓存都不设置

### Cookie

用来存储一些用户信息以便让服务器辨别用户身份

### Range（用于断点续传）

`bytes=0-5`:指定第一个字节的位置和最后一个字节的位置。用于告诉服务器自己想取对象的哪部分。

## 响应头

### Cache-Control

`private` 默认为private

`public` 浏览器和缓存服务器都可以缓存页面信息。

`Cachemust-revalidate`  对于客户机的每次请求，代理服务器必须想服务器验证缓存是否过时。

`no-cache`  浏览器和缓存服务器都不应该缓存页面信息。

`max-age=10`  是通知浏览器10秒之内不要烦我，自己从缓冲区中刷新。

`no-store` 请求和响应的信息都不应该被存储在对方的磁盘系统中。


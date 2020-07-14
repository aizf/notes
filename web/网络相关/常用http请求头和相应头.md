---
title: 常用http请求头和相应头
tags:
    - http
---

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

强缓存

`private` 默认为private

`public` 浏览器和缓存服务器都可以缓存页面信息。

`Cachemust-revalidate`  对于客户机的每次请求，代理服务器必须想服务器验证缓存是否过时。

`no-cache`  浏览器和缓存服务器都不应该缓存页面信息。

`max-age=10`  是通知浏览器10秒之内不要烦我，自己从缓冲区中刷新。

`no-store` 请求和响应的信息都不应该被存储在对方的磁盘系统中。

### Expires

`Sun, 1 Jan 2000 01:00:00 GMT`: 强缓存,服务器时间

### Last-Modified

`Dec, 26 Dec 2015 17:30:00 GMT`: 协商缓存,所请求的对象的最后修改日期

### Etag

`737060cd8c284d8af7ad3082f209582d`：协商缓存

### Content-Type

告诉客户端，资源文件的类型，还有字符编码

`charset=UTF-8`: 字符编码

`boundary`：多用于上传文件时使用，用于分割数据；

`application/x-www-form-urlencoded`: 最常见的 POST 提交数据的方式,key 和 val 都进行了 URL 转码

`multipart/form-data`: 常见的 POST 数据提交的方式,一般用来上传文件

`application/json`: 消息主体是序列化后的 JSON 字符串

`text/xml`:  HTTP 作为传输协议，XML 作为编码方式

`text/plain`

`text/html`

`text/css`

`text/javascript`

### Content-Encoding

`gzip`

### Date

`Tue, 03 Apr 2018 03:52:28 GMT`: 服务端发送资源时的**服务器时间**，GMT是格林尼治所在地的标准时间。http协议中发送的时间都是GMT的

### Server

`Tengine/1.4.6`  这个是服务器和相对应的版本

### Transfer-Encoding

`chunked`: 告诉客户端，服务器发送的资源的方式是分块发送的。一般分块发送的资源都是服务器动态生成的，在发送时还不知道发送资源的大小，所以采用分块发送，每一块都是独立的，独立的块都能标示自己的长度，最后一块是0长度的，当客户端读到这个0长度的块时，就可以确定资源已经传输完了。

### Connection

`keep-alive`

### Refresh

`5; url=http://baidu.com`: 用于重定向，或者当一个新的资源被创建时。默认会在5秒后刷新重定向。

### Access-Control-Allow-*

`Access-Control-Allow-Origin: *`: 所有网站可以跨域资源共享,且`Access-Control-Allow-Credentials`就不能为true

`Access-Control-Allow-Origin: www.baidu.com`

`Access-Control-Allow-Methods`: GET,POST,PUT,DELETE  允许哪些方法来访问

`Access-Control-Allow-Credentials`: 是否允许发送cookie。

### Content-Range

`bytes 0-5/7877`: 指定整个实体中的一部分的插入位置，他也指示了整个实体的长度。在服务器向客户返回一个部分响应，它必须描述响应覆盖的范围和整个实体长度。

---
title: Cookie、Session、Token、JWT
tags:
    - cookie
    - session
    - token
    - jwt
---

<https://juejin.im/post/5e055d9ef265da33997a42cc>

<https://juejin.im/post/5e718ecc6fb9a07cda098c2d>

<http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html>

## 认证（Authentication）：验证当前用户的身份

- 用户名密码登录
- 邮箱发送登录链接
- 手机号接收验证码

## 授权（Authorization）：用户授予第三方应用访问该用户某些资源的权限

- APP 会询问是否允许授予权限
- 小程序会询问是否允许授予权限
- 实现授权的方式有：cookie、session、token、OAuth

## 凭证（Credentials）：实现认证和授权的前提是需要一种媒介（证书） 来标记访问者的身份

- 在互联网应用中，一般网站（如掘金）会有两种模式，**游客模式**和**登录模式**。游客模式下，可以正常浏览网站上面的文章，一旦想要点赞/收藏/分享文章，就需要登录或者注册账号。当用户登录成功后，服务器会给该用户使用的浏览器颁发一个**令牌（token）**，这个令牌用来表明你的身份，每次浏览器发送请求时会带上这个令牌，就可以使用游客模式下无法使用的功能。

## 跨站和跨域

同站(same-site)/跨站(cross-site)」和第一方(first-party)/第三方(third-party)是等价的。

同源策略的同源(same-origin)是指两个 URL 的协议/主机名/端口一致。

cookie中的「同站」判断就比较宽松：只要两个 URL 的 eTLD+1 相同即可，不需要考虑协议和端口。eTLD+1 则表示，有效顶级域名+二级域名

举几个例子:

www.taobao.com 和 www.baidu.com 是跨站，www.a.taobao.com 和 www.b.taobao.com 是同站，a.github.io 和 b.github.io 是跨站(注意是跨站)。

## Cookie

- HTTP 是无状态的协议（对于事务处理没有记忆能力，每次客户端和服务端会话完成时，服务端不会保存任何会话信息）
- cookie 存储在客户端
- cookie 是不可跨域的：每个 cookie 都会绑定单一的域名，无法在别的域名下获取使用，一级域名和二级域名之间是允许共享使用的（靠的是 domain）。

### 原理

第一次访问网站的时候，浏览器发出请求，服务器响应请求后，会将cookie放入到响应请求中，在浏览器第二次发请求的时候，会把cookie带过去，服务端会辨别用户身份，当然服务器也可以修改cookie内容

### cookie 的属性

| 属性       | 说明                                                                                                                                                                                                                              |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Name=Value | 键值对，设置 Cookie 的名称及相对应的值，都必须是字符串类型<br/>1. 如果值为 Unicode 字符，需要为字符编码。<br/>2. 如果值为二进制数据，则需要使用 BASE64 编码。                                                                               |
| Domain     | 指定 cookie 所属域名，默认是当前域名                                                                                                                                                                                              |
| Path       | 指定 cookie 在哪个路径（路由）下生效，默认是 '/'。如果设置为 /abc，则只有 /abc 下的路由可以访问到该 cookie，如：/abc/read。                                                                                                       |
| Max-Age     | cookie 失效的时间，单位秒。如果为整数，则该 cookie 在 maxAge 秒后失效。如果为负数，该 cookie 为临时 cookie ，关闭浏览器即失效，浏览器也不会以任何形式保存该 cookie 。如果为 0，表示删除该 cookie 。默认为 -1。- 比 expires 好用。 |
| Expires    | 过期时间，在设置的某个时间点后该 cookie 就会失效。一般浏览器的 cookie 都是默认储存的，当关闭浏览器结束这个会话的时候，这个 cookie 也就会被删除                                                                                    |
| Secure     | 该 cookie 是否仅被使用安全协议传输。安全协议有 HTTPS，SSL等，在网络上传输数据之前先将数据加密。默认为false。当 secure 值为 true 时，cookie 在 HTTP 中是无效，在 HTTPS 中才有效。                                                  |
| HttpOnly   | 如果给某个 cookie 设置了 httpOnly 属性，则无法通过 JS 脚本 读取到该 cookie 的信息，但还是能通过 Application 中手动修改 cookie，所以只是在一定程度上可以防止 XSS 攻击，不是绝对的安全                                              |
| SameSite   | **1.** Strict 仅允许一方请求携带 Cookie，即浏览器将只发送相同站点请求的 Cookie，即当前网页 URL 与请求目标 URL 完全一致。<br/>**2.** Lax 允许部分第三方请求携带 Cookie<br/>**3.** None 无论是否跨站都会发送 Cookie                      |

## Session

- session 是另一种记录服务器和客户端会话状态的机制
- session 是基于 cookie 实现的，session 存储在服务器端，sessionId 会被存储到客户端的cookie 中

### 认证流程

1. 用户第一次请求服务器的时候，创建对应的 Session
2. 请求返回时将此 Session 的唯一标识信息 SessionID 返回给浏览器
3. 浏览器接收到服务器返回的 SessionID 信息后，会将此信息存入到 Cookie 中，同时 Cookie 记录此 SessionID 属于哪个域名
4. 当用户第二次访问服务器的时候，请求会自动判断此域名下是否存在 Cookie 信息，如果存在自动将 Cookie 信息也发送给服务端，服务端会从 Cookie 中获取 SessionID，再根据 SessionID 查找对应的 Session 信息，如果没有找到说明用户没有登录或者登录失效，如果找到 Session 证明用户已经登录可执行后面操作。

根据以上流程可知，SessionID 是连接 Cookie 和 Session 的一道桥梁，大部分系统也是根据此原理来验证用户登录状态。

## Token（令牌）

访问资源接口（API）时所需要的资源凭证

### 简单 token 的组成

- uid(用户唯一的身份标识)
- time(当前时间的时间戳)
- sign（签名，token 的前几位以哈希算法压缩成的一定长度的十六进制字符串）

### 特点

- 服务端无状态化、可扩展性好（服务端不用存放 token 数据。用解析 token 的计算时间换取 session 的存储空间，从而减轻服务器的压力）
- 支持移动端设备
- 安全
- 支持跨程序调用（完全由应用管理，所以它可以避开同源策略）

### 验证流程

1. 客户端使用用户名跟密码请求登录
2. 服务端收到请求，去验证用户名与密码
3. 验证成功后，服务端会签发一个 token 并把这个 token 发送给客户端
4. 客户端收到 token 以后，会把它存储起来，比如放在 cookie 里或者 localStorage 里
5. 客户端每次向服务端请求资源的时候需要带着服务端签发的 token
6. 服务端收到请求，然后去验证客户端请求里面带着的 token ，如果验证成功，就向客户端返回请求的数据

### Refresh Token

专用于刷新 access token 的 token。如果没有 refresh token，也可以刷新 access token，但每次刷新都要用户输入登录用户名与密码

### Token 和 Session 的区别

- 服务端有无状态
- 身份认证 Token 安全性比 Session 好，因为每一个请求都有签名还能防止监听以及重放攻击
- 第三方共享

## JWT

JSON Web Token（简称 JWT）是目前最流行的跨域认证解决方案。是一种认证授权机制

<http://www.ruanyifeng.com/blog/2018/07/json_web_token-tutorial.html>

JWT是一个很长的字符串，中间用点（.）分隔成三个部分：

- Header（头部）
- Payload（负载）
- Signature（签名）

### 认证流程

1. 用户输入用户名/密码登录，服务端认证成功后，会返回给客户端一个 JWT
2. 客户端将 token 保存到本地（通常使用 localstorage，也可以使用 cookie）
3. 当用户希望访问一个受保护的路由或者资源的时候，需要请求头的 Authorization 字段中使用Bearer 模式添加 JWT，其内容看起来是这样：`Authorization: Bearer <token>`

## Token 和 JWT 的区别

相同：

- 都是访问资源的令牌
- 都可以记录用户的信息
- 都是使服务端无状态化
- 都是只有验证成功后，客户端才能访问服务端上受保护的资源

不同：

- Token：服务端验证客户端发送过来的 Token 时，还需要查询数据库获取用户信息，然后验证 Token 是否有效。
- JWT： 将 Token 和 Payload 加密后存储于客户端，服务端只需要使用密钥解密进行校验（校验也是 JWT 自己实现的）即可，不需要查询或者减少查询数据库，因为 JWT 自包含了用户信息和加密的数据。

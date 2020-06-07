#

<https://juejin.im/post/5ed9c9ea51882542f346fd49>

## 1 Cookies

`document.cookie`

### 1.1 Cookie的作用

- 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
- 个性化设置（如用户自定义设置、主题等）
- 浏览器行为跟踪（如跟踪分析用户行为等）

### 1.2 Cookie 的优点

1. 控制cookie的生命期，使之不会永远有效。
2. 极高的扩展性和可用性
3. 帮助服务端承担了很大的压力

### 1.3 Cookie 的缺点

- 数量(分浏览器)和长度的限制。每个cookie长度不能超过4KB
- 安全性，如果cookie被人拦截了，那人就可以取得所有的session信息，原样转发cookie就可以达到目的
- 增加请求大小
- 解析也很复杂

### 1.4 和`session`的区别

1. cookie数据存放在客户端，session数据放在服务器上。
2. cookie不是很安全，别人可以分析存放在本地的cookie并进行cookie欺骗，考虑到安全应当使用session。
3. session会在一定时间内保存在服务器上，当访问增多，会比较占用你服务器的性能，考虑性能应当使用cookie。
4. 不同浏览器对cookie的数据大小限制不同，个数限制也不相同。
5. 可以考虑将登陆信息等重要信息存放为session，不重要的信息可以放在cookie中。

### 1.5 SameSite属性

Chrome 51 开始，浏览器的 Cookie 新增加了一个`SameSite`属性，用来防止 CSRF 攻击和用户追踪。

为了恶意网站的Cookie请求的攻击，表单一般都带有一个随机 token，告诉服务器这是真实请求。

这种第三方网站引导发出的 Cookie，就称为第三方 Cookie。它除了用于 CSRF 攻击，还可以用于用户追踪。

Cookie 的SameSite属性用来限制第三方 Cookie，从而减少安全风险。

它可以设置三个值。

#### Strict

完全禁止第三方 Cookie，可能造成非常不好的用户体验，比如跳转后总是未登陆状态

#### Lax

大多数情况也是不发送第三方 Cookie，但是导航到目标网址的 Get 请求除外。

`Set-Cookie: CookieName=CookieValue; SameSite=Lax;`

导航到目标网址的 GET 请求，只包括三种情况：链接，预加载请求，GET 表单。

#### None

### 1.6 token

Token 是在服务端产生的。如果前端使用用户名/密码向服务端请求认证，服务端认证成功，那么在服务端会返回 Token 给前端。前端可以在每次请求的时候带上 Token 证明自己的合法地位

- Token 完全由应用管理，所以它可以避开同源策略
- 使用Token 可以避免 CSRF 攻击
- Token 可以是无状态的，可以在多个服务间共享

## 2 sessionStorage 和 localStorage

### 2.1 sessionStorage

- 容量大小约为5M左右,该方式的生命周期为**关闭浏览器窗口**为止
- 同源的同窗口,即使刷新页面或进入同源另一页面，数据仍然存在。

实质上是保存在session对象

### 2.2 localStorage

- 容量大小约为20M左右,可以用多个iframe方式使用多个域名来突破限制
- 存储的数据不会随着用户浏览时会话过期而过期
- 但会应用户的请求而删除
- 浏览器也因为存储空间的限制或安全原因删除它们
- 而且类型存储的数据可以同一个浏览器的**多个窗口共享**

注意点:**只能存储字符串**，如果是json对象的话,可以将对象JSON.stringify() 编码后存储

### 2.3 方法详解

- `setItem(key, value)` 设置存储内容,注意[错误处理](https://iammapping.com/the-other-ways-to-use-localstorage/)
- `getItem(key)` 读取存储内容
- `removeItem(key)` 删除键值为key的存储内容
- `clear()` 清空所有存储内容
- `window.addEventListener('storage', callback)`响应变化

一旦键名设置成功，则不允许修改，也不能重复，若重复，会覆盖原有的键名值

### 2.4 设置过期时间

1. 存储的值加一个时间戳，下次取值时验证时间戳。
2. 扩展Storage

## IndexedDB

允许储存大量数据，提供查找接口，还能建立索引。不属于关系型数据库，更接近 NoSQL 数据库

特点：

1. 键值对储存。 IndexedDB 内部采用对象仓库（object store）存放数据。**所有类型的数据都可以直接存入**，包括 JavaScript 对象。对象仓库中，数据以"键值对"的形式保存，每一个数据记录都有对应的主键，主键是独一无二的，不能有重复，否则会抛出一个错误。

2. 异步。 IndexedDB 操作时不会锁死浏览器，用户依然可以进行其他操作，这与 LocalStorage 形成对比，**后者的操作是同步的**。异步设计是为了防止大量数据的读写，拖慢网页的表现。

3. 支持事务。 IndexedDB 支持事务（transaction），这意味着一系列操作步骤之中，只要有一步失败，整个事务就都取消，数据库回滚到事务发生之前的状态，不存在只改写一部分数据的情况。

4. 同源限制 IndexedDB **受到同源限制**，每一个数据库对应创建它的域名。网页只能访问自身域名下的数据库，而不能访问跨域的数据库。

5. 储存空间大 IndexedDB 的储存空间比 LocalStorage 大得多，**一般来说不少于 250MB，甚至没有上限**。

6. 支持二进制储存。 IndexedDB 不仅可以储存字符串，还可以储存二进制数据（ArrayBuffer 对象和 Blob 对象）。

其他： <http://www.ruanyifeng.com/blog/2018/07/indexeddb.html>

## Web SQL

当前只有谷歌支持，ie和火狐均不支持。

页面刷新后该库就不存在了。

与关系数据库的概念比较相似。

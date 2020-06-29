#

## 初始化

### node

<http://nodejs.cn/api/url.html#url_url>

```js
// const url = require('url');

const myURL = new URL('https://example.org/foo#bar');
console.log(myURL.hash);
// #bar
myURL.hash = 'baz';
console.log(myURL.href);
// https://example.org/foo#baz

url.host
url.hostname
url.origin
// ...
```

### 浏览器

#### 1

`url = new URL(url, [base])`
>如果 url 是绝对URL，则将忽略 base

```js
const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname); // "www.example.com"
console.log(url.pathname); // "/cats"
url.hash = 'tabby';
console.log(url.href); // "http://www.example.com/cats#tabby"

const url1 = new URL("https://some.site/?id=123&cc=2&id=1");
console.log(url1.searchParams.get("id")); // "123"
```

#### 2

```js
var url = 'https://www.baidu.com/#/?name=baidu'
var tag = window.document.createElement('a')
tag.href = url
console.log(tag.origin)
console.log(tag.hash)
```

```js
location

Object.keys(location)
["replace", "href", "ancestorOrigins", "origin", "protocol", "host", "hostname", "port", "pathname", "search", "hash", "assign", "reload", "toString"]
```

## 获取search

```js
const url = new URL("https://some.site/?id=123&cc=2&id=1");
console.log(url.searchParams.get("id"));    // "123"
console.log(url.search);                    // "?id=123&cc=2&id=1"
console.log(Object.fromEntries(url.searchParams));    // {id: "1", cc: "2"}
```

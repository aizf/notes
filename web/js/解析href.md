#

## node

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

## 浏览器

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

# AJAX(Asynchronous JavaScript and XML)

AJAX 是一种在无需重新加载整个网页的情况下，能够更新部分网页的技术。

## 1 创建 XMLHttpRequest 对象

XMLHttpRequest 是 AJAX 的基础,XMLHttpRequest 对象用于和服务器交换数据。

所有现代浏览器均支持 XMLHttpRequest 对象（IE5 和 IE6 使用 ActiveXObject）。

```js
var request;
if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        request = new XMLHttpRequest();
    }
else
    {// code for IE6, IE5
        request = new ActiveXObject("Microsoft.XMLHTTP");
    }
```

## 2 向服务器发送请求

```js
// GET
request.open("GET","test1.txt",true);
request.send();

// POST
request.open("POST","ajax_test.asp",true);
request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
request.send("fname=Bill&lname=Gates");
```

`open(method,url,async)`

规定请求的类型、URL 以及是否异步处理请求。

- method：请求的类型；GET 或 POST
- url：文件在服务器上的位置
- async：true（异步）或 false（同步）

`send(string)`

将请求发送到服务器。

string：仅用于 POST 请求

`setRequestHeader(header,value)`

向请求添加 HTTP 头。

- header: 规定头的名称
- value: 规定头的值

## 3 服务器响应

`responseText`

获得字符串形式的响应数据。如果来自服务器的响应并非 XML，请使用 responseText 属性。

```js
document.getElementById("myDiv").innerHTML=request.responseText;
```

`responseXML`

获得 XML 形式的响应数据。如果来自服务器的响应是 XML，而且需要作为 XML 对象进行解析，请使用 responseXML 属性。

## 4 onreadystatechange 事件

每当 readyState 改变时，就会触发 onreadystatechange 事件。

XMLHttpRequest 对象的三个重要的属性：

1. `onreadystatechange`，每当 readyState 属性改变时，就会调用该函数。
2. `readyState`，存有 XMLHttpRequest 的状态。从 0 到 4 发生变化。
   - 0: 请求未初始化
   - 1: 服务器连接已建立
   - 2: 请求已接收
   - 3: 请求处理中
   - 4: 请求已完成，且响应已就绪
3. status
   1. 200: "OK"
   2. 404: 未找到页面
   3. ...

```js
var request = new XMLHttpRequest(); // 新建XMLHttpRequest对象

request.onreadystatechange = function () { // 状态发生变化时，函数被回调
    if (request.readyState === 4) { // 成功完成
        // 判断响应结果:
        if (request.status === 200) {
            // 成功，通过responseText拿到响应的文本:
            return success(request.responseText);
        } else {
            // 失败，根据响应码判断失败原因:
            return fail(request.status);
        }
    } else {
        // HTTP请求还在继续...
    }
}

// 发送请求:
request.open('GET', '/api/categories');
request.send();
```

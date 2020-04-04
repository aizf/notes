# Web Worker

web worker 是运行在后台的 JavaScript，独立于其他脚本，不会影响页面的性能。

## 检测浏览器是否支持 Web Worker

```js
if(typeof(Worker)!=="undefined")
{
    // 是的! Web worker 支持!
    // 一些代码.....
}
else
{
    //抱歉! Web Worker 不支持
}
```

## 创建 web worker 文件

```js
// demo_workers.js
var i=0;

function timedCount()
{
    i=i+1;
    //postMessage() 方法用于向 HTML 页面传回一段消息。
    postMessage(i);
    setTimeout("timedCount()",500);
}

timedCount()
```

## 创建 Web Worker 对象

```js
w=new Worker("demo_workers.js");
w.onmessage=function(event){
    document.getElementById("result").innerHTML=event.data;
};
```

## 终止 Web Worker

```js
w.terminate();
w = null;
```

## Web Workers 和 DOM

由于 web worker 位于外部文件中，它们无法访问下列 JavaScript 对象：

- window 对象
- document 对象
- parent 对象

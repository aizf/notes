#

有以下几个使用注意点:

1. 同源限制
    - 分配给 Worker 线程运行的脚本文件，必须与主线程的脚本文件同源。
2. DOM 限制
   - Worker 线程所在的全局对象，与主线程不一样，无法读取主线程所在网页的 DOM 对象，也无法使用`document`、`window`、`parent`这些对象。但是，Worker 线程可以`navigator`对象和`location`对象。
3. 通信联系
    - Worker 线程和主线程不在同一个上下文环境，它们不能直接通信，必须通过消息完成。
4. 脚本限制
   - Worker 线程不能执行`alert()`方法和`confirm()`方法，但可以使用 XMLHttpRequest 对象发出 AJAX 请求。
5. 文件限制
   - Worker 线程无法读取本地文件，即不能打开本机的文件系统（file://），它所加载的脚本，必须来自网络。
6. 传值为拷贝

## 1 主线程

- Worker.onerror：指定 error 事件的监听函数。
- Worker.onmessage：指定 message 事件的监听函数，发送过来的数据在Event.data属性中。
- Worker.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
- Worker.postMessage()：向 Worker 线程发送消息。
- Worker.terminate()：立即终止 Worker 线程。

```js
var worker = new Worker('2.js');
worker.postMessage("xxx");
worker.onmessage = function (event) {
    console.log(event.data);
    setTimeout(() => {
        worker.terminate();
    }, 2000)
}
```

## 2 子线程

- self.name： Worker 的名字。该属性只读，由构造函数指定。
- self.onmessage：指定message事件的监听函数。
- self.onmessageerror：指定 messageerror 事件的监听函数。发送的数据无法序列化成字符串时，会触发这个事件。
- self.close()：关闭 Worker 线程。
- self.postMessage()：向产生这个 Worker 线程发送消息。
- self.importScripts()：加载 JS 脚本。

```js
console.log(this===self)    // true
onmessage = function (e) {
    console.log(e.data);
    postMessage(123);
}
// 或
addEventListener('message', function (e) {
  postMessage(e.data);
}, false);

// Worker 线程
// self.close();
```

### 2.1 Worker 内部如果要加载其他脚本，有一个专门的方法importScripts()

`importScripts('script1.js', 'script2.js');`
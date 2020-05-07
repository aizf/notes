#

## CommonJS

CommonJS 是以在浏览器环境之外构建 javaScript 生态系统为目标而产生的写一套规范，主要是为了解决 javaScript 的作用域问题而定义的模块形式，可以使每个模块它自身的命名空间中执行，该规范的主要内容是，模块必须通过 module.exports 导出对外的变量或者接口，通过 `require()` 来导入其他模块的输出到当前模块的作用域中；目前在服务器和桌面环境中，node.js 遵循的是 CommonJS 的规范；

CommonJS 对模块的加载时同步的；

## AMD

AMD 主要是为前端 js 的表现指定的一套规范；而 CommonJS 是主要为了 js 在后端的表现制定的，它不适合前端；

AMD 是 Asynchronous Module Definition 的缩写，意思是 异步模块定义；采用的是异步的方式进行模块的加载，在加载模块的时候不影响后边语句的运行；

AMD 也是采用 `require()` 语句加载模块的，但是不同于 CommonJS ，它有两个参数；`require(['模块的名字']，callBack)`；requireJs 遵循的就是 AMD 规范；

## CMD

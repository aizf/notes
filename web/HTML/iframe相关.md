#

把iframe解释成“浏览器中的浏览器“是很恰当的。iframe可以嵌在网页中的任意部分。

### 是否有滚动条（yes,no,auto）

`<iframe scrolling="no"></iframe>`

### 设质边框的宽度和高度

`<iframe height="31" width="88"></iframe>`

### 指定iframe调用的文件或图片(html,htm,gif,jpeg,jpg,png,txt,*.*)

`<iframe src="girl.gif"></iframe>`

### 是否显示边框（0无边框 1有边框(默认)）

用css的`border:none`来去掉`iframe`的边框在IE下起不了作用

将`iframe`的`frameborder`属性的值设为0就可以

`<iframe frameborder="0"></iframe>`

### 背景是否透明

`allowtransparency （yes透明 no不透明）`

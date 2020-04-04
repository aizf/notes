#

## 使用 `<embed>` 标签

`<embed src="intro.swf" height="200" width="200">`

问题：

- HTML4 无法识别 `<embed>` 标签。您的页面无法通过验证。
- 如果浏览器不支持 Flash，那么视频将无法播放
- iPad 和 iPhone 不能显示 Flash 视频。
- 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放。

## 使用 `<object>` 标签

`<object data="intro.swf" height="200" width="200"></object>`

问题:

- 如果浏览器不支持 Flash，将无法播放视频。
- iPad 和 iPhone 不能显示 Flash 视频。
- 如果您将视频转换为其他格式，那么它仍然不能在所有浏览器中播放。

## 使用 HTML5 `<video>` 元素

`<video>`元素在所有现代浏览器中都支持。

问题:

- 您必须把视频转换为很多不同的格式。
- `<video>` 元素在老式浏览器中无效。

## 最好的 HTML 解决方法

以下实例中使用了 4 种不同的视频格式。HTML 5 `<video>` 元素会尝试播放以 mp4、ogg 或 webm 格式中的一种来播放视频。如果均失败，则回退到 `<embed>` 元素。

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  <source src="movie.webm" type="video/webm">
  <object data="movie.mp4" width="320" height="240">
    <embed src="movie.swf" width="320" height="240">
  </object>
</video>
```

## 使用超链接

`<a href="intro.swf">Play a video file</a>`

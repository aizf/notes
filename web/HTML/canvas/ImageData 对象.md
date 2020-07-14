---
title: ImageData 对象
tags:
    - html
    - canvas
---

ImageData对象中存储着canvas对象真实的像素数据，它包含以下几个只读属性：

`width`
>图片宽度，单位是像素
`height`
>图片高度，单位是像素
`data`
>`Uint8ClampedArray`类型的一维数组，包含着RGBA格式的整型数据，范围在0至255之间（包括255）。

每个像素用4个1bytes值,按照红，绿，蓝和透明值的顺序,每个颜色值部份用0至255来代表。

`Uint8ClampedArray`包含高度 × 宽度 × 4 bytes数据，索引值从0到(高度×宽度×4)-1

Uint8ClampedArray.length属性来读取像素数组的大小（以bytes为单位）：

```js
var numBytes = imageData.data.length;
```

## 创建一个ImageData对象

```js
// 所有像素被预设为透明黑。
var myImageData = ctx.createImageData(width, height);

// 相同像素的ImageData对象,像素全部被预设为透明黑
var anotherImageData = ctx.createImageData(myImageData);
```

## 得到场景像素数据

```js
var myImageData = ctx.getImageData(left, top, width, height);
```

## 保存图片

`canvas.toDataURL('image/png')`
>默认设定。创建一个PNG图片。

`canvas.toDataURL('image/jpeg', quality)`
>创建一个JPG图片。你可以有选择地提供从0到1的品质量，1表示最好品质，0基本不被辨析但有比较小的文件大小。

当你从画布中生成了一个数据链接，例如，你可以将它用于任何`<image>`元素，或者将它放在一个有download属性的超链接里用于保存到本地。

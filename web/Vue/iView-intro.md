# iView

源于[官方文档](https://www.iviewui.com)，部分截取，总结

## 1 简单例子

```html
<link rel="stylesheet" type="text/css" href="http://unpkg.com/iview/dist/styles/iview.css">
<script type="text/javascript" src="http://vuejs.org/js/vue.min.js"></script>
<script type="text/javascript" src="http://unpkg.com/iview/dist/iview.min.js"></script>
```

[演示](http://output.jsbin.com/libihed)

## 2 安装

## 3 全局配置

组件会优先使用 prop 设置的属性，如果未设置，再使用全局配置。

- **transfer：** **所有带浮层**的组件，**是否将浮层放置在 body 内**，默认为不设置，详见各组件默认的 transfer 值。可选值为 true 或 false。
- **size：** 所有带有 size 属性的组件的尺寸，默认为不设置，详见各组件默认的 size 值。可选值为 **default、small 或 large**

以下属性需升级 iView 至 3.4.0 以上版本：

- **select.arrow：** Select 下拉箭头图标
- **select.customArrow：** Select 自定义下拉箭头图标
- **select.arrowSize：** Select 下拉箭头尺寸
- **cell.arrow：** Cell 右侧箭头图标
- **cell.customArrow：** Cell 自定义右侧箭头图标
- **cell.arrowSize：** Cell 右侧箭头尺寸
- **menu.arrow：** Menu 下拉箭头图标
- **menu.customArrow：** Menu 自定义下拉箭头图标
- **menu.arrowSize：** Menu 下拉箭头尺寸
- **tree.arrow：** Tree 下拉箭头图标
- **tree.customArrow：** Tree 自定义下拉箭头图标
- **tree.arrowSize：** Tree 下拉箭头尺寸
- **cascader.arrow：** Cascader 下拉箭头图标
- **cascader.customArrow：** Cascader 自定义下拉箭头图标
- **cascader.arrowSize：** Cascader 下拉箭头尺寸
- **cascader.itemArrow：** Cascader 右侧箭头图标
- **cascader.customItemArrow：** Cascader 自定义右侧箭头图标
- **cascader.itemArrowSize：** Cascader 右侧箭头尺寸
- **colorPicker.arrow：** ColorPicker 下拉箭头图标
- **colorPicker.customArrow：** ColorPicker 自定义下拉箭头图标
- **colorPicker.arrowSize：** ColorPicker 下拉箭头尺寸
- **datePicker.icon：** DatePicker 日期图标
- **datePicker.customIcon：** DatePicker 自定义日期图标
- **datePicker.iconSize：** DatePicker 日期图标尺寸
- **timePicker.icon：** TimePicker 时间图标
- **timePicker.customIcon：** TimePicker 自定义时间图标
- **timePicker.iconSize：** TimePicker 时间图标尺寸
- **tabs.closeIcon：** Tabs 关闭图标
- **tabs.customCloseIcon：** Tabs 自定义关闭图标
- **tabs.closeIconSize：** Tabs 关闭图标尺寸
- **modal.maskClosable：** Modal 的 maskClosable 属性

```js
Vue.use(iView, {
    transfer: true,
    size: 'large',
    select: {
        arrow: 'md-arrow-dropdown',
        arrowSize: 20
    }
});
```

## 4 国际化

iView 的所有组件文案默认使用的是中文，通过设置可以使用其它语言

## 5 定制主题

iView 的样式是基于`Less`进行开发的，默认以前缀`.ivu-`作为命名空间，并且定义了一套样式变量，定制主题，就是编辑这个变量列表。

<https://www.iviewui.com/docs/guide/theme>

### 变量覆盖（推荐）

### 通过安装工具修改

## 6 iView Loader

### 用途

统一`iView`标签书写规范，所有标签都可以使用首字母大写的形式，包括 Vue 限制的两个标签 Switch 和 Circle。

虽然不推荐，但通过`loader`选项配置，可以开启所有标签前缀的写法了，比如`i-date-picker`。

### 使用方法

<https://www.iviewui.com/docs/guide/iview-loader#AZ>


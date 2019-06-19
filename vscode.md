#

## 正则匹配并替换

```md
- select.arrow：Select 下拉箭头图标
- select.customArrow：Select 自定义下拉箭头图标
- select.arrowSize：Select 下拉箭头尺寸
```

匹配：

`- (.+：)`

替换：

```- **$1** ```

其中`$1`表示上一步中的`()`中的内容

结果：

```md
- **select.arrow：** Select 下拉箭头图标
- **select.customArrow：** Select 自定义下拉箭头图标
- **select.arrowSize：** Select 下拉箭头尺寸
- **cell.arrow：** Cell 右侧箭头图标
```

注意：

`- **$1**`后有一个`空格`

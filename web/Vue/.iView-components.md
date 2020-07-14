#

## 基础

### Color 色彩

iView 推荐使用以下调色板的颜色作为设计和开发规范，以保证页面和组件之间的视觉一致。

![avatar](.\res\1.png)

### Font 字体

字体代码

`font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;`

![avatar](.\res\2.png)

### Button 按钮

注意: **非 template/render 模式下，需使用 `i-button`。**

#### API

##### Button props

属性|说明|类型|默认值
-|-|-|-
type|按钮类型，可选值为 default、primary、dashed、text、info、success、warning、error或者不设置|String|default
ghost|幽灵属性，使按钮背景透明|Boolean|false
size|按钮大小，可选值为large、small、default或者不设置|String|default
shape|按钮形状，可选值为circle或者不设置|String|-
long|开启后，按钮的长度为 100%|Boolean|false
html-type|设置button原生的type，可选值为button、submit、reset|String|button
disabled|设置按钮为禁用状态|Boolean|false
loading|设置按钮为加载中状态|Boolean|false
icon|设置按钮的图标类型|String|-
custom-icon|设置按钮的自定义图标|String|-
to|跳转的链接，支持 vue-router 对象|String | Object|-
replace|路由跳转时，开启 replace 将不会向 history 添加新记录|Boolean|false
target|相当于 a 链接的 target 属性|String|_self
append3.4.0|同 vue-router append|Boolean|false

##### ButtonGroup props

属性|说明|类型|默认值
-|-|-|-
size|按钮组合大小，可选值为large、small、default或者不设置|String|default
shape|按钮组合形状，可选值为circle或者不设置|String|-
vertical|是否纵向排列按钮组|Boolean|false

### Icon 图标

使用`<Icon />`组件，指定图标对应的`type`属性，示例代码：

`<Icon type="ios-checkmark" />`

渲染后为：

`<i class="ivu-icon ivu-icon-ios-checkmark"></i>`

#### API

##### Icon props

属性|说明|类型|默认值
-|-|-|-|
type|图标的名称|String|-
size|图标的大小，单位是 px|Number | String|-
color|图标的颜色|String|-
custom|自定义图标|String|-

##### 自定义图标用法

<https://www.iviewui.com/components/icon#ZDYTBYF>

##### 所有图标

<https://www.iviewui.com/components/icon#SYTB>

## 布局

### Grid 栅格

采用了24栅格系统，将区域进行24等分

我们定义了两个概念，行`row`和列`col`，具体使用方法如下：

- 使用`row`在水平方向创建一行
- 将一组`col`插入在`row`中
- 在每个`col`中，键入自己的内容
- 通过设置`col`的`span`参数，指定跨越的范围，其范围是1到24
- 每个`row`中的`col`总和应该为24

注意：**非 `template/render` 模式下，需使用 `i-col`。**

#### API

##### Row props

属性|说明|类型|默认值
-|-|-|-
gutter|栅格间距，单位 px，左右平分|Number|0
type|布局模式，可选值为flex或不选，在现代浏览器下有效|String|-
align|flex 布局下的垂直对齐方式，可选值为top、middle、bottom|String|-
justify|flex 布局下的水平排列方式，可选值为start、end、center、space-around、space-between|String|-
class-name|自定义的class名称|String|-

##### Col props

属性|说明|类型|默认值
-|-|-|-
span|栅格的占位格数，可选值为0~24的整数，为 0 时，相当于display:none|Number | String|-
order|栅格的顺序，在flex布局模式下有效|Number | String|-
offset|栅格左侧的间隔格数，间隔内不可以有栅格|Number | String|-
push|栅格向右移动格数|Number | String|-
pull|栅格向左移动格数|Number | String|-
class-name|自定义的class名称|String|-
xs|<576px 响应式栅格，可为栅格数或一个包含其他属性的对象|Number | Object|-
sm|≥576px 响应式栅格，可为栅格数或一个包含其他属性的对象|Number | Object|-
md|≥768px 响应式栅格，可为栅格数或一个包含其他属性的对象|Number | Object|-
lg|≥992px 响应式栅格，可为栅格数或一个包含其他属性的对象|Number | Object|-
xl|≥1200px 响应式栅格，可为栅格数或一个包含其他属性的对象|Number | Object|-
xxl|≥1600px 响应式栅格，可为栅格数或一个包含其他属性的对象|Number | Object|-

### Layout 布局

设计规则

- **尺寸**
  - 一级导航项偏左靠近 logo 放置，辅助菜单偏右放置。
  - 顶部导航（大部分系统）：一级导航高度 64px，二级导航 48px。
  - 顶部导航（展示类页面）：一级导航高度 80px，二级导航 56px。
  - 顶部导航高度的范围计算公式为：48+8n。
  - 侧边导航宽度的范围计算公式：200+8n。
- **交互**
  - 一级导航和末级的导航需要在可视化的层面被强调出来；
  - 当前项应该在呈现上优先级最高；
  - 当导航收起的时候，当前项的样式自动赋予给它的上一个层级；
  - 左侧导航栏的收放交互同时支持手风琴和全展开的样式，根据业务的要求进行适当的选择。
- **视觉** 导航样式上需要根据信息层级合理的选择样式：

- 大色块强调

    建议用于底色为深色系时，当前页面父级的导航项。

- 高亮火柴棍

    当导航栏底色为浅色系时使用，可用于当前页面对应导航项，建议尽量在导航路径的最终项使用。

- 字体高亮变色

    从可视化层面，字体高亮的视觉强化力度低于大色块，通常在当前项的上一级使用。

- 字体放大

    12px、14px 是导航的标准字号，14 号字体用在一、二级导航中。字号可以考虑导航项的等级做相应选择。

组件概述

- Layout：布局容器，其下可嵌套 HeaderSiderContentFooter或 Layout 本身，可以放在任何父容器中。
- Header：顶部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- Sider：侧边栏，自带默认样式及基本功能，其下可嵌套任何元素，只能放在 Layout 中。
- Content：内容部分，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。
- Footer：底部布局，自带默认样式，其下可嵌套任何元素，只能放在 Layout 中。

注意：采用 flex 布局实现，请注意浏览器兼容性问题。

示例

<https://www.iviewui.com/components/layout#DMSL>

## 导航

- Menu 导航菜单
- Tabs 标签页
- Dropdown 下拉菜单
- Page 分页

    当数据量较多时，使用分页可以快速进行数据切换。
- Breadcrumb 面包屑
- LoadingBar 加载进度条

    **LoadingBar 只会在全局创建一个**
- Steps 步骤条
- Anchor 锚点
- Badge 徽标数

## 表单

- ...
- Transfer 穿梭框

    常用于将多个项目从一边移动到另一边。
- AutoComplete 自动完成
- InputNumber 数字输入框
- Upload 上传
- ...

## 视图

- Time 相对时间
- Timeline 时间轴
- Carousel 走马灯(图片或卡片轮播)
- Tag 标签(对不同维度进行简单的标记和分类。)
- Progress 进度条
- Poptip 气泡提示

    不同点是 Poptip 以卡片的形式承载了**更多的内容**，比如链接、表格、按钮等。
- Tooltip 文字提示
- Drawer 抽屉

## 其他

- Scroll 无限滚动
- Spin 加载中

    当区块正在获取数据中时可使用，适当的等待动画可以提升用户体验。
- BackTop 返回顶部
- Affix 图钉

将内容固定在屏幕上，并且不随页面的滚动而滚动。**常用于侧边菜单**等。

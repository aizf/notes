#

## 维基百科

在计算机科学中，数组数据结构（英语：array data structure），简称数组（英语：Array），是由**相同类型的元素**（element）的集合所组成的数据结构，**分配一块连续的内存**来存储。利用元素的索引（index）可以计算出该元素对应的存储地址。

特点：

- 相同类型
- 连续内存(即固定长度)

## V8源码

js-array.h: <https://github.com/v8/v8/blob/master/src/objects/js-array.h>

```c++
// The JSArray describes JavaScript Arrays
//  Such an array can be in one of two modes:
//    - fast, backing storage is a FixedArray and length <= elements.length();
//       Please note: push and pop can be used to grow and shrink the array.
//    - slow, backing storage is a HashTable with numbers as keys.
class JSArray : public JSObject
```

`JSArray`继承自`JSObject`，因此本质是对象，所以可以存放任意类型

注释翻译：

JSArray描述JavaScript数组。

这样的数组(array)可以是两种模式之一：

- fast, `backing storage`是一个`FixedArray`, 并且`length <= elements.length()`, `push`和`pop`可以增大和减小这个`array`
- slow, `backing storage`是用数字当作`keys`的`HashTable`

`FixedArray` 是 V8 实现的一个类似于数组的类，它表示一段固定长度的连续的内存。

`HashTable`(散列表)

### fast

快数组是一种线性的存储方式。新创建的空数组，默认的存储方式是快数组，快数组长度是可变的，可以根据元素的增加和删除来动态调整存储空间大小，内部是通过扩容和收缩机制实现

#### 扩容

扩容后的新容量 = 旧容量的1.5倍 + 16

扩容后会将数组拷贝到新的内存空间中

#### 收缩

如果容量 >= length的2倍 + 16，则进行收缩容量调整，否则用holes对象填充未被初始化的位置

### slow

慢数组是一种哈希表的内存形式。不用开辟大块连续的存储空间，节省了内存，但是由于需要维护这样一个 HashTable，其效率会比快数组低。

### 快数组慢数组之间的转换

#### 快 -> 慢

- 新容量 `>= 3 *` 扩容后的容量 `* 2` ，会转变为慢数组。
- 当加入的 `index- 当前capacity >= kMaxGap（1024）` 时（也就是至少有了 1024 个空洞），会转变为慢数组。

对数组赋值时使用远超当前数组的容量,出现了大于等于 1024 个空洞

#### 慢 -> 快

处于哈希表实现的数组，在每次空间增长时， V8 的启发式算法会检查其空间占用量， 若其空洞元素减少到一定程度，则会将其转化为快数组模式。

关键代码： 当慢数组的元素可存放在快数组中且长度在 smi 之间且仅节省了50%的空间,则会转变为快数组

#### 例子

```js
// fase
let a = [1,2];

// slow
a[1030] = 1;

// fast
for (let i = 200; i < 1030; i++) {
    a[i] = i;
}
```

## 参考

<https://juejin.im/post/5d80919b51882538036fc87d>

<https://github.com/v8/v8>

<https://github.com/v8/v8/blob/master/src/objects/js-array.h>

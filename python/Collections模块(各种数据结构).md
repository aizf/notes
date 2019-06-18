# Collections

```python
>>> import collections
```

- Counter 类
- OrderedDict 类
- defaultdict 类
- namedtuple 类

## 1、计数器（counter）

counter是对字典的方法，用来追踪值的出现次数；具备字典的所有功能和自己的功能。

```python
>>> c = Counter('abcdeabcdabcaba')  # count elements from a string

>>> c.most_common(3)                # three most common elements
[('a', 5), ('b', 4), ('c', 3)]

>>> sorted(c)                       # list all unique elements
['a', 'b', 'c', 'd', 'e']

>>> c['a']                          # count of letter 'a'
    5

>>> del c['b']                      # remove all 'b'

>>> c['b']                          # now there are zero 'b'
0

......
```

## 2、有序字典(OrderedDict)

OrderedDict是对字典的补充，它可以记住字典元素添加的顺序。

```python
>>> dic1 = OrderedDict({'k1':'v1','k2':'v2','k4':'v4','k3':'v3'})
>>> dic1    #创建有序列的字典
OrderedDict([('k4', 'v4'), ('k1', 'v1'), ('k2', 'v2'), ('k3', 'v3')])

>>> dic1.popitem()    #默认提取最后要给key
('k3', 'v3')
>>> dic1
OrderedDict([('k4', 'v4'), ('k1', 'v1'), ('k2', 'v2')])

>>> dic1.move_to_end('k4')   #将指定key移到最后
>>> dic1
OrderedDict([('k1', 'v1'), ('k2', 'v2'), ('k4', 'v4')])
```

## 3、默认字典(defaultdict)

defaultdict是对字典的类型补充，它默认给字典的值设置了一个类型

```python
>>> dict1 = defaultdict(list)   #创建默认字典
>>> dict1
defaultdict(<class 'list'>, {})

>>> for i in range(20):  #实例
...   if i%2 == 0:
...     dict1['k1'].append(i)
...   else:
...     dict1['k2'].append(i)
... 
>>> dict1
defaultdict(<class 'list'>,
 {'k1': [0, 2, 4, 6, 8, 10, 12, 14, 16, 18], 
 'k2': [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]})
```

## 4、可命名元组(namedtuple)

根据namedtuple可以创建一个包含tuple所有功能以及其他功能的类型

```py
>>> from collections import namedtuple
>>> tup1 = namedtuple('tup1',['x','y','z','u'])  #创建可命名元组
>>> obj = tup1(111,22,333,4444)  #创建对象
>>> print(obj.x)   #输出对象序列的值
111
>>> print(obj.y)
22
>>> print(obj.z)
333
>>> print(obj.u)
4444
```
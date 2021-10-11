---
title: lodash
categories:
  - vue
tags:
  - vue
date: 2021/6/26
---

## Array

```js
_.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

_.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]


// _.difference(array, [values])
// differenceBy
// differenceWith
// Creates an array of array values not included in the other given arrays

_.difference([2, 1], [2, 3]);
// => [1]


// _.fill(array, value, [start=0], [end=array.length])


// _.findIndex(array, [predicate=_.identity], [fromIndex=0])
// findLastIndex
// default return truthy item

var users = [
  { 'user': 'barney',  'active': false },
  { 'user': 'fred',    'active': false },
  { 'user': 'pebbles', 'active': true }
];
 
_.findIndex(users, function(o) { return o.user == 'barney'; });
// => 0
 
// The `_.matches` iteratee shorthand.
_.findIndex(users, { 'user': 'fred', 'active': false });
// => 1
 
// The `_.matchesProperty` iteratee shorthand.
_.findIndex(users, ['active', false]);
// => 0
 
// The `_.property` iteratee shorthand.
_.findIndex(users, 'active');
// => 2


// _.intersection([arrays])
// intersectionBy
// intersectionWith
// Returns the new array of intersecting values.

_.intersection([2, 1], [2, 3]);
// => [2]


_.nth(array, [n=0])
// 添加到Array原型上很好用，类似于ES新特性at

var array = ['a', 'b', 'c', 'd'];
 
_.nth(array, 1);
// => 'b'
 
_.nth(array, -2);
// => 'c';


// _.pull(array, [values])
// _.pullAll(array, values)
// pullAllWith
// pullAt

var array = ['a', 'b', 'c', 'a', 'b', 'c'];
 
_.pull(array, 'a', 'c');
console.log(array);
// => ['b', 'b']

_.pullAll(array, ['a', 'c']);
console.log(array);
// => ['b', 'b']


// _.sortedIndex(array, value)
// sortedIndexBy
// sortedIndexOf
// sortedLastIndex
// sortedLastIndexOf
// 使用二叉搜索返回插入位置

_.sortedIndex([30, 50], 40);
// => 1


// _.sortedUniq(array)
// sortedUniqBy
// This method is like _.uniq except that it's designed and optimized for sorted arrays.

_.sortedUniq([1, 1, 2]);
// => [1, 2]


// _.union([arrays])
// unionBy
// unionWith
// uniq
// uniqBy
// uniqWith

_.union([2], [1, 2]);
// => [2, 1]


// _.unzip(array)
// zip
// unzipWith
// zipObject

var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
 
_.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]

_.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
// 和Object.fromentries不同



// _.without(array, [values])

_.without([2, 1, 2, 3], 1, 2);
// => [3]
```

## Collection

## Function

```js
// _.throttle(func, [wait=0], [options={}])
// [options.leading=true] (boolean): Specify invoking on the leading edge of the timeout.
// [options.trailing=true] (boolean): Specify invoking on the trailing edge of the timeout.


// _.debounce(func, [wait=0], [options={}])
// [options.leading=false] (boolean): Specify invoking on the leading edge of the timeout.
// [options.maxWait] (number): The maximum time func is allowed to be delayed before it's invoked.
// [options.trailing=true] (boolean): Specify invoking on the trailing edge of the timeout.


// _.after(n, func)
// invoke after n times called

// _.before(n, func)
// invoke at the first n times called


// _.curry(func, [arity=func.length])
// curryRight

var abc = function(a, b, c) {
  return [a, b, c];
};
 
var curried = _.curry(abc);
 
curried(1)(2)(3);
// => [1, 2, 3]
 
curried(1, 2)(3);
// => [1, 2, 3]
 
curried(1, 2, 3);
// => [1, 2, 3]
 
// Curried with placeholders.
curried(1)(_, 3)(2);
// => [1, 2, 3]


// _.defer(func, [args])
// settimeout(0) ?

// Defers invoking the func until the current call stack has cleared. Any additional arguments are provided to func when it's invoked.

_.defer(function(text) {
  console.log(text);
}, 'deferred');
// => Logs 'deferred' after one millisecond.


// _.once(func)
```

## Number

```js
// _.clamp(number, [lower], upper)
// 返回靠近的一端的值


// _.random([lower=0], [upper=1], [floating])
```

## Math

```js
// _.ceil(number, [precision=0])
// _.floor(number, [precision=0])
// _.round(number, [precision=0])


// _.mean(array)
// meanBy


// _.sum(array)
// _.sumBy(array, [iteratee=_.identity])
```

## String
```js
// _.toLower([string=''])
// _.toUpper([string=''])


_.toLower('--Foo-Bar--');
// => '--foo-bar--'
 
_.toLower('fooBar');
// => 'foobar'
 
_.toLower('__FOO_BAR__');
// => '__foo_bar__'


// _.startsWith([string=''], [target], [position=0])
// _.endsWith([string=''], [target], [position=string.length])


// _.trim([string=''], [chars=whitespace])


// _.camelCase([string=''])

_.camelCase('Foo Bar');
// => 'fooBar'
 
_.camelCase('--foo-bar--');
// => 'fooBar'
 
_.camelCase('__FOO_BAR__');
// => 'fooBar'


// _.kebabCase([string=''])

_.kebabCase('Foo Bar');
// => 'foo-bar'
 
_.kebabCase('fooBar');
// => 'foo-bar'
 
_.kebabCase('__FOO_BAR__');
// => 'foo-bar'


// _.snakeCase([string=''])

_.snakeCase('Foo Bar');
// => 'foo_bar'
 
_.snakeCase('fooBar');
// => 'foo_bar'
 
_.snakeCase('--FOO-BAR--');
// => 'foo_bar'

```
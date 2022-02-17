# XTools

## 简介

前端常用工具库，无任何依赖，支持按需引入，收集了以下相关的方法：

- 数组
- 数字
- 字符串
- 时间
- 浏览器
- 颜色
- 其他



文档地址(文档由[typedoc](https://www.npmjs.com/package/typedoc)生成)：https://suyxh.github.io/iron-utils/ 

## 安装

``` javascript
npm i iron-utils
```

## API

### 数组

#### intersectionForSimpleArray

【说明】：数组交集 普通数组

【返回】：Array

【参数】

| 参数 | 类型                   | 描述     |
| ---- | ---------------------- | -------- |
| arr1 | string[] \|\| number[] | 普通数组 |
| arr2 | string[] \|\| number[] | 普通数组 |

【示例】

```js
import { intersectionForSimpleArray } from 'iron-utils';

const arr1 = [1, 2, 3, 4, 5 , 8 ,9],arr2 = [5, 6, 7, 8, 9];
console.log(intersectionForSimpleArray(arr1,arr2)) //[5, 8, 9]
```



#### intersectionForObjArray

【说明】：数组交集 对象数组

【返回】：Array
【参数】

| 参数 | 类型     | 描述     |
| ---- | -------- | -------- |
| arr1 | Object[] | 对象数组 |
| Arr2 | Object[] | 对象数组 |

【示例】

```js
import { intersectionForObjArray } from 'iron-utils';

const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

console.log(intersectionForObjArray(arr1,arr2))  
//  [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name5', id: 5 }]
```







#### unionForSimpleArray

【说明】：数组并集 普通数组

【返回】：Array

【参数】

| 参数 | 类型                   | 描述     |
| ---- | ---------------------- | -------- |
| arr1 | string[] \|\| number[] | 普通数组 |
| arr2 | string[] \|\| number[] | 普通数组 |

【示例】

```js
import { unionForSimpleArray } from 'iron-utils';

const arr1 = [1, 2, 3, 4, 5 , 8 ,9],arr2 = [5, 6, 7, 8, 9];
console.log(unionForSimpleArray(arr1,arr2)) // [1, 2, 3, 4, 5, 8, 9, 6, 7]
```



#### subtractionForSimpleArray

【说明】：数组差集 普通数组 数组arr1相对于arr2所没有的

【返回】：Array
【参数】

| 参数 | 类型                  | 描述     |
| ---- | --------------------- | -------- |
| arr1 | string[] \|\|number[] | 普通数组 |
| Arr2 | string[] \|\|number[] | 普通数组 |

【示例】

```js
import { subtractionForSimpleArray } from 'iron-utils';

const arr1 = [1, 2, 3, 4, 5, 8, 9]; const arr2 = [5, 6, 7, 8, 9];
console.log(subtractionForSimpleArray(arr1,arr2)) // [1, 2, 3, 4 ]
```



#### subtractionForObjArray

【说明】：数组差集 对象数组 数组arr1相对于arr2所没有的

【返回】：Array
【参数】

| 参数 | 类型     | 描述     |
| ---- | -------- | -------- |
| arr1 | Object[] | 对象数组 |
| Arr2 | Object[] | 对象数组 |

【示例】

```js
import { subtractionForObjArray } from 'iron-utils';

const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

console.log(subtractionForObjArray(arr1,arr2))  
// [ { name: 'name2', id: 2 }, { name: 'name3', id: 3 } ]
```





#### complementForSimpleArray

【说明】：数组补集 普通数组 两个数组各自没有的集合

【返回】：Array
【参数】

| 参数 | 类型                  | 描述     |
| ---- | --------------------- | -------- |
| arr1 | string[] \|\|number[] | 普通数组 |
| Arr2 | string[] \|\|number[] | 普通数组 |

【示例】

```js
import { complementForSimpleArray } from 'iron-utils';

const arr1 = [1, 2, 3, 4, 5, 8, 9]; const arr2 = [5, 6, 7, 8, 9];
console.log(complementForSimpleArray(arr1,arr2)) // [1, 2, 3, 4, 6, 7 ]
```





#### complementForObjArray

【说明】：数组补集 对象数组 两个数组各自没有的集合

【返回】：Array
【参数】

| 参数 | 类型     | 描述     |
| ---- | -------- | -------- |
| arr1 | Object[] | 对象数组 |
| Arr2 | Object[] | 对象数组 |

【示例】

```js
import { complementForObjArray } from 'iron-utils';

const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

console.log(complementForObjArray(arr1,arr2))  
// [{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]
```



#### toHeavyForSimpleArray

【说明】：数组去重 

【返回】：Array
【参数】

| 参数 | 类型                  | 描述     |
| ---- | --------------------- | -------- |
| arr  | string[] \|\|number[] | 普通数组 |

【示例】

```js
import { toHeavyForSimpleArray } from 'iron-utils';

const arr1 = [1, 2, 3, 3, 4, 4];
console.log(toHeavyForSimpleArray(arr1)) // [1, 2, 3, 4 ]
```



#### toHeavyForObjArray

【说明】：数组去重 

【返回】：Array
【参数】

| 参数 | 类型   | 描述     |
| ---- | ------ | -------- |
| arr  | Object | 对象数组 |

【示例】

```js
import { toHeavyForObjArray } from 'iron-utils';

const arr = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

console.log(toHeavyForObjArray(arr)) 
// [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]
```



### 数字

#### thousandNum 

【说明】：数字千分位 



#### average

【说明】：*获得一组数的平均值*



#### round

【说明】：*指定位数四舍五入*



#### getRandomArbitrary

【说明】：*得到一个两数之间的随机数,返回了一个在指定值之间的随机数。这个值不小于 min（有可能等于），并且小于（不等于）max。*



#### getRandomInt

【说明】：*得到一个两数之间的随机整数,返回了一个在指定值之间的随机整数。这个值不小于 min （如果 min 不是整数，则不小于 min 的向上取整数），且小于（不等于）max。*



#### getRandomIntInclusive

【说明】：*得到一个两数之间的随机整数，包括两个数在内*



### 字符串

#### reverseStr

【说明】：*字符串翻转*



#### stringifyUrl

【说明】：*将对象序列化成url参数*



#### parseUrlSearch

【说明】：*路由参数反序列化得到对象*



#### capitalize

【说明】：*字符串首字母大写*



#### randomString

【说明】：*随机字符串*



#### truncateString

【说明】：*截断字符串*



#### stripHtml

【说明】：*去除字符串中的HTML元素*





### 时间

#### isDateValid

【说明】：*检测给出的日期是否有效*



#### dayDif

【说明】：*计算两个日期之间的间隔时间*



#### dayOfYear

【说明】：*查找日期位于一年中的第几天*



### 浏览器

#### copyToClipboard

【说明】：*复制内容到剪切板*



#### getSelectedText

【说明】：*获取选中的文本,该方法通过内置的 getSelection 属性获取用户选择的文本*



#### clearCookies

【说明】：*清除所有cookie,该方法可以通过使用 document.cookie 来访问 cookie 并清除存储在网页中的所有 cookie*



#### scrollToTop

【说明】：*滚动到页面顶部*



#### isTabInView

【说明】：*判断当前标签页是否激活*



#### isAppleDevice

【说明】：*判断当前是否是苹果设备*



#### scrolledToBottom

【说明】：*判断页面是否已经底部*



#### redirect

【说明】：*重定向到一个URL*



#### showPrintDialog

【说明】：*打开浏览器打印框*





### 颜色

#### isColor

【说明】：*判断字符串是否是十六进制的颜色值*



#### rgb2hex

【说明】：*将RGB转化为十六机制*



#### randomHex

【说明】：*获取一个随机的十六进制颜色值*





### 其他

#### randomBoolean

【说明】：*随机布尔值*



#### typeOfValue

【说明】：*判断数据类型*



#### isEmptyObj

【说明】：*检测对象是否为空*



#### celsiusToFahrenheit

【说明】：*摄氏度转华氏度*



#### fahrenheitToCelsius

【说明】：*华氏度转摄氏度*

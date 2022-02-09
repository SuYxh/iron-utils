# XTools

前端工具库

## API

- isColor              判断是否是十六进制颜色值
- rgb2hex              十进制颜色转十六进制颜色
- stairStepAccessTable 阶梯访问表

## 本地开发

``` sh
npm start
```

## 打包

``` javascript
npm run build
```

## 安装

``` javascript
npm i @iron/utils
```

## 使用

``` javascript
import { isColor } from '@iron/utils';

console.log('isColor(#7bc96f):', isColor('#7bc96f')); // true
console.log('isColor(#7bc9):', isColor('#7bc9')); // false

```

## 示例

```sh
cd demo
anywhere
```

浏览器访问

[http://127.0.0.1:8000/](http://127.0.0.1:8000/)

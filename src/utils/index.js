/*
 * @Author: 时光@
 * @Date: 2021-04-26 14:43:16
 * @LastEditTime: 2021-05-23 22:37:11
 * @Description:
 */


/**
 * @author: 时光@
 * @description: 
 * @param {*} len 生成指定长度的uuid
 * @param {*} radix uuid进制数
 * @return {*}
 */
export function uuid(len, radix) {
  let chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  let uuid = [], i;
  radix = radix || chars.length;

  if (len) {
    for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  } else {
    let r;

    uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
    uuid[14] = '4';

    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | Math.random() * 16;
        uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join('');
}


/**
 * @author: 时光@
 * @description: 数据类型判断
 * @param {*} obj
 * @return {*}
 */
export function toType(obj) {
  let class2type = {};
  let toString = class2type.toString; //=>Object.prototype.toString

  // 设定数据类型的映射表
  ["Boolean", "Number", "String", "Function", "Array", "Date", "RegExp", "Object", "Error", "Symbol"].forEach(name => {
    class2type[`[object ${name}]`] = name.toLowerCase();
  });

  if (obj == null) {
    // 传递的值是null或者undefined，就返回对应的字符串
    return obj + "";
  }
  // 基本数据类型都采用typeof检测
  return typeof obj === "object" || typeof obj === "function" ?
    class2type[toString.call(obj)] || "object" :
    typeof obj;
}


/**
 * @author: 时光@
 * @description: 将url中的参数转成对象
 * @param {*} url
 * @return {*}
 */
export function param2Obj(url) {
  const search = url.split('?')[1]
  if (!search) {
    return {}
  }
  return JSON.parse(
    '{"' +
    decodeURIComponent(search)
      .replace(/"/g, '\\"')
      .replace(/&/g, '","')
      .replace(/=/g, '":"')
      .replace(/\+/g, ' ') +
    '"}'
  )
}


/**
 * @author: 时光@
 * @description:  判断安卓或者ios终端
 * @param {*}
 * @return {*}
 */
export function testMobileType() {
  const u = navigator.userAgent
  const isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1 // android终端
  const isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/) // ios终端
  if (isAndroid) {
    return 'android'
  } else if (isiOS) {
    return 'ios'
  } else {
    return 'pc'
  }
}



/**
 * @author: 时光@
 * @description: 压缩图片
 * @param {*} path
 * @param {*} obj
 * @param {*} callback
 * @return {*}
 */
export function dealImage(path, obj, callback) {
  let img = new Image()
  img.src = path
  img.onload = function () {
    let that = this
    // 默认按比例压缩
    let w = that.width
    let h = that.height
    let scale = w / h
    w = obj.width || w
    h = obj.height || w / scale
    let quality = 0.5 // 默认图片质量为0.7
    // 生成canvas
    let canvas = document.createElement('canvas')
    let ctx = canvas.getContext('2d')
    // 创建属性节点
    let anw = document.createAttribute('width')
    anw.nodeValue = w
    let anh = document.createAttribute('height')
    anh.nodeValue = h
    canvas.setAttributeNode(anw)
    canvas.setAttributeNode(anh)
    ctx.drawImage(that, 0, 0, w, h)
    // 图像质量
    if (obj.quality && obj.quality <= 1 && obj.quality > 0) {
      quality = obj.quality
    }
    // quality值越小，所绘制出的图像越模糊
    let base64 = canvas.toDataURL('image/jpeg', quality)
    // 回调函数返回base64的值
    callback(base64)
  }
}



/**
 * @author: 时光@
 * @description: 图片转成base64
 * @param {*} img
 * @param {*} dir
 * @param {*} next
 * @return {*}
 */
export function getImgData(img, dir, next) {
  let image = new Image()
  image.onload = function () {
    let degree = 0
    let drawWidth,
      drawHeight,
      width,
      height
    drawWidth = this.naturalWidth
    drawHeight = this.naturalHeight
    // 以下改变一下图片大小
    let canvas = document.createElement('canvas')
    canvas.width = width = drawWidth
    canvas.height = height = drawHeight
    let context = canvas.getContext('2d')
    // 判断图片方向，重置canvas大小，确定旋转角度，iphone默认的是home键在右方的横屏拍摄方式
    switch (dir) {
      // iphone横屏拍摄，此时home键在左侧
      case 3:
        degree = 180
        drawWidth = -width
        drawHeight = -height
        break
      // iphone竖屏拍摄，此时home键在下方(正常拿手机的方向)
      case 6:
        canvas.width = height
        canvas.height = width
        degree = 90
        drawWidth = width
        drawHeight = -height
        break
      // iphone竖屏拍摄，此时home键在上方
      case 8:
        canvas.width = height
        canvas.height = width
        degree = 270
        drawWidth = -width
        drawHeight = height
        break
    }
    // 使用canvas旋转校正
    context.rotate((degree * Math.PI) / 180)
    context.drawImage(this, 0, 0, drawWidth, drawHeight)
    // 返回校正图片
    next(canvas.toDataURL('image/jpeg', 0.8))
  }
  image.src = img
}


/**
 * @author: 时光@
 * @description: 判断是否为合法的url
 * @param {*} URL
 * @return {*}
 */
export const checkUrl = (URL) => {
  var str = URL,
    Expression = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/,
    objExp = new RegExp(Expression);
  if (objExp.test(str) == true) {
    return true
  } else {
    return false
  }
}

/**
 * @author: 时光@
 * @description: 获取url参数
 * @param {*} url
 * @param {*} type ，默认为 object ,如果是 string 则返回 string 类型的参数
 * @return {*} 
 */
export const getUrlParam = (url, type = "object") => {
  const paramsObj = {}
  const paramsStr = url.slice(url.indexOf("?") + 1, url.length - 1)
  const paramsArr = paramsStr.split("&")
  for (let i = 0; i < paramsArr.length; i++) {
    const keyValueArr = paramsArr[i].split("=")
    paramsObj[keyValueArr[0]] = keyValueArr[1]
  }
  if (type === "object") {
    // 返回对象
    return paramsObj

  } else {
    // 返回 string
    return paramsStr
  }
}



/**
 * @author: 时光@
 * @description: 获取URL的参数并转成对象
 * @param {*} url
 * @return {*}
 */
export const urlParametersToObj = url =>
  (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(
    (a, v) => ((a[v.slice(0, v.indexOf('='))] = v.slice(v.indexOf('=') + 1)), a),
    {}
  );



/**
 * @author: 时光@
 * @description: 将对象转换成url格式
 * @param {*} obj
 * @return {*}
 */
export const objToUrlString = (obj) => {
  if (typeof obj !== "object" || obj == null) {
    throw new Error(`${obj} must be an objcet`)
  }
  const data = []
  Object.keys(obj).forEach(key => data.push(`${key}=${obj[key]}`))
  return data.join("&")
}


/**
 * @author: 时光@
 * @description: 封装jsonp
 * @param {*} url
 * @param {*} params
 * @param {*} callbackName
 * @return {*}
 * 
 * 使用示例: 
 * jsonp({
      url: 'http://localhost:3000',
      params: {
        a: 1,
        b: 2
      }
    }).then(data => {
      // 拿到数据进行处理
      console.log(data); // 数据包
    })
 */
export const jsonp = ({ url, params, callbackName }) => {
  const generateURL = () => {
    let dataStr = '';
    for (let key in params) {
      dataStr += `${key}=${params[key]}&`;
    }
    dataStr += `callback=${callbackName}`;
    return `${url}?${dataStr}`;
  };
  return new Promise((resolve, reject) => {
    // 初始化回调函数名称
    callbackName = callbackName || Math.random().toString.replace(',', '');
    // 创建 script 元素并加入到当前文档中
    let scriptEle = document.createElement('script');
    scriptEle.src = generateURL();
    document.body.appendChild(scriptEle);
    // 绑定到 window 上，为了后面调用
    window[callbackName] = (data) => {
      resolve(data);
      // script 执行完了，成为无用元素，需要清除
      document.body.removeChild(scriptEle);
    }
  });
}


// 检测是否为函数/window
export const isFunction = (obj) => {
  return typeof obj === "function" && typeof obj.nodeType !== "number";
};

// 检测是否为window
export const isWindow = (obj) => {
  return obj != null && obj === obj.window;
};



// 检测是否为数据或者类数组
export const isArrayLike = (obj) => {
  let length = !!obj && "length" in obj && obj.length,
    type = toType(obj);
  if (isFunction(obj) || isWindow(obj)) return false;
  return type === "array" || length === 0 ||
    typeof length === "number" && length > 0 && (length - 1) in obj;
}

// 遍历数组/类数组/对象
export const each = (obj, callback) => {
  callback = callback || Function.prototype;
  if (isArrayLike(obj)) {
    for (let i = 0; i < obj.length; i++) {
      let item = obj[i],
        result = callback.call(item, item, i);
      if (result === false) break;
    }
    return obj;
  }
  for (let key in obj) {
    if (!hasOwn.call(obj, key)) break;
    let item = obj[key],
      result = callback.call(item, item, key);
    if (result === false) break;
  }
  return obj;
};

// 判断是否为一个对象
export const isObj = (value) => {
  // 是否为普通对象
  return toType(value) === "object";
}

// 对象合并
/*
 * 几种情况的分析
 *   A->options中的key值  B->params中的key值
 *   1.A&B都是原始值类型:B替换A即可
 *   2.A是对象&B是原始值:抛出异常信息
 *   3.A是原始值&B是对象:B替换A即可
 *   4.A&B都是对象:依次遍历B中的每一项,替换A中的内容
 */
export const merge = (options, params = {}) => {
  each(params, (_, key) => {
    let isA = isObj(options[key]),
      isB = isObj(params[key]);
    if (isA && !isB) throw new TypeError(`${key} in params must be object`);
    if (isA && isB) {
      options[key] = merge(options[key], params[key]);
      return;
    }
    options[key] = params[key];
  });
  return options;
}


// 浅克隆
export const shadowClone = (obj) => {
  if (obj == null) return obj
  let type = toType(obj),
    Ctor = obj.constructor;
  if (/^(symbol|bigint)$/i.test(type)) return Object(obj);
  if (/^(regexp|date)$/i.test(type)) return new Ctor(obj);
  if (/^error$/i.test(type)) return new Ctor(obj.message);
  if (/^function$/i.test(type)) {
    return function () {
      return obj.call(this, ...arguments);
    };
  }
  if (/^(object|array)$/i.test(type)) {
    let keys = [...Object.keys(obj), ...Object.getOwnPropertySymbols(obj)],
      result = new Ctor();
    each(keys, key => {
      result[key] = obj[key];
    });
    return result;
  }
  return obj;
}




// 深克隆
export const deepClone = (obj, cache = new Set()) => {
  if (obj == null) return obj
  let type = toType(obj),
    Ctor = obj.constructor;
  if (!/^(object|array)$/i.test(type)) return shallowClone(obj);
  // 解决循环引用
  if (cache.has(obj)) return obj;
  cache.add(obj);
  let keys = [
    ...Object.keys(obj),
    ...Object.getOwnPropertySymbols(obj)
  ],
    result = new Ctor();
  each(keys, key => {
    result[key] = deepClone(obj[key], cache);
  });
  return result;
}



//  转换成驼峰
// "get-element-by-id" => getElementById
export const transform2Hump = (str) => {
  const result = []
  const array = str.split("-")
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    const transformStr = i === 0 ? element : element.charAt(0).toLocaleUpperCase() + element.substring(1)
    result.push(transformStr)
  }
  return result.join("")
}


// 判断是否是promise
export const isPromise = (value) => {
  if ((typeof value === "object" && value != null) || typeof value === "function") {
    if (typeof value.then === "function") {
      return true
    } else {
      return false
    }
  } else {
    return false
  }
}

// 判断数组是不是一样的
export const arrayEqual = (arr1, arr2) => {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false
  }
  return true
}


// 判断两个对象是否一致
export const compareObj = (A, B) => {
  const keysA = Object.keys(A)
  const keysB = Object.keys(B)

  // 健长不一致的话就更谈不上相等了
  if (keysA.length !== keysB.length) return false

  for (let i = 0; i < keysA.length; i++) {
    const key = keysA[i]

    // 类型不等的话直接就不相等了
    if (typeof A[key] !== typeof B[key]) return false

    // 当都不是对象的时候直接判断值是否相等
    if (typeof A[key] !== 'object' && typeof B[key] !== 'object' && A[key] !== B[key]) {
      return false
    }

    if (Array.isArray(A[key]) && Array.isArray(B[key])) {
      if (!arrayEqual(A[key], B[key])) return false
    }

    // 递归判断
    if (typeof A[key] === 'object' && typeof B[key] === 'object') {
      if (!compareObj(A[key], B[key])) return false
    }
  }

  return true
}


// 判断对象是否存在循环引用
export const isHasCircle = (obj) => {
  let hasCircle = false
  const map = new Map()

  function loop(obj) {
    const keys = Object.keys(obj)

    keys.forEach(key => {
      const value = obj[key]
      if (typeof value == 'object' && value !== null) {
        if (map.has(value)) {
          hasCircle = true
          return
        } else {
          map.set(value)
          loop(value)
        }
      }
    })

  }
  loop(obj)

  return hasCircle
}
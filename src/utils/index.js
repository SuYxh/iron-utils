/*
 * @Author: 时光@
 * @Date: 2021-04-26 14:43:16
 * @LastEditTime: 2021-04-26 22:23:23
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
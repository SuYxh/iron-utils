/*
 * @Author: 时光@
 * @Date: 2021-04-26 14:43:16
 * @LastEditTime: 2021-04-26 14:43:52
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
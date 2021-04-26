/*
 * @Author: 时光@
 * @Date: 2021-04-26 22:11:50
 * @LastEditTime: 2021-04-26 22:15:36
 * @Description:  日期处理
 */


/**
 * @author: 时光@
 * @description:  日期格式化
 * @param {*} date
 * @param {*} fmt
 * @return {*}
 */
export function dateFormat(date, fmt) {
  var o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds(),
    'q+': Math.floor((date.getMonth() + 3) / 3),
    S: date.getMilliseconds()
  }
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
  }
  return fmt
}




/**
 * @author: 时光@
 * @description: 时间格式化
 * @param {*} time
 * @param {*} s
 * @return {*}
 */
export function TimeFormat(time, s) {
  if (!time) {
    return ''
  }
  if (s) {
    time = time * 1000
  }
  var date = new Date(time)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  var hour = date.getHours()
  var min = date.getMinutes()
  var second = date.getSeconds()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  hour = hour < 10 ? '0' + hour : hour
  min = min < 10 ? '0' + min : min
  second = second < 10 ? '0' + second : second
  return year + '-' + month + '-' + day + ' ' + hour + ':' + min + ':' + second
}



/**
 * @author: 时光@
 * @description: 日期年月日
 * @param {*} n
 * @return {*}
 */
export function getDate(n) {
  var date = new Date()
  date.setDate(date.getDate() + n)
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()
  month = month < 10 ? '0' + month : month
  day = day < 10 ? '0' + day : day
  return year + '-' + month + '-' + day
}
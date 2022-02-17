// 数组
import {
  complementForObjArray,
  complementForSimpleArray,
  intersectionForObjArray,
  intersectionForSimpleArray,
  subtractionForObjArray,
  subtractionForSimpleArray,
  unionForSimpleArray
} from './array/index'
// 浏览器方法
import {
  clearCookies,
  copyToClipboard,
  getSelectedText,
  isAppleDevice,
  isTabInView,
  redirect,
  scrolledToBottom,
  scrollToTop,
  showPrintDialog
} from './browser/index'
// 颜色
import { isColor, randomHex, rgb2hex } from './color/index'
import stairStepAccessTable from './color/stair-step-access-table'
// 日期
import { dayDif, dayOfYear, isDateValid } from './date/index'
// 数字
import {
  average,
  getRandomArbitrary,
  getRandomInt,
  getRandomIntInclusive,
  isEven,
  round,
  thousandNum
} from './number/index'
import {
  celsiusToFahrenheit,
  fahrenheitToCelsius,
  isEmptyObj,
  randomBoolean,
  typeOfValue
} from './other/index'
// 字符串
import {
  capitalize,
  parseUrlSearch,
  randomString,
  reverseStr,
  stringifyUrl,
  stripHtml,
  truncateString
} from './string/index'

const xtools = {
  isColor,
  rgb2hex,
  randomHex,
  stairStepAccessTable,
  intersectionForSimpleArray,
  intersectionForObjArray,
  unionForSimpleArray,
  subtractionForSimpleArray,
  subtractionForObjArray,
  complementForSimpleArray,
  complementForObjArray,
  reverseStr,
  stringifyUrl,
  capitalize,
  randomString,
  truncateString,
  stripHtml,
  parseUrlSearch,
  thousandNum,
  isEven,
  average,
  round,
  getRandomArbitrary,
  getRandomInt,
  getRandomIntInclusive,
  isDateValid,
  dayDif,
  dayOfYear,
  copyToClipboard,
  getSelectedText,
  clearCookies,
  scrollToTop,
  isTabInView,
  isAppleDevice,
  scrolledToBottom,
  redirect,
  showPrintDialog,
  randomBoolean,
  typeOfValue,
  isEmptyObj,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
}

export {
  isColor,
  rgb2hex,
  randomHex,
  stairStepAccessTable,
  intersectionForSimpleArray,
  intersectionForObjArray,
  unionForSimpleArray,
  subtractionForSimpleArray,
  subtractionForObjArray,
  complementForSimpleArray,
  complementForObjArray,
  reverseStr,
  stringifyUrl,
  capitalize,
  randomString,
  truncateString,
  stripHtml,
  parseUrlSearch,
  thousandNum,
  isEven,
  average,
  round,
  getRandomArbitrary,
  getRandomInt,
  getRandomIntInclusive,
  isDateValid,
  dayDif,
  dayOfYear,
  copyToClipboard,
  getSelectedText,
  clearCookies,
  scrollToTop,
  isTabInView,
  isAppleDevice,
  scrolledToBottom,
  redirect,
  showPrintDialog,
  randomBoolean,
  typeOfValue,
  isEmptyObj,
  celsiusToFahrenheit,
  fahrenheitToCelsius,
}

export default xtools

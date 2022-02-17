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
}

export default xtools

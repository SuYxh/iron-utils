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
import isColor from './color/is-color'
import rgb2hex from './color/rgb2hex'
import stairStepAccessTable from './color/stair-step-access-table'
// 日期
import { dayDif, dayOfYear, isDateValid } from './date/index'
// 数字
import { thousandNum } from './number/index'
// 字符串
import {
  capitalize,
  parseUrlSearch,
  randomString,
  reverseStr,
  stringifyUrl, stripHtml, truncateString
} from './string/index'




const xtools = {
  isColor,
  rgb2hex,
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
  isDateValid,
  dayDif,
  dayOfYear,
}

export {
  isColor,
  rgb2hex,
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
  isDateValid,
  dayDif,
  dayOfYear,
}

export default xtools

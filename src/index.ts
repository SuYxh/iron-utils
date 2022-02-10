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
// 数字
import { thousandNum } from './number/index'
// 字符串
import { parseUrlSearch, reverseStr, stringifyUrl } from './string/index'


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
  parseUrlSearch,
  thousandNum,
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
  parseUrlSearch,
  thousandNum,
}

export default xtools

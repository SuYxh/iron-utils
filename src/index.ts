// 数组 
import {
  complementForObjArray, complementForSimpleArray, intersectionForObjArray,
  intersectionForSimpleArray,
  subtractionForObjArray,
  subtractionForSimpleArray,
  unionForSimpleArray
} from './array/index'
// 颜色
import isColor from './color/is-color'
import rgb2hex from './color/rgb2hex'
import stairStepAccessTable from './color/stair-step-access-table'





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
}

export default xtools

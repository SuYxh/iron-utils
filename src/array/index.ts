type BaseTpye = string | number

/**
 * @author: 时光@
 * @description: 数组交集 普通数组
 * @param {T} arr1
 * @param {T} arr2
 * @return {*}
 * @example
 * ``` typescript
 *  const arr1 = [1, 2, 3, 4, 5 , 8 ,9],arr2 = [5, 6, 7, 8, 9];
 *  console.log(intersectionForSimpleArray(arr1,arr2)) //[5, 8, 9]
 * ```
 */
export function intersectionForSimpleArray<T extends BaseTpye>(
  arr1: T[],
  arr2: T[]
): T[] {
  return arr1.filter((val: T) => {
    return arr2.indexOf(val) > -1
  })
}

/**
 * @author: 时光@
 * @description: 数组交集 对象数组
 * @param {T} arr1
 * @param {T} arr2
 * @return {*}
 * @example
 * ``` typescript
 *  const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
 *  const arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
 *  console.log(intersectionForObjArray(arr1,arr2))  //  [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name5', id: 5 }]
 * ```
 */
export function intersectionForObjArray<T extends {}>(arr1: T[], arr2: T[]) {
  return arr2.filter((v: T) => {
    return arr1.some(n => JSON.stringify(n) === JSON.stringify(v))
  })
}

/**
 * @author: 时光@
 * @description: 数组并集 普通数组
 * @param {T} arr1
 * @param {T} arr2
 * @return {*}
 * @example
 * ```typescript
 *  const arr1 = [1, 2, 3, 4, 5, 8, 9]; const arr2 = [5, 6, 7, 8, 9];
 *  console.log(unionForSimpleArray(arr1,arr2)) // [1, 2, 3, 4, 5, 8, 9, 6, 7]
 * ```
 */
export function unionForSimpleArray<T extends BaseTpye>(arr1: T[], arr2: T[]) {
  return arr1.concat(arr2.filter(v => !arr1.includes(v)))
}

/**
 * @author: 时光@
 * @description: 数组并集 对象数组
 * @param {T} arr1
 * @param {T} arr2
 * @return {*}
 * @example
 * ``` typescript
 *  const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
 *  const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
 *  console.log(unionForObjArray(arr1,arr2))  // [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]
 * ```
 */

// function unionForObjArray<T, U extends keyof T>(
//   arr1: T[],
//   arr2: T[],
//   item: U
// ) {
//   let arr3 = arr1.concat(arr2)
//   let result = []
//   let obj = []
//   result = arr3.reduce(function (prev, cur: T, index, arr) {
//     obj[cur[item]] ? '' : (obj[cur[item]] = true && prev.push(cur))
//     return prev
//   }, [])
//   return result
// }

/**
 * @author: 时光@
 * @description: 数组差集 普通数组 数组arr1相对于arr2所没有的
 * @param {T} arr1
 * @param {T} arr2
 * @return {*}
 * @example
 * ```typescript
 *  const arr1 = [1, 2, 3, 4, 5, 8, 9]; const arr2 = [5, 6, 7, 8, 9];
 *  console.log(subtractionForSimpleArray(arr1,arr2)) // [1, 2, 3, 4 ]
 * ```
 */
export function subtractionForSimpleArray<T extends BaseTpye>(
  arr1: T[],
  arr2: T[]
) {
  return arr1.filter(item => !new Set(arr2).has(item))
}

/**
 * @author: 时光@
 * @description:   数组差集 对象数组 数组arr1相对于arr2所没有的
 * @param {T} arr1
 * @param {T} arr2
 * @return {*}
 * @example
 * ``` typescript
 *  const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
 *   const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
 *  console.log(subtractionForObjArray(arr1,arr2))  //  [ { name: 'name2', id: 2 }, { name: 'name3', id: 3 } ]
 * ```
 */
export function subtractionForObjArray<T extends {}>(arr1: T[], arr2: T[]) {
  return arr1.filter(function (v) {
    return arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
  })
}

/**
 * @author: 时光@
 * @description: 数组补集 普通数组 两个数组各自没有的集合
 * @param {T} arr1
 * @param {T} arr2
 * @return {*}
 * @example
 * ```typescript
 *  const arr1 = [1, 2, 3, 4, 5, 8, 9]; const arr2 = [5, 6, 7, 8, 9];
 *  console.log(complementForSimpleArray(arr1,arr2)) // [1, 2, 3, 4, 6, 7 ]
 * ```
 */
export function complementForSimpleArray<T extends BaseTpye>(
  arr1: T[],
  arr2: T[]
) {
  return Array.from(
    new Set(
      arr1
        .concat(arr2)
        .filter(v => !new Set(arr1).has(v) || !new Set(arr2).has(v))
    )
  )
}

/**
 * @author: 时光@
 * @description:  数组补集 对象数组 两个数组各自没有的集合
 * @param {T} arr1
 * @param {T} arr2
 * @return {*}
 * @example
 * ``` typescript
 *  const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
 *   const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
 *  console.log(complementForObjArray(arr1,arr2))  //  [{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]
 * ```
 */
export function complementForObjArray<T extends {}>(arr1: T[], arr2: T[]) {
  const arr3 = arr1.concat(arr2)
  return arr3.filter(function (v) {
    return (
      arr1.every(n => JSON.stringify(n) !== JSON.stringify(v)) ||
      arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
    )
  })
}

/**
 * @author: 时光@
 * @description: 数组去重 普通数组
 * @param {T} arr
 * @return {*}
 * @example
 * ```typescript
 *  const arr1 = [1, 2, 3, 3, 4, 4];
 *  console.log(toHeavyForSimpleArray(arr1)) // [1, 2, 3, 4 ]
 * ```
 */
export function toHeavyForSimpleArray<T extends BaseTpye>(arr: T[]) {
  return Array.from(new Set(arr))
}

/**
 * @author: 时光@
 * @description: 数组去重 对象数组
 * @param {T} arr
 * @return {*}
 * @example
 * ```typescript
 *  const arr = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
 *  console.log(toHeavyForObjArray(arr)) // [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]
 * ```
 */
export function toHeavyForObjArray<T extends BaseTpye>(arr: T[]) {
  const result:T[] = []
  arr.forEach(item => {
    !result.some(v => JSON.stringify(v) === JSON.stringify(item)) &&
      result.push(item)
  })
  return result
}



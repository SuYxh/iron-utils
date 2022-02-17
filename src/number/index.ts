/**
 * @author: 时光@
 * @description: 数字千分位
 * @param {*} num
 * @return {*}
 * @example
 * ```typescript
 * console.log(thousandNum(1234)) // "1,234"
 * console.log(thousandNum(1234.0)) // "1,234"
 * console.log(thousandNum(0.1234)) // "0.123,4"
 * console.log(thousandNum(1234.5678)) // "1,234.567,8"
 * ```
 */
export function thousandNum(num: number = 0): string {
  const str = (+num).toString().split('.')
  const int = nums =>
    nums
      .split('')
      .reverse()
      .reduceRight((t, v, i) => t + (i % 3 ? v : `${v},`), '')
      .replace(/^,|,$/g, '')
  const dec = nums =>
    nums
      .split('')
      .reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), '')
      .replace(/^,|,$/g, '')
  return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0])
}

/**
 * @author: 时光@
 * @description: 判断一个数字是奇数还是偶数：
 * @param {number} num
 * @return {*}
 *```typescript
 * isEven(996) // true
 * ```
 */
export function isEven(num: number) {
  return num % 2 === 0
}

/**
 * @author: 时光@
 * @description: 获得一组数的平均值
 * @param {array} args
 * @return {*}
 *```typescript
 * average(1, 2, 3, 4, 5);   // 3
 * ```
 */
export function average(...args) {
  return args.reduce((a, b) => a + b) / args.length
}

//

/**
 * @author: 时光@
 * @description: 指定位数四舍五入
 * @param {number} n
 * @param {number} d
 * @return {*}
 *```typescript
 * round(1.005, 2) //1.01
 * round(1.555, 2) //1.56
 * ```
 */
export function round(n: number, d: number) {
  return Number(Math.round((n + 'e' + d) as unknown as number) + 'e-' + d)
}

/**
 * @author: 时光@
 * @description: 得到一个两数之间的随机数,返回了一个在指定值之间的随机数。这个值不小于 min（有可能等于），并且小于（不等于）max。
 * @param {number} min
 * @param {number} max
 * @return {*}
 */
export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min
}

/**
 * @author: 时光@
 * @description: 得到一个两数之间的随机整数,返回了一个在指定值之间的随机整数。这个值不小于 min （如果 min 不是整数，则不小于 min 的向上取整数），且小于（不等于）max。
 * @param {*} min
 * @param {*} max
 * @return {*}
 */
export function getRandomInt(min: number, max: number) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min //不含最大值，含最小值
}

/**
 * @author: 时光@
 * @description: 得到一个两数之间的随机整数，包括两个数在内
 * @param {*} min
 * @param {*} max
 * @return {*}
 */
export function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min //含最大值，含最小值
}

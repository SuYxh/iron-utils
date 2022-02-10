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



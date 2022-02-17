/**
 * @author: 时光@
 * @description: 检测给出的日期是否有效
 * @param {string} date
 * @return {*}
 * ```typescript
 * isDateValid("December 17, 1995 03:24:00");  // true
 * ```
 */
export function isDateValid(date: string) {
  return !Number.isNaN(new Date(date).valueOf())
}

/**
 * @author: 时光@
 * @description: 计算两个日期之间的间隔时间
 * @param {Date} date1
 * @param {Date} date2
 * @return {*}
 * ```typescript
 * dayDif(new Date("2021-11-3"), new Date("2022-2-1"))  // 90
 * ```
 */
export function dayDif(date1: Date, date2: Date) {
  return Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / 86400000)
}



/**
 * @author: 时光@
 * @description:  查找日期位于一年中的第几天
 * @param {Date} date
 * @return {*}
 * ```typescript
 * dayOfYear(new Date());   // 307
 * ```
 */
export function dayOfYear(date: Date) {
  return Math.floor(
    ((date as any) - (new Date(date.getFullYear(), 0, 0) as any)) /
      1000 /
      60 /
      60 /
      24
  )
}


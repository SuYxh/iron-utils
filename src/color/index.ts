/**
 * @author: 时光@
 * @description: 判断字符串是否是十六进制的颜色值
 * @param {string} value
 * @return {*}
 */
export function isColor(value: string): boolean {
  return /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/.test(value)
}

/**
 * @author: 时光@
 * @description: 将RGB转化为十六机制
 * @param {number} r
 * @param {number} g
 * @param {number} b
 * @return {*}
 * ```typescript
 * rgb2hex(255, 255, 255);  // '#ffffff'
 * ```
 */
export function rgb2hex(r: number, g: number, b: number): string {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
}

/**
 * @author: 时光@
 * @description: 获取一个随机的十六进制颜色值
 * @param {*}
 * @return {*}
 *```typescript
 * randomHex();  // '#9bb78b'
 * ```
 */
export function randomHex() {
  return `#${Math.floor(Math.random() * 0xffffff)
    .toString(16)
    .padEnd(6, '0')}`
}

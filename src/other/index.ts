/**
 * @author: 时光@
 * @description: 随机布尔值
 * @param {*}
 * @return {*}
 */
export function randomBoolean() {
  return Math.random() >= 0.5
}

/**
 * @author: 时光@
 * @description: 判断数据类型
 * @param {any} val
 * @return {*}
 * @example
 * ```typescript
 * typeOfValue('');     // string
 * typeOfValue(0);      // number
 * typeOfValue();       // undefined
 * typeOfValue(null);   // null
 * typeOfValue({});     // object
 * typeOfValue([]);     // array
 * typeOfValue(0);      // number
 * typeOfValue(() => {});  // function
 * ```
 */
export function typeOfValue(val?: any) {
  return Object.prototype.toString.call(val).slice(8, -1).toLowerCase()
}

/**
 * @author: 时光@
 * @description: 检测对象是否为空
 * @param {any} obj
 * @return {*}
 */
export function isEmptyObj(obj: any) {
  return Reflect.ownKeys(obj).length === 0 && obj.constructor === Object
}

/**
 * @author: 时光@
 * @description: 摄氏度转华氏度
 * @param {number} val
 * @return {*}
 * @example
 * ```typescript
 * celsiusToFahrenheit(15);    // 59
 * celsiusToFahrenheit(0);     // 32
 * celsiusToFahrenheit(-20);   // -4
 * ```
 */
export function celsiusToFahrenheit(celsius: number) {
  return (celsius * 9) / 5 + 32
}

/**
 * @author: 时光@
 * @description: 华氏度转摄氏度
 * @param {number} val
 * @return {*}
 * @example
 * ```typescript
 * fahrenheitToCelsius(59);    // 15
 * fahrenheitToCelsius(32);    // 0
 * ```
 */
export function fahrenheitToCelsius(fahrenheit: number) {
  return ((fahrenheit - 32) * 5) / 9
}

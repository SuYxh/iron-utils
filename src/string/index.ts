
/**
 * @author: 时光@
 * @description: 字符串翻转
 * @param {*} str
 * @return {*}
 * @example
 * ```typescript
 * const str = 'reduce123' 
 * console.log(reverseStr(str)) // "321recuder"
 * ```
 */
export function reverseStr(str: string = ''):string {
  return str.split('').reduceRight((t, v) => t + v)
}
// 另一种实现
// const reverse = str => str.split('').reverse().join('');


/**
 * @author: 时光@
 * @description: 将对象序列化成url参数
 * @param {*} search
 * @return {*}
 * @example
 * ```typescript
 * console.log(stringifyUrl({ age: 18, name: "jarvis" })); // "?age=18&name=jarvis"
 * ```
 */
export function stringifyUrl<T>(search:T) {
  if (JSON.stringify(search) === '{}') {
    return ''
  }
  return Object.entries(search).reduce(
    (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
    Object.keys(search).length ? "?" : ""
  ).replace(/&$/, "");
}


/**
 * @author: 时光@
 * @description: 路由参数反序列化得到对象
 * @param {*} search
 * @return {*}
 * @example
 * ```typescript
 * console.log(parseUrlSearch('?age=18&name=jarvis'));  // { age: "18", name: "jarvis" }
 * ```
 */
export function parseUrlSearch(search:string) {
  return search
    .replace(/(^\?)|(&$)/g, '')
    .split('&')
    .reduce((t, v) => {
      const [key, val] = v.split('=')
      t[key] = decodeURIComponent(val)
      return t
    }, {})
}


/**
 * @author: 时光@
 * @description: 字符串首字母大写
 * @param {string} str
 * @return {*}
 * ```typescript
 * capitalize("hello world")  // Hello world
 * ```
 */
export function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}



/**
 * @author: 时光@
 * @description: 随机字符串
 * @param {*}
 * @return {*}
 *```typescript
 * randomString() // msp22a5pm8q
 * ```
 */
export function randomString() {
  return Math.random().toString(36).slice(2)
}




/**
 * @author: 时光@
 * @description:  截断字符串
 * @param {string} string
 * @param {number} length
 * @return {*}
 *```typescript
 * truncateString('Hi, I should be truncated because I am too loooong!', 36)   // 'Hi, I should be truncated because...'
 * ```
 */
export function truncateString(string:string, length:number) {
  return string.length < length ? string : `${string.slice(0, length - 3)}...`
}


/**
 * @author: 时光@
 * @description: 去除字符串中的HTML元素：
 * @param {string} html
 * @return {*}
 */
export function stripHtml(html: string) {
  return new DOMParser().parseFromString(html, 'text/html').body.textContent || ''
}



  

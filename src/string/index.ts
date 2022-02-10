
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



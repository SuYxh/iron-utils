/**
 * @author: 时光@
 * @description: 复制内容到剪切板
 * @param {string} text
 * @return {*}
 * @example
 * ```typescript
 * copyToClipboard('Hello World')
 * ```
 */
export function copyToClipboard(text: string) {
  return navigator.clipboard.writeText(text)
}

/**
 * @author: 时光@
 * @description: 获取选中的文本,该方法通过内置的 getSelection 属性获取用户选择的文本
 * @param {*}
 * @return {*}
 */
export function getSelectedText() {
  return (window as any).getSelection().toString()
}

/**
 * @author: 时光@
 * @description: 清除所有cookie,该方法可以通过使用 document.cookie 来访问 cookie 并清除存储在网页中的所有 cookie
 * @param {*}
 * @return {*}
 */
export function clearCookies() {
  return document.cookie
    .split(';')
    .forEach(
      cookie =>
        (document.cookie = cookie
          .replace(/^ +/, '')
          .replace(/=.*/, `=;expires=${new Date(0).toUTCString()};path=/`))
    )
}

/**
 * @author: 时光@
 * @description: 滚动到页面顶部
 * @param {type} params
 * @return {*}
 */
export function scrollToTop() {
  return window.scrollTo(0, 0)
}

/**
 * @author: 时光@
 * @description: 判断当前标签页是否激活
 * @param {*}
 * @return {*}
 */
export function isTabInView() {
  return !document.hidden
}

/**
 * @author: 时光@
 * @description: 判断当前是否是苹果设备
 * @param {*}
 * @return {*}
 */
export function isAppleDevice() {
  return /Mac|iPod|iPhone|iPad/.test(navigator.platform)
}

/**
 * @author: 时光@
 * @description: 判断页面是否已经底部
 * @param {*}
 * @return {*}
 */
export function scrolledToBottom() {
  return (
    document.documentElement.clientHeight + window.scrollY >=
    document.documentElement.scrollHeight
  )
}

/**
 * @author: 时光@
 * @description: 重定向到一个URL
 * @param {string} url
 * @return {*}
 * @example
 * ```typescript
 * redirect('https://www.baidu.com/')
 * ```
 */
export function redirect(url: string) {
  location.href = url
}

/**
 * @author: 时光@
 * @description: 打开浏览器打印框
 * @param {*}
 * @return {*}
 */
export function showPrintDialog() {
  window.print()
}

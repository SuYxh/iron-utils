/*
 * @Author: 时光@
 * @Date: 2021-05-23 22:29:45
 * @LastEditTime: 2021-05-23 22:30:28
 * @Description: 广度优先遍历
 */


export const bfs = (data) => {
  let result = []
  let queue = data
  while (queue.length > 0) {
    [...queue].forEach(child => {
      queue.shift()
      result.push(child.name)
      child.children && (queue.push(...child.children))
    })
  }
  return result.join(",")
}
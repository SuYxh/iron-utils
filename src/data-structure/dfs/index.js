/*
 * @Author: 时光@
 * @Date: 2021-05-23 22:28:52
 * @LastEditTime: 2021-05-23 22:29:24
 * @Description:深度优先遍历
 */


export const dfs = (data) => {
  const result = []
  data.forEach(item => {
    // item => {name:"a",children:[{name:"a1"}]}
    const map = data => {
      result.push(data.name)
      data.children && data.children.forEach(child => map(child))
    }
    map(item)
  })
  return result.join(",")
}
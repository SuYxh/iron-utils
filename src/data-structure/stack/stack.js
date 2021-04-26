/*
 * @Author: 时光@
 * @Date: 2021-04-26 14:36:11
 * @LastEditTime: 2021-04-26 14:36:29
 * @Description:
 */

export class Stack {
  constructor() {
    this.stack = []
  }
  // push(item) 压栈操作，往栈里面添加元素
  push(item) {
    this.stack.push(item)
  }
  // pop() 出栈操作，从栈中取出元素，并返回取出的那个元素
  pop() {
    return this.stack.pop()
  }
  //firstElement() 查看栈顶元素
  firstElement() {
    const length = this.stack.length
    return this.stack[length - 1];
  }
  // isEmpty() 判断栈是否为空
  isEmpty() {
    return this.stack.length === 0
  }
  // size() 获取栈中元素个数
  size() {
    return this.stack.length;
  }

  // toString() 返回以字符串形式的栈内元素数据
  toString() {
    let result = '',
      length = this.stack.length,
      index = 0
    for (; index < length; index++) {
      const element = this.stack[index];
      result += element + ' ';
    }
    return result
  }
}

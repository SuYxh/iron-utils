/*
 * @Author: 时光@
 * @Date: 2021-04-26 14:38:42
 * @LastEditTime: 2021-04-26 14:38:51
 * @Description:
 */

export class Queue {
  constructor() {
    this.queue = []
  }

  // enqueue(item) 入队，将元素加入到队列中
  enqueue(item) {
    this.queue.push(item)
  }

  // dequeue() 出队，从队列中删除队头元素，返回删除的那个元素
  dequeue() {
    return this.queue.shift()
  }


  // firstElement() 查看队列的队头元素
  firstElement() {
    return this.queue[0];
  }

  // isEmpty() 查看队列是否为空
  isEmpty() {
    return this.queue.length === 0;
  }

  // size() 查看队列中元素的个数
  size() {
    return this.queue.length;
  }

  // toString() 将队列中的元素以字符串形式返回
  toString() {
    let result = '',
      length = this.queue.length,
      index = 0
    for (; index < length; index++) {
      const element = this.queue[index];
      result += element + ' ';
    }
    return result
  }

}
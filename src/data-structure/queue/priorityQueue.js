/*
 * @Author: 时光@
 * @Date: 2021-04-26 14:39:27
 * @LastEditTime: 2021-04-26 14:57:00
 * @Description:
 */

import { Queue } from './queue';

/**
 * 优先队列结构的封装
 */

// 优先队列内部的元素类
class QueueElement {
  constructor(element, priority) {
    this.element = element;
    this.priority = priority;
  }
}

// 优先队列类（继承 Queue 类）
export class PriorityQueue extends Queue {

  constructor() {
    super();
  }

  // enqueue(element, priority) 入队，将元素按优先级加入到队列中
  // 重写 enqueue()
  enqueue(element, priority) {
    // 根据传入的元素，创建 QueueElement 对象
    const queueElement = new QueueElement(element, priority);
    if (this.isEmpty()) {
      // 如果为空，不用判断优先级，直接添加
      this.queue.push(queueElement)
    } else {
      // 定义一个变量记录是否成功添加了新元素
      let added = false
      for (let i = 0; i < this.queue.length; i++) {
        const element = this.queue[i];
        // 让新插入的元素进行优先级比较，priority 值越小，优先级越大
        if (queueElement.priority < element.priority) {
          // 在指定的位置插入元素
          this.queue.splice(i, 0, queueElement)
          added = true
          break
        }
      }
      // 如果遍历完所有元素，优先级都大于新插入的元素，就将新插入的元素插入到最后
      if (!added) {
        this.queue.push(queueElement);
      }
    }
  }

  // dequeue() 出队，从队列中删除前端元素，返回删除的元素
  // 继承 Queue 类的 dequeue()
  dequeue() {
    return super.dequeue()
  }


  // firstElement() 查看队列的前端元素
  // 继承 Queue 类的 firstElement()
  firstElement() {
    return super.firstElement();
  }

  // isEmpty() 查看队列是否为空
  // 继承 Queue 类的 isEmpty()
  isEmpty() {
    return super.isEmpty();
  }

  // size() 查看队列中元素的个数
  // 继承 Queue 类的 size()
  size() {
    return super.size();
  }

  // toString() 将队列中元素以字符串形式返回
  // 重写 toString()
  toString() {
    let result = '';
    for (let item of this.items) {
      result += item.element + '-' + item.priority + ' ';
    }
    return result;
  }

  toString() {
    let result = '',
      length = this.queue.length,
      index = 0
    for (; index < length; index++) {
      const element = this.queue[index];
      result += element.element + '-' + element.priority + ' ';
    }
    return result
  }
}


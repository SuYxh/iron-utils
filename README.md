## iron-utils

> 前端常用工具库



### 函数

#### 1、防抖

- 语法: `debounce(callback, wait)`
- 功能: 创建一个防抖动函数，该函数会从上一次被调用后，延迟 `wait` 毫秒后调用 `callback`

```js
<button id="handle">正常处理</button>
<button id="debounce">测试函数防抖</button>

<script src="../dist/x-utils.js"></script>
<script>
/* 处理点击事件的回调函数 */
function handleClick(event) { // 处理事件的回调
  console.log('处理点击事件', this, event)
}

document.getElementById('handle').onclick = handleClick
document.getElementById('debounce').onclick = xUtils.debounce(handleClick, 2000)
```



#### 2、节流

- 语法: `throttle(callback, wait)`
- 功能: 创建一个节流函数，在 wait 毫秒内最多执行 `callback` 一次

```js
<button id="handle">正常处理</button>
<button id="throttle">测试函数节流</button>


<script src="../dist/x-utils.js"></script>
<script>
/* 处理点击事件的回调函数 */
function handleClick(event) { // 处理事件的回调
  console.log('处理点击事件', this, event)
}

document.getElementById('handle').onclick = handleClick
document.getElementById('throttle').onclick = xUtils.throttle(handleClick, 2000)
```



### 数据结构

#### 1、栈

- `push()` 添加一个新元素到栈顶位置。
- `pop()` 移除栈顶的元素，同时返回被移除的元素。
- `firstElement()` 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
- `isEmpty()` 如果栈里没有任何元素就返回 `true`，否则返回 `false`。
- `size()` 返回栈里的元素个数。这个方法和数组的 `length` 属性类似。
- `toString()` 将栈结构的内容以字符串的形式返回。

```js
const { PriorityQueue } = require('iron-utils')
const priorityQueue = new PriorityQueue();

// 入队 enqueue() 测试
priorityQueue.enqueue('A', 10);
priorityQueue.enqueue('B', 15);
priorityQueue.enqueue('C', 11);
priorityQueue.enqueue('D', 20);
priorityQueue.enqueue('E', 18);
console.log(priorityQueue.queue);
//--> output:
// QueueElement {element: "A", priority: 10}
// QueueElement {element: "C", priority: 11}
// QueueElement {element: "B", priority: 15}
// QueueElement {element: "E", priority: 18}
// QueueElement {element: "D", priority: 20}

// 出队 dequeue() 测试
priorityQueue.dequeue();
priorityQueue.dequeue();
console.log(priorityQueue.queue);
//--> output:
// QueueElement {element: "B", priority: 15}
// QueueElement {element: "E", priority: 18}
// QueueElement {element: "D", priority: 20}

// isEmpty() 测试
console.log(priorityQueue.isEmpty()); //--> false

// size() 测试
console.log(priorityQueue.size()); //--> 3

// toString() 测试
console.log(priorityQueue.toString()); //--> B-15 E-18 D-20
```



2、队列








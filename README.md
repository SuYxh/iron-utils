## iron-utils

> 前端常用工具库
> 
> 涵盖开发过程过程中的常用工具函数、验证规则、常用CSS样式、设计模式范例、封装常用数据结构等！
> 
> 项目将会长期维护、持续更新！更多详情请查看手册： https://utilsdoc.ironc.cn/ 
> 
> 项目正在努力建设中！！！！！！！



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

### 日期处理

1、`dateFormat()`  待验证

2、`TimeFormat()  `   待验证

3、`getDate()`    待验证



### 校验规则

1、校验手机号码： `isPhone()`

2、检验车牌号：`isCarNum()`

3、检验身份证号码：`isIdentityCard()`  (**身份证合法返回 ''(String) ,不合法返回错误信息(String)**)

4、判断输入框是否有表情：`isEmojiCharacter()`

5、邮箱验证 `isEmail()`

6、URL验证 `isURL()`

### 数据结构

#### 1、栈

- `push()` 添加一个新元素到栈顶位置。
- `pop()` 移除栈顶的元素，同时返回被移除的元素。
- `firstElement()` 返回栈顶的元素，不对栈做任何修改（该方法不会移除栈顶的元素，仅仅返回它）。
- `isEmpty()` 如果栈里没有任何元素就返回 `true`，否则返回 `false`。
- `size()` 返回栈里的元素个数。这个方法和数组的 `length` 属性类似。
- `toString()` 将栈结构的内容以字符串的形式返回。

```js
const { Stack } = require('iron-utils')
const stack = new Stack();

// push() 测试
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.items); //--> [1, 2, 3]

// pop() 测试
console.log(stack.pop()); //--> 3

// peek() 测试
console.log(stack.firstElement()); //--> 2

// isEmpty() 测试
console.log(stack.isEmpty()); //--> false

// size() 测试
console.log(stack.size()); //--> 2

// toString() 测试
console.log(stack.toString()); //--> 1 2
```



#### 2、队列

##### **普通队列**

- `enqueue(element)` 向队列尾部添加一个（或多个）新的项。
- `dequeue()` 移除队列的第一（即排在队列最前面的）项，并返回被移除的元素。
- `firstElement()` 返回队列中的第一个元素——最先被添加，也将是最先被移除的元素。队列不做任何变动（不移除元素，只返回元素信息与 Map 类的 peek 方法非常类似）。
- `isEmpty()` 如果队列中不包含任何元素，返回 true，否则返回 false。
- `size()` 返回队列包含的元素个数，与数组的 length 属性类似。
- `toString()` 将队列中的内容，转成字符串形式。

```js
const { Queue } = require('iron-utils')
const priorityQueue = new Queue();

// enqueue() 测试
queue.enqueue("a");
queue.enqueue("b");
queue.enqueue("c");
queue.enqueue("d");
console.log(queue.items); //--> ["a", "b", "c", "d"]

// dequeue() 测试
queue.dequeue();
queue.dequeue();
console.log(queue.items); //--> ["c", "d"]

// front() 测试
console.log(queue.firstElement()); //--> c

// isEmpty() 测试
console.log(queue.isEmpty()); //--> false

// size() 测试
console.log(queue.size()); //--> 2

// toString() 测试
console.log(queue.toString()); //--> c d
```



##### **优先队列**

> 优先队列继承普通队列

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



### 工具函数

1、`uuid()`

2、`toType()`

3、`param2Obj() ` 

4、`testMobileType()`

5、`dealImage()`

6、`getImgData()`



### 联系方式

![](http://qn.huat.xyz/content/20210426224404.jpg)
![](http://qn.huat.xyz/content/20210426224453.jpg)
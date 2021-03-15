/**
 * 
 * @param {Function} Fn 
 * @param  {...any} args 
 */
export function newInstance(Fn, ...args){
    //1. 创建一个新对象
    const obj = {};
    //2. 修改函数内部 this 指向新对象并执行
    const result = Fn.call(obj, ...args);
    //修改新对象的原型对象
    obj.__proto__ = Fn.prototype;
    //3. 返回新对象
    return result instanceof Object ? result : obj;
}
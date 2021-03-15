/**
 * 
 * @param {Array} arr 
 * @param  {...any} args 
 */
export function concat(arr, ...args){
    //声明一个空数组
    const result = [...arr];
    //遍历数组
    args.forEach(item => {
        //判断 item 是否为数组
        if(Array.isArray(item)){
            result.push(...item);
        }else{
            result.push(item);
        }
    });
    //返回 result
    return result;
}


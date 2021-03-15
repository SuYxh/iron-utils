/**
 * 数组分块儿
 * @param {Array} arr 
 * @param {Number} size 
 */
export function chunk(arr, size=1){
    //判断
    if(arr.length === 0){
        return [];
    }
    //声明两个变量
    let result = [];
    let tmp = [];// [1,2,3]
    //遍历
    arr.forEach(item => {
        //判断tmp元素长度是否为 0
        if(tmp.length === 0){
            //将 tmp 压入到 result 中
            result.push(tmp);
            // [ [1,2,3], [4,5,6], [7] ]
        }
        //将元素压入到临时数组 tmp 中
        tmp.push(item);
        //判断
        if(tmp.length === size){
            tmp = [];
        }
    });
    return result;
}
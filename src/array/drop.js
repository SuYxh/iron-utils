/**
 * 
 * @param {Array} arr 
 * @param {Number} size 
 */
export function drop(arr, size){
    //过滤原数组 产生新数组
    // return arr.filter((value, index) => {
    //     //
    //     return index >= size; 
    // });
    return arr.filter((value, index) => index>=size);
}

export function dropRight(arr, size){
    // return arr.filter((value,index)=>{
    //     return index < arr.length - size;
    // });
    return arr.filter((value, index) => index < arr.length - size);

}
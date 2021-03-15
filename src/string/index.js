
export function reverseString(str){
    //将字符串转为数组
    // let arr = str.split('');
    let arr = [...str];
    //翻转数组
    arr.reverse();
    //将数组拼接成字符串
    let s = arr.join('');
    return s;
}

export function palindrome(str){
    return reverseString(str) === str;
}

export function truncate(str, size){
    return str.slice(0, size) + '...';
}   
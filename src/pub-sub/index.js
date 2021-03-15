
export const PubSub = {
    //订阅唯一id
    id:1,
    //频道与回调保存容器
    callbacks: {
        // pay: {
        //     token_1: fn
        //     token_2: fn
        // },
        // cancel: {
        //     token_3:
        //     token_4
        // },
        // other: {
        //     token_10
        // }
     }
}

/**订阅频道 */
PubSub.subscribe = function(channel, callback){
    //创建唯一的编号
    let token = "token_" + this.id++;//
    //pay  token_1  
    //判断 callbacks 属性中是否存在 pay
    if(this.callbacks[channel]){
        this.callbacks[channel][token] = callback;
    }else{
        this.callbacks[channel] = {
           [token]: callback 
        }
    }
    //返回频道订阅的 id
    return token;
}

/* 发布消息 */
PubSub.publish = function(channel, data){
    //获取当前频道中所有的回调
    if(this.callbacks[channel]){
        //
        Object.values(this.callbacks[channel]).forEach(callback => {
            //执行回调
            callback(data);
        })
    }
}

/**取消订阅 */
//   1). 没有传值, flag 为 undefined
//   2). 传入token字符串
//   3). msgName字符串
PubSub.unsubscribe = function(flag){
    //如果flag为undeined 则清空所有订阅
    if(flag === undefined) {
        this.callbacks = {};
    }else if(typeof flag === 'string'){
        //判断是否为 token_ 开头
        if(flag.indexOf('token_') === 0){
            //如果是 标明是一个订阅id
            let callbackObj = Object.values(this.callbacks).find(obj => obj.hasOwnProperty(flag))
            //判断
            if(callbackObj){
                delete callbackObj[flag];
            }
        }else{
            //表明是一个频道的名称
            delete this.callbacks[flag];
        }
    }
}
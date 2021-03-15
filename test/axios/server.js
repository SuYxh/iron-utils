require('http').createServer((request, response) => {
    response.setHeader('Content-Type','application/json;charset=utf-8');
    response.setHeader('Access-Control-Allow-Origin','*');
    response.setHeader('Access-Control-Allow-Headers','*');
    response.statusCode = 404;
    response.end(JSON.stringify({
        code: '0000',
        msg: 'OK',
        data: {
            id: 1,
            title: 'it大厂学院',
            msg: '大厂技术深度解密，直击行业招聘需求, 大厂学院你值得拥有'
        }
    }))
}).listen(80);
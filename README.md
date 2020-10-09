forked from :  https://github.com/guyongquan/webhook-adapter    在原作者基础上略作修改后符合使用需求,仅作存档.


# webhook-adapter
```bash
node index.js --port=8080 --adapter=./prometheusalert/wx.js=/wx=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key={key} --adapter=./prometheusalert/dingtalk.js=/dingtalk=https://oapi.dingtalk.com/robot/send?access_token={token}#{secret}
```

## docker
```bash
docker run --name webhook-adapter -p 8080:80 -d guyongquan/webhook-adapter --adapter=/app/prometheusalert/wx.js=/wx=https://qyapi.weixin.qq.com/cgi-bin/webhook/send?key={key} --adapter=/app/prometheusalert/dingtalk.js=/dingtalk=https://oapi.dingtalk.com/robot/send?access_token={token}#{secret}
```

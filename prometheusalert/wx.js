const timezone = require('moment-timezone')

exports.template = function(body) {
    //企业微信群机器人API，https://work.weixin.qq.com/help?person_id=1&doc_id=13376#markdown%E7%B1%BB%E5%9E%8B
    //prometheus alert manager webhook ： https://prometheus.io/docs/alerting/configuration/#webhook_config
    const alerts = body.alerts;


    const content = alerts.map(
        alert => {
            return [`【运维中心】-〔k8s监控〕-> <font color="${body.status === 'firing' ? 'warning' : 'info'}">${body.status}</font>`]
                .concat(Object.entries(alert.labels).map(label => `<font color="comment">${label[0]}: </font>${label[1]}`))
                .concat(Object.entries(alert.annotations).map(annotation => `<font color="comment">${annotation[0]}: </font>${annotation[1]}`))
                .concat(`<font color="comment">startsAt: </font>${timezone.utc(alert.startsAt).tz("Asia/Shanghai").format('YYYY-MM-DD HH:mm:ss')}`)
                .join("\n")
        }
    ).join("\n\n");

    return {

        msgtype: "markdown",
        markdown: {
            content: content
        }
    }
}

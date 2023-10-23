/******************************

 脚本功能：过期啦——解锁VIP
 下载地址：https://is.gd/bawLoF
 软件版本：2.9.8
 脚本作者：彭于晏💞
 更新时间：2022-11-4
 问题反馈：QQ+89996462
 QQ会员群：779392027💞
 TG反馈群：https://t.me/plus8889
 TG频道群：https://t.me/py996
 使用声明：此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️

 *******************************

 [rewrite_local]

 ^https:\/\/expire\.vanemu\.com\/1\.1\/functions\/getUserInfo url script-response-body https://raw.githubusercontent.com/89996462/Quantumult-X/main/ycdz/gql.js

 [mitm]

 hostname = expire.vanemu.com

 *******************************/
body = $response.body.replace("{\"data\":{\"effectiveStartTime\":null,\"effectiveEndTime\":null,\"orderNo\":null,\"productName\":null,\"status\":2},\"message\":\"success\",\"code\":0}", "200");

$done({body});

body = $response.body;
body = {
    "data": {
        "effectiveStartTime": "2023-10-21 00:00:00",
        "effectiveEndTime": "2028-10-21 00:00:00",
        "orderNo": "123456",
        "productName": null,
        "status": 1
    },
    "message": "success",
    "code": 0
};
$done({body});

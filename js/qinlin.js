let obj = JSON.parse($response.body);
obj = {
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
$done({body: JSON.stringify(obj)});
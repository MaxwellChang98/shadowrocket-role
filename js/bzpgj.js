// 修改返回中的 amount 和 value 为 400
let obj = JSON.parse($response.body);

if (obj?.data?.again_pay_info) {
  obj.data.again_pay_info.amount = 400;
  obj.data.again_pay_info.value = 400;
}

$done({ body: JSON.stringify(obj) });
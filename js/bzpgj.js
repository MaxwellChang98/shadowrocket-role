body = $response.body;
body = {
  "code" : 200,
  "data" : {
    "again_pay_info" : {
      "amount" : 400,
      "value" : 400,
      "pay_id" : "BW202507200819421970899",
      "pay_type" : 0
    },
    "Blaze" : false
  },
  "status" : "success",
  "msg" : "success"
};
$done({body});
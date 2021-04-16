"Use Strict"

/
 var googleContractPay = 400;
var googleContractHoursWorked = 6;
var googlePay = googleContractPay * googleContractHoursWorked;
 var amazonContractPay = 380;
 var amazonContractHoursWorked = 4;
 var amazonPay = amazonContractPay * amazonContractHoursWorked;
var facebookContractPay = 350;
var facebookContractHoursWorked = 10;
var facebookPay = facebookContractPay * facebookContractHoursWorked;

 var weeklyPay = facebookPay + googlePay + amazonPay;

console.log( weeklyPay  + facebookPay + googlePay + amazonPay+ weeklyPay);




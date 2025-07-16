const calcTip = function (bills) {
  return bills >= 50 && bills  <= 300 ? bills * 0.15 : bills * 0.2;
}

const bills = [ 22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i< bills.length;i++){
   const tip =  calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log('Bills array:', bills);
console.log('Tips array:', tips);
console.log('Total amounts (bill + tip):', totals);

const calcAverage = function(arr){
    if(arr.length === 0) return 0;
    let sum = 0;
    for(let i = 0; i<arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length; 
}

console.log('Average of test array [2, 3, 7]:', calcAverage([2, 3, 7]));
console.log('Average of total amounts:', calcAverage(totals));
console.log('Average of tips:', calcAverage(tips));

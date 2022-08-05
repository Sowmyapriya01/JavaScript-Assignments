let EMICalculator = function (lAmount, rInterest, tMonths) {
  let EMI =
    (lAmount * rInterest * (1 + rInterest) ** tMonths) /
    ((1 + rInterest) ** tMonths - 1);
  console.log("EMI is ", Math.round(EMI));
};

EMICalculator(100000, parseFloat(10 / 12 / 100), 12);
EMICalculator(5000000, parseFloat(7.5 / 12 / 100), 240);

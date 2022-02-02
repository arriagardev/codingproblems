function persistence(num) {
  let times = 0;
  let digits = new Array();
  let mult = String(num);
  while (mult.length > 1) {
    digits = mult.split('');
    mult = digits.reduce((prev, curr) => Number(prev) * Number(curr)).toString();
    times += 1;
  }
  return times; 
} 

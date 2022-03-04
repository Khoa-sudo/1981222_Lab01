var x = parseFloat(prompt("Nhập cơ số x: "));
var n = parseInt(prompt("Nhập số mũ n: "));


function luyThua(x, n) {
  return parseInt(Math.pow(x,n))
}

alert(luyThua(x, n));

const n = parseInt(prompt("Nhập vào n: "));
let sum = 1;

for (var i = 1; i <= n; i++) {
  if (n > 6) {
    sum = sum * i;
  } 
  else alert("Số nhập vào không hợp lệ");
}

var ketqua = `S(n) = 1 * 2 * ... * ${n} = ${sum}`;
alert(ketqua);



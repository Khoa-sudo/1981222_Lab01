const n = parseInt(prompt("Nhập vào n: "));
let sum = 0;

for (var i = 1; i <= n; i++) {
  if (n >= 5 && n <= 20) {
    sum += i * i;
  } 
  else alert("Số nhập vào không hợp lệ");
}

var ketqua = `S(n) = 1^2 + 2^2 + ... + ${n}^2 = ${sum}`;
alert(ketqua);



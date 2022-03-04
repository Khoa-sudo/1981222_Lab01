const n = parseInt(prompt("Nhập vào n: "));
let sum = 0;

for (var i = 1; i <= n; i++) {
  if (n > 3 && n < 50) {
    sum += i;
  } 
  else alert("Số nhập vào không hợp lệ");
}

var ketqua = `S(n) = 1 + 2 + ... + ${n} = ${sum}`;
alert(ketqua);



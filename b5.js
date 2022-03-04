var n = parseFloat(prompt("Nhập vào n: "));
var sum = 0;

for (var i = 0; i <= n; i++) {
  if (n >= 2) {
    sum = sum + 1.0 / ((2*i) + 1);
  } else alert("Không hợp lệ");
}

var ketqua = `S(n) = 1 + 1/3 + ... + 1/((2*${n}) + 1) = ${sum}`;
alert(ketqua);
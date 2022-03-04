var n = parseFloat(prompt("Nhập vào n: "));
var sum = 0;

for (var i = 1; i <= n; i++) {
  if (n >= 7) {
    sum = sum + 1.0 / i;
  } else alert("Không hợp lệ");
}

var ketqua = `S(n) = 1 + 1/2 + ... + 1/${n} = ${sum}`;
alert(ketqua);
var n = parseFloat(prompt("Nhập vào n: "));
var sum = 0;

for (var i = 1; i <= n; i++) {
  if (n > 9) {
    sum += 1.0 / (2*i);
  } else alert("Không hợp lệ");
}

var ketqua = `S(n) = 1/2 + 1/4 + ... + 1/2*${n} = ${sum}`;
alert(ketqua);
var n = parseFloat(prompt("Nhập vào n: "));
var sum = 0;

for (var i = 1; i <= n; i++) {
  if (n > 6) {
    sum = sum + 1.0 / (i * (i + 1));
  } else alert("Không hợp lệ");
}

var ketqua = `Kết quả là: ${sum}`;
alert(ketqua);
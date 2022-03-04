var n = parseFloat(prompt("Nhập vào n: "));
var sum = 0;

for (var i = 0; i < n; i++) {
  if (n > 5) {
    sum = sum + (2 * i + 1) / (2 * i + 2);
  } else alert("Không hợp lệ");
}

var ketqua = `Kết quả là: ${sum}`;
alert(ketqua);

var x = parseFloat(prompt('Nhập vào x: '));
var n = parseInt(prompt('Nhập vào n: '));


let sum = 0;
let T = 1;

for (let i = 1; i <= n; i++) {
   T = T * x;
   sum = sum + T;  
}

var ketQua = `Kết quả là: ${sum}`;
alert(ketQua);
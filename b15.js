
var n = parseInt(prompt("Nhập vào n: "));

if (n < 1) {
    alert('Không hợp lệ')
}
let T = 0;
let sum = 0;
let i = 1;

while (i <= n) {
    T = T + i;
    sum = sum + 1.0 / T;
    i++;
}

alert(`Kết quả là ${sum}`);
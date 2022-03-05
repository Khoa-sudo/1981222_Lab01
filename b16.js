var x = parseFloat(prompt("Nhập vào x: "));
var n = parseInt(prompt("Nhập vào n: "));
let T = 1;
let sum = 0;
let M = 0;
for (let i = 1; i <= n; i++) {
    T = T * x;
    M = M + i;
    sum = sum + T / M;    
    
}

alert(`Kết quả là ${sum}`);
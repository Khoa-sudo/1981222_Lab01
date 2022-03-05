var x = parseFloat(prompt('Nhập vào x: '));
var n = parseInt(prompt('Nhập vào n: '));

let T = 1;
let sum = 0;


for (let i = 1; i <= n; i++) {
    T = Math.pow(x,(2*i));
    sum = sum + T;
}

alert(`Kết quả là ${sum}`)
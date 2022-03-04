var n = parseInt(prompt('Nhập vào n: '));

let sum = 0;
let p = 1;

for (let i = 1; i <= n; i++) {
    
    p *= i;
    sum += p;    
}

var ketQua = `S(n) = 1 + 1*2 + ... + 1*2*...*${n} = ${sum}`;
alert(ketQua);
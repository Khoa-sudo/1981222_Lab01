var x = parseFloat(prompt("Nhập vào x: "));
var n = parseInt(prompt("Nhập vào n: "));


var sum = 1;
var N = 1;
var T;

for (let i = 1; i <= n; i++) {
    T = Math.pow(x,(2*i+1));
    M=i*2+1;
    N=N*M*(M-1);
    sum = sum + x + T/N;    
}

ketQua = 'Kêt quả là' + sum;
alert(ketQua);

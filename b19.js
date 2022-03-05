var n = parseInt(prompt("Nhập vào n: "));
var x = parseFloat(prompt("Nhập vào x: "));


function Tinh(n, x) {
    var sum = 1;
    var T1 = 1;
    var T2 = 1;

    for (let i = 2; i <= 2 * n; i+=2) {
        T1 = T1 * x * x;
        T2 = T2 * (i - 1) * i;
        sum = sum + (T1 / T2);
    }
    return sum;
}

ketQua = 'Kêt quả là'+ Tinh(n,x);
alert(ketQua);

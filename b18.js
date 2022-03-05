var x = parseFloat(prompt("Nhập vào x: "));
var n = parseInt(prompt("Nhập vào n: "));


function Tinh(x, n) {
    if (n == 0) {
        return 0
    } else if (n == 1) {
        return x
    } else {
        return (1 + x / n) * Tinh(x, n - 1) - (x / n) * Tinh(x, n - 2);
    }
}
ketQua = 'Kêt quả là'+ Tinh(x,n);
alert(ketQua);


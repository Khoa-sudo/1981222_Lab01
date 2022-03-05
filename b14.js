var x = parseFloat(prompt("Nhập vào x: "));
var n = parseInt(prompt("Nhập vào n: "));

let T = 1;
let sum = 0;
let i = 0;

while (i < n) {
  T = Math.pow(x, (2 * i + 1));
  sum = sum + T;
  i++;
}

alert(`Kết quả là ${sum}`);

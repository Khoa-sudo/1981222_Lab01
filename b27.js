function loaiBoPhanTuTrung(arr, n) {
    if ((n == 0) || (n == 1)) {
        return n;
    }

    var temp = new Array(n);

    var j = 0;
    for (var i = 0; i < n - 1; i++) {
        if (arr[i] != arr[i + 1]) {
            temp[j++] = arr[i]
        }

    }
    temp[j++] = arr[n - 1];

    for (var i = 0; i < j; i++) {
        arr[i] = temp[i];
    }
    return j;

}

var arr = [1,1,2,2,3,3,3,2,4];
var n = arr.length;
n = loaiBoPhanTuTrung(arr,n);

//in mảng
for(var i=0;i < n;i++){
    console.log(arr[i]+" ");
}

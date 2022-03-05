function smallestSumSubarr(arr, n) {

    let min_ending_here = 2147483647;


    let min_so_far = 2147483647;

    for (let i = 0; i < n; i++) {

        if (min_ending_here > 0)
            min_ending_here = arr[i];


        else
            min_ending_here += arr[i];


        min_so_far = Math.min(min_so_far,
            min_ending_here);
    }


    return min_so_far;
}

var arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
let n = arr.length;

var ketQua = smallestSumSubarr(arr, n)
console.log(ketQua);
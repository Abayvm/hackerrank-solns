//A Very Big Sum

function aVeryBigSum(ar) {
    // Write your code here
    let long = 0;
    for(let i=0; i<ar.length; i++){
        long+=ar[i];
    }
    return long;
}
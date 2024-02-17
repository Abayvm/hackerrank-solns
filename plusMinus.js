// Plus Minus

function plusMinus(arr) {
    // Write your code here
    let n = arr.length;
    if (n === 0) {
        return { positives: 0, negatives: 0, zeroes: 0 };
    }
    let positives = 0;
    let negatives = 0;
    let zeroes = 0;
    for(let i=0; i<n; i++){
        if(arr[i]>0){
            positives +=1;
        }
        if(arr[i]<0){
            negatives +=1;
        }
        if(arr[i]===0){
            zeroes +=1;
        }
    }
    positives = positives/n;
    negatives = negatives/n;
    zeroes = zeroes/n;
    
    console.log(positives);
    console.log(negatives);
    console.log(zeroes);
}
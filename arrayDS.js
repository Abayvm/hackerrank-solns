// Arrays - DS

function reverseArray(a) {
    if(a.length === 1){
        return a;
    }
    const revArr = [];
    for(let i =a.length-1; i>=0; i--){
        revArr.push(a[i]);
    }
    return revArr;
}
const isOdd = function(x){
    if ( x % 2 != 0){
        return true;
    }
    return false;
}

const isEven = (x) => {
    if ( x % 2 == 0){
        return true;
    }
    return false;
}

console.log(isOdd(10));
console.log(isEven(10));
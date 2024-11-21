function sum(array){
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });
    return sum;
}

console.log(sum([1,5,2,5,23,1]))
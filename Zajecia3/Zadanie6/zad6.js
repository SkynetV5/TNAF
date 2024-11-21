function palindrom(word){
    const n = word.length
    if ( n % 2 == 0 ){
        const first_slice_word = word.slice(0, n/2).toLowerCase()
        let second_slice = word.slice(n/2, n)
        const second_slice_word = [...second_slice].reverse().join("").toLowerCase();
        return first_slice_word == second_slice_word
    }
    else{
        const first_slice_word = word.slice(0, n/2).toLowerCase()
        let second_slice = word.slice(n/2+1, n)
        const second_slice_word = [...second_slice].reverse().join("").toLowerCase();
        return first_slice_word == second_slice_word
    }
}

console.log(palindrom("kajak"))
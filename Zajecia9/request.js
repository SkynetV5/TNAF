const promise  = new Promise((resolve,reject) => {
    setTimeout(() => {
        const timestamp = Date.now();
        if (timestamp % 2 === 0){
            resolve(timestamp);
        }
        else{
            reject(timestamp);
        }
    }, 1000);
})

promise.then((result) => {
    console.log(`Obietnica zakończona sukcesem: ${result}`);
})
.catch((error) => {
    console.log(`Obietnica zakończona błędem: ${error}`);
})
.finally(() => {
    console.log("Koniec");
})
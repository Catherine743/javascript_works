// pro is onject of promise class

var pro = new Promise((resolve,reject) => {
    lotNum = 1;
    prizeNum = Math.floor(Math.random() * 5);
    if (lotNum == prizeNum) {
        resolve('You won the battery'); //onFulfilment
    }
    else {
        reject('Better luck next time') //onRejection
    }
})

pro.then(msg => console.log(msg)) // Result value from resolve()
.catch(err => console.log(err)); // Result value from reject()
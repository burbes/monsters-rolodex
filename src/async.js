const myPromisse = new Promise((resolve, reject) => {

    if (true) {

        setTimeout(() => {
            resolve('OK');
        }, 1000);

    } else {
        reject('Erro');
    }
});

myPromisse  .then(value => value + '!!!')
            .then(response => console.log(response))
    .catch(error => {    console.log(error);});
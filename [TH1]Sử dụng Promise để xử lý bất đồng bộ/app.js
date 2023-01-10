const onMyBirthday = (isKayoSick) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!isKayoSick) {
                resolve(2)
            } else {
                reject(new Error('i am sad'));
            }
        }, 2000);
    });
};
onMyBirthday(false)
    .then((result) => {
        console.log(`I have ${result} cake`);// In the console: I have 2 cakes
    })
    .catch((error) => {
        console.log(error);// does not run
    })
    .finally(() => {
        console.log('Party')// Show in the console no matter what : Party
    })
// Trường hợp Kayo bị ốm:
//     onMyBirthday(true)
//         .then((result) => {
//             console.log(`I have ${result} cakes`); // does not run
//         })
//         .catch((error) => {
//             console.log(error); // in console: Error: I am sad
//         })
//         .finally(() => {
//             console.log("Party"); // Shows in the console no matter what: Party
//         });
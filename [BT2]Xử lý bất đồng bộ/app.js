
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
let question = "input your budget in dollars "


rl.question(question, function (input) {
    carAffordable(Number(input))
        .then((result) =>{
            console.log(result)
        })
        .catch(error=>{
            console.log(error.message)
        })
    rl.close();
})


const carAffordable = (inputMoney) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (inputMoney > 20000 && inputMoney < 50000) {
                resolve(`you are able to afford a good car with ${inputMoney} budget`)
            } else if (inputMoney >= 50000) {
                resolve(`you are able to afford the luxury car with ${inputMoney} budget`)
            } else {
                reject(new Error("Get more money then comeback here"))
            }

        },1000)
    })
}
let count = document.getElementById('countDown');
function startTimer() {
    let data = count.value;
    let countdown = setInterval(function (){
        data --;
        document.getElementById('time-countdown').innerHTML =data;
        if (data===0){
            clearInterval(countdown);
        }
    },1000)
}
//c2
// const time = prompt('input the time ')
// runTime(time)
//
// function runTime(time) {
//     setTimeout(() =>{
//         console.log('count finished')
//     },Number(time)*1000);
// }
//c3
// const readline = require('readline');
// const rl = require.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });
// rl.question('input the time',(timeInput) =>{
//     let i=timeInput;
//     function startTime() {
//         let countdownTimer = setInterval(function (){
//             console.log(i--);
//             if(i<=0){
//                 console.log('counter finished');
//                 clearTimeout(countdownTimer);
//             }
//         },1000);
//     }
//     startTime();
//     rl.close();
// });
//c4
// function sleep(ms){
//     return new Promise((resolve) =>setTimeout(resolve,ms))
// }
// async function countDown(i){
//     while(i>0){
//         document.getElementById('time-countdown').innerHTML=i;
//         i--;
//         await sleep(1000);
//     }
//     return "counter finished:";
// }
// let counter = countDown(100);
// counter.then((msg)=>{
//     document.getElementById('time-countdown').innerHTML=msg;
// })
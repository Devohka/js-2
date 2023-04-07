let k1 = "5px";
k1 = Number.parseInt(k1);
k1 = Math.round(k1);
console.log(k1);

let k2 = "12djd334";
k2 = Number.parseInt(k2);
k2 = Math.round(k2);
console.log(k2);

let k3 = "12.45asdwe12";
k3 = Number.parseInt(k3);
k3 = Math.floor(k3);
k3 = k3.toFixed(2);
console.log(k3);

let k4 = "qwqwe9eewq";
k4 = Number.parseInt(k4);
k4 = Math.floor(k4);
k4 = k4.toFixed(2);
console.log(k4);


const biggestNum = Math.max(2, 34, 99, 3, 22, 36, 733, 18);
const smallestNum = Math.min(2, 34, 99, 3, 22, 36, 733, 18);
console.log(biggestNum);
console.log(smallestNum);

let maxNum = 3;
let minNum = 19;
let rrand = Math.round(Math.random() * (maxNum - minNum) + minNum);
rrand = Math.round(rrand);
console.log(rrand);
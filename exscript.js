let wage = 10;
let hours = 50;
// const pay = wage * hours;

// console.log(pay);

if (hours <= 40) {
    pay = wage * hours;
    console.log(pay);
}
else {
    pay = (wage * 40) + ((hours - 40) * (wage * 1.5));
    console.log(pay);
}
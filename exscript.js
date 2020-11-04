let wage = 12;
let hours = 60;

// console.log(pay);

if (hours <= 40) {
  pay = wage * hours;
  console.log(`Total weeks pay is $${pay}`);
} else {
  pay = wage * 40 + (hours - 40) * (wage * 1.5);
  console.log(`Total weeks pay plus overtime is $${pay}`);
}

let num = 1000000;
let payCheck = wage * hours;
if (payCheck < num) {
  weeks = Math.round(num / payCheck);
  console.log(`It will take ${weeks} weeks to earn $1,000,000.00.`);
}

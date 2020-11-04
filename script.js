const name = "Charissa Wersen";
const age = 33;
const birthday = "January 17";
const detroitGC = false;
let lifeEvents = [
  "I was born in Tecumseh, Michigan.",
  "I went to Baker College.",
  "I'm the olny one in my family to earn a college degree. I have an MBA in Management and Business Intelligence.",
  "I'm a student of the front-end bootcamp.",
];

if (detroitGC) {
  console.log(
    `My name is ${name} and I am a student at Grand Circus in Detroit, Michigan. I am currently ${age} years old and my birthday is on ${birthday}th.`
  );
} else {
  console.log(
    `My name is ${name} and I am student at Grand Circus in Grand Rapids, Michigan. I am currently ${age} years old and my birthday is on ${birthday}th.`
  );
}
// Write a for loop that starts at 0 and iterates by increments of 1 while i is less than the length of the lifeEvents array. Each iteration of the loop should log a new sentence from the lifeEvents array.

for (i = 0; i < lifeEvents.length; i++) {
  console.log(lifeEvents.join("\r\n"));
  break;
}
var counter = 0;
while (true) {
  let randomNumber = Math.round(Math.random() * 10) + 1;
  if (randomNumber != 5) {
    console.log(`${randomNumber} !==5`);
    counter++;
  } else {
    counter++;
    console.log(
      `5 === 5. It took ${counter} iterations to randomly generate the number 5.`
    );
    break;
  }
}

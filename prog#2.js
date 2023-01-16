console.log('These are the last words your best friend will say to you.');
let numOne = Math.floor(Math.random() * 4);
let sentenceOne = ''

if (numOne === 0){
    sentenceOne = "You're at fault"; 
} else if (numOne === 1) {
    sentenceOne = "I can't forgive you";
} else if (numOne === 2) {
    sentenceOne = "You betrayed my trust";
} else {
    sentenceOne = "I can't forgive you";
}

let numTwo = Math.floor(Math.random() * 4);
let sentenceTwo = ''

if (numTwo === 0) {
    sentenceTwo = "you don't deserve this kind of treatment.";
} else if (numTwo === 1) {
    sentenceTwo = "in the past you were the greatest of friends, and this situation doesn't change that.";
} else if (numTwo === 2) {
    sentenceTwo = "I can't help but be sorry for you.";
} else {
    sentenceTwo = "I pity you.";
}

console.log(`${sentenceOne}, Nevertheless, ${sentenceTwo}` );



     
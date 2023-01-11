const nameOfUser = 'Harry';

nameOfUser ? console.log(`CODE  -Greetings ${nameOfUser}. I see... A man of culture!`) : console.log("CODE  -Greetings! Oh, I see... You\'re a man of culture!");

console.log(' CODE  -So, what is it you require me to guess?');

/* Imput this text: Please guess my penis size kind program. 
I'm asking you to do this to make sure you do not mind the potential of receiving an offesive answer.  */

const userQuestion = 'Please guess my penis size kind program.';
console.log(`YOU  -${userQuestion}`);


const randomNumber = Math.floor(Math.random() * 4);




let code = '';
switch(randomNumber) {
    case 0:
        code = 'CODE  -Hah, pitiful'
        break;
    case 1:
        code = "CODE  -My friend, it seems you\'re quite average in size"
        break;
    case 2:
        code = " CODE  -Yeah... You're big"
        break;
    case 3:
        code = " CODE  -Your weapon is LARGE, like... LARGE*10"


}

console.log(code);

































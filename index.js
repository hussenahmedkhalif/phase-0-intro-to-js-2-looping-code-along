// Code your solutions in this file
// for (let age = 30; age < 40; age++) {
//     console.log(`I'm ${age} years old. Happy birthday to me!`);
//     debugger;
//   }
// const gifts = ["teddy bear", "drone", "doll"];

// function wrapGifts(gifts) {
//   for (let i = 0; i < gifts.length; i++) {
//     console.log(`Wrapped ${gifts[i]} and added a bow!`);
//     debugger;
//   }

//   return gifts;
// }

// wrapGifts(gifts);

function writeCards(namesArray, eventName) {
    let messagesArray = []; 

    for (let i = 0; i < namesArray.length; i++) {
        
        let message = `Thank you, ${namesArray[i]}, for the wonderful ${eventName} gift!`;
        messagesArray.push(message); 
    }

    return messagesArray;
}
function countDown(startingNumber) {
    for (let i = startingNumber; i >= 0; i--) {
        console.log(i);
    }
}


countDown(5);


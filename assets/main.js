---
---

const messages = [
    'Attitude Check?<br><p class="display-1 pt-5">Fuck You!</p>',
    'Buy a Bawdy Bag',
    'bawdycaste.com',
    'Hormone Check?',
    'Hormone Check?<br><p class="display-1 pt-5">Fuck Me!</p>',
    'Follow Us on Social Media',
    'Buy a Large Popcorn!',
    'We Want YOU to join the BAWDY CASTE',
    'Thank you for wearing a mask!',
    'Cast Available for Photos & Accepting Donations After the Show',
    'All Volunteer Cast - We do not get Paid',
    'All Volunteer Cast - We do not get Paid<br><br><span class="pt-5">wait what?!?! i am not getting paid?</span>',
    ' ',
    ' ',
    'Attitude Check?'
];
var counter = 0;
const message = document.getElementById('message');
var inst = setInterval(change, 10000);

function change() {
    const messageIndex = messages.indexOf(paragraphElement.textContent) + 1;
    if (messageIndex >= messages.length) {messageIndex = 0;}
    paragraphElement.textContent = messages[messageIndex];
    // message.innerHTML = messages[counter];
    // counter++;
    // if (counter >= messages.length) {
        // counter = 0;
    // }   
}
change();

setInterval(updateText, 60000);

// message.innerHTML = "Attitude Check?" ;

// javascript to change a div with id message to a list of strings every second"



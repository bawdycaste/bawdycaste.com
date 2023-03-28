---
---

var messages = [
    'Attitude Check?<br><p class="display-1 pt-5">Fuck You!</p>',
    'Buy a Bawdy Bag',
    'bawdycaste.com',
    'Hormone Check?',
    'Hormone Check?<br><p class="display-1 pt-5">Fuck Me!</p>',
    'Follow Us on Social Media',
    'Buy a Large Popcorn!',
    'Attitude Check?'
];
var counter = 0;
var message = document.getElementById('message');
var inst = setInterval(change, 10000);

message.innerHTML = "Attitude Check?";
function change() {
    message.innerHTML = messages[counter];
    counter++;
    if (counter >= messages.length) {
        counter = 0;
    }
}
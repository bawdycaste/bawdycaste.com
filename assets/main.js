---
---

const messages = [
    // 'Attitude Check?<br><p class="display-1 pt-5">Fuck You!</p>',
    '<img class="img-fluid m-0 p-0 rounded" width="29%" src="https://storage.googleapis.com/bawdycaste/images/website_qrcode.png">',
    'Buy a Bawdy Bag&trade;',
    'Get Up and Dance!',
    'bawdycaste.com',
    // 'Hormone Check?',
    // 'Hormone Check?<br><p class="pt-5">Fuck Me!</p>',
    '@bawdycaste',
    'Cast Photos After Show',
    'Donate to Support the Cast',
    'Buy a Large Popcorn!',
    'Join our Cast!',
    // 'Thank you for wearing a mask!',
    'All Volunteer Cast',
    // '<span class="pt-5">wait what?!?! im not getting paid??</span>',
    ' ',
    ' ',
    ' ',
    ' '
    // 'Attitude Check?'
];
var counter = 0;
var message = document.getElementById('message');
var inst = setInterval(change, 10000);

message.innerHTML = "bawdycaste.com" ;
function change() {
    message.innerHTML = messages[counter];
    counter++;
    if (counter >= messages.length) {
        counter = 0;
    }
}
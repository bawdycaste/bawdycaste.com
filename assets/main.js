---
---

var messages = ['Attitude Check!',
    '<span class="text-dark">Buy a Bawdy Bag</span><br> Everything you need to <strong>throw, bloww, and glow</strong> at the Rocky Horror Picture Show',
    "bawdycaste.com"
];
var counter = 0;
var message = document.getElementById('message');
var inst = setInterval(change,10000);

function change() {
    message.innerHTML = messages[counter];
    counter++;
    if (counter >= messages.length) {
        counter = 0;
    }
}
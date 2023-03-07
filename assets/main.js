---
---

var messages = [
    'Fuck You!',
    'Buy a Bawdy Bag in the lobby!',
    'bawdycaste.com'];
var counter = 0;
var message = document.getElementById('message');
var inst = setInterval(change, 30000);

message.innerHTML = "Attitude Check!";
function change() {
    message.innerHTML = messages[counter];
    counter++;
    if (counter >= messages.length) {
        counter = 0;
    }
}
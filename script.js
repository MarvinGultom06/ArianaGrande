function moreInfo() {
    var InfoURL = "https://en.wikipedia.org/wiki/Ariana_Grande";
    window.location.href = InfoURL;
}

function openMe() {
        prompt("Write Yes if you want hear my new song! ");
        var confirmation = confirm("Klik OK ");
        if (confirmation) {
            window.location.href = "https://youtu.be/NN9aqmCprSo?si=veyWO7e68CPsRsim";
        }
}

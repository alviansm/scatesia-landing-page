let today = new Date();
let currentHour = today.getHours();

console.log(currentHour);

class select {
	constructor(selector) {
  	this._element = document.getElementById(selector);
    }

    setGreeting () {
        if (currentHour < 10) {
            this._element.innerText = "Selamat Pagi!";
        } else if (currentHour < 15) {
            this._element.innerText = "Selamat Siang!";
        } else if (currentHour < 18) {
            this._element.innerText = "Selamat Sore!";
        } else {
            this._element.innerText = "Selamat Malam!";
        }
    }

}

var elem = new select("greetings");

elem.setGreeting();
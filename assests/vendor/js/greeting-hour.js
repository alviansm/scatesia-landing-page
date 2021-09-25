let today = new Date();
let currentHour = today.getHours();

console.log(currentHour);

class select {
	constructor(selector) {
  	this._element = document.getElementById(selector);
    }

    setGreeting () {
        if (currentHour < 10) {
            this._element.innerText = "Hi, Good Morning!";
        } else if (currentHour < 15) {
            this._element.innerText = "Hello There! Good Day!";
        } else if (currentHour < 18) {
            this._element.innerText = "Stay Safe, Good Afternoon!";
        } else {
            this._element.innerText = "Good Evening...";
        }
    }

}

var elem = new select("greetings");

elem.setGreeting();
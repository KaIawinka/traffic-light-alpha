const number = document.querySelector(".number");
const number2 = document.querySelector(".number2");
const red = document.querySelector(".red");
const green = document.querySelector(".green");
const yellow = document.querySelector(".yellow");
const red2 = document.querySelector(".red2");
const green2 = document.querySelector(".green2");
const yellow2 = document.querySelector(".yellow2");
const left = document.querySelector(".left");
const right = document.querySelector(".right");



let timer = 16;
let i = 0;
right.style.color = "rgb(49, 255, 49)";
left.style.color = "red";
red2.style.backgroundColor = "darkred";
green2.style.backgroundColor = "rgb(49, 255, 49)";
yellow.style.backgroundColor = "yellow";
yellow2.style.backgroundColor = "yellow";



function updateColor() {
	if (timer <= 4 && yellow.style.backgroundColor == "yellow") {
		yellow.style.backgroundColor = "rgb(139, 128, 0)";
		yellow2.style.backgroundColor = "rgb(139, 128, 0)";
	} else if (timer <= 4 && yellow.style.backgroundColor == "rgb(139, 128, 0)") {
		yellow.style.backgroundColor = "yellow";
		yellow2.style.backgroundColor = "yellow";
	};
};
setInterval(updateColor, 500);



function updateTimer() {
	if (timer <= 0) {
		timer = 16;
			if (i == 0) {
				i++;
				red.style.backgroundColor = "darkred";
				green.style.backgroundColor = "rgb(49, 255, 49)";
				left.style.color ="rgb(49, 255, 49)";
				right.style.color = "red";
				red2.style.backgroundColor = "red";
				green2.style.backgroundColor = "green";
			} else if (i == 1) {
				i--;
				red.style.backgroundColor = "red";
				green.style.backgroundColor = "green";
				left.style.color =	"red";
				right.style.color = "rgb(49, 255, 49)";
				red2.style.backgroundColor = "darkred";
				green2.style.backgroundColor = "rgb(49, 255, 49)";
			};
	} else {
		timer--;
		number.textContent = `${timer}`;
		number2.textContent = `${timer}`;
	};
};
setInterval(updateTimer, 1000);
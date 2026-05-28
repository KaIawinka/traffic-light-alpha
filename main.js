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
yellow.style.backgroundColor = "rgb(139, 128, 0)";
yellow2.style.backgroundColor = "rgb(139, 128, 0)";
yellow.style.color = "red";
yellow2.style.color = "rgb(49, 255, 49)";
red.style.boxShadow = "inset 0 4px 50px rgba(255, 255, 255, 0.6), 0 0 150px rgba(255, 0, 0, 0.8), 0 0 100px rgba(255, 0, 0, 0.5)";
green2.style.boxShadow = "inset 0 4px 50px rgba(255, 255, 255, 0.6), 0 0 150px rgba(49, 255, 49), 0 0 100px green";



function updateColor() {
	if (timer <= 3 && yellow.style.backgroundColor == "rgb(139, 128, 0)") {
		yellow.style.backgroundColor = "yellow";
		yellow2.style.backgroundColor = "yellow";
		yellow.style.boxShadow = "inset 0 4px 50px rgba(255, 255, 255, 0.6), 0 0 150px yellow, 0 0 100px rgba(139, 128, 0)";
		yellow2.style.boxShadow = "inset 0 4px 50px rgba(255, 255, 255, 0.6), 0 0 150px yellow, 0 0 100px rgba(139, 128, 0)";
	} else if (timer <= 3 && yellow.style.backgroundColor == "yellow") {
		yellow.style.backgroundColor = "rgb(139, 128, 0)";
		yellow2.style.backgroundColor = "rgb(139, 128, 0)";
		yellow.style.boxShadow = "";
		yellow2.style.boxShadow = "";
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
				left.style.color = "rgb(49, 255, 49)";
				right.style.color = "red";
				red2.style.backgroundColor = "red";
				green2.style.backgroundColor = "green";
				yellow.style.color = "rgb(49, 255, 49)";
				yellow2.style.color = "red";
				yellow.style.backgroundColor = "rgb(139, 128, 0)";
				yellow2.style.backgroundColor = "rgb(139, 128, 0)";
				red2.style.boxShadow = "inset 0 4px 50px rgba(255, 255, 255, 0.6), 0 0 150px rgba(255, 0, 0, 0.8), 0 0 100px rgba(255, 0, 0, 0.5)";
				green.style.boxShadow = "inset 0 4px 50px rgba(255, 255, 255, 0.6), 0 0 150px rgba(49, 255, 49), 0 0 100px green";
				red.style.boxShadow = "";
				green2.style.boxShadow = "";
			} else if (i == 1) {
				i--;
				red.style.backgroundColor = "red";
				green.style.backgroundColor = "green";
				left.style.color =	"red";
				right.style.color = "rgb(49, 255, 49)";
				red2.style.backgroundColor = "darkred";
				green2.style.backgroundColor = "rgb(49, 255, 49)";
				yellow.style.color = "red";
				yellow2.style.color = "rgb(49, 255, 49)";
				red.style.boxShadow = "inset 0 4px 50px rgba(255, 255, 255, 0.6), 0 0 150px rgba(255, 0, 0, 0.8), 0 0 100px rgba(255, 0, 0, 0.5)";
				green2.style.boxShadow = "inset 0 4px 50px rgba(255, 255, 255, 0.6), 0 0 150px rgba(49, 255, 49), 0 0 100px green";
				red2.style.boxShadow = "";
				green.style.boxShadow = "";
			};
	} else {
		timer--;
		number.textContent = `${timer}`;
		number2.textContent = `${timer}`;
	};
};
setInterval(updateTimer, 1000);
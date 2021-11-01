const texts = document.querySelector(".texts");

window.SpeechRecognition =
	window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement("p");

recognition.addEventListener("result", (e) => {
	texts.appendChild(p);
	const text = Array.from(e.results)
		.map((result) => result[0])
		.map((result) => result.transcript)
		.join("");

	p.innerText = text;
	if (e.results[0].isFinal) {
		if (text.includes("how are you")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Good morning dear, I am perfectly fine. What about you?";
			texts.appendChild(p);
		}
		
		if (
			text.includes("what's your name") ||
			text.includes("what is your name")
		) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Hello there,My Name is Alexa";
			texts.appendChild(p);
		}

		if (
			text.includes("what you do") ||
			text.includes("what are you doing now?")
		) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "I am your chat bot. I help you when you give voice instructions to me. I only transcript the voice.";
			texts.appendChild(p);
		}

		if (text.includes("open my YouTube")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Sure,opening youtube channel";
			texts.appendChild(p);
			console.log("opening youtube");
			window.open("https://www.youtube.com/");
		}
		if (text.includes("open my website")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Sure,opening your website";
			texts.appendChild(p);
			console.log("Sure,opening youtube");
			window.open("https://www.apkacreator.com/");
		}
		if (text.includes("Do you know a joke?")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = " How do you measure a snake?In inches—they don’t have feet.";
			texts.appendChild(p);
			console.log("Sure,opening youtube");
			window.open("https://www.apkacreator.com/");
		}
		if (text.includes("bad joke")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Free ke website me itna hi milega.";
			texts.appendChild(p);
			console.log("Sure,opening youtube");
			window.open("https://www.apkacreator.com/");
		}
		
		if (text.includes("weather today")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Searching";
			texts.appendChild(p);
			window.open("https://weather.com/en-IN/weather/today/l/c9263fe384e8cea7e1a998c529285698db393647a9d4291124e1825e11e7976d");
		}
		if (text.includes("time now")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Searching";
			texts.appendChild(p);
			window.open("https://time.is/");
		}
		if (text.includes("you have a job for me")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Yeah sure,Searching for it.";
			texts.appendChild(p);
			window.open("https://www.naukri.com/");
		}
		if (text.includes("best university")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Searching for it.";
			texts.appendChild(p);
			window.open("https://www.cuchd.in/");
		}
		if (text.includes("trending news")) {
			p = document.createElement("p");
			p.classList.add("replay");
			p.innerText = "Searching for it.";
			texts.appendChild(p);
			window.open("https://www.indiatoday.in/");
		}
		p = document.createElement("p");
	}
});

recognition.addEventListener("end", () => {
	recognition.start();
});

recognition.start();

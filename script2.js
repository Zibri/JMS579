function dl(data, fileName) {
	(blob = new Blob([data], { type: "octet/stream" })),
		(url = window.URL.createObjectURL(blob));
	a = document.createElement("a");
	a.href = url;
	a.download = fileName;
	a.click();
	window.URL.revokeObjectURL(url);
}
const sliderProps = {
	fill: "#0B1EDF",
	background: "rgba(255, 255, 255, 0.214)"
};

// Selecting the Range Slider container which will effect the LENGTH property of the password.
const slider = document.querySelector(".range__slider");

// Text which will show the value of the range slider.
const sliderValue = document.querySelector(".length__title");

// Using Event Listener to apply the fill and also change the value of the text.
slider.querySelector("input").addEventListener("input", (event) => {
	sliderValue.setAttribute("data-length", event.target.value);
	applyFill(event.target);
});
// Selecting the range input and passing it in the applyFill func.
applyFill(slider.querySelector("input"));
// This function is responsible to create the trailing color and setting the fill.
function applyFill(slider) {
	const percentage =
		(100 * (slider.value - slider.min)) / (slider.max - slider.min);
	const bg = `linear-gradient(90deg, ${sliderProps.fill} ${percentage}%, ${
		sliderProps.background
	} ${percentage + 0.1}%)`;
	slider.style.background = bg;
	sliderValue.setAttribute("data-length", slider.value);
}

// Checkboxes representing the options that is responsible to create differnt type of password based on user
//const uppercaseEl = document.getElementById("uppercase");
//const lowercaseEl = document.getElementById("lowercase");
//const numberEl = document.getElementById("number");
//const symbolEl = document.getElementById("symbol");

// Button to generate the password
const generateBtn = document.getElementById("generate");
// Button to copy the text

// When Generate is clicked Password id generated.
generateBtn.addEventListener("click", () => {
	multisec = document.getElementById("multisec");
	uasp = document.getElementById("uasp");
	energy_saving = document.getElementById("energy_saving");
        hdd_serial = document.getElementById("hdd_serial");
	ken = document.getElementById("4ken");
	ledinv = document.getElementById("ledinv");
	to = document.getElementById("slider").value * 60;
	z = atob(document.getElementById("data").innerHTML).split("");
	z[0xc4e7] = String.fromCharCode(
		(!ken.checked << 7) | (uasp.checked << 6) | (multisec.checked << 5) | (z[0xc4e7].charCodeAt(0) & 0x1F)
	);
  if (hdd_serial.checked) {
    z[0xc454]=String.fromCharCode(0);
  } else {
	  z[0xc454]=String.fromCharCode(0x22);
	  for (x=0xc456;x<0xc466;x++) z[x]=String.fromCharCode(Math.random()*10+48);
  }
	z[0xc4f2] = String.fromCharCode(0x50 | (energy_saving.checked << 3) | (!ledinv.checked << 5));
	z[0xc4f6] = String.fromCharCode(energy_saving.checked*255 & (to / 256));
	z[0xc4f7] = String.fromCharCode(energy_saving.checked*255 & to % 256);
	b = new Uint8Array(z.length);
	z.map((e, i) => (b[i] = e.charCodeAt(0)));
	dl(b, "JMS579_Z_515.bin");
});

document.getElementById("energy_saving").onclick = (e) => {
	document.getElementById("timeout").style.visibility = e.srcElement.checked
		? ""
		: "hidden";
};

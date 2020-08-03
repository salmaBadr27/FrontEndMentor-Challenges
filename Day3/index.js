function rem() {
	document.getElementById("display_error").style.display = "none";
}

// Show Error
function formValidation() {
	var inputs = [];
	inputs[0] = document.getElementById("input");

	for (i = 0; i < inputs.length; i++) {
		if (inputs[i].value === "") {
			document.getElementById("display_error").innerHTML =
				"Please provide a valid email! <img src='images/icon-error.svg'>";
		}
	}
}

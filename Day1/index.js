function SharePopup(shareBtn) {
	var box = document.getElementById("box");

	if (box.style.display === "none") {
		box.style.display = "flex";
		shareBtn.style.background = "#4c535b";
		document.getElementsByTagName("path")[0].style.fill = "#fff";
	} else {
		box.style.display = "none";
		shareBtn.style.background = "#edf2f8";
		document.getElementsByTagName("path")[0].style.fill = "#6E8098";
	}
}

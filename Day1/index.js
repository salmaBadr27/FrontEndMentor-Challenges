const divFooter1 = document.querySelector("#footer-1");
const divFooter2 = document.querySelector("#footer-2");
const triggerFooter1 = document.querySelector("#footer-1 .social-link");
const triggerFooter2 = document.querySelector("#footer-2 .social-link");

triggerFooter1.addEventListener("click", toggleFooter);
triggerFooter2.addEventListener("click", toggleFooter);

function toggleFooter(e) {
	e.preventDefault();
	divFooter2.classList.toggle("display-social");
	divFooter2.classList.toggle("hide-social");
}

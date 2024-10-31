
function toggleMode() {
	const page = document.getElementById("page");
	var themeIcon = document.getElementById("themeIcon");
	var body = document.body;
	if (page.getAttribute("data-bs-theme") == "light") {
		page.setAttribute("data-bs-theme", "dark");
		themeIcon.className = "bi bi-brightness-high-fill";
		body.style.backgroundImage = "linear-gradient(to right, #2b2b2b 10%, rgb(69,69,69))";
	}
	else {
		page.setAttribute("data-bs-theme", "light");
		themeIcon.className = "bi bi-moon-fill";
		body.style.backgroundImage = "linear-gradient(to right,  rgb(209, 209, 209) 10%, #a1a1a1)";
	}
}

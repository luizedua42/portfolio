
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
	// toggleLinkColor();
}

function toggleLinkColor(){

	// const theme = document.html.getAttribute('data-bs-theme');
	const theme = document.documentElement.getAttribute('data-bs-theme');
	// const theme = getComputedStyle(document.documentElement).getPropertyValue('--bs-theme-color').trim();
	const links = document.querySelectorAll('.my-links');
	if (!links) {
		console.log("No links found");
		return;
	}
	links.forEach(link => {
		console.log(theme);
		if (theme === 'light') {
			link.classList.remove('link-light');
			link.classList.add('link-dark');
		} else {
			link.classList.remove('link-dark');
			link.classList.add('link-light');
		}
	});
}

function spa(url, callback) {
    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar a página: ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('contentBody').innerHTML = data;
			if (callback) callback();
		})
        .catch(error => {
            console.error('Erro:', error);
            document.getElementById('contentBody').innerHTML = '<p>Erro ao carregar o conteúdo.</p>';
        });
}
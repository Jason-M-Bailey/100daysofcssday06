const menuBtn = document.querySelector(".menu-icon");
const searchBtn = document.querySelector(".search-icon");

menuBtn.addEventListener('click', () => {
	const menu = document.querySelector(".menu");
	menu.classList.toggle('active');
	
	const panel = document.querySelector(".panel");
	panel.classList.toggle('deActive');
})

searchBtn.addEventListener('click', () => {
	const search = document.querySelector(".search");
	search.classList.toggle('active');
})
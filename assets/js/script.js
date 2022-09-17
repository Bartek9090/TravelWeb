
const colors = ["#6495ed", "#7fffd4", "#ffa07a", "#f08080", "#afeeee"];

let i = 0;

Array.from(document.querySelectorAll(".nav-link")).forEach(item => {
	item.style.cssText = `background-color: ${colors[i++]}`;
});


// Display menu

const navBar = document.querySelector(".navbar-icon")
navBar.addEventListener('click', () => {
	document.querySelector(".nav-wrapper").classList.toggle('change')
});

// Hide off menu after click

let navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
		document.querySelector(".nav-wrapper").classList.toggle('change')
    })
})

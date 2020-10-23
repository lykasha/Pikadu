//создаем переменную, в которую положим кнпку меню
let menuToggle = document.querySelector('#menu-toggle');
//создаем переменную, в которую положим меню
let menu = document.querySelector('.sidebar');
//отслеживаем клик по кнопке меню и запускаем функцию
menuToggle.addEventListener('click', function (event) {
	//отеняем стандарное поведение ссылки
	event.preventDefault();
	//вешаем класс на меню, когда кликнули оп кнопке меню
	menu.classList.toggle('visible');
})
'use strict';

const questions = document.querySelectorAll('.qtn');
questions.forEach(qtn => {
	qtn.addEventListener('click', function () {
		qtn.nextElementSibling.classList.toggle('hidden');

		if (qtn.nextElementSibling.classList.contains('hidden')) {
			qtn.firstElementChild.classList.remove('bold');
			qtn.querySelector('.img').style.transform = 'rotate(0deg)';
		} else {
			qtn.firstElementChild.classList.add('bold');
			qtn.querySelector('.img').style.transform = 'rotate(180deg)';
		}
	});
});

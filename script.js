'use strict';

const questions = document.querySelectorAll('.qtn');
const answers = document.querySelectorAll('.answer');
const subImage = document.querySelector('.sub-image');

questions.forEach(qtn => {
	const reset = function (qtn) {
		qtn.nextElementSibling.classList.add('hidden');

		qtn.firstElementChild.classList.remove('bold');
		qtn.querySelector('.img').style.transform = 'rotate(0deg)';
		if (window.innerWidth < 600) subImage.style.left = '0%';
		else subImage.style.left = '-25%';
	};

	qtn.addEventListener('click', function () {
		if (qtn.nextElementSibling.classList.contains('hidden')) {
			questions.forEach(q => reset(q));
			qtn.nextElementSibling.classList.remove('hidden');
			qtn.firstElementChild.classList.add('bold');
			qtn.querySelector('.img').style.transform = 'rotate(180deg)';
			if (window.innerWidth < 600) subImage.style.left = '10%';
			else subImage.style.left = '-35%';
		} else {
			reset(qtn);
		}
	});
});

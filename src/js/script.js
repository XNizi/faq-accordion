const questionTitles = document.querySelectorAll('.card__questionTitle')
questionTitles.forEach(title => {
	title.addEventListener('click', () => {
		// Pobieramy rodzica (div.card) klikniętego elementu
		const card = title.parentNode

		// Pobieramy element card__questionText w obrębie tego samego rodzica
		const questionText = card.querySelector('.card__questionText')

		const img = title.querySelector('img')

		if (img.getAttribute('src') == './dist/img/icon-plus.svg') {
			img.setAttribute('src', './dist/img/icon-minus.svg')
		} else {
			img.setAttribute('src', './dist/img/icon-plus.svg')
		}

		questionText.classList.toggle('card__questionText--active')
	})
})

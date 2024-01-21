// Timer
// Stwórz timer składający się z dwóch inputów (minuty i sekundy) oraz buttona “Start”,
// który rozpoczyna odliczanie zadanego czasu. Stan ma być aktualizowany co sekundę.
// W trakcie trwania odliczania oba inputy powinny być zablokowane (disabled).

const minuteIn = document.querySelector('[data-timer="minute"]')
const secIn = document.querySelector('[data-timer="seconds"]')
const startBtn = document.querySelector('button')

//inicjalizacja wartości inputów

minuteIn.value = 0
secIn.value = 0

startBtn.addEventListener('click', () => {
	//blokujemy inputy i przycisk
	minuteIn.setAttribute('disabled', '')
	secIn.setAttribute('disabled', '')
	startBtn.setAttribute('disabled', '')

	let remainingSeconds = Number(minuteIn.value) * 60 + Number(secIn.value)

	const interval = setInterval(() => {
		const minutes = Math.floor(remainingSeconds / 60)
		const seconds = remainingSeconds % 60

		minuteIn.value = minutes
		secIn.value = seconds

		if (remainingSeconds === 0) {
			clearInterval(interval)

			//odblokowujemy inputy i button
			minuteIn.removeAttribute('disabled')
			secIn.removeAttribute('disabled')
			startBtn.removeAttribute('disabled')
		}

		remainingSeconds -= 1
	}, 1000)
})

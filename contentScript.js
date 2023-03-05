const resgataPontos = () => {
	const btn = document.querySelector('button[aria-label="Resgatar Bônus"]')

	if (btn) {
		btn.click()
		console.log("Pontos Resgatados")
	}
}

if (window?.location?.host === 'www.twitch.tv') {
  const requestPoints = setInterval(resgataPontos, 15 * 1000)
}

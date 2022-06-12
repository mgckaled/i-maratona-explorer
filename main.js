// respostas possíveis da bola de cristal
answers = [
	'Certeza!',
	'Não tenho tanta certeza.',
	'É decididamente assim.',
	'Não conte com isso.',
	'Sem dúvidas!',
	'Pergunte novamente mais tarde.',
	'Sim, definitivamente!',
	'Minha resposta é não.',
	'Você pode contar com isso.',
	'Melhor não te dizer agora.',
	'A meu ver, sim.',
	'Minhas fontes dizem não.',
	'Provavelmente.',
	'Não é possível prever agora.',
	'Perspectiva boa.',
	'As perspectivas não são tão boas.',
	'Sim.',
	'Concentre-se e pergunte novamente.',
	'Sinais apontam que sim.'
]

// Exibir / coletar dados do input
function getQuestion() {
	const input = document.querySelector('#question')
	const questionShow = document.querySelector('#q-show')
	const prevision = document.querySelector('#answer')

	//gerar número aleatório para respostas.
	// lenght: retorna o tamanho do array (elemenos da lista)
	// floor(): arrendonda um número inteiro para baixo
	// random(): gera um número aleatório entre 0 e 1
	const totalAnwsers = answers.length
	const randomNumber = Math.floor(Math.random() * totalAnwsers)

	if (input.value !== '') {
		questionShow.innerHTML = input.value
	} else {
		question.innerHTML = ''
	}

	if (input.value === '') {
		prevision.innerHTML = 'Faça uma pergunta e revelarei o seu destino'
	} else {
		prevision.innerHTML = answers[randomNumber]
	}

	questionShow.style.opacity = 1
	prevision.style.opacity = 1

	setTimeout(function () {
		questionShow.style.opacity = 0
		prevision.style.opacity = 0
		document.querySelector('#question').value = ''
	}, 5000)
}

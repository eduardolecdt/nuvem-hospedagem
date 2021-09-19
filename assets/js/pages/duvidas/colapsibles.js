(function () {
  /* ---- Elements ---- */

  const sectionApresentacao = document.querySelector('section[name="apresentacao"]')
  const divResultado = sectionApresentacao.querySelector('div[name="resultado"]')

   /* ---- Methods ---- */

   function habilitarEventos () {
    clickPergunta()
  }

  /* ---- Events ---- */

  function clickPergunta () {
    divResultado.addEventListener('click', callbackClickPergunta)
  }

  /* ---- Callbacks ---- */

  function callbackClickPergunta (evento) {
    const elemento = 'section[name="apresentacao"] div[name="pergunta"]'
    if (!evento.target.matches(elemento))
    
    console.log(evento.target)
    ativarPergunta(evento.target)
  }

  /* ---- View ---- */

  function ativarPergunta (divPergunta) {
    desativarPerguntas()
    divPergunta.classList.add('ativo')
  }

  function desativarPerguntas () {
    const divs = divResultado.querySelectorAll('div.pergunta')
    for (const div of divs) {
      div.classList.remove('ativo')
    }
  }

  /* ---- Start ---- */
  
  habilitarEventos()
}())
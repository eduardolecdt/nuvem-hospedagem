(function () {
  /* ---- Elements ---- */

  const sectionDuvidas = document.querySelector('section[name="duvidas"]')

   /* ---- Methods ---- */

   function habilitarEventos () {
    clickDuvida()
  }

  /* ---- Events ---- */

  function clickDuvida () {
    sectionDuvidas.addEventListener('click', callbackClickDuvida)
  }

  /* ---- Callbacks ---- */

  function callbackClickDuvida (evento) {
    const elemento = 'div[name="duvida"]'
    if (!evento.target.matches(elemento)) return
    
    ativarDuvida(evento.target)
  }

  /* ---- View ---- */

  function ativarDuvida (divDuvida) {
    desativarDuvidas()
    divDuvida.classList.add('ativo')
  }

  function desativarDuvidas () {
    const divs = sectionDuvidas.querySelectorAll('div[name="duvida"]')
    for (const div of divs) {
      div.classList.remove('ativo')
    }
  }

  /* ---- Start ---- */
  
  habilitarEventos()

}())
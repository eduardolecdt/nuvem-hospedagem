(function (){
  /* ---- Elements ---- */

  const body = document.querySelector('body')
  const modal = document.querySelector('section[name="modal"]')
  const fechar = modal.querySelector('button[name="fechar"]')
  const abrir = document.querySelector('button[name="abrirModal"]')

  /* ---- Events ---- */

  function abrirModal () {
    abrir.addEventListener('click', () => {
      modal.classList.add('mostrar')
      body.classList.add('bloquear')
    })
  }

  function fecharModal () {
    fechar.addEventListener('click', () => {
      modal.classList.remove('mostrar')
      body.classList.remove('bloquear')
    })
  }

  // Start
  abrirModal()
  fecharModal()
  
}())
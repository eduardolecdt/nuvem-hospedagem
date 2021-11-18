(function (){
  /* ---- Constants ---- */

  const URL = 'https://cliente.nuvemhospedagem.com.br/cart.php'
  const PARAMETROS = '?a=add&domain=register&query='

  /* ---- Elements ---- */

  const sectionDominio = document.querySelector('section[name="dominio"]')
  const inputDominio = sectionDominio.querySelector('input[name="dominio"]')
  const buttonAcessar = sectionDominio.querySelector('button[name="acessar"]')

  /* ---- Events ---- */

  buttonAcessar.addEventListener('click', () => {
    const dominio = inputDominio.value
    const url = URL + PARAMETROS + dominio
    navegar(url)
  })

  /* ---- Aux Functions ---- */

  function navegar (url) {
    const a = document.createElement('a')
    a.href = url
    a.target = '_self'
    a.click()
  }

  inputDominio.addEventListener('keyup', function(e){
    if (e.keyCode == 13) {
      const dominio = inputDominio.value
      const url = URL + PARAMETROS + dominio
      navegar(url)
    }
  })
  
}())
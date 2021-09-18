// REGISTRO DE DOMÍNIO
(function (){
  /* ---- Constants ---- */

  const URL = 'https://cliente.nuvemhospedagem.com.br/cart.php'
  const PARAMETROS = '?a=add&domain=register&query='

  /* ---- Elements ---- */

  const sectionDominio = document.querySelector('section[name="apresentacao"]')
  const inputDominio = sectionDominio.querySelector('input[name="dominio2"]')
  const buttonAcessar = sectionDominio.querySelector('button[name="acessar2"]')

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
    a.target = '_blank'
    a.click()
  }
  
}())
(function (){
  /* ---- Constants ---- */

  const URL = 'https://cliente.nuvemhospedagem.com.br/cart.php'
  const PARAMETROS = '?a=add&domain=register&query='

  /* ---- Elements ---- */

  const inputDominio = document.querySelector('input[name="dominio"]')
  const buttonAcessar = document.querySelector('button[name="acessar"]')

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
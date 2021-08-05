(function (){

  // Variables

  const nav = document.querySelector('nav')
  const opcoesNav = nav.querySelector('div[name="opcoesNav"]')

  // ADICIONAR CLASSE AO SCROLLAR

  function adicionarClasse () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 10) nav.classList.remove('scroll')
      else nav.classList.add('scroll')
    })
  }

  // Start
  adicionarClasse()

}())


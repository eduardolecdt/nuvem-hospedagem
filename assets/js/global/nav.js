(function (){

  // Variables

  const body = document.querySelector('body')
  const nav = document.querySelector('nav')
  const logoNav = nav.querySelector('img[name="logo"]')
  const abrirHospedagem = nav.querySelector('button[name="abrirHospedagem"]')
  const abrirServicos = nav.querySelector('button[name="abrirServicos"]')
  const abrirSuporte = nav.querySelector('button[name="abrirSuporte"]')
  const quadroHospedagem = nav.querySelector('div[name="quadroHospedagem"]')
  const quadroServicos = nav.querySelector('div[name="quadroServicos"]')
  const quadroSuporte = nav.querySelector('div[name="quadroSuporte"]')
  const abrirMenuMobile = nav.querySelector('button[name="abrirMenuMobile"]')
  const menuMobile = nav.querySelector('div[name="menuMobile"]')

  // ADICIONAR CLASSE AO SCROLLAR

  function adicionarClasse () {
    window.addEventListener('scroll', () => {
      const alturaPagina = window.scrollY
      if (alturaPagina < 10) nav.classList.remove('scroll')
      else nav.classList.add('scroll')
    })
  }

  function cliqueAbrirHospedagem () {
    abrirHospedagem.addEventListener('click', () => {
      quadroServicos.classList.remove('mostrar')
      quadroSuporte.classList.remove('mostrar')
      if (quadroHospedagem.classList.contains('mostrar')) quadroHospedagem.classList.remove('mostrar')
      else quadroHospedagem.classList.add('mostrar')
    })
  }

  function cliqueAbrirServicos () {
    abrirServicos.addEventListener('click', () => {
      quadroHospedagem.classList.remove('mostrar')
      quadroSuporte.classList.remove('mostrar')
      if (quadroServicos.classList.contains('mostrar')) quadroServicos.classList.remove('mostrar')
      else quadroServicos.classList.add('mostrar')
    })
  }

  function cliqueAbrirSuporte () {
    abrirSuporte.addEventListener('click', () => {
      quadroHospedagem.classList.remove('mostrar')
      quadroServicos.classList.remove('mostrar')
      if (quadroSuporte.classList.contains('mostrar')) quadroSuporte.classList.remove('mostrar')
      else quadroSuporte.classList.add('mostrar')
    })
  }

  function abrirFecharMenuMobile () {
    abrirMenuMobile.addEventListener('click', () => {
      if (body.classList.contains('bloqueado')) body.classList.remove('bloqueado')
      else body.classList.add('bloqueado')
      if (abrirMenuMobile.classList.contains('ativo')) abrirMenuMobile.classList.remove('ativo')
      else abrirMenuMobile.classList.add('ativo')
      if (menuMobile.classList.contains('mostrar')) menuMobile.classList.remove('mostrar')
      else menuMobile.classList.add('mostrar')
    })
  }

  function voltarInicioLogo () {
    logoNav.addEventListener('click', () => {
      const a = document.createElement('a')
      a.rel = 'noopener noreferrer nofollow'
      a.target = '_self'
      a.href = '/'
      a.click()
    })
  }

  // Start
  adicionarClasse()
  cliqueAbrirHospedagem()
  cliqueAbrirServicos()
  cliqueAbrirSuporte()
  abrirFecharMenuMobile()
  voltarInicioLogo()

}())


// EMAIL PROFISSIONAL
(function () {
  /* ---- State ---- */

  const STATE = {
    seletor: '',
    email10gb: {
      nome: '10gb',
      contas: '25',
      precos: {
        mensal: { real: '19', centavo: '90', desconto: '0%' },
        trimestral: { real: '17', centavo: '00', desconto: '14%' },
        semestral: { real: '16', centavo: '90', desconto: '15%' },
        anual: { real: '16', centavo: '58', desconto: '16%' },
      },
      linkBotao: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=19&billingcycle=monthly'
    },
    email50gb: {
      nome: '50gb',
      contas: 'Ilimitadas',
      precos: {
        mensal: { real: '49', centavo: '90', desconto: '0%' },
        trimestral: { real: '45', centavo: '00', desconto: '9%' },
        semestral: { real: '44', centavo: '91', desconto: '10%' },
        anual: { real: '39', centavo: '99', desconto: '19%' }
      },
      linkBotao: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=21&billingcycle=monthly'
    },
    email100gb: {
      nome: '100gb',
      contas: 'Ilimitadas',
      precos: {
        mensal: { real: '90', centavo: '90', desconto: '0%' },
        trimestral: { real: '85', centavo: '40', desconto: '6%' },
        semestral: { real: '80', centavo: '91', desconto: '10%' },
        anual: { real: '76', centavo: '41', desconto: '19%' }
      },
      linkBotao: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=22&billingcycle=monthly'
    }
  }

  /* ---- Elements ---- */

  const sectionPlanos = document.querySelector('section[name="planos"]')
  
  const buttonConsultarEmail10gb = sectionPlanos.querySelector('button[name="consultarEmail10gb"]')
  const buttonConsultarEmail50gb = sectionPlanos.querySelector('button[name="consultarEmail50gb"]')
  const buttonConsultarEmail100gb = sectionPlanos.querySelector('button[name="consultarEmail100gb"]')
  const buttonAssinar = sectionPlanos.querySelector('button[name="assinar"]')
  const buttonMensal = sectionPlanos.querySelector('button[name="mensal"]')
  const buttonTrimestral = sectionPlanos.querySelector('button[name="trimestral"]')
  const buttonSemestral = sectionPlanos.querySelector('button[name="semestral"]')
  const buttonAnual = sectionPlanos.querySelector('button[name="anual"]')

  const pContas = sectionPlanos.querySelector('p[name="contas"]')
  const h2NomePlano = sectionPlanos.querySelector('h2[name="nomePlano"]')
  
  const h4Real = sectionPlanos.querySelector('h4[name="real"]')
  const h3Centavo = sectionPlanos.querySelector('h3[name="centavo"]')
  const pDesconto = sectionPlanos.querySelector('p[name="desconto"]')

  /* ---- Methods ---- */

  function habilitarEventos () {
    clickAssinar()
    
    clickConsultarEmail10gb()
    clickConsultarEmail50gb()
    clickConsultarEmail100gb()
    
    clickMensal()
    clickTrimestral()
    clickSemestral()
    clickAnual()
  }
  
  /* ---- Events ---- */

  function clickAssinar () {
    buttonAssinar.addEventListener('click', callbackClickAssinar)
  }

  // Planos

  function clickConsultarEmail10gb () {
    buttonConsultarEmail10gb.addEventListener('click', callbackClickConsultarEmail10gb)
  }

  function clickConsultarEmail50gb () {
    buttonConsultarEmail50gb.addEventListener('click', callbackClickConsultarEmail50gb)
  }

  function clickConsultarEmail100gb () {
    buttonConsultarEmail100gb.addEventListener('click', callbackClickConsultarEmail100gb)
  }

  // Precos

  function clickMensal () {
    buttonMensal.addEventListener('click', callbackClickMensal)
  }

  function clickTrimestral () {
    buttonTrimestral.addEventListener('click', callbackClickTrimestral)
  }

  function clickSemestral () {
    buttonSemestral.addEventListener('click', callbackClickSemestral)
  }

  function clickAnual () {
    buttonAnual.addEventListener('click', callbackClickAnual)
  }

  /* ---- Callbacks ---- */

  function callbackClickAssinar () {
    const url = buttonAssinar.getAttribute('data-pagina')
    window.location.assign(url)
  }

  // Planos

  function callbackClickConsultarEmail10gb () {
    STATE.seletor = 'email10gb'

    limpar()
    importarPlano(STATE.email10gb)
    ativarBotaoPlano(buttonConsultarEmail10gb)
    importarPrecos('mensal')
    ativarBotaoPreco(buttonMensal)
  }

  function callbackClickConsultarEmail50gb () {
    STATE.seletor = 'email50gb'

    limpar()
    importarPlano(STATE.email50gb)
    ativarBotaoPlano(buttonConsultarEmail50gb)
    importarPrecos('mensal')
    ativarBotaoPreco(buttonMensal)
  }

  function callbackClickConsultarEmail100gb () {
    STATE.seletor = 'email100gb'

    limpar()
    importarPlano(STATE.email100gb)
    ativarBotaoPlano(buttonConsultarEmail100gb)
    importarPrecos('mensal')
    ativarBotaoPreco(buttonMensal)
  }

  // Precos

  function callbackClickMensal () {
    ativarBotaoPreco(buttonMensal)
    importarPrecos('mensal')
  }

  function callbackClickTrimestral () {
    ativarBotaoPreco(buttonTrimestral)
    importarPrecos('trimestral')
  }

  function callbackClickSemestral () {
    ativarBotaoPreco(buttonSemestral)
    importarPrecos('semestral')
  }

  function callbackClickAnual () {
    ativarBotaoPreco(buttonAnual)
    importarPrecos('anual')
  }

  /* ---- View ---- */

  function limpar () {
    pContas.innerText = ''
    h2NomePlano.innerText = ''

    h4Real.innerText = ''
    h3Centavo.innerText = ''
    pDesconto.innerText = ''

    buttonAssinar.removeAttribute('data-pagina')
    desativarBotoesPlanos()
    desativarBotoesPrecos()
  }

  function importarPlano (dados) {
    pContas.innerText = dados.contas
    h2NomePlano.innerText = dados.nome

    buttonAssinar.setAttribute('data-pagina', dados.linkBotao)
  }

  function importarPrecos (periodo) {
    const preco = STATE[STATE.seletor].precos[periodo]
    h4Real.innerText = preco.real
    h3Centavo.innerText = `,${preco.centavo}`
    pDesconto.innerText = `${preco.desconto} de desconto`
  }

  // Botao do Plano

  function ativarBotaoPlano (button) {
    desativarBotoesPlanos()
    button.classList.add('ativo')
  }

  function desativarBotoesPlanos () {
    buttonConsultarEmail10gb.classList.remove('ativo')
    buttonConsultarEmail50gb.classList.remove('ativo')
    buttonConsultarEmail100gb.classList.remove('ativo')
  }

  // Botao do Preco

  function ativarBotaoPreco (button) {
    desativarBotoesPrecos()
    button.classList.add('ativo')
  }

  function desativarBotoesPrecos () {
    buttonMensal.classList.remove('ativo')
    buttonTrimestral.classList.remove('ativo')
    buttonSemestral.classList.remove('ativo')
    buttonAnual.classList.remove('ativo')
  }

  /* ---- Start ---- */
  
  habilitarEventos()
  callbackClickConsultarEmail10gb()
}())
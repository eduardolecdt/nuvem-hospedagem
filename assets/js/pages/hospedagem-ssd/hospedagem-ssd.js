// HOSPEDAGEM SSD
(function () {
  /* ---- State ---- */

  const STATE = {
    seletor: '',
    ssdBasico: {
      nome: 'Básico',
      processamentoIndice: 1,
      memoria: '512mb',
      espaco: '10Gb',
      transferencia: 'ilimitado',
      contasEmail: 'ilimitado',
      dominios: '1 site',
      precos: {
          mensal: { real: '24', centavo: '90', desconto: '0%' },
          trimestral: { real: '23', centavo: '90', desconto: '4%' },
          semestral: { real: '22', centavo: '90', desconto: '8%' },
          anual: { real: '21', centavo: '16', desconto: '15%' },
      },
      linkBotao: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=30&billingcycle=monthly'
    },
    ssdIntermediario: {
      nome: 'Intermediário',
      processamentoIndice: 2,
      memoria: '768mb',
      espaco: '20Gb',
      transferencia: 'ilimitado',
      contasEmail: 'ilimitado',
      dominios: '1 site',
      precos: {
          mensal: { real: '39', centavo: '90', desconto: '0%' },
          trimestral: { real: '37', centavo: '90', desconto: '5%' },
          semestral: { real: '36', centavo: '70', desconto: '8%' },
          anual: { real: '33', centavo: '90', desconto: '15%' }
      },
      linkBotao: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=31&billingcycle=monthly'
    },
    ssdAvancado: {
      nome: 'Avançado',
      processamentoIndice: 4,
      memoria: '1024mb',
      espaco: '50Gb',
      transferencia: 'ilimitado',
      contasEmail: 'ilimitado',
      dominios: '3 sites',
      precos: {
          mensal: { real: '69', centavo: '90', desconto: '0%' },
          trimestral: { real: '67', centavo: '10', desconto: '4%' },
          semestral: { real: '64', centavo: '30', desconto: '8%' },
          anual: { real: '59', centavo: '41', desconto: '15%' }
      },
      linkBotao: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=32&billingcycle=monthly'
    },
    ssdEspecial: {
      nome: 'Especial',
      processamentoIndice: 6,
      memoria: '2048mb',
      espaco: '100Gb',
      transferencia: 'ilimitado',
      contasEmail: 'ilimitado',
      dominios: '4 sites',
      precos: {
          mensal: { real: '139', centavo: '90', desconto: '0%' },
          trimestral: { real: '134', centavo: '30', desconto: '4%' },
          semestral: { real: '127', centavo: '88', desconto: '8%' },
          anual: { real: '117', centavo: '90', desconto: '15%' }
      },
      linkBotao: 'https://cliente.nuvemhospedagem.com.br/cart.php?a=add&pid=33&billingcycle=monthly'
    },
  }

  /* ---- Elements ---- */

  const sectionPlanos = document.querySelector('section[name="planos"]')
  
  const buttonConsultarSsdBasico = sectionPlanos.querySelector('button[name="consultarSsdBasico"]')
  const buttonConsultarSsdIntermediario = sectionPlanos.querySelector('button[name="consultarSsdIntermediario"]')
  const buttonConsultarSsdAvancado = sectionPlanos.querySelector('button[name="consultarSsdAvancado"]')
  const buttonConsultarSsdEspecial = sectionPlanos.querySelector('button[name="consultarSsdEspecial"]')
  const buttonAssinar = sectionPlanos.querySelector('button[name="assinar"]')
  const buttonMensal = sectionPlanos.querySelector('button[name="mensal"]')
  const buttonTrimestral = sectionPlanos.querySelector('button[name="trimestral"]')
  const buttonSemestral = sectionPlanos.querySelector('button[name="semestral"]')
  const buttonAnual = sectionPlanos.querySelector('button[name="anual"]')

  const pMemoria = sectionPlanos.querySelector('p[name="memoria"]')
  const pEspaco = sectionPlanos.querySelector('p[name="espaco"]')
  const pTransferencia = sectionPlanos.querySelector('p[name="transferencia"]')
  const pContasEmail = sectionPlanos.querySelector('p[name="contasEmail"]')
  const pDominios = sectionPlanos.querySelector('p[name="dominios"]')
  const h2NomePlano = sectionPlanos.querySelector('h2[name="nomePlano"]')
  const divPotencia = sectionPlanos.querySelector('div[name="potencia"]')
  
  const h4Real = sectionPlanos.querySelector('h4[name="real"]')
  const h3Centavo = sectionPlanos.querySelector('h3[name="centavo"]')
  const pDesconto = sectionPlanos.querySelector('p[name="desconto"]')

  /* ---- Methods ---- */

  function habilitarEventos () {
    clickAssinar()
    
    clickConsultarSsdBasico()
    clickConsultarSsdIntermediario()
    clickConsultarSsdAvancado()
    clickConsultarSsdEspecial()
    
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

  function clickConsultarSsdBasico () {
    buttonConsultarSsdBasico.addEventListener('click', callbackClickConsultarSsdBasico)
  }

  function clickConsultarSsdIntermediario () {
    buttonConsultarSsdIntermediario.addEventListener('click', callbackClickConsultarSsdIntermediario)
  }

  function clickConsultarSsdAvancado () {
    buttonConsultarSsdAvancado.addEventListener('click', callbackClickConsultarSsdAvancado)
  }
  
  function clickConsultarSsdEspecial () {
    buttonConsultarSsdEspecial.addEventListener('click', callbackClickConsultarSsdEspecial)
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
    const url = buttonAssinar.getAttribute('data-url')
    window.location.assign(url)
  }

  // Planos

  function callbackClickConsultarSsdBasico () {
    STATE.seletor = 'ssdBasico'

    limpar()
    importarPlano(STATE.ssdBasico)
    ativarBotaoPlano(buttonConsultarSsdBasico)
    importarPrecos('mensal')
    ativarBotaoPreco(buttonMensal)
  }

  function callbackClickConsultarSsdIntermediario () {
    STATE.seletor = 'ssdIntermediario'

    limpar()
    importarPlano(STATE.ssdIntermediario)
    ativarBotaoPlano(buttonConsultarSsdIntermediario)
    importarPrecos('mensal')
    ativarBotaoPreco(buttonMensal)
  }

  function callbackClickConsultarSsdAvancado () {
    STATE.seletor = 'ssdAvancado'

    limpar()
    importarPlano(STATE.ssdAvancado)
    ativarBotaoPlano(buttonConsultarSsdAvancado)
    importarPrecos('mensal')
    ativarBotaoPreco(buttonMensal)
  }
  
  function callbackClickConsultarSsdEspecial () {
    STATE.seletor = 'ssdEspecial'

    limpar()
    importarPlano(STATE.ssdEspecial)
    ativarBotaoPlano(buttonConsultarSsdEspecial)
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
    pMemoria.innerText = ''
    pEspaco.innerText = ''
    pTransferencia.innerText = ''
    pContasEmail.innerText = ''
    pDominios.innerText = ''
    h2NomePlano.innerText = ''

    h4Real.innerText = ''
    h3Centavo.innerText = ''
    pDesconto.innerText = ''

    buttonAssinar.removeAttribute('data-url')
    desativarBotoesPlanos()
    desativarBotoesPrecos()
    limparPotenciaProcessamento()
  }

  function importarPlano (dados) {
    pMemoria.innerText = dados.memoria
    pEspaco.innerText = dados.espaco
    pTransferencia.innerText = dados.transferencia
    pContasEmail.innerText = dados.contasEmail
    pDominios.innerText = dados.dominios
    h2NomePlano.innerText = dados.nome

    buttonAssinar.setAttribute('data-url', dados.linkBotao)
    selecionarPotenciaProcessamento(dados.processamentoIndice)
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
    buttonConsultarSsdBasico.classList.remove('ativo')
    buttonConsultarSsdIntermediario.classList.remove('ativo')
    buttonConsultarSsdAvancado.classList.remove('ativo')
    buttonConsultarSsdEspecial.classList.remove('ativo')
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

  // Potencia de Processamento

  function selecionarPotenciaProcessamento (indice) {
    limparPotenciaProcessamento()
    const divs = divPotencia.querySelectorAll('div')
    if (indice > divs.length) return
    for (const numero in [...Array(indice)]) {
      divs[numero].classList.add('ativo')
    }
  }

  function limparPotenciaProcessamento () {
    const divs = divPotencia.querySelectorAll('div')
    for (const div of divs) {
      div.classList.remove('ativo')
    }
  }

  /* ---- Start ---- */
  
  habilitarEventos()
  callbackClickConsultarSsdBasico()
}())
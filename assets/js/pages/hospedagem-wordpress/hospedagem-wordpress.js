(function () {
    /* ---- State ---- */
  
    const STATE = {
      wordpressBasico: {
        processamentoIndice: 1,
        memoria: '512mb',
        espaco: '10Gb',
        transferencia: 'ilimitado',
        contasEmail: 'ilimitado',
        dominios: '1 site',
        precos: {
          mensal: 'R$ 19,90',
          trimestral: 'R$ 18,90 = 10% de desconto',
          semestral: 'R$ 16,90 = 20% de desconto',
          anual: 'R$ 15,90 = 35% de desconto'
        },
        linkBotao: 'https://google.com/1'
      },
      wordpressIntermediario: {
        processamentoIndice: 2,
        memoria: '768mb',
        espaco: '20Gb',
        transferencia: 'ilimitado',
        contasEmail: 'ilimitado',
        dominios: '1 site',
        precos: {
          mensal: 'R$ 39,90',
          trimestral: 'R$ 38,90 = 10% de desconto',
          semestral: 'R$ 36,90 = 20% de desconto',
          anual: 'R$ 35,90 = 35% de desconto'
        },
        linkBotao: 'https://google.com/2'
      },
      wordpressAvancado: {
        processamentoIndice: 4,
        memoria: '1024mb',
        espaco: '50Gb',
        transferencia: 'ilimitado',
        contasEmail: 'ilimitado',
        dominios: '3 sites',
        precos: {
          mensal: 'R$ 69,90',
          trimestral: 'R$ 68,90 = 10% de desconto',
          semestral: 'R$ 66,90 = 20% de desconto',
          anual: 'R$ 65,90 = 35% de desconto'
        },
        linkBotao: 'https://google.com/3'
      },
      wordpressEspecial: {
        processamentoIndice: 5,
        memoria: '2048mb',
        espaco: '100Gb',
        transferencia: 'ilimitado',
        contasEmail: 'ilimitado',
        dominios: '4 sites',
        precos: {
          mensal: 'R$ 139,90',
          trimestral: 'R$ 138,90 = 10% de descontoo',
          semestral: 'R$ 136,90 = 20% de desconto',
          anual: 'R$ 135,90 = 35% de desconto'
        },
        linkBotao: 'https://google.com/4'
      },
    }
  
    /* ---- Elements ---- */
  
    const sectionPlanos = document.querySelector('section[name="planos"]')
    
    const buttonConsultarWordpressBasico = sectionPlanos.querySelector('button[name="consultarWordpressBasico"]')
    const buttonConsultarWordpressIntermediario = sectionPlanos.querySelector('button[name="consultarWordpressIntermediario"]')
    const buttonConsultarWordpressAvancado = sectionPlanos.querySelector('button[name="consultarWordpressAvancado"]')
    const buttonConsultarWordpressEspecial = sectionPlanos.querySelector('button[name="consultarWordpressEspecial"]')
    const buttonAssinar = sectionPlanos.querySelector('button[name="assinar"]')

    const pMemoria = sectionPlanos.querySelector('p[name="memoria"]')
    const pEspaco = sectionPlanos.querySelector('p[name="espaco"]')
    const pTransferencia = sectionPlanos.querySelector('p[name="transferencia"]')
    const pContasEmail = sectionPlanos.querySelector('p[name="contasEmail"]')
    const pDominios = sectionPlanos.querySelector('p[name="dominios"]')
    const divPotencia = sectionPlanos.querySelector('div[name="potencia"]')

    /* ---- Methods ---- */

    function habilitarEventos () {
      clickConsultarWordpressBasico()
      clickConsultarWordpressIntermediario()
      clickConsultarWordpressAvancado()
      clickConsultarWordpressEspecial()
      clickAssinar()
    }
    
    /* ---- Events ---- */

    function clickConsultarWordpressBasico () {
      buttonConsultarWordpressBasico.addEventListener('click', callbackClickConsultarWordpressBasico)
    }

    function clickConsultarWordpressIntermediario () {
      buttonConsultarWordpressIntermediario.addEventListener('click', callbackClickConsultarWordpressIntermediario)
    }

    function clickConsultarWordpressAvancado () {
      buttonConsultarWordpressAvancado.addEventListener('click', callbackClickConsultarWordpressAvancado)
    }
    
    function clickConsultarWordpressEspecial () {
      buttonConsultarWordpressEspecial.addEventListener('click', callbackClickConsultarWordpressEspecial)
    }

    function clickAssinar () {
      buttonAssinar.addEventListener('click', callbackClickAssinar)
    }

    /* ---- Callbacks ---- */

    function callbackClickConsultarWordpressBasico () {
      const dados = STATE.wordpressBasico
      limpar()

      importarEstatisticas(dados)
      ativarBotaoPlano(buttonConsultarWordpressBasico)
      customizarLinkBotaoAssinar(dados.linkBotao)
      selecionarPotenciaProcessamento(dados.processamentoIndice)
    }

    function callbackClickConsultarWordpressIntermediario () {
      const dados = STATE.wordpressIntermediario
      limpar()

      importarEstatisticas(dados)
      ativarBotaoPlano(buttonConsultarWordpressIntermediario)
      customizarLinkBotaoAssinar(dados.linkBotao)
      selecionarPotenciaProcessamento(dados.processamentoIndice)
    }

    function callbackClickConsultarWordpressAvancado () {
      const dados = STATE.wordpressAvancado
      limpar()

      importarEstatisticas(dados)
      ativarBotaoPlano(buttonConsultarWordpressAvancado)
      customizarLinkBotaoAssinar(dados.linkBotao)
      selecionarPotenciaProcessamento(dados.processamentoIndice)
    }
    
    function callbackClickConsultarWordpressEspecial () {
      const dados = STATE.wordpressEspecial
      limpar()

      importarEstatisticas(dados)
      ativarBotaoPlano(buttonConsultarWordpressEspecial)
      customizarLinkBotaoAssinar(dados.linkBotao)
      selecionarPotenciaProcessamento(dados.processamentoIndice)
    }

    function callbackClickAssinar () {
      const url = buttonAssinar.getAttribute('data-url')
      window.location.assign(url)
    }

    /* ---- View ---- */

    function limpar () {
      pMemoria.innerText = ''
      pEspaco.innerText = ''
      pTransferencia.innerText = ''
      pContasEmail.innerText = ''
      pDominios.innerText = ''

      desativarBotoesPlanos()
      customizarLinkBotaoAssinar('')
      limparPotenciaProcessamento()
    }

    function importarEstatisticas (dados) {
      pMemoria.innerText = dados.memoria
      pEspaco.innerText = dados.espaco
      pTransferencia.innerText = dados.transferencia
      pContasEmail.innerText = dados.contasEmail
      pDominios.innerText = dados.dominios
    }

    function ativarBotaoPlano (button) {
      desativarBotoesPlanos()
      button.classList.add('ativo')
    }

    function desativarBotoesPlanos () {
      buttonConsultarWordpressBasico.classList.remove('ativo')
      buttonConsultarWordpressIntermediario.classList.remove('ativo')
      buttonConsultarWordpressAvancado.classList.remove('ativo')
      buttonConsultarWordpressEspecial.classList.remove('ativo')
    }

    function customizarLinkBotaoAssinar (url) {
      buttonAssinar.setAttribute('data-url', url)
    }

    function selecionarPotenciaProcessamento (indice) {
      limparPotenciaProcessamento()
      const divs = divPotencia.querySelectorAll('div')
      if (indice > divs.length) return
      divs[indice - 1].classList.add('ativo')
    }

    function limparPotenciaProcessamento () {
      const divs = divPotencia.querySelectorAll('div')
      for (const div of divs) {
        div.classList.remove('ativo')
      }
    }

    /* ---- Start ---- */
    
    habilitarEventos()
    callbackClickConsultarWordpressBasico()
}())
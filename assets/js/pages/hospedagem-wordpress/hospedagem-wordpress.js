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
        linkBotal: 'https://google.com/1'
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
        linkBotal: 'https://google.com/1'
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
        linkBotal: 'https://google.com/1'
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
        linkBotal: 'https://google.com/1'
      },
    }
  
    /* ---- Elements ---- */
  
    const sectionPlanos = document.querySelector('section[name="planos"]')
    
    const buttonConsultarWordpressBasico = sectionPlanos.querySelector('button[name="consultarWordpressBasico"]')
    const buttonConsultarWordpressIntermediario = sectionPlanos.querySelector('button[name="consultarWordpressIntermediario"]')
    const buttonConsultarWordpressAvancado = sectionPlanos.querySelector('button[name="consultarWordpressAvancado"]')
    const buttonConsultarWordpressEspecial = sectionPlanos.querySelector('button[name="consultarWordpressEspecial"]')

    const pMemoria = sectionPlanos.querySelector('p[name="memoria"]')
    const pEspaco = sectionPlanos.querySelector('p[name="espaco"]')
    const pTransferencia = sectionPlanos.querySelector('p[name="transferencia"]')
    const pContasEmail = sectionPlanos.querySelector('p[name="contasEmail"]')
    const pDominios = sectionPlanos.querySelector('p[name="dominios"]')

    /* ---- Methods ---- */

    function habilitarEventos () {
      clickConsultarWordpressBasico()
      clickConsultarWordpressIntermediario()
      clickConsultarWordpressAvancado()
      clickConsultarWordpressEspecial()
    }
    habilitarEventos()
    
    /* ---- Events ---- */

    function clickConsultarWordpressBasico () {
      buttonConsultarWordpressBasico.addEventListener('click', () => {
        const dados = STATE.wordpressBasico
        limpar()
        renderizar(dados)
      })
    }

    function clickConsultarWordpressIntermediario () {
      buttonConsultarWordpressIntermediario.addEventListener('click', () => {
        const dados = STATE.wordpressIntermediario
        limpar()
        renderizar(dados)
      })
    }

    function clickConsultarWordpressAvancado () {
      buttonConsultarWordpressAvancado.addEventListener('click', () => {
        const dados = STATE.wordpressAvancado
        limpar()
        renderizar(dados)
      })
    }
    
    function clickConsultarWordpressEspecial () {
      buttonConsultarWordpressEspecial.addEventListener('click', () => {
        const dados = STATE.wordpressEspecial
        limpar()
        renderizar(dados)
      })
    }

    /* ---- View ---- */

    function renderizar (dados) {
      pMemoria.innerText = dados.memoria
      pEspaco.innerText = dados.espaco
      pTransferencia.innerText = dados.transferencia
      pContasEmail.innerText = dados.contasEmail
      pDominios.innerText = dados.dominios
    }

    function limpar () {
      pMemoria.innerText = ''
      pEspaco.innerText = ''
      pTransferencia.innerText = ''
      pContasEmail.innerText = ''
      pDominios.innerText = ''
    }
  }())
(function () {
  /* ---- CONSTANTS ---- */

  const CLASSES = ['financeiro', 'migracao', 'hospedagem']

  /* ---- Elements ---- */

  const sectionApresentacao = document.querySelector('section[name="apresentacao"]')
  const divResultado = sectionApresentacao.querySelector('div[name="resultado"]')

  const buttonFinanceiro = sectionApresentacao.querySelector('button[name="financeiro"]')
  const buttonMigracao = sectionApresentacao.querySelector('button[name="migracao"]')
  const buttonHospedagem = sectionApresentacao.querySelector('button[name="hospedagem"]')

   /* ---- Methods ---- */

   function habilitarEventos () {
    clickFinanceiro()
    clickMigracao()
    clickHospedagem()
  }

  /* ---- Events ---- */

  function clickFinanceiro () {
    buttonFinanceiro.addEventListener('click', callbackClickFinanceiro)
  }

  function clickMigracao () {
    buttonMigracao.addEventListener('click', callbackClickMigracao)
  }

  function clickHospedagem () {
    buttonHospedagem.addEventListener('click', callbackClickHospedagem)
  }

  /* ---- Callbacks ---- */

  function callbackClickFinanceiro () {
    ativarBotao(buttonFinanceiro)
    ativarClasse(CLASSES[0])
  }

  function callbackClickMigracao () {
    ativarBotao(buttonMigracao)
    ativarClasse(CLASSES[1])
  }

  function callbackClickHospedagem () {
    ativarBotao(buttonHospedagem)
    ativarClasse(CLASSES[2])
  }

  /* ---- View ---- */

  function ativarClasse (classe) {
    removerClasses()
    divResultado.classList.add(classe)
  }

  function removerClasses () {
    divResultado.classList.remove(CLASSES[0])
    divResultado.classList.remove(CLASSES[1])
    divResultado.classList.remove(CLASSES[2])
  }

  // Botao

  function ativarBotao (button) {
    desativarBotoes()
    button.classList.add('ativo')
  }

  function desativarBotoes () {
    buttonFinanceiro.classList.remove('ativo')
    buttonMigracao.classList.remove('ativo')
    buttonHospedagem.classList.remove('ativo')
  }

  /* ---- Start ---- */
  
  habilitarEventos()
  callbackClickFinanceiro()
}())
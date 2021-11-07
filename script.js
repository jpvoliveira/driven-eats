let comidaSelecionada
let precoComida
function selecionarcom(botao) {
  const botaoSelecionado = document.querySelector('.opcoescomida .selecionar')
  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove('selecionar')
  }
  botao.classList.add('selecionar')

  let nome = document.querySelector('.opcoescomida .selecionar .nome')
  comidaSelecionada = nome.innerHTML

  let valor = document.querySelector('.opcoescomida .selecionar .preço span')
  precoComida = valor.innerHTML

  corbotao()
}

let bebeidaSelecionada
let precoBebida
function selecionarbeb(botao) {
  const botaoSelecionado = document.querySelector('.opcoesbebida .selecionar')
  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove('selecionar')
  }
  botao.classList.add('selecionar')

  let nome = document.querySelector('.opcoesbebida .selecionar .nome')
  bebidaSelecionada = nome.innerHTML

  let valor = document.querySelector('.opcoesbebida .selecionar .preço span')
  precoBebida = valor.innerHTML

  corbotao()
}

let sobremesaSelecionada
let precoSobremesa
function selecionarsob(botao) {
  const botaoSelecionado = document.querySelector(
    '.opcoessobremesa .selecionar'
  )
  if (botaoSelecionado !== null) {
    botaoSelecionado.classList.remove('selecionar')
  }
  botao.classList.add('selecionar')

  let nome = document.querySelector('.opcoessobremesa .selecionar .nome')
  sobremesaSelecionada = nome.innerHTML

  let valor = document.querySelector('.opcoessobremesa .selecionar .preço span')
  precoSobremesa = valor.innerHTML

  corbotao()
}

function corbotao() {
  if (
    comidaSelecionada !== undefined &&
    bebidaSelecionada !== undefined &&
    sobremesaSelecionada !== undefined
  ) {
    let corBotao = document.querySelector('.enviar')
    corBotao.classList.add('botaoenviar')
    corBotao.innerHTML = 'Fechar pedido'
  }
}

function teste() {
  let total =
    parseFloat(precoComida.replace(',', '.')) +
    parseFloat(precoBebida.replace(',', '.')) +
    parseFloat(precoSobremesa.replace(',', '.'))

  let mensagem =
    'Olá, gostaria de fazer o pedido:\n' +
    '- Prato: ' +
    comidaSelecionada +
    '\n- Bebida: ' +
    bebidaSelecionada +
    '\n- Sobremesa: ' +
    sobremesaSelecionada +
    '\nTotal: R$' +
    total.toFixed(2)

  let link = 'https://wa.me/5531975881152?text=' + encodeURIComponent(mensagem)

  window.open(link)

  //document
  //  .getElementById('a')
  //  .setAttribute('onclick', 'location.href="' + link + '"')

  //alert(link)
}

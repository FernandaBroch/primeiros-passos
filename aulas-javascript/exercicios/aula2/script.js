function saoDiferentes(){
  checkDiv()
  let input1 = document.getElementById('number1').value
  let input2 = document.getElementById('number2').value
  let div = document.createElement('div')
  div.id='result'
  if(input1 != input2){
    div.innerText='Os valores são diferentes'
    div.classList.add('green')
  }else{
    div.innerText='Não são diferentes'
    div.classList.add('red')
  }
  document.body.append(div)
}

function resetar(){
  document.getElementById('number1').value = ''
  document.getElementById('number2').value = ''
  checkDiv()
}

function checkDiv(){
  if(null != document.getElementById('result')){
    document.getElementById('result').remove()
  }
}
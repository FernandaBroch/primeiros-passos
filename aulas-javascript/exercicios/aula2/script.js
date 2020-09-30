function saoDiferentes(){
  checkDiv()
  let input1 = document.getElementById('number1').value
  let input2 = document.getElementById('number2').value
  if(input1 != input2){
    changeDiv('Os valores são diferentes', 'green')    
  }else{
    changeDiv('Não são diferentes','red')
  }
}
function changeDiv(text, className){
  let div = document.createElement('div')
  div.id='result'
  div.innerText=text
  div.classList.add(className)
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
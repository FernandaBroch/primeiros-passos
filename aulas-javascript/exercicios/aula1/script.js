let idade = prompt('Qual é sua idade?');

function checarSePodeDirigir(idade){
  if(isNaN(idade)){
    alert('Não é número!')
  }else{
    if(idade > 18){
      alert('Já pode dirigir!')
    }else{
      alert('Ainda não pode dirigir')
    }
  }
}

checarSePodeDirigir(idade)

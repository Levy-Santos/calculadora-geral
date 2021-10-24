function somar(){
  var num1 =Number(n1.value)
  var num2 =Number(n2.value)
  
  operador.innerHTML= " + "
  res.innerHTML = num1+num2
  
}

function subtrair(){
  var num1 =Number(n1.value)
  var num2 =Number(n2.value)
  
  operador.innerHTML= " - "
  res.innerHTML = num1-num2
}

function multiplicar(){
  var num1 =Number(n1.value)
  var num2 =Number(n2.value)
  
  operador.innerHTML= " X "
  res.innerHTML = num1*num2
}

function dividir(){
  var num1 =Number(n1.value)
  var num2 =Number(n2.value) 
  
  operador.innerHTML= " / "
  res.innerHTML = num1/num2
}
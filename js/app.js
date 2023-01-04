

let num1 = document.getElementById('n1')
let num2 = document.getElementById('n2')
let respuesta = document.getElementById('res')
let boton = document.getElementById('calcular')


function suma(){
    let a = parseInt(num1.value)
    let b = parseInt(num2.value)
  
    //Analiza las variables  esta parte es importante
    let resultado = a + b
    respuesta.innerText = resultado

}

boton.onclick = suma;
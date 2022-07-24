console.warn("punto 4 actividad")

let valor1=prompt("Ingrese un valor")
valor1= parseInt(valor1)
let valor2=prompt("Ingrese otro valor")
valor2= parseInt(valor2)

let suma= valor1+valor2
let resta= valor1-valor2
let multiplicar= valor1*valor2
let dividir = valor1/valor2

let procedimiento=parseInt(prompt("ingrese el procedimiento que desea realizar? 1 para sumar, 2 para restar, 3 para multiplicar, 4 para dividir"))
if(procedimiento === 1){
    alert(`la suma es ${suma}`)
} else if(procedimiento === 2){
    alert(`la resta es ${resta}`)
} else if(procedimiento === 3){
    alert(`la multiplicacion es ${multiplicar}`)
} else if(procedimiento === 4){
    alert(`la division es  ${dividir}`)
}else {
    console.error('procedimiento no existente')
}




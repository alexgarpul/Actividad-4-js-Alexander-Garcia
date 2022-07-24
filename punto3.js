
console.warn('punto 3 actividad4')

let numHombres=parseInt(prompt(`Ingrese la cantidad de hombres que hay`))
let numMujeres=parseInt(prompt(`Ingrese la cantidad de mujeres que hay`))
const numTotalEstudiantes= numHombres+numMujeres
let porcentajeHombres= ((numHombres*100)/numTotalEstudiantes)
let porcentajeMujeres= ((numMujeres*100)/numTotalEstudiantes)
    

alert(`el porcentaje de hombres es ${Math.round(porcentajeHombres)}% y el porcentaje de mujeres es ${Math.round(porcentajeMujeres)}%`)

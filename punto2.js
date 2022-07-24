console.warn('Construyendo un if-else')

let a = 5

if(a >10) {
    console.log(`${a} es mayor que 10`)
} else {
    console.log(`${a} es menor que 10`)
}
 console.log(`Fin del programa`)

// ----------------------------------------------

console.warn(`Días de la semana`)
 const hoy = new Date()
 let dia = hoy.getDay()

 console.log({ dia })

 if(dia ===0) {
    console.log('Domingo')
 } else if (dia === 1) {
    console.log('lunes')
 } else {
    console.log('No es ni domingo, ni lunes')
 }
//  -----------------------------------------

console.warn('Punto 2 actividad4')
const diasSemanas = {
    0: 'domingo',
    1: 'lunes',
    2: 'Martes',
    3: 'Miércoles',
    4: 'Jueves',
    5: 'Viernes',
    6: 'Sábado',
}
console.log(diasDeLaSemana[dia])
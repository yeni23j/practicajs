console.log (`estoy en el archivo externo de js`)

/*variable var*/
var nombre = `Pepe`
console.log (nombre)
apellido = `Perez`
console.log (apellido)
provincia = `Misiones`
console.log (provincia)

/* concatenar datos */
console.log (`Mi nombre es: ` + nombre + `, mi apellido es: ` + apellido + ` y vivo en la provincia de: ` + provincia) 

/* interpolar variables - template string */
console.log (`Mi nombre es ${nombre}, mi apellido es ${apellido} y vivo en ${provincia}`)

/* la variable var se puede reutilizar y cambiar el valor */
provincia = `Corrientes`
console.log (`Mi nombre es ${nombre}, mi apellido es ${apellido} y vivo en ${provincia}`)
console.log (`=============================================`)
/* variable let: no se puede volver a reutilizar o modificar el valor de la variable */
let pais = `Argentina`
console.log (pais)

/* let pais = `Brasil` no permite cambiar */
console.log (`===================================================`)
/* operadores matematicos:*/
let numUno = 1000
let numDos = 5000

resultado = numUno + numDos
console.log (`el resultado de la suma es ${resultado}`)

resultado = numDos - numUno 
console.log (`el resultado de la resta es ${resultado}`)

resultado = numUno * numDos
console.log (`el resultado de la multiplicación es ${resultado}`)

resultado = numDos / numUno
console.log (resultado)

resultado = numDos % numUno
console.log (`el resto de la división es ${resultado}`)

/* operadores relacionales == ; === ; < ; > ; >= ; <= ; ! ; != ;  */
let edad = 18

/* if (edad > 18){
    console.log (1. No puedes comprar bebidas)
} */

/* if (edad < 18){
    console.log (2. Puedes comprar bebidas)
} */
if (edad >= 18){
    console.log (`3. Puedes comprar bebidas`)
}
if (edad <= 18){
    console.log (`4. No puedes comprar bebidas`)
}
if (edad == 18){
    console.log (`5. Tenés 18 años`)
}
if (edad === 18){
    console.log (`6. Son estrictamente iguales`)
}
console.log (`===================================`)
/* operadores lógicos: && ; ||
&& : y lógico: todas las condiciones tienen que ser true; 
|| : o lógico: sólo una de las condiciones debe ser true */

let cliente = true
let pagoAlDía = false
let día = `viernes`

/* para el y lógico todas las condiciones tienen que ser true */

     /*false     false              false   = false       (no imprime)  */
if (!cliente && día == `lunes` && pagoAlDía){
console.log( `Lo sentimos, no tenemos promociones para usted`)
}
    /*true     false = false (no imprime)  */
if (cliente && día == `lunes`){
    console.log( `Lo sentimos, no tenemos promociones para hoy`)
}
    /*true     true  = true ( imprime)  */
if (cliente && día == `viernes`){
    console.log( `por ser cliente y ser viernes, tiene un 70% de descuento`)
}

/* para el o lógico solamente una de las condiciones tiene que ser true */
    /* false       true             false      = true  */
if (!cliente || día == `viernes` || pagoAlDía){
    console.log( `Lo sentimos, no tenemos promociones para usted`)
}

console.log (`=================================================`)
/* else: o si no */

let usuario = `Pepe`
let password = 1234

/* true                true       = true */
if (usuario == `Pepe` && password == 1234){
    console.log( `Bienvenido Pepe a tu sistema`);
} // se va a otra página

     /* true                  false       = true */
if (usuario == `Pepe` || password == 3454){
    console.log( `Bienvenido Pepe a tu sistema`) 
}

if (usuario == `Pepe` && password == 1524){
    console.log( `Bienvenido Pepe a tu sistema`);
    // se va a otra página
}else{
    console.log(`Usuario o Password incorrectos`)
}


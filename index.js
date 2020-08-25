//tienenMismaLongitud(a, b)
const tienenMismaLongitud = (a, b) => {
    if (a.length == b.length){
        return 'true'
    }
    else {
        return 'false'
    }
}

console.log(tienenMismaLongitud('javascript', 'java')) // false
console.log(tienenMismaLongitud('manzana', 'cerveza')) // true

//esUltimoCaracter(palabra, caracter)
const esUltimoCaracter = (palabra, caracter) => {
    if ( palabra.charAt(palabra.length - 1) == caracter){
        return 'true'
    }
    else {
        return 'false'
    }
}

console.log(esUltimoCaracter('lovelace', 'e')) // true
console.log(esUltimoCaracter('lovelace', 'f')) // false

//esContraseniaValida(contrasenia)
const esValida = (contrasenia) => {
    if (contrasenia.length >= 8) {
        return 'true'
    }
    else {
        return 'false'
    }
}

console.log(esValida('contraseniaMuySegura')) // true
console.log(esValida('abc123')) // false

//sonIguales(a, b)
const sonIguales = (a, b) => {
    let aMinuscula = a.toLowerCase()
    let bMinuscula = b.toLowerCase()
    if (aMinuscula == bMinuscula) {
        return 'true'
    }
    else {
        return 'false'
    }
}

console.log(sonIguales('javascript', 'JavaScript')) // true
console.log(sonIguales('AdA LoVeLaCe', 'Ada Lovelace')) // true
console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO')) // false

//contarPalabras(str)--> ME LLEVO HORAS ESTE EJERCICIO!!
const contarPalabras = (string) => {
    let emprolijarVariable = string.trim()
    let unificarEspacios = emprolijarVariable.replace(/[\s]/gi, ' ')
    let separarPalabras = unificarEspacios.split(' ')
    let cantidadPalabras = separarPalabras.length
    return cantidadPalabras
}

console.log(contarPalabras('javascript')) // 1
console.log(contarPalabras('ada lovelace')) // 2
console.log(contarPalabras('si debuggear es el proceso de remover bugs, programar es el proceso de agregarlos')) // 14

//burlarse(str)
//Mi soluci'on
const burlarseAgus = ('programar es dificil')

console.log(burlarseAgus.replace(/a|o|e|u/gi, "i")) // 'prigimir is dificil'

//Soluci'on de Male
const burlarseMale = (string) => {
    let burla = string.replace(/[aeou]/gi, 'i')
    return burla
}

console.log(burlarseMale('programar es dificil'))
console.log(burlarseMale('las mujeres no sirven para las computadoras'))
console.log(burlarseMale('necesitas saber matematica para programar'))

//esFraccionMayorAUno(fraccion)
const esFraccionMayorAUno = (fraccion) => {
    if (parseFloat(fraccion) > 1) {
        return 'true'
    }
    else {
        return 'false'
    }
}

console.log(esFraccionMayorAUno('1/2')) // false
console.log(esFraccionMayorAUno('2/2')) // false --> ME DA MAL!
console.log(esFraccionMayorAUno('4/2')) // true

//capitalizar(str)
const capitalizar = (string) => {
    let primerLetra = string.charAt(0)
    let convertirMayuscula = primerLetra.toUpperCase()
    let restoDelNombre = string.slice(1,string.length)
    let nombreCapitalizado = convertirMayuscula.concat(restoDelNombre)
    return nombreCapitalizado
}

console.log(capitalizar('lovelace')) // 'Lovelace'
console.log(capitalizar('había una vez...')) // 'Había una vez...'

//aHackerSpeak(str)
const aHackerSpeak = (string) => {
    let stringConvertido = string.replace(/i/gi,'1').replace(/e/gi, '3').replace(/a/gi, '4').replace(/s/gi, '5').replace(/o/gi, '0')
    return stringConvertido
}

console.log(aHackerSpeak('javascript')) // 'j4v45cr1pt'
console.log(aHackerSpeak('soy una hacker')) // '50y un4 h4ck3r'
console.log(aHackerSpeak('ADA LOVELACE')) // '4D4 L0V3L4C3'
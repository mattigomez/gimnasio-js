//funciones
//declaracion

/* function saludar() {
  console.log("HOLA TAROLA");
} */
//llamado o invocacion
/* saludar();
saludar();
saludar(); */

/* let nombre = prompt("Ingresa tu nombre");
console.log("El nombre ingresado es : " + nombre);
nombre = prompt("Ingresa tu nombre");
console.log("El nombre ingresado es : " + nombre);
nombre = prompt("Ingresa tu nombre");
console.log("El nombre ingresado es : " + nombre); */
/* let nombre;

function ingresoNombre() {
  nombre = prompt("Ingresa tu nombre");
  // console.log("El nombre ingresado es : " + nombre);
}
 */
/* function mostrar() {
  console.log(nombre);
} */
//ingresoNombre();
//mostrar();
//con parametros
/* function conParametros(parametro1, parametro2) {
  console.log(parametro1);
  console.log(parametro2);
}
let nombre2 = prompt("ingresa el nombre");
conParametros("Hola", nombre2); */

//let resultado = 0;

/* function sumar(primerNumero, segundoNumero) {
  resultado = primerNumero + segundoNumero;
} */
/* 
function mostrar(mensaje, valor) {
  console.log(mensaje + valor);
} */

//mostrar(resultado);

//sumar(33, 99);
//mostrar(resultado);
//sumar(32, 9);

//mostrar(resultado);

//return
/* function sumar(primerNumero, segundoNumero) {
  return primerNumero + segundoNumero;
}
function restar(primerNumero, segundoNumero) {
  return primerNumero - segundoNumero;
}

function dividir(primerNumero, segundoNumero) {
  if (isNaN(primerNumero) || isNaN(segundoNumero)) {
    return "los valores no son numricos";
  }

  if (segundoNumero == 0) {
    return "Error";
  } else {
    return primerNumero / segundoNumero;
  }
} */

/* let resultadoSuma = sumar(45, 15);
let resultadoResta = restar(12, 9);
let resDiv = dividir(12, 0);
let resDiv2 = dividir(12, 3); */
/* mostrar("El resultado de la suma es: ", resultadoSuma);
mostrar("El resultado de la resta es: ", resultadoResta); */
/* 
console.log(resDiv);
console.log(resDiv2);

console.log(sumar(resultadoSuma, resDiv2)); */
//SCOPE
//variable global
/* 
let variable = "Soy una variable global";
 */
//console.log(variable);

/* function cambiar() {
  variable = "Soy la variable global modificada desde una funcion";
  console.log(variable);
} */

//cambiar();

/* if (true) {
  variable = "Soy la variable global modificada desde un if";
  //console.log(variable);
}

let variableLocal = "Soy una variable que estoy fuera de la funcion";
 */
//Variable
/* function cambiarVariableLocal() {
  let variableLocal = "Soy una variable local dentro de una estructura";
  console.log(variableLocal);
} */

//cambiarVariableLocal();

//console.log(variableLocal);

//Funcion anonima

/* const funcionAnonima = function () {
  console.log("Soy una funcion anonima");
};
funcionAnonima();

const suma = function (n1, n2) {
  return n1 + n2;
};
let numero1 = prompt("Ingresa el primer numero");
let numero2 = prompt("Ingresa el segundo numero");
console.log(suma(numero1, numero2));

//function flecha

const resta = (n1, n2) => n1 - n2; //ES6 return es implicito

console.log(resta(21, 4));
 */

let DNI="1234"

function login (){
  let ingresar= false;

  for (let i = 3;i>=0; i--){
    let userDNI= prompt("Ingresa tu DNI");
    if (userDNI === DNI){
      alert("Bienvenido a Rosario Gym");
      ingresar= true;
      break;
    }
    else{
      alert("El documento ingresado es incorrecto, te quedan " + i + " intentos")
    }
  }
  return ingresar


}
let logueo= login ()
console.log(logueo); 

if (logueo) {
  let meses=4;

  let opcion= prompt("Que desea realizar: \n1-Estado de cuenta \n2-Pagar cuota. \n3-Clases especiales. \n Pulse X para finalizar.")
while(opcion != "X" && opcion !="x"){
  switch (opcion) {
    case "1":
      alert("Usted tiene " + meses + " meses abonados")
      break;
    case "2":
      let pagar= parseInt(prompt("Ingrese cantidad de meses a pagar. Costo mensual $4500"))
if(pagar>0){
  meses=meses+ pagar;
  alert("Actualmente usted posee " + meses+ " meses abonados")}
else{
  alert("El valor ingresado no es correcto")
}

break;
    case "3":
      alert("Las clases especiales son: \nBoxeo: Martes y Jueves de 18 a 19.30hs. \nSpinning: Lunes y Miercoles de 9 a 10hs. \nAbdominales: Lunes,Miercoles y Viernes de 17 a 17.40hs.  ")
break;

    default:
      alert("Valor ingresado incorrecto")
      break;
  }
  opcion= prompt("Desea seguir operando?: \nElegi una opcion \n1-Estado de cuenta \n2-Pagar cuota. \n3-Clases especiales. \n Pulse X para finalizar.")
}

}


else{
  alert("Acercate a nuestra sucursal para recuperar la cuenta")
}

alert("Gracias por confiar en nosotros. A entrenar!")
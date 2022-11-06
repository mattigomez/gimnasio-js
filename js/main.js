let DNI="1234"

function login (){
  let ingresar= false;

  for (let i = 3;i>=0; i--){
    let userDNI= prompt("Ingresa tu DNI");
    if (userDNI === DNI){
      alert("Bienvenido a Abasto Gym");
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

const sucursales= [
  "Rosario",
  "Buenos Aires",
  "Cordoba",
  "Mendoza",
]

const select = document.querySelector('select[name="sucursales"]')
console.log(select)

sucursales.forEach(sucursal=>{
  let option = document.createElement("option");

  option.value=sucursal;
  option.innerText=sucursal;

  select.appendChild(option)
})

select.addEventListener("change",()=>{
  let option= select.options[select.selectedIndex].value;
  console.log(option);
})

// funcion para filtrar productos por precio dado

const productos = [
  { id: 1, nombre: "proteina", precio: 4500 },
  { id: 2, nombre: "creatina", precio: 4000 },
  { id: 3, nombre: "colageno", precio: 2500 },
  { id: 4, nombre: "pasta de mani 1kg", precio: 3000 },
  { id: 5, nombre: "barra proteica", precio: 200 },
];

function filtrarPorPrecio(arr,filtro){
  return arr.filter((producto)=>{
    return producto.precio <= filtro;
  })
}
const menorPrecio= filtrarPorPrecio(productos,3500)
console.log(menorPrecio)
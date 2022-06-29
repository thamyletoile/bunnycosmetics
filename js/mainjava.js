//declaracion
let tipoDeProducto;
let producto;
let color;
let nombreProducto;

//asignacion
tipoDeProducto = 'Labial';
producto = 'Mate';
color = 'Rosa';
nombreProducto = color + producto; 

//adicion numerica
let numero1 = 5; 
let numero2 = 1500; 
let resultado = numero1 * numero2;

console.log(resultado)

//Uso de Prompt > Ingreso de Datos 
let articuloIngresado = prompt ("Ingrese nombre del articulo");
let unidadesAdquiridas = parseInt (prompt ("Ingrese cantidades a comprar"));


//Uso de Console Log > Visualizacion de Datos
console.log(articuloIngresado)
console.log(unidadesAdquiridas)
console.log("El importe total de su compra es: " + resultado)//

//Uso de Alert
alert ("Realizaste exitosamente la compra de: "+ articuloIngresado)


//CONDICIONALES
//Con comparacion =  >>compara valores
let numero = 3;

if (numero == 3){
    console.log("Tenes un descuento del 15% en tu proxima compra")}
    console.log("Valido por 30 dias")

    if (numero == 2){
        console.log("No aplican los descuentos")}

//Con comparacion === >>compara tipo de datos
        let numeroalpormayor ="10" ;

        if (numeroalpormayor === 10){
            console.log("Tenes un descuento del 30% en tu proxima compra")}
            console.log("Valido por 30 dias")


        
//IF ELSE
let coleccion = prompt("Ingresa una coleccion");
if (coleccion == "Euphoria") {
  console.log("La coleccion que elegiste es Euphoria");
  if (coleccion == "") {
    console.log("Campo requerido"); } 
} else {
  console.log("El coleccion que elegiste NO es Euphoria " + " es: " + coleccion);
}

//IF ELSE IF
//compra mayorista v minorista

let unidadesCompradas = parseInt (prompt ("Ingresa las cantidades que queres comprar"))

if (unidadesCompradas < 3) {
    console.log("Tu compra es minorista");
  } else if (unidadesCompradas < 6) {
    console.log("Tenes un 5% de descuento en tu proxima compra");
  } else if (unidadesCompradas < 10) {
    console.log("Tenes un 10% de descuento en tu proxima compra");
  }
  else {
    console.log("Tu compra es mayorista. Tenes un 20% de descuento en tu proxima compra");
  }  

  //VARIABLE BOOLEANA

let compraRealizada = 11;
let compraMayorista = compraRealizada > 10;
console.log(compraMayorista);
if (compraMayorista) {
  console.log("La variable Compra Mayorista es verdadera");
} else {
  console.log("La variable Compra Mayorista es falsa");
} 

//OPERADOR && >> Nota: uso para metodo de pago?
let nombreIngresado = prompt("Ingresar nombre del Titular");
let apellidoIngresado = prompt("Ingresar apellido");
if (nombreIngresado != "" && apellidoIngresado != "") {
  alert("Nombre: " + nombreIngresado + "\nApellido: " + apellidoIngresado);
} else {
  alert("Error: Ingresar nombre y apellido del titular de la Tarjeta de Credito");
}

// OPERADOR || Nota: uso para cierre de proceso de pago 

let primerTarjeta = tarjetaDePago == "VISA";
let segundaTarjeta = tarjetaDePago == "visa";
let terceraTarjeta = tarjetaDePago == "Visa";

if (
    primerTarjeta != "" &&
  (tarjetaDePago == "VISA" || tarjetaDePago == "visa" || tarjetaDePago == "Visa")
) {
  console.log("Tu pago con Tarjeta VISA ha sido procesado");
} else {
  console.log("Tu pago con tarjeta " + tarjetaDePago + " ha sido procesado");
}

//Ingreso al usuario del carrito >> util para cualquier inicio de sesion
let usuario = "Elizabeth Olsen";
let password = Stark3000;

let user = prompt("Ingresa tu usuario");
let pass = prompt("Ingresa tu contraseña");

if (user == usuario && pass == password) {
  console.log("Bienvenido " + user);
} else {
  console.log("Campos incorrectos");
}

//FOR 

//Bucle finito, solo funciona con numeros enteros

let ingresonumerico = parseInt (prompt ("Ingresa cantidad")) //data ingresada por usuario

if (isNaN(ingresonumerico)) { //evitar que el usuario suba data diferente a #
  console.log("El valor ingresado no es un número");} 
else{ for (let Pestañas = 10; Pestañas <= 100; Pestañas = Pestañas+10) {
  console.log(Pestañas);
  let result = ingresonumerico * Pestañas;
  console.log (result)}}  



//Bucle con limite - Precio min y max - Ambos datos ingresados por el usuario

let ingresonumerico1 = parseInt (prompt ("Ingresa monto minimo")) //data ingresada por usuario
let ingresonumerico2 = parseInt (prompt ("Ingresa monto maximo")) //data ingresada por usuario

if (isNaN(ingresonumerico1) || isNaN(ingresonumerico2)) { //evitar que el usuario suba data diferente a #
  console.log("El valor ingresado no es un número");} 
else{ for (let Pestañas = 10; Pestañas <= ingresonumerico2; Pestañas = Pestañas+10) {
  console.log(Pestañas);
  let result = ingresonumerico1 * Pestañas;
  console.log (result)}}  

 //Break - sirve para darle un fin a un bucle - 
 
  for (let Pestañas = 0; Pestañas <= 100; Pestañas++) {
  if (Pestañas ==80) { //termine en el numero 80, sin importar que el limite sea 100
    break;
  }
  console.log(Pestañas);
}

//Continue - sirve para saltar un caracter o numero en especial

for (let Pestañas = 0; Pestañas <= 100; Pestañas++) {
  if (Pestañas ==80 || Pestañas == 90) { //imprime todos los numeros, salvo el #80 y #90. Funciona como un salto
    continue;
  }
  console.log(Pestañas);
}

//WHILE (crea un circulo) -ingreso articulo p compra + salida del bucle 
let agregaralcarrito = prompt("Ingresa un articulo  /n para finalizar ingresa Continuar");

while (agregaralcarrito != "Continuar") {
  console.log("Ingresaste el articulo: " + agregaralcarrito);
  agregaralcarrito = prompt ("Ingresa un articulo  /n para finalizar ingresa Continuar")
}

//SWITCH -- para multiples selecciones de compra
let articulomakeup = prompt("Ingresa una paleta de sombras ");
switch (articulomakeup) {
  case "Euphoria":
    console.log("Seleccionaste la paleta Euphoria");
    alert("Seleccionaste la paleta Euphoria")
    break;
  case "Cassie":
    console.log("Seleccionaste la paleta Cassie! ");
    alert("Seleccionaste la paleta Cassie}")
    break;
  case "Maddie":
    console.log("Seleccionaste la paleta Maddie");
    alert("Seleccionaste la paleta Maddie}")
    break;
  case "Jules":
    console.log("Seleccionaste la paleta Jules");
    alert("Seleccionaste la paleta Jules}")
    break;
  default:
    console.log("Ingresaste un producto no valido");
    break;
}
if (ingreso == "Finalizar compra") {
  alert("Gracias por tu compra! Esperamos que la disfrutes y volver a verte pronto!");
} 
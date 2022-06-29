//FUNCIONES

//BIENVENIDA A LA TIENDA


function saludotienda () //FUNCION GENERAL
 {console.log("Bienvenida/o a la tienda online!")} //declaracion de la funcion
 
 saludotienda() // impresion real de la funcion en la consola

 
 function saludopersonalizado(user) //FUNCION PERSONALIZADA // Es reutilizable, se amolda al user name
 {console.log("Bienvenida/o, " + user)} //declaracion 

 saludopersonalizado("Erika") // impresion 
 saludopersonalizado("Melissa") // impresion 


 //CALCULO PRECIO FINAL PRODUCTOS ADQUIRIDOS
 
 function precio (numero1,precio1){
    let resultado1 = numero1 * precio1;
return resultado1; }  //para obtener el resultado de una forma visual

function displayprecio (mensajesistema){
    console.log (mensajesistema);}

    let articulocantidadescompra = parseInt(prompt ("Ingresa las unidades a adquirir"))

    displayprecio(precio(articulocantidadescompra, 1500)); //imprime el resultado

//--------------------------------------------------------------//
//SCOPE

//VAR -- VARIABLES GLOBALES - Accesible desde cualquier lugar del codigo
let variableGlobal = "Esta es una Variable Global"
console.log(variableGlobal);

function modificado(){
    variableGlobal = "Fue modificada desde una funcion";
    console.log (variableGlobal)}

    modificado() //impresion a consola
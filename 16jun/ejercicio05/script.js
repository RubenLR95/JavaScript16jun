// LEA PEDIDO -> SIMULAMOS UNA VARIABLE
let pedido = "Pedido #1"
// LEA: FICHA CLIENTE -> SIMULAMOS LA VARIABLE CON VARIANTE ACTIVO
let estadoCliente = "Activo"; //PROBAMOS LUEGO CON INACTIVO

//COMPROBAMOS LA CONDICION DE ESTADO DE PEDIDO

if(estadoCliente == "Activo"){
    //ACEPTA PEDIDO
    console.log("Pedido aceptado");
}
else(estadoCliente == "Inactivo"){
    //RECHACE PEDIDO
    console.log("Pedido rechazado");
}
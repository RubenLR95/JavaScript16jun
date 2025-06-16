let numerodecuenta = "Numero de cuenta correcto"
let dinero = 200 //POR EJEMPLO

//DEFINIMOS SALDO INCIAL
let saldo = 1000; 
// DEFINIMOS LA CUENTA
const cuentavalida = "Numero de cuenta correcto"
// COMPARAMOS
if(numerodecuenta == cuentavalida){
    saldo = saldo + dinero;
    console.log("Deposito exitoso. Saldo actual --- ");
}
else{
    console.log("Cuenta no válida. Regrese dinero :(", dinero);
}


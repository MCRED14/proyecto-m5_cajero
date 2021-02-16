// Crea una aplicación web con JavaScript, HTML y CSS, donde simulemos la interacción con un cajero automático (puedes usar Bootstrap).
// Al ingresar al cajero, puedes seleccionar la cuenta con la que deseas interactuar. Deben existir al menos tres cuentas. Para esto, puedes trabajar con un arreglo de objetos como el siguiente:
// var cuentas = [
//   { nombre: “Hiromi”, saldo: 200, password: ‘helloworld’ }
//   { nombre: “Manuel”, saldo: 290, password: ‘l33t’ }
//   { nombre: “Luis”, saldo: 67, password: ‘123’ }
// ];
// Al seleccionar una cuenta, debes ingresar el password asociado a la cuenta. Si el password es incorrecto, debes notificar al usuario y permitirle intentarlo nuevamente. Si el password es correcto, debes mostrar las siguientes opciones:
// Consultar saldo
// Ingresar monto
// Retirar monto
// Al seleccionar consultar saldo, debe mostrar en pantalla el saldo actual de la cuenta
// Al seleccionar ingresar monto, el usuario debe escribir el monto a ingresar. Al ingresar el monto, debe mostrarle al usuario el monto ingresado y el nuevo saldo total.
// Al seleccionar retirar monto, el usuario debe escribir el monto a retirar. Al retirar el monto, debe mostrarle al usuario el monto retirado y el nuevo saldo total.
// Como regla de negocio, una cuenta no debe de tener más de $990 y menos de $10.
// Es necesario hacer las validaciones pertinentes en tu código para que no se rompa esta regla de negocio.
// Comentarios:
// Como consejo pueden iniciar con hacer un borrador de cómo se verá y las diferentes pantallas que quieran mostrar.
// Pueden usar componentes de bootstrap.
// Recuerden usar todo lo referente a HTML + Js
// Pdta: Al final sólo daremos esta opción de proyecto para todos. El otro que les comentamos, lo haremos en el transcurso del siguiente módulo

const cuentas = [
    { nombre: 'Hiromi', saldo: 200, password: 'helloworld' },
    { nombre: 'Manuel', saldo: 290, password: 'l33t' },
    { nombre: 'Luis', saldo: 67, password: '123' }
];



const usuarios = () => {
    for (let i = 0; i < cuentas.length; i++) {
        if (usuario === cuentas[i].nombre && clave === cuentas[i].password) {
            let usuarios = cuentas[i]
            return usuarios;
        }
    }
}

// console.log(usuarios('Manuel', 'l33t'));
let usuario = document.getElementById("name").va


usuarios(, document.getElementById("password"));



let confirmar = () => {
    let ingreso = 
};

// let validacion = usuarios('Manuel', 'l33t');



// console.log(cuentas[0].saldo);
// console.log(cuentas[0].saldo = 300);



// let retiro = (cantidad) => {
// let saldoRetiro = validacion.saldo;
// let retiroSaldo = saldoRetiro - cantidad;
// console.log(retiroSaldo);
// }

// retiro(50);



// let deposito = (monto) => {
//     let saldoDeposito = validacion.saldo;
//     let depositoSaldo = saldoDeposito + monto;
//     console.log(depositoSaldo);

// }

// deposito(100);

// let saldo = () => {
//  console.log(validacion.saldo);
// }





// let consultarSaldo = cuentas[i].saldo;
// console.log(`Hola ${cuentas[i].nombre} qué movimiento deseas hacer`)

// let retiro = 0;
// let deposito = 0;

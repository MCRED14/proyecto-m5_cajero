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
    { id: 1, nombre: 'Hiromi', saldo: 200, password: 'helloworld' },
    { id: 2, nombre: 'Manuel', saldo: 290, password: 'l33t' },
    { id: 3, nombre: 'Luis', saldo: 67, password: '123' }
];

let usuarioActual = '';

let verificacion = () => {
    let usuario = document.getElementById("name").value;
    let clave = document.getElementById("password").value;

    for (let i = 0; i < cuentas.length; i++) {
        if (usuario === cuentas[i].nombre && clave === cuentas[i].password) {
            usuarioActual = cuentas[i];

            document.getElementById('mov').style.display = "flex";
            document.getElementById('mov').style.justifyContent = "space-around";
            document.getElementById('error').style.display = "none";
            document.getElementById('form').style.display = "none";

        }
    } if (usuarioActual == '') {
        document.getElementById('error').style.display = "block";
    }
}


let consultaSaldo = () => {

    document.getElementById("textSaldo").innerText = `Tu saldo actual es de $${usuarioActual.saldo} pesos`;
}



let retiro = () => {


    let montoRetiro = document.getElementById("montoRetiro").value;
    

    let resta = usuarioActual.saldo - montoRetiro;

    if (resta <= 10) {

        document.getElementById("textRetiro2").innerText = `Haz excedido el monto mínimo en tu cuenta, ya no puedes hacer más retiros`;

    } else {

        document.getElementById("textRetiro1").innerText = `El monoto a retirar es $${montoRetiro}`;

        usuarioActual.saldo = usuarioActual.saldo - montoRetiro;

        document.getElementById("textRetiro2").innerText = `Tu saldo actual es $${usuarioActual.saldo}`;
    };


};

let deposito = () => {

    let montoDeposito = document.getElementById("montoDeposito").value;

    let numberDepo = parseInt(montoDeposito);

    let suma = usuarioActual.saldo + numberDepo;

    if (suma > 990) {

        document.getElementById("textDepo2").innerText = `Haz excedido el monto máximo en tu cuenta, ya no puedes hacer más depósitos`;

    } else {

        document.getElementById("textDepo1").innerText = `El monoto a depositar es $${montoDeposito}`;

        usuarioActual.saldo = usuarioActual.saldo + numberDepo;
        document.getElementById("textDepo2").innerText = `Tu saldo actual es $${usuarioActual.saldo}`;

    }

};


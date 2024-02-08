var cuentas = [
  { nombre: "Silu", saldo: 200, password: "1234" },
  { nombre: "Amaria", saldo: 290, password: "5678" },
  { nombre: "Raula", saldo: 67, password: "9012" }
];

var usuarioActual;
var saldoActual;
var passwordInput = '';

function agregarNumero(numero) {
  passwordInput += numero;
  document.getElementById("password").value = passwordInput;
}

function borrarUltimo() {
  passwordInput = passwordInput.slice(0, -1);
  document.getElementById("password").value = passwordInput;
}

function ingresar() {
  var indice = document.getElementById("cuentas").value;
  
  for (var i = 0; i < cuentas.length; i++) {
    if (indice == i && cuentas[i].password === passwordInput) {
      usuarioActual = cuentas[i];
      document.getElementById("operaciones").classList.remove("oculto");
      document.getElementById("resultado").classList.add("oculto");
      return;
    }
  }
  alert("Contraseña incorrecta. Inténtalo de nuevo.");
}

function consultarSaldo() {
  mostrarResultado("Saldo actual: $" + usuarioActual.saldo);
}

function ingresarMonto() {
  var monto = parseFloat(prompt("Ingrese el monto a ingresar:"));
  if (!isNaN(monto)) {
    usuarioActual.saldo += monto;
    mostrarResultado("Monto ingresado: $" + monto + "<br/>Nuevo saldo: $" + usuarioActual.saldo);
  } else {
    mostrarResultado("Ingrese un monto válido.");
  }
}

function retirarMonto() {
  var monto = parseFloat(prompt("Ingrese el monto a retirar:"));
  if (!isNaN(monto) && monto <= usuarioActual.saldo && (usuarioActual.saldo - monto) >= 10 && (usuarioActual.saldo - monto) <= 990) {
    usuarioActual.saldo -= monto;
    mostrarResultado("Monto retirado: $" + monto + "<br/>Nuevo saldo: $" + usuarioActual.saldo);
  } else {
    mostrarResultado("Monto inválido o saldo insuficiente.");
  }
}

function mostrarResultado(mensaje) {
  document.getElementById("mensaje").innerHTML = mensaje;
  document.getElementById("saldo").innerHTML = "Saldo actual: $" + usuarioActual.saldo;
  document.getElementById("resultado").classList.remove("oculto");
}

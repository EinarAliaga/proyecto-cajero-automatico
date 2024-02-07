var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "abcd" }
  ];
  
  var operacionActual = "";
  var montoIngresado = "";
  
  function iniciarSesion() {
    var seleccion = document.getElementById("cuentas");
    var indiceCuenta = seleccion.selectedIndex;
    var cuenta = cuentas[indiceCuenta];
  
    var passwordIngresado = prompt("Ingrese la contraseña de la cuenta " + cuenta.nombre);
  
    if (passwordIngresado === cuenta.password) {
      mostrarOpciones(cuenta);
    } else {
      alert("Contraseña incorrecta. Inténtelo nuevamente.");
    }
  }
  
  function mostrarOpciones(cuenta) {
    var operacionesDiv = document.getElementById("operaciones");
    operacionesDiv.style.display = "block";
  }
  
  function mostrarPanel(operacion) {
    var pantallaNumeros = document.getElementById("pantallaNumeros");
    operacionActual = operacion;
    montoIngresado = "";
    actualizarPantalla();
    var panelNumerosDiv = document.getElementById("panelNumeros");
    panelNumerosDiv.style.display = "block";
  }
  
  function actualizarPantalla() {
    var pantallaNumeros = document.getElementById("pantallaNumeros");
    pantallaNumeros.textContent = montoIngresado === "" ? "0" : montoIngresado;
  }
  
  function agregarNumero(numero) {
    montoIngresado += numero;
    actualizarPantalla();
  }
  
  function borrarNumero() {
    montoIngresado = montoIngresado.slice(0, -1);
    actualizarPantalla();
  }
  
  function consultarSaldo() {
    var seleccion = document.getElementById("cuentas");
    var indiceCuenta = seleccion.selectedIndex;
    var cuenta = cuentas[indiceCuenta];
    alert("Saldo actual de la cuenta " + cuenta.nombre + ": $" + cuenta.saldo);
  }
  
  function realizarOperacion() {
    var seleccion = document.getElementById("cuentas");
    var indiceCuenta = seleccion.selectedIndex;
    var cuenta = cuentas[indiceCuenta];
  
    if (operacionActual === "ingresar") {
      ingresarMonto(cuenta);
    } else if (operacionActual === "retirar") {
      retirarMonto(cuenta);
    }
  }
  
  function ingresarMonto(cuenta) {
    if (montoIngresado !== "") {
      var monto = parseFloat(montoIngresado);
      if (!isNaN(monto) && monto > 0) {
        if (cuenta.saldo + monto <= 990) {
          cuenta.saldo += monto;
          alert("Se ingresó $" + monto + ". Nuevo saldo: $" + cuenta.saldo);
          reiniciarOperacion();
        } else {
          alert("La operación excede el límite de $990. Por favor, ingrese un monto menor.");
        }
      } else {
        alert("Ingrese un monto válido.");
      }
    } else {
      alert("Ingrese un monto válido.");
    }
  }
  
  function retirarMonto(cuenta) {
    if (montoIngresado !== "") {
      var monto = parseFloat(montoIngresado);
      if (!isNaN(monto) && monto > 0 && cuenta.saldo - monto >= 10) {
        cuenta.saldo -= monto;
        alert("Se retiró $" + monto + ". Nuevo saldo: $" + cuenta.saldo);
        reiniciarOperacion();
      } else {
        alert("Monto no válido o excede los límites permitidos.");
      }
    } else {
      alert("Ingrese un monto válido.");
    }
  }
  
  function reiniciarOperacion() {
    operacionActual = "";
    montoIngresado = "";
    actualizarPantalla();
    var panelNumerosDiv = document.getElementById("panelNumeros");
    panelNumerosDiv.style.display = "none";
  }
  
  function consultarSaldo() {
    var seleccion = document.getElementById("cuentas");
    var indiceCuenta = seleccion.selectedIndex;
    var cuenta = cuentas[indiceCuenta];
    var saldoActualDiv = document.getElementById("saldoActual");
  
    saldoActualDiv.textContent = "Saldo actual de la cuenta " + cuenta.nombre + ": $" + cuenta.saldo;
    saldoActualDiv.style.display = "block";
  }

  function ingresarMonto(cuenta) {
    if (montoIngresado !== "") {
      var monto = parseFloat(montoIngresado);
      if (!isNaN(monto) && monto > 0) {
        if (cuenta.saldo + monto <= 990) {
          cuenta.saldo += monto;
          var montoOperacionDiv = document.getElementById("montoOperacion");
          montoOperacionDiv.textContent = "Se ingresó $" + monto + ". Nuevo saldo: $" + cuenta.saldo;
          montoOperacionDiv.style.display = "block"; // Mostrar el monto ingresado en pantalla
          reiniciarOperacion();
        } else {
          alert("La operación excede el límite de $990. Por favor, ingrese un monto menor.");
        }
      } else {
        alert("Ingrese un monto válido.");
      }
    } else {
      alert("Ingrese un monto válido.");
    }
  }
  
  function retirarMonto(cuenta) {
    if (montoIngresado !== "") {
      var monto = parseFloat(montoIngresado);
      if (!isNaN(monto) && monto > 0 && cuenta.saldo - monto >= 10) {
        cuenta.saldo -= monto;
        var montoOperacionDiv = document.getElementById("montoOperacion");
        montoOperacionDiv.textContent = "Se retiró $" + monto + ". Nuevo saldo: $" + cuenta.saldo;
        montoOperacionDiv.style.display = "block"; // Mostrar el monto retirado en pantalla
        reiniciarOperacion();
      } else {
        alert("Monto no válido o excede los límites permitidos.");
      }
    } else {
      alert("Ingrese un monto válido.");
    }
  }
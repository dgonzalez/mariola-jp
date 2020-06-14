var rpc = require("./rpc.js");

// Listado de pacientes
var pacientes = [
    { id: 1, nombre: "Diego", apellidos: "Marcos", edad: 30 }
];
var siguienteId = 2;

// Obtener el listado de pacientes
function obtenerPacientes() {
    return pacientes;
}

// Crear un nuevo paciente y retorna su id o 0 si ha fallado
function login(usuario, password) {
  if(usuario === 'david' && password === 'gonzalez') {
    return "exito!";
  } else {
    return "Error: Usuario incorrecto";
  }
}

//rpc.delay = 5000; // retrasar todas las operaciones 5 segundos
var servidor = rpc.server(); // crear el servidor RPC
var app = servidor.createApp("gestion_pacientes"); // creamos la aplicación RPC

// Registrar los procedimientos
app.register(login);

const app = rpc("localhost", "gestion_pacientes"); // obtener una referencia a la app RPC

const obtenerPacientes = app.procedure("obtenerPacientes");
const loginRPC = app.procedure("login");

function login(username, password) {
  document.getElementById("resultado").innerText = loginRPC(username, password);
}

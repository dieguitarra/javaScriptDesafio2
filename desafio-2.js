let nombreUsuario = prompt("Ingrese su nombre");
let apellidoUsuario = prompt("Ingrese su apellido");
console.log("Bienvenido " + nombreUsuario);
let temperatura = prompt("Ingrese su temperatura");
if (temperatura >= 38) {
  console.log(nombreUsuario + " tenes Covid-19");
} else if (temperatura <= 37) {
  console.log(nombreUsuario + " no tenes Covid-19");
}

var planeta_seleccionado = document.getElementById("select_planeta");
var boton = document.getElementById("botoncito");
boton.addEventListener("click", calcularPeso);

function calcularPeso() {
  var planeta = select_planeta.value;
  var nombre_planeta;
  var g_mercurio = 3.7;
  var g_venus = 8.87;
  var g_tierra = 9.8;
  var g_marte = 3.7;
  var g_jupiter = 24.8;
  var g_saturno = 10.44;
  var g_urano = 8.87;
  var g_neptuno = 11.15;
  var peso_final;
  var peso_calcular = parseFloat(peso_user.value).toFixed(2);

  resultado = document.getElementById("resultado")
  // Acá vamos a hacer la comparación de la elleción del usuario
  switch (planeta) {
    case 'mercurio':
      peso_final = peso_calcular * g_mercurio / g_tierra;
      nombre_planeta = "Mercurio";
      break;
    case 'venus':
      peso_final = peso_calcular * g_venus / g_tierra;
      nombre_planeta = "Venus";
      break;
    case 'marte':
      peso_final = peso_calcular * g_marte / g_tierra;
      nombre_planeta = "Marte";
      break;
    case 'saturno':
      peso_final = peso_calcular * g_saturno / g_tierra;
      nombre_planeta = "Saturno";
    break;
    case 'jupiter':
      peso_final = peso_calcular * g_jupiter / g_tierra;
      nombre_planeta = "Júpiter";
      break;
    case 'urano':
      peso_final = peso_calcular * g_urano / g_tierra;
      nombre_planeta = "Urano";
    break;
    case 'neptuno':
      peso_final = peso_calcular * g_neptuno / g_tierra;
      nombre_planeta = "Neptuno";
    break;
    default:
  }
  resultado.innerHTML = "<div>Tu peso en " + nombre_planeta + " es <strong>" + parseFloat(peso_final).toFixed(2) + " kilogramos </strong></div>";
}

// ---------- Cuenta regresiva (solo existe en index.html) ----------
const elCuentaRegresiva = document.getElementById("cuenta-regresiva");

if (elCuentaRegresiva) {
  // 1. Define la fecha límite a la que quieres llegar
  const fechaLimite = new Date("Apr 01, 2027 23:59:59").getTime();

  const elDias = document.getElementById("dias");
  const elHoras = document.getElementById("horas");
  const elMinutos = document.getElementById("minutos");
  const elSegundos = document.getElementById("segundos");

  function dosDigitos(n) {
    return String(n).padStart(2, "0");
  }

  // 2. Actualiza la cuenta cada 1 segundo
  const x = setInterval(function () {
    const ahora = new Date().getTime();
    const diferencia = fechaLimite - ahora;

    if (diferencia < 0) {
      clearInterval(x);
      elCuentaRegresiva.innerHTML = "¡El tiempo ha expirado!";
      return;
    }

    // Cálculos de días, horas, minutos y segundos
    const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    const horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    const segundos = Math.floor((diferencia % (1000 * 60)) / 1000);

    elDias.textContent = dosDigitos(dias);
    elHoras.textContent = dosDigitos(horas);
    elMinutos.textContent = dosDigitos(minutos);
    elSegundos.textContent = dosDigitos(segundos);
  }, 1000);
}

// ---------- reproductor de Spotify (todas las páginas) ----------
const btnMusica = document.getElementById("boton-musica");
const panelSpotify = document.getElementById("panel-spotify");

if (btnMusica && panelSpotify) {
  btnMusica.addEventListener("click", function () {
    const abierto = !panelSpotify.hidden;
    panelSpotify.hidden = abierto;
    btnMusica.setAttribute("aria-expanded", String(!abierto));
  });
}

// ---------- Flecha para volver arriba ----------
const botonSubir = document.getElementById("boton-subir");

if (botonSubir) {
  function revisarFinalDePagina() {
    const alFinal = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 10;
    botonSubir.hidden = !alFinal;
  }

  window.addEventListener("scroll", revisarFinalDePagina);
  window.addEventListener("resize", revisarFinalDePagina);

  botonSubir.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

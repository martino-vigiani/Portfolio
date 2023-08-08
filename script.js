let state = 0;
//! ^ state:0 -> da aprire          state: 1 -> da chiudere

function toggle() {
  const immagineMenu = document.querySelector(".immagineMenu");
  const menu = document.querySelector(".menuRes");
  const titolo = document.querySelector(".titolo");
  const threeBarsSrc = "http://127.0.0.1:5500/menu.png";
  const xSrc = "http://127.0.0.1:5500/x.png";

  if (state == 0) {
    titolo.style.display = "none";
    menu.style.display = "flex";
    immagineMenu.src = xSrc;
    state = 1;
    return;
  }
  titolo.style.display = "block";
  menu.style.display = "none";
  immagineMenu.src = threeBarsSrc;
  state = 0;
}

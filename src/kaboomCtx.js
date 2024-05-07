import kaboom from "kaboom";

export const k = kaboom({
    global: false,
    touchToMouse: true,  /* Estamos dizendo ao Kaboom que nos dispositivos mobile, é possível tocar para interagir com a interface  */
    canvas: document.getElementById("game")  /* Dizendo que a camada do jogo está no ID = Game, definido lá em index.html */
})
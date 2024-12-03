
/**
 * 
 * @param {carta} carta 
 * @returns {HTMLImageElement} imagen de retorno
 */
export const crearCartaHTML = (carta)=>{
    if(!carta) throw 'La carta es un argumemto obligatorio';

    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta;
}
import _ from 'underscore';

/**
 * 
 * @param { array<String> } tiposDeCarta Ejemplo: ['C','D','H','S']
 * @param { array<String> } TiposEspeciales Eejemplo: ['A','J','Q','K'] 
 * @returns { array<String> }
 */
export const crearDeck = (tiposDeCarta, TiposEspeciales) => {

    let deck = [];

    if(!tiposDeCarta || tiposDeCarta.length===0 ) 
        throw new Error('TiposDeCarta es obligatorio');

    if(!tiposDeCarta || tiposDeCarta.length===0 ) 
        throw new Error('TiposEspeciales es obligatorio');

    for( let i = 2; i <= 10; i++ ) {
        for( let tipo of tiposDeCarta ) {
            deck.push( i + tipo);
        }
    }

    for( let tipo of tiposDeCarta ) {
        for( let esp of TiposEspeciales ) {
            deck.push( esp + tipo);
        }
    }
    deck = _.shuffle( deck );
    console.log( deck );
    return deck;
}
import _ from "underscore";

/**
 *
 * @param {Array<String>} deck es un arreglo de string
 * @returns {<String>} retorna carta del deck
 */

// Esta función me permite tomar una carta

export const pedirCarta = ( deck ) => {
    if (!deck || deck.length === 0) {
      throw "No hay cartas en el deck";
    }
    const carta = deck.pop();
    return carta;
  };
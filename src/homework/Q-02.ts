/*(() => {

  /* Haz uso de nomenclaturas correctas en la variables
     mantener los nombres dados
  */
 

 /* class word_to_word {}

  interface props {}

  type moves = {}

  function GET_FOOD() {}

  function SETPRODUCTNAME() {}

  type directions = {}

  interface IDBPROPS {}

  class ATOBTOC {}

  // los 2 valores siguientes son constantes.

  const constant_one = 3;

  let constant_two = 4;

})();

*/

(() => {
  /* Ajusta las nomenclaturas manteniendo los nombres dados
     de acuerdo con las convenciones estándar de TypeScript.
  */

  // Las clases deben usar UpperCamelCase (PascalCase).
  class WordToWord {}

  // Las interfaces en TypeScript deben usar UpperCamelCase (PascalCase).
  interface Props {}

  // Los tipos en TypeScript deben usar UpperCamelCase (PascalCase).
  type Moves = {}

  // Las funciones deben usar camelCase, siguiendo las convenciones comunes.
  function getFood() {}

  // Las funciones deben usar camelCase, siguiendo las convenciones comunes.
  function setProductName() {}

  // Los tipos en TypeScript deben usar UpperCamelCase (PascalCase).
  type Directions = {}

  // Las interfaces en TypeScript deben usar UpperCamelCase (PascalCase).
  interface IDbProps {}

  // Las clases deben usar UpperCamelCase (PascalCase).
  class AToBToC {}

  // Las constantes deben estar en mayúsculas con guiones bajos (UPPER_SNAKE_CASE).
  const CONSTANT_ONE = 3;

  // Aunque 'constant_two' se llama constante, fue declarado con 'let',
  // lo que permite su modificación. Si no va a cambiar, debería ser 'const'.
  const CONSTANT_TWO = 4;

})();


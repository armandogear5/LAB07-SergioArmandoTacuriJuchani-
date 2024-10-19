/*(() => {

  // APLICA DRY
  
  //EX - 1
  
  function calculateOperation1(a: number, b: number, c: number): number {
    let sumResult = a + b;
    let multiplicationResult = sumResult * c;
    return multiplicationResult;
  }

  function calculateOperation2(x: number, y: number, z: number): number {
    let sumResult = x + y;
    let multiplicationResult = sumResult * z;
    return multiplicationResult;
  }

  // EX - 2
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  // EX - 3
  //No es necesario aumentar codigo en este ejercicio
  function validateEmail(email: string): boolean {
    //...some code for validate here
    return false;
  }

  function validateUsername(username: string): boolean {
    //...some code for validate here
    return false;
  }

})();*/

(() => {

  /* APLICA DRY*/

  // EX - 1
  // Las dos funciones anteriores realizaban la misma operación matemática:
  // sumar dos números y luego multiplicar el resultado por un tercer número.
  // Unificamos esa lógica en una sola función reutilizable.
  function calculateOperation(a: number, b: number, c: number): number {
    const sumResult = a + b;
    return sumResult * c;
  }

  // EX - 2
  // Ambas funciones están correctamente implementadas ya que 
  // cada una realiza una operación distinta (área de un rectángulo y de un círculo).
  // No es necesario aplicar DRY en este caso.
  function calculateRectangleArea(length: number, width: number): number {
    return length * width;
  }

  function calculateCircleArea(radius: number): number {
    return Math.PI * radius * radius;
  }

  // EX - 3
  // La validación que se hacía en ambas funciones anteriores era idéntica.
  // Consolidamos la validación en una única función `validateString`,
  // que puede ser utilizada en múltiples lugares para validar cadenas de texto.
  function validateString(str: string): boolean {
    // Lógica de validación compartida: aquí podrías verificar si la cadena 
    // no está vacía, si tiene el formato correcto, etc.
    return str.trim().length > 0;
  }

})();

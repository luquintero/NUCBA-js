///1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.

console.log('EJERCICIO 1');

function parImpar() {
    let num = prompt('Ejercicio 1: Ingrese un numero');{
        if (num % 2 === 0){
            console.log(`Resultado ejercicio 1: El numero ${num} es par`); 
        } else {
            console.log(`Resultado ejercicio 1: El numero ${num} es impar`);
        }     
    }
}

parImpar();

///2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor, y si ninguno lo es, indicar por consola que son iguales.

console.log('EJERCICIO 2');

function numSize() {
    let valor1 = prompt('Ejercicio 2: Ingrese valor1');
    let valor2 = prompt('Ejercicio 2: Ingrese valor2');
    {
        valor1>valor2
        ? console.log(`Resultado ejercicio 2: ${valor1} es mayor a ${valor2}`)
        : valor1<valor2
        ? console.log(`Resultado ejercicio 2: ${valor1} es menor a ${valor2}`)
        : console.log(`Resultado ejercicio 2: ${valor1} es igual a ${valor2}`)

    }
}

numSize();

///3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.

console.log('EJERCICIO 3');

function multiploDe5() {
    let multiplo = prompt('Ejercicio 3: Ingrese un numero');
    {
    if (multiplo % 5 === 0){
        console.log(`Resultado ejercicio 3: El numero ingresado(${multiplo}) es multiplo de 5`);
    } else {
        console.log(`Resultado ejercicio 3: El numero ingresado(${multiplo}) NO es multiplo de 5`);
    }
    }
  }

multiploDe5();

///4- Crear una función que reciba un número por parámetro e imprima por consola todos los números desde el 0 hasta llegar a ese número.

console.log('EJERCICIO 4');

let hallarValor; 

console.log('Mi valor:', hallarValor);
    
    for(let i = 0; i <= 10; i++) {
        if (i === 7) {
            console.log('Resultado ejercicio 4: Se hallo el valor')
            hallarValor = i;
            break;
        }
        console.log(`Valor de i: ${i}`);
        }

console.log('Mi valor:', hallarValor);
    
///5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola  esa palabra la cantidad correspondiente al número indicado.

console.log('EJERCICIO 5');

/**
 * 
 * @param {string} palabra 
 * @param {number} q 
 */

function imprimirPalabra(palabra, q) {
    for (let i = 0; i < q; i++) {
      console.log(palabra, `${i}`);
    }
  }
  
imprimirPalabra('hola', 5);

///6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.

console.log('EJERCICIO 6');

let miArray = ['hola', 44, 'chau'];
    console.log(miArray);

///7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".

console.log('EJERCICIO 7');

function stop(array) {
    for (let i = 0; i < array.length; i++) {
      if (i !== 4) { 
        console.log(array[i]);
      }
    }
  }

  const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  stop(numeros);

///8 - Crea una función que reciba un array de números y un número por parámetro e imprima por consola cada número del array multiplicado por el número pasado por parámetro.

console.log('EJERCICIO 8');

function multiply(array, number) {
    for (let i = 0; i < array.length; i++) {
      const result = array[i] * number;
      console.log(result);
    }
  }

  const arrayNumeros = [1, 2, 3, 4, 5];
  multiply(arrayNumeros, 10);
//1-

let number = prompt("Coloque aqui un número: ");

function numero(number) {
    if (number % 2) {
      console.log("El número es impar");
    } else {
      console.log("El número es par");
    }
  }
  
  numero(number);
  
  //2-
  
  const es_mayor = (num1, num2) => {
    const iguales =
      num1 == num2
        ? console.log(`${num1} y ${num2} son iguales`)
        : num1 > num2
        ? console.log(`${num1} Es mayor que ${num2}`)
        : console.log(`${num1} Es menor que ${num2}`);
  };
  
  es_mayor(405, 94);
  
  //3-
  
  const multiplo5 = (num) => {
    if (num % 5) {
      console.log(`${num} NO es múltiplo de 5`);
    } else {
      console.log(`${num} es múltiplo de 5`);
    }
  };
  
  multiplo5(59);
  
//7- 
fibonacci = [1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

function remover5to(array) {
  for (let i = 0; i < array.length; i++) {
      if (i == 4) {
        continue
      }
      console.log(array[i]);
  }
}

remover5to(fibonacci) // posicion 5 = [8] no aparece



//8- 
function multiplicaX(array, number) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i] * number);      
  }
}

multiplicaX([3,4,2,7], 9)

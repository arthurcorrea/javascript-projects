//* ========== map() ==========

//? ====== dobrando valores ======
const numbers = [5, 2, 1, 7, 33, 67, 91, 73];
// nessa função, o map() percorre cada um dos valores do array e dobra cada um
const doubleNumbers = numbers.map(function(element) {
   return element * 2
})
console.log(doubleNumbers);

// fazendo a mesma coisa, mas com arrow function
const doubleNumbersArrowFunction = numbers.map( element => element * 2)
console.log(doubleNumbersArrowFunction);

//? ==============================

//! ============================================================

//? ====== conversor de fahrenheit para celsius ======
const fahrenheit = [ 60, 121, 0, 32, 103, 53 ]

// usando arrow function
const celsius = fahrenheit.map(element => Math.round(( element - 32 ) * 5 / 9 ))

console.log(celsius);

//? ===========================

//* ===========================





//* ========== filter() ==========
// usado para remover itens de um array de acordo com as condições
const numeros = [ 3, 6, 1, 4, 8, 12, 18, 19, 6, 3, 9, 10, 13, 4 ]

const numerosNaoRepetidos = numeros.filter((element , index, arr) => arr.indexOf(element) === index);

console.log(`Números não repetidos: ${numerosNaoRepetidos}`);

//* ==============================






//* ========== reduce() ==========
// usado para juntar dados de um array
// no exemplo, foi usado um array de objetos
const rockets = [
   { country: "EUA", launches: 14},
   { country: "Canadá", launches: 18},
   { country: "Japão", launches: 7},
   { country: "Angola", launches: 9},
   { country: "Índia", launches: 4},
   { country: "China", launches: 8}
]

const totalLaunches = rockets.reduce( 
   (previousValue, element) => previousValue + element.launches, 0);

console.log(totalLaunches);
//* ==============================




//* ========== every() ==========
// usado para testar se todos os elementos passam pelo teste especificado
// o every() retorna um resultado boolean

//? verificar se todos os elementos são maiores que 10
const valores = [ 12, 11, 4, 5, 44, 21, 2, 0, 19 ];

const allAbove10 = valores.every(element => element > 10)
console.log(allAbove10);
//? ===================================================


//? verificar se todos têm mais de 18 anos
const turma = [
   {id: 15, name: "Roberto", age: 19},
   {id: 11, name: "Roberto", age: 12},
   {id: 4, name: "Roberto", age: 13},
   {id: 8, name: "Roberto", age: 22},
   {id: 10, name: "Roberto", age: 28},
   {id: 1, name: "Roberto", age: 37},
]

console.log(turma.every( pessoa => pessoa.age >= 18 ));

//? ===================================================

//* =============================




//* ========== some() ==========
// usado para testar se pelo menos um elemento do array passa em um teste específico
// retorna true se pelo menos um elemento corresponder ao teste
//? verificar se há algum número primo
function isPrime(value) {
   for(let i = 2; i < value; i++) {
      if(value % i === 0) {
         return false
      }
   }
   return value > 1
}

const arrayPrimes = [ 6, 3, 17, 18 ]

console.log(arrayPrimes.some( isPrime ));
//? ===================================================



//? verificar por condições em valores e objetos

const team = [
   {id: 11, name: "Arthur", pilot: true},
   {id: 1, name: "Pedro", pilot: false},
   {id: 9, name: "Roberto", pilot: false},
   {id: 17, name: "Yuri", pilot: false},
]

console.log( team.some(pessoa => pessoa.pilot) );

//? ===================================================

//* ============================




//* ========== find() ==========
// usado para procurar por um valor específico
// o retorno será o primeiro elemento que cumprir a condição

//? usando para encontrar o primeiro elemento que satisfaça a condição
const pizzas = [
   "calabresa",
   "mussarela",
   "portuguesa",
   "marguerita",
]

const foundPizza = pizzas.find(p => p.startsWith("m"))

console.log(foundPizza); // mussarela (primeiro elemento)
//? ===================================================

//? Outro exemplo

const fruits = [
   { name: "Maçã", quantity: 4 },
   { name: "Pera", quantity: 3 },
   { name: "Uva", quantity: 9 },
   { name: "Banana", quantity: 2 },
]

const foundFruit = fruits.find(fruit => fruit.name === 'Pera');

console.log(foundFruit);

//? ===================================================

//* ============================



//* ========== includes() ==========
// usado para retornar se o array possui determinado elemento
// retorna boolean
const n = [ 1, 2, 3, 4, 5, 6 ]

console.log(n.includes(2));

//? exemplo mais concreto
const people = [
   {id: 2, name: "Pedro", age: 66, group: "editor"}, 
   {id: 9, name: "Yuri", age: 66, group: "author"}, 
   {id: 20, name: "João", age: 66, group: "admin"}, 
   {id: 1, name: "Ricardo", age: 66, group: "user"}, 
];

const filteredUsers = people.filter( p => p.name.includes("ar") );

console.log( filteredUsers );
//* ================================





//* ========== mexendo com API real ==========
async function getPeople() {
   const response = await fetch('https://randomuser.me/api/?results=16');

   return response.json()
}

getPeople().then( data => console.log(data));

//? retornando apenas mulheres
getPeople().then( data => {
   const people = data.results

   console.log(people.filter(p => p.gender === "female"));
})

//? trabalhando com dados
getPeople().then( data => {
   const result = data.results;
   const people = [];

   for(let p of result) {
      people.push({
         "Nome": `${p.name.first} ${p.name.last}`,
         "Sexo": `${p.gender}`,
         "Idade" :  `${p.dob.age}` 
      })
   }

   console.table(people);

})

//? retornando resultado com pessoas acima de 30 anos
getPeople().then( data => {
   // o filtro pode ser aplicado diretamente na consulta
   const result = data.results.filter(p => p.dob.age > 30);
   const people = [];

   for(let p of result) {
      people.push({
         "Nome": `${p.name.first} ${p.name.last}`,
         "Sexo": `${p.gender}`,
         "Idade" :  `${p.dob.age}` 
      })
   }

   console.table(people);

})
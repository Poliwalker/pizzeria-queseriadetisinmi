// Crear el array de objetos "Pizzas". 🍕
// 👉 Debemos crear 6 objetos como mínimo.
// 👉 Cada objeto debe tener definido su id (1,2,3,etc), nombre, ingredientes (Sobre la base) y precio. (Ingredientes debe ser una lista).

// 🔥 Crear una iteración del array que imprima en consola:
// a) Las pizzas que tengan un id impar.
// b) ¿Hay alguna pizza que valga menos de $600?
// c) Los nombres de todos las pizzas.
// d) Los precios de las pizzas.
// e) El nombre de cada pizza con su respectivo precio.

// Cada respuesta debe ser, como siempre, usuario friendly.
// Si (como en el punto B), la respuesta es un booleano, no imprimir el booleano.
// Manejemos esa respuesta, pensando en que un usuario promedio va a leer eso.

// Por ejemplo: "La pizza X, tiene un valor de $XXXX”. 💸

// <-------------------------------------------------------------------->

// Vamos a utilizar el mismo array de objetos "Pizzas🍕" del desafío general anterior.

// 👉 Crear un archivo HTML que contenga un h2, un h4, un input number y un botón.

// 👉 El desafío será, al tocar el botón, capturar el valor ingresado en el input.
// 👉 Renderizar en el h2 el nombre y en el h4 el precio de la pizza cuyo id coincida con el numero ingresado en el input.

// 🚨 Si no coincide con ningún id, renderizar un mensaje de error.

// Ejercicio A

// pizzas.forEach((numero) => {
// 	if (numero.id % 2 !== 0) console.log(`Las pizza impar es: ${numero.nombre}`);
// });

// // Ejercicio B

// const pizzasMenorA = () => {
// 	if (pizzas.some((pizza) => pizza.precio < 600)) {
// 		return 'hay pizzas menor a 600$';
// 	} else {
// 		return 'no hay pizzas menores a 600$';
// 	}
// };

// console.log(pizzasMenorA());

// // Ejercicio C

// pizzas.forEach((pizza) =>
// 	console.log(`las pizzas disponibles son ${pizza.nombre}`)
// );

// // Ejercicio D

// pizzas.forEach((pizza) =>
// 	console.log(`los precios que tenemos son ${pizza.precio}`)
// );

// // ejercicio E

// const nombreYPrecioPizzas = () => {
// 	pizzas.forEach((pizza) =>
// 		console.log(`la pizza ${pizza.nombre} sale $${pizza.precio}`)
// 	);
// };

// nombreYPrecioPizzas();

const pizzas = [
	{
		id: 1,
		nombre: 'Muzzarela',
		precio: 1000,
		ingredientes: ['muzzarela'],
	},
	{
		id: 2,
		nombre: 'Fugazzeta',
		precio: 1200,
		ingredientes: ['cebolla', 'muzzarela'],
	},
	{
		id: 3,
		nombre: 'Napolitana',
		precio: 1500,
		ingredientes: ['tomate', 'muzzarela'],
	},
	{
		id: 4,
		nombre: 'Jamon y Morron',
		precio: 1600,
		ingredientes: ['jamon', 'morron', 'muzzarela'],
	},
	{
		id: 5,
		nombre: 'Capresse',
		precio: 2100,
		ingredientes: ['albahaca', 'tomate', 'aceituna negra'],
	},
	{
		id: 6,
		nombre: 'Especial',
		precio: 3000,
		ingredientes: ['muzzarela', 'morron', 'choclo', 'huevo', 'parmesano'],
	},
];

const form = document.getElementById('form');
const numberId = document.getElementById('number');
const container = document.getElementById('container');
const titlePizza = document.getElementById('title-pizza');
const pricePizza = document.getElementById('price-pizza');

// ----con esta funcion renderizamos y pintamos los titulos-----

const renderPizzas = (e) => {
	e.preventDefault();
	const numberValue = numberId.value;
	if (!isEmpty(numberValue)) {
		alert('No ha ingresado ningun valor');
	} else if (pizzaSearch(pizzas) !== undefined) {
		titlePizza.textContent = `La pizza de ${pizzaSearch(pizzas).nombre} `;
		pricePizza.textContent = `Tiene un precio de: $ ${
			pizzaSearch(pizzas).precio
		}`;
	} else {
		titlePizza.textContent = `No hay pizzas con ese número`;
		pricePizza.textContent = ``;
	}
	return (numberId.value = '');
};

const isEmpty = (value) => (value === '' ? false : true);

// ----- con esta funcion capturamos el id y lo buscamos en nuestro array -----
const pizzaSearch = (p) => {
	const valor = numberId.value;
	const search = p.find((pizza) => pizza.id == valor);
	return search;
};

const init = () => {
	form.addEventListener('submit', renderPizzas);
};

init();

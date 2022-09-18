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
		ingredientes: ['muzzarela, oregano'],
		imagen:
			'https://d3ugyf2ht6aenh.cloudfront.net/stores/001/133/466/products/copia-de-pizza-mozarella1-f27baa3e01887f9e6416299067526593-640-0.jpg',
	},
	{
		id: 2,
		nombre: 'Fugazzeta',
		precio: 1200,
		ingredientes: ['cebolla', 'muzzarela'],
		imagen:
			'https://www.barilocheya.com.ar/pizzeriabase/wp-content/uploads/sites/6/2020/03/fugazeta.jpg',
	},
	{
		id: 3,
		nombre: 'Napolitana',
		precio: 1500,
		ingredientes: ['tomate', 'muzzarela'],
		imagen:
			'https://www.tupperware.com.ar/service/appng/tupperware-products/webservice/recipeImages/058955_666x468.jpg',
	},
	{
		id: 4,
		nombre: 'Jamón y Morrón',
		precio: 1600,
		ingredientes: ['jamón', 'morrón', 'muzzarela'],
		imagen:
			'https://1.bp.blogspot.com/-vtUtFMOP9JE/Tt2IoMSZ86I/AAAAAAAABTQ/Cg_t3QbpBY4/s1600/galupizza.jpg',
	},
	{
		id: 5,
		nombre: 'Capresse',
		precio: 2100,
		ingredientes: ['albahaca', 'tomate', 'aceituna negra'],
		imagen:
			'https://www.cardamomo.news/__export/1607791207739/sites/debate/img/2020/12/12/pizza_capresex_la_receta_italiana_fxcil_de_hacer_crop1607791119597.jpeg_1187729725.jpeg',
	},
	{
		id: 6,
		nombre: 'Especial',
		precio: 3000,
		ingredientes: [
			'muzzarela',
			'morrón',
			'choclo',
			'huevo',
			'parmesano',
			'radicheta',
		],
		imagen:
			'https://www.garciadepou.com/blog/wp-content/uploads/2016/08/pizza.jpg',
	},
	{
		id: 7,
		nombre: 'Primavera',
		precio: 2500,
		ingredientes: [
			'muzzarela',
			'aceitunas negras',
			'morrón',
			'huevo',
			'parmesano',
			'ajo',
			'perejil',
		],
		imagen:
			'https://media-cdn.tripadvisor.com/media/photo-s/08/25/d1/94/pizza-primavera.jpg',
	},
];

const form = document.getElementById('form');
const numberId = document.getElementById('number');
const container = document.getElementById('container');
const pizzaError = document.getElementById('pizza-error');

console.log(pizzaError);

const saveLocalStorage = () => {
	localStorage.setItem('pizzas', JSON.stringify(pizzas));
};

// ----con esta funcion renderizamos y pintamos los titulos-----

const renderPizzas = (e) => {
	e.preventDefault();
	const numberValue = numberId.value;
	if (!isEmpty(numberValue)) {
		alert('No ha ingresado ningun valor');
	} else if (pizzaSearch(pizzas)) {
		container.innerHTML = cardPizza(pizzaSearch(pizzas));
	} else {
		container.innerHTML = `<div class="pizza-error">
		<i class="fa-solid fa-xmark"></i>
	<h2 class="title-error">No existe una pizza con el número ingresado</h2>
	</div>`;
	}
	return (numberId.value = '');
};

//card para renderizar las pizzas

const cardPizza = (pizza) => {
	const { nombre, precio, ingredientes, imagen } = pizza;
	return `<div class="container-pizza">
	<img id="img" src= "${imagen}">
	<h2 class="title-pizza"> ${nombre}</h2>
	<h4 id="price-pizza" class="price-pizza">Precio :${precio}$</h4>
	<h4 class="ing-pizza"> Ingredientes: ${ingredientes}</h4>
	</div>
	`;
};

// funcion para el input vacio

const isEmpty = (value) => (value === '' ? false : true);

// ----- con esta funcion capturamos el id y lo buscamos en nuestro array -----
const pizzaSearch = (p) => {
	const valor = numberId.value;
	const search = p.find((pizza) => pizza.id == valor);
	return search;
};

const init = () => {
	form.addEventListener('submit', renderPizzas);
	saveLocalStorage(pizzas);
};

init();

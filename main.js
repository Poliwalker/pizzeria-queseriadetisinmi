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

const pizzas = [
	{
		id: 1,
		nombre: 'muzzarela',
		precio: 1000,
		ingredientes: ['muzzarela'],
	},
	{
		id: 2,
		nombre: 'fugazzeta',
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
		nombre: 'jamon y morron',
		precio: 1600,
		ingredientes: ['jamon', 'morron', 'muzzarela'],
	},
	{
		id: 5,
		nombre: 'capresse',
		precio: 2100,
		ingredientes: ['albahaca', 'tomate', 'aceituna negra'],
	},
	{
		id: 6,
		nombre: 'especial',
		precio: 3000,
		ingredientes: ['muzzarela', 'morron', 'choclo', 'huevo', 'parmesano'],
	},
];

// Ejercicio A

pizzas.forEach((numero) => {
	if (numero.id % 2 !== 0) console.log(`Las pizza impar es: ${numero.nombre}`);
});

// Ejercicio B

const pizzasMenorA = () => {
	if (pizzas.some((pizza) => pizza.precio < 600)) {
		return 'hay pizzas menor a 600$';
	} else {
		return 'no hay pizzas menores a 600$';
	}
};

console.log(pizzasMenorA());

// Ejercicio C

const nombrePizzas = pizzas.map((pizza) => pizza.nombre);
console.log(nombrePizzas);

// Ejercicio D

const precioPizzas = pizzas.map((pizza) => pizza.precio);
console.log(precioPizzas);

// ejercicio E

const nombreYPrecioPizzas = () => {
	pizzas.forEach((pizza) =>
		console.log(`la pizza ${pizza.nombre} sale $${pizza.precio}`)
	);
};

nombreYPrecioPizzas();

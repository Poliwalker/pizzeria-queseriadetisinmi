if (!isEmpty(numberValue)) {
	alert('el campo está vacio');
	return;
} else if (pizzaSearch(pizzas) !== undefined) {
	titlePizza.textContent = `La pizza de ${pizzaSearch(pizzas).nombre} `;
	pricePizza.textContent = `Tiene un precio de: $ ${
		pizzaSearch(pizzas).precio
	}`;
} else if (pizzaSearch(pizzas) == undefined) {
	titlePizza.textContent = `No hay pizzas con ese numero`;
	pricePizza.textContent = ``;
	return;
}

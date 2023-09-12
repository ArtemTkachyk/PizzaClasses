import { pizza4Cheese } from "./PizzaAbstractFactory.js";
import { pizzaPepperoni } from "./PizzaBuilder.js";
import { pizzaCookerInit } from "./PizzaFactoryMethod.js";

const pizzaSarda = pizzaCookerInit("Sarda");

pizza4Cheese.toTaste();
pizzaSarda.toTaste();
pizzaPepperoni.toTaste();

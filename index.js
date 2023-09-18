import { LittleTailorShop } from "./LittleTailorShop.js";
import { pizza4Cheese } from "./PizzaAbstractFactory.js";
import { pizzaPepperoni } from "./PizzaBuilder.js";
import { pizzaCookerInit } from "./PizzaFactoryMethod.js";
import { TailorShop } from "./TailorShop.js";

const pizzaSarda = pizzaCookerInit("Sarda");
const UserRequest = [
  {
    size: "M",
    color: "red",
    type: "T_SHIRT",
  },
  {
    size: "L",
    color: "blue",
    type: "JACKET",
  },
  {
    size: "XL",
    color: "gray",
    type: "COAT",
  },
];

pizza4Cheese.toTaste();
pizzaSarda.toTaste();
pizzaPepperoni.toTaste();

console.log(TailorShop.order(UserRequest));
console.log(LittleTailorShop.order(UserRequest));

const typeOfPizza = {
  fourCheeses: "Four Cheeses",
  romana: "Romana",
};
const typeOfPie = {
  pumpkin: "Pumpkin",
  peach: "Peach",
  strawberry: "Strawberry",
};

const config = {
  typeOfProduct: "Pizza",
};

class BaseOfProduct {
  constructor(name) {
    this.name = name;
  }

  toTaste() {
    console.log(this.taste);
  }
}

class PizzaFourCheeses extends BaseOfProduct {
  constructor() {
    super(typeOfPizza.fourCheeses);
    this.taste = `MMmmmm! pizza ${this.name} so nice, it's so creamy!`;
  }
}
class PizzaRomana extends BaseOfProduct {
  constructor() {
    super(typeOfPizza.romana);
    this.taste = `MMmmmm! pizza ${this.name} so nice, it's so tasty!`;
  }
}
class PumpkinPie extends BaseOfProduct {
  constructor() {
    super(typeOfPie.pumpkin);
    this.taste = `MMmmmm! pie ${this.name} so nice, it's so tasty!`;
  }
}
class PeachPie extends BaseOfProduct {
  constructor() {
    super(typeOfPie.peach);
    this.taste = `MMmmmm! pie ${this.name} so nice, it's so sour!`;
  }
}

class PizzaCooker {
  static initialize(type) {
    if (type === typeOfPizza.fourCheeses) return new PizzaFourCheeses();
    if (type === typeOfPizza.romana) return new PizzaRomana();
  }
}
class PieCooker {
  static initialize(type) {
    if (type === typeOfPie.pumpkin) return new PumpkinPie();
    if (type === typeOfPie.peach) return new PeachPie();
  }
}

class CookerFactory {
  cooker = null;

  configCookerFactory(cooker) {
    this.cooker = cooker;
  }

  createCookerOfProduct(product) {
    return this.cooker.initialize(product);
  }
}

class CookerFactoryConfigurator {
  static main() {
    const currentCookerFactory = new CookerFactory();
    if (config.typeOfProduct == "Pizza")
      currentCookerFactory.configCookerFactory(PizzaCooker);

    if (config.typeOfProduct == "Pie")
      currentCookerFactory.configCookerFactory(PieCooker);

    return currentCookerFactory;
  }
}

const myCooker = CookerFactoryConfigurator.main();

export const pizza4Cheese = myCooker.createCookerOfProduct("Four Cheeses");

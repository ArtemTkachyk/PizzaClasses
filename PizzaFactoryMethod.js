const typeOfPizza = {
  sarda: "Sarda",
  romana: "Romana",
};

class PizzaBase {
  constructor(name) {
    this.name = name;
  }

  toTaste() {
    console.log(`Empty field`);
  }
}

class PizzaSarda extends PizzaBase {
  constructor() {
    super(typeOfPizza.sarda);
    this.taste = `MMmmmm! pizza ${this.name} so nice, it's so smoked!`;
  }

  toTaste() {
    console.log(this.taste);
  }
}

class PizzaRomana extends PizzaBase {
  constructor() {
    super(typeOfPizza.romana);
    this.taste = `MMmmmm! pizza ${this.name} so nice, it's so tasty!`;
  }

  toTaste() {
    console.log(this.taste);
  }
}

class PizzaCooker {
  static initialize(type) {
    if (type === typeOfPizza.sarda) return new PizzaSarda();
    if (type === typeOfPizza.romana) return new PizzaRomana();
  }
}

export const pizzaCookerInit = PizzaCooker.initialize;

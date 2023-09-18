const typesOfClothes = {
  T_SHIRT: "T_SHIRT",
  JACKET: "JACKET",
  COAT: "COAT",
  PANTS: "PANTS",
};

class Clothes {
  constructor(order) {
    this.size = order.size;
    this.color = order.color;
    this.type = order.type;
    this.assemblyDescription = "";
  }
}

class ClothesManual {
  clothes = {};

  setOrder(order) {
    this.clothes = new Clothes(order);
  }

  cut() {
    this.clothes.assemblyDescription += "cut";
  }

  assemble() {
    this.clothes.assemblyDescription += ", assembled";
    return this.clothes;
  }
}

class TShirtManual extends ClothesManual {
  addPrint() {
    this.clothes.assemblyDescription += ", print_added";
  }

  addSeams() {
    this.clothes.assemblyDescription += ", seams_added";
  }

  constructor(order) {
    super();
    this.setOrder(order);
    this.cut();
    this.addPrint();
    this.addSeams();
    this.assemble();
  }
}

class JacketManual extends ClothesManual {
  addButtons() {
    this.clothes.assemblyDescription += ", buttons_added";
  }

  constructor(order) {
    super();
    this.setOrder(order);
    this.cut();
    this.addButtons();
    this.assemble();
  }
}

class CoatManual extends ClothesManual {
  addSeams() {
    this.clothes.assemblyDescription += ", seams_added";
  }

  constructor(order) {
    super();
    this.setOrder(order);
    this.cut();
    this.addSeams();
    this.assemble();
  }
}

class PantsManual extends ClothesManual {
  addButtons() {
    this.clothes.assemblyDescription += ", buttons_added";
  }

  constructor(order) {
    super();
    this.setOrder(order);
    this.cut();
    this.addButtons();
    this.assemble();
  }
}

class ClothingFactory {
  static makeClothes(order) {
    switch (order.type) {
      case typesOfClothes.T_SHIRT:
        return new TShirtManual(order);
      case typesOfClothes.JACKET:
        return new JacketManual(order);
      case typesOfClothes.COAT:
        return new CoatManual(order);
      case typesOfClothes.PANTS:
        return new PantsManual(order);
      default:
        console.log(`Sorry, we don't have a ${order.type}.`);
    }
    return;
  }
}

export class LittleTailorShop {
  static order(requests) {
    const result = [];
    requests.forEach((order) => {
      result.push(ClothingFactory.makeClothes(order));
    });
    return result;
  }
}

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

class ClothesBuilder {
  clothes = {};

  static setOrder(order) {
    this.clothes = new Clothes(order);
  }

  static cut() {
    this.clothes.assemblyDescription = "cut";
  }
  static addPrint() {
    this.clothes.assemblyDescription += ", print_added";
  }
  static addButtons() {
    this.clothes.assemblyDescription += ", buttons_added";
  }
  static addSeams() {
    this.clothes.assemblyDescription += ", seams_added";
  }
  static addBelt() {
    this.clothes.assemblyDescription += ", belt_added";
  }

  static assemble() {
    this.clothes.assemblyDescription += ", assembled";
    return this.clothes;
  }
}

class ClothingFactory {
  static makeClothes(order) {
    ClothesBuilder.setOrder(order);
    ClothesBuilder.cut();
    switch (order.type) {
      case typesOfClothes.T_SHIRT:
        ClothesBuilder.addSeams();
        ClothesBuilder.addPrint();
        break;
      case typesOfClothes.JACKET:
        ClothesBuilder.addButtons();
        break;
      case typesOfClothes.COAT:
        ClothesBuilder.addSeams();
        ClothesBuilder.addBelt();
        break;
      case typesOfClothes.PANTS:
        break;
      default:
        console.log(`Sorry, we don't have a ${order.type}.`);
    }
    return ClothesBuilder.assemble();
  }
}

export class TailorShop {
  static order(requests) {
    const result = [];
    requests.forEach((order) => {
      result.push(ClothingFactory.makeClothes(order));
    });
    return result;
  }
}

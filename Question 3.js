class Uber {
    constructor(carModel, carType, color, registrationnumber) {
      this.carModel = carModel;
      this.carType = carType;
      this.color = color;
      this.registrationnumber = registrationnumber
    }
  
    getPrice(distance, demandPrice, pricePerKm) {
      return  `The price is ${pricePerKm * distance * demandPrice}`;
    }
  }
  
  var myCar = new Uber("Swift Dzire", "Sedan", "white","2506")
  console.log(myCar.carModel);
  console.log(myCar.getPrice(18, 2, 20));
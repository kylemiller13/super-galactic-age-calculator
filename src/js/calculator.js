//business logic
export class Calc {
  constructor(age, earthLifeExpectance) {
    this.age = age;
    this.earthLifeExpectance = earthLifeExpectance;
    this.mercury = 0.24;
    this.venus = 0.62;
    this.mars = 1.88;
    this.jupiter = 11.86;
  }
  ageOnPlanets() {
    this.mercuryAge = parseFloat((this.age / this.mercury).toFixed(1));
    this.venusAge = parseFloat((this.age / this.venus).toFixed(1));
    this.marsAge = parseFloat((this.age / this.mars).toFixed(1));
    this.jupiterAge = parseFloat((this.age / this.jupiter).toFixed(1)); 
  }
  lifeExpectance(){
    this.mercuryExpectance = parseFloat((this.earthLifeExpectance / this.mercury).toFixed(1));
    this.venusExpectance = parseFloat((this.earthLifeExpectance / this.venus).toFixed(1));
    this.marsExpectance = parseFloat((this.earthLifeExpectance / this.mars).toFixed(1));
    this.jupiterExpectance = parseFloat((this.earthLifeExpectance / this.jupiter).toFixed(1));
  }
}
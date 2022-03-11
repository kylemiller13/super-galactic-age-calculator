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
  ageOnPlanets(){
    this.mercuryAge = parseFloat((this.age / this.mercury).toFixed(1));

  }
}
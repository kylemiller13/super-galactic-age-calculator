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
  lifeResult() {
    this.earthResult = parseInt((this.earthLifeExpectance - this.age));
    this.mercuryResult = parseInt((this.earthResult / this.mercury));
    this.venusResult = parseInt((this.earthResult / this.venus));
    this.marsResult = parseInt((this.earthResult / this.mars));
    this.jupiterResult = parseInt((this.earthResult / this.jupiter));
  }
  lifeSurpassed() {
    if (this.age > this.earthLifeExpectance){
      this.earthSurpassed = parseInt((this.age - this.earthLifeExpectance));
      this.mercurySurpassed = parseFloat(((this.age - this.earthLifeExpectance) / this.mercury).toFixed(1));
      this.venusSurpassed = parseFloat(((this.age - this.earthLifeExpectance) /this.mars).toFixed(1));
    }
  }
}
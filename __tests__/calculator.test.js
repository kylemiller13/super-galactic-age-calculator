import { Calc } from "../src/js/calculator";

describe('Calc', () => {
  test('should correctly determine if userAge is correctly with the inputted age', () => { 
    const userAge = new Calc(23);
    expect(userAge.age).toEqual(23);
  });
  test("should correctly determine age on Mercury when age on Earth is 23 years old", () => {
    const userAge = new Calc(23);
    userAge.ageOnPlanets();
    expect(userAge.mercuryAge).toEqual(95.8)
  });
  test("should correctly determine age on venus when age on Earth is 23 years old", () => {
    const userAge = new Calc(23);
    userAge.ageOnPlanets();
    expect(userAge.venusAge).toEqual(37.1);
  });
  test('should correctly determine age on mars when age on Earth is 23 years old', ()=> {
    const userAge = new Calc(23);
    userAge.ageOnPlanets();
    expect(userAge.marsAge).toEqual(12.2);
  });
  test('should correctly determine age on Jupiter when age on Earth is 23 years old', () => {
    const userAge = new Calc(23);
    userAge.ageOnPlanets();
    expect(userAge.jupiterAge).toEqual(1.9);
  });
  test('should correctly determine life expectance on Mercury when lifeExpectance is 78 on Earth', () => {
    const userAge = new Calc(23, 78);
    userAge.lifeExpectance();
    expect(userAge.mercuryExpectance).toEqual(325);
  });
  test('should correctly determine life expectance on Venus when lifeExpectance is 78 on Earth', () => {
    const userAge = new Calc(23,78);
    userAge.lifeExpectance();
    expect(userAge.venusExpectance).toEqual(125.8);
  });
  test('should correctly determine life expectance on Mars when lifeExpectance is 78 on Earth', () => {
    const userAge = new Calc(23,78);
    userAge.lifeExpectance();
    expect(userAge.marsExpectance).toEqual(41.5);
  });
  test('should correctly determine life expectance on jupiter when lifeExpectance is 78 on Earth', () => {
    const userAge = new Calc(23,78);
    userAge.lifeExpectance();
    expect(userAge.jupiterExpectance).toEqual(6.6);
  });
  test('should correctly determine the life result on Earth, when Earth age is 23 years old', () => {
    const userAge = new Calc(23,78);
    userAge.lifeResult();
    expect(userAge.earthResult).toEqual(55);
  });
  test('should correctly determine the life result on Mercury, when Earth age is 23 years old', () => {
    const userAge = new Calc(23,78);
    userAge.lifeResult();
    expect(userAge.mercuryResult).toEqual(229);
  })
  test('should correctly determine the life result on Venus, when Earth age is 23 years old', () => {
    const userAge = new Calc(23,78);
    userAge.lifeResult();
    expect(userAge.venusResult).toEqual(88);
  });
  test('should correctly determine the life result on Mars, when Earth age is 23 years old', () => {
    const userAge = new Calc(23,78);
    userAge.lifeResult();
    expect(userAge.marsResult).toEqual(29);
  });
  test('should correctly determine the life result on Jupiter, when Earth age is 23 years old', () => {
    const userAge = new Calc(23,78);
    userAge.lifeResult();
    expect(userAge.jupiterResult).toEqual(4);
  });
  test('should correctly determine how many years a person has lived past their life expectancy on Earth', () => {
    const userLifeSurpassed = new Calc(100, 78);
    userLifeSurpassed.lifeSurpassed();
    expect(userLifeSurpassed.earthSurpassed).toEqual(22);
  });
  test('should correctly determine how many years a person has lived past their life expectancy on mercury', () => {
    const userLifeSurpassed = new Calc(100, 78);
    userLifeSurpassed.lifeSurpassed();
    expect(userLifeSurpassed.mercurySurpassed).toEqual(91.7);
  })
  test('should correctly determine how many years a person has lived past their life expectancy on venus', () => {
    const userLifeSurpassed = new Calc(100,78);
    userLifeSurpassed.lifeSurpassed();
    expect(userLifeSurpassed.venusSurpassed).toEqual(35.4);
  }) 


});
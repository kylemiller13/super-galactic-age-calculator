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
    expect(userAge.earthResult).toEqual(55)
  })

});
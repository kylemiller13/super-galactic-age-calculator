import { Calc } from "../src/js/calculator";

describe('Calc', () => {
  test('should correctly determine if userAge is correctly with the inputted age', () => { 
    const userAge = new Calc(23, 100);
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
  test('should correctly determine life expectance on Mercury when userAge is 78 on Earth', () => {
    const userAge = new Calc(78);
    userAge.earthLifeExpectance();
    expect(userAge.mercuryExpectance).toEqual(325)
  })
});
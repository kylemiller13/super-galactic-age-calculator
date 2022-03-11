import { Calc } from "../src/js/calculator";

describe('Calc', () => {
  test('should correctly determine if userAge is correctly with the inputted age', () => { 
    const userAge = new Calc(23, 100);
    expect(userAge.age).toEqual(23);
  });
  test("should correctly determine age on Mercury when age on Earth is 23 years old", () => {
    const userAge = new Calc(23);
    userAge.ageOnPlanets();
    expect(userAge.age).toEqual(95.8)
  });
});
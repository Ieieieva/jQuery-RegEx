import { validateEmail } from "./validateEmail";

describe(validateEmail, () => {
  it('should return false if email does not match to pattern', () => {
    const result = validateEmail('');
    console.log('result', result)

    expect(result).toEqual(false);
  })
})
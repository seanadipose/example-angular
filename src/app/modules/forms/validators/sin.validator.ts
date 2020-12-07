import { AbstractControl } from '@angular/forms';

export function sinValidator() {
  /**
   * @param sin - the input SIN value in string format
   * @returns boolean value if the string is valid / invalid
   */
  function validateSin(sin: string) {
    if (sin && sin.trim().length > 0) {
      // Init weights and other stuff
      const weights: number[] = [1, 2, 1, 2, 1, 2, 1, 2, 1];
      let sum = 0;

      // Clean up string
      const value = sin.trim();
      sin = value
        .replace(/-/g, '') // remove underlines
        .replace(/\s/g, ''); // spaces

      // Test for length
      if (sin.length !== 9) {
        return false;
      }

      // Test for string of zeros
      if (sin === '000000000') {
        return false;
      }

      // Walk through each character
      for (let i = 0; i < sin.length; i++) {
        // pull out char
        const char = sin.charAt(i);

        // parse the number
        const num = Number(char);
        if (Number.isNaN(num)) {
          return false;
        }

        // multiply the value against the weight
        let result = num * weights[i];

        // If two digit result, subtract 9
        if (result > 9) {
          result = result - 9;
        }

        // add it to our sum
        sum += result;
      }

      // The sum must be divisible by 10
      if (sum % 10 !== 0) {
        return false;
      } else {
        return true;
      }
    }
  }

  return (control: AbstractControl): { [key: string]: any } | null => {
    const forbidden = control.value ? !validateSin(control.value) : null;
    return forbidden
      ? { invalidSin: { value: `${control.value} is not valid` } }
      : null;
  };
}

export default class Validator {
  static validateUsername(userName) {
    this.onlyLetters = /^[A-Za-z0-9_-]+$/;
    this.noStartNumber = /^[^0-9_-]/;
    this.noEndNumbers = /[^0-9_-]$/;
    this.noThreeDigits = /^(?:(?!\d{4}).)*$/;
    return (
      this.onlyLetters.test(userName)
      && this.noStartNumber.test(userName)
      && this.noEndNumbers.test(userName)
      && this.noThreeDigits.test(userName)
    );
  }
}

const { faker } = require('@faker-js/faker');

class FakerHelper {
  static generateRandomQuantity() {
    return faker.number.int({ min: 1, max: 20 });
  }
  static generateRandomName(){
    return faker.person.fullName();
  }
  static generateRandomEmail(){
    return faker.internet.email();
  }
  static generateRandomPassword(){
    return faker.internet.password();
  }
  static generateRandomFirstName(){
    return faker.person.firstName();
  }
  static generateRandomLastName(){
    return faker.person.lastName();
  }
  static generateRandomStreetAddress(){
    return faker.location.streetAddress();
  }
  static generateRandomState(){
    return faker.location.state();
  }
  static generateRandomCity(){
    return faker.location.city();
  }
  static generateRandomZipCode(){
    return faker.location.zipCode();
  }
  static generateRandomPhoneNumber(){
    return faker.phone.number();;
  }
  static getRandomCountry() {
    const countries = [
      "India",
      "United States",
      "Canada",
      "Australia",
      "Israel",
      "New Zealand",
      "Singapore"
    ];
    return countries[Math.floor(Math.random() * countries.length)];
  }
}

module.exports = FakerHelper;
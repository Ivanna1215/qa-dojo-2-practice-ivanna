import { faker } from "@faker-js/faker";
export class CoffeeCartData {
  name: string;
  email: string;
  espresso: string;
  cafeLatte: string;
  espressoConPanne: string;
  paymentDetails: string;

  constructor() {
    this.name = faker.person.firstName();
    this.email = faker.internet.email();
    this.espresso = "Espresso";
    this.cafeLatte = "Cafe Latte";
    this.espressoConPanne = "Espresso Con Panna";
    this.paymentDetails = "Payment details";
  }
}

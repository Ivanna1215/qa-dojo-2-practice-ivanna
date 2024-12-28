import { expect, type Locator, type Page } from "@playwright/test";
export class ConditionsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }
  async determineNumber(num: number) {
    if (num % 2 === 0) {
      console.log("This is EVEN NUMBER ");
      return true;
    } else {
      console.log("This is ODD NUMBER");
      return false;
    }
  }

  async sayHello(hour: number) {
    if (hour >= 0 && hour <= 4) {
      console.log("Good Night!");
      return "Good Night!";
    }
    if (hour > 4 && hour < 12) {
      console.log("Good Morning!");
      return "Good Morning!";
    }
    if (hour >= 12 && hour <= 18) {
      console.log("Good Afternoon!");
      return "Good Afternoon!";
    }
    if (hour >= 18 && hour <= 24) {
      console.log("Good Evening");
      return "Good Evening!";
    }
    if (hour > 24) {
      console.log("You enter incorrect hour");
      return false;
    }
  }

  async checkAverage(average: number) {
    if (average >= 50) {
      console.log("Test is passed");
      return true;
    }
    if (average < 50) {
      console.log("Test is failed");
      return false;
    }
  }

  async checkAge(age: number) {
    if (age >= 18) {
      console.log("You can vote");
      return true;
    } else {
      console.log(`You can't vote`);
      return false;
    }
  }

  async compareNumber(firstNumber: number, secondNumber: number) {
    if (firstNumber > secondNumber) {
      return "First number bigger than second number";
    }
    if (secondNumber > firstNumber) {
      return "Second number bigger than first number";
    }
    if (firstNumber === secondNumber) {
      return "Numbers same";
    }
  }

  async determineWay(color: string) {
    if (color === "red") {
      return false;
    }
    if (color === "yellow") {
      return false;
    }
    if (color === "green") {
      return true;
    }
  }

  async isPositive(num: number) {
    if (num > 0) {
      return true;
    }
    if (num < 0) {
      return false;
    }
    if (num === 0) {
      return null;
    }
  }
}

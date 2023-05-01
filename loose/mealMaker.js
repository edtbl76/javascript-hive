const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },
  get appetizers() { return this._courses.appetizers },
  get mains() { return this._courses.mains },
  get desserts() {return this._courses.desserts },
  set appetizers(newAppetizers) {
    this._courses.appetizers.push(newAppetizers);
  },
  set mains(newMains) {
    this._courses.mains.push(newMains);
  },
  set desserts(newDesserts) {
    this._courses.desserts.push(newDesserts)
  },

  get courses() {
    return {
      appetizers: this.appetizers,
      mains: this.mains,
      desserts: this.desserts
    };
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice
    };

    // change to settter? 
    this._courses[courseName].push(dish);
  },
  getRandomDishFromCourse(courseName) {
    const dishes = this.courses[courseName];
    const index = Math.floor(Math.random() * dishes.length);

    return dishes[index];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');

    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Meal: ${appetizer.name}, ${main.name}, and ${dessert.name}. $${totalPrice}.`;
  }

  
};


menu.addDishToCourse('appetizers', 'Salad', 4.25);
menu.addDishToCourse('appetizers', 'Nachos', 5.75);
menu.addDishToCourse('appetizers', 'Fried Turds', 2.25);

menu.addDishToCourse('mains', 'Steak', 99.99);
menu.addDishToCourse('mains', 'Salmon', 27.99);
menu.addDishToCourse('mains', 'Wild Crocodile Sphincter', 109.25);

menu.addDishToCourse('desserts', 'Key Lime Pie', 4.25);
menu.addDishToCourse('desserts', 'NutSack Cheesecake', 8.99);
menu.addDishToCourse('desserts', 'Hot Fudge Sundae', 10.75);

let meal = menu.generateRandomMeal();
console.log(meal);

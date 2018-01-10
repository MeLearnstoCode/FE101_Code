const myCar = {
  make: 'Eagle',
  model: 'Talon TSi',
  year: 1993,
};

myCar.color = 'pink';

myCar.canFly = true;

const myCat = {
  name: 'Fluffy',
  age: 12,
  color: 'orange',
};

function describeCar(car) {
  console.log('This car has the make ' + car.make + ' and the model ' + car.model + ' and it is from the year ' + car.year);
}

function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

new Car('Eagle', 'Talon TSi', 1993);
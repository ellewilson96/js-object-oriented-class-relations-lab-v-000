class Driver {
  constructor(id, name) {
  this.id = ++driverId;
  this.name = name;
  }

  trips() {

  }

  passengers() {

  }
}

class Passenger {
  constructor(id, name) {
    this.id = ++passengerId;
    this.name = name;
    this.driverId = driver.id;
  }

  trips()  {

  }

  drivers() {

  }
}

class Trip {
  constructor(id, driverId, passengerId) {
  this.id = ;
  this.driverId = driver.id;
  this.passengerId = passenger.id
}

  driver() {

  }

  passenger() {

  }
}

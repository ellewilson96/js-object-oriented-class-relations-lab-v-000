class Driver {
  constructor(id, name) {
  this.id = ++driverId;
  this.name = name;
  }

  trips() {

  }
}

class Passenger {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.driverId = driver.id;
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

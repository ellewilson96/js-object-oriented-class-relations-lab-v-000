let store = {drivers: [], passengers: [], trips: []};

let driverId = 0;
let passengerId = 0;
let tripId = 0;

class Driver {
  constructor(name) {
  this.id = ++driverId;
  this.name = name;

  store.drivers.push(this)

  trips() {

  }

  passengers() {

  }
}
}

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;
    this.driverId = driver.id;

  trips()  {

  }

  drivers() {

  }

  store.passengers.push(this)
}
}

class Trip {
  constructor(driverId, passengerId) {
  this.id = ++tripId;
  this.driverId = driver.id;
  this.passengerId = passenger.id

  driver() {

  }

  passenger() {

  }
}
}

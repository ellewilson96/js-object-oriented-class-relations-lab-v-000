let store = {drivers: [], passengers: [], trips: []}

class Driver {
  constructor(id, name) {
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
  constructor(id, name) {
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
  constructor(id, driverId, passengerId) {
  this.id = ++tripId;
  this.driverId = driver.id;
  this.passengerId = passenger.id
}

  driver() {

  }

  passenger() {

  }
}

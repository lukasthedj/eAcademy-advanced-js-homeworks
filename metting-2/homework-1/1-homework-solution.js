function Car(make, model, year) {
    let owners = [];
  
    this.addOwner = (owner) => {
      owners.push(owner);
    };
  
    this.removeOwner = (owner) => {
      owners = owners.filter((entry) => {
        console.log(entry.fullName());
  
        return entry.fullName() !== owner.fullName();
      });
    };
  
    this.getCarInfo = () => {
      return `${make} ${model} released in ${year}`;
    };
  
    this.getOwnersCount = () => {
      return owners.length;
    };
  
    this.getOwnerNames = () => {
      const names = [];
  
      owners.forEach((owner) => {
        names.push(owner.fullName());
      });
  
      return names.join(", ");
    };
  
    this.getFullInfo = () => {
      return ` ${make} ${model} from ${year}. ${this.getOwnersCount()} person owns this car. These are - ${this.getOwnerNames()}.`;
    };
  }
  
  function Person(name, surname, age, gender, cars = []) {
    this.fullName = () => {
      return `${name} ${surname}`;
    };
  
    this.countCars = () => {
      return cars.length;
    };
  
    this.buysCar = (car) => {
      cars.push(car);
      car.addOwner(this);
    };
  
    this.sellsCar = (car) => {
      car.removeOwner(this);
    };
  
    this.getAllCarsInfo = () => {
      const carsInfo = [];
  
      cars.forEach((car) => {
        carsInfo.push(car.getCarInfo());
      });
  
      return `${name} owns these cars: ${carsInfo.join(", ")}.`;
    };
  }
  
  let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
  let ilona = new Person("Elon", "Musk", 30, "M");
  let duti_picoti = new Car("BMW", "525", "1999");
  let stodevianosto = new Car("Mercedes", "E190", 1991);
  
  daniel916.buysCar(duti_picoti); // adds passed car
  daniel916.buysCar(stodevianosto); // adds passed car
  daniel916.sellsCar(duti_picoti); // removes passed car
  ilona.buysCar(stodevianosto); // adds passed car
  ilona.buysCar(duti_picoti); // adds passed car
  
  console.log({
    daniel: {
      fullName: daniel916.fullName(),
      countCars: daniel916.countCars(),
      getAllCarsInfo: daniel916.getAllCarsInfo(),
    },
    elon: {
      fullName: ilona.fullName(),
      countCars: ilona.countCars(),
      getAllCarsInfo: ilona.getAllCarsInfo(),
    },
    duti_picoti: {
      getOwnersCount: duti_picoti.getOwnersCount(),
      getOwnerNames: duti_picoti.getOwnerNames(),
      getFullInfo: duti_picoti.getFullInfo(),
      getCarInfo: duti_picoti.getCarInfo(),
    },
    stodevianosto: {
      getOwnersCount: stodevianosto.getOwnersCount(),
      getOwnerNames: stodevianosto.getOwnerNames(),
      getFullInfo: stodevianosto.getFullInfo(),
      getCarInfo: stodevianosto.getCarInfo(),
    },
  });
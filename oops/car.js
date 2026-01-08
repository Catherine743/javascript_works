class Car {
    setCar (id,name,color,price){
        this.carID = id;
        this.carName = name;
        this.carColor = color;
        this.carPrice = price;
    }
    displayCar(){
        console.log(this.carID,this.carName,this.carColor,this.carPrice);
        
    }
}

bellanoInstance = new Car();
bellanoInstance.setCar(1991,"Bellano","Blue",1000000);
bellanoInstance.displayCar();

vagonarInstance = new Car();
vagonarInstance.setCar(1992,"Vagonar","Brown",500000);
vagonarInstance.displayCar();
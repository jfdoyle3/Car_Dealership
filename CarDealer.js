var carDealer= {
    sedan:{
        price: "20,000",
        available: "100,000"
    },
    SUV: {
        price: "30,000",
        available: "400,000"
    },
    Sport: {
        price: "40,000",
        available: "300,000"
    },
   checkPrice(cPrice){
       return this[cPrice].price;
   },   
   checkAvail(cType){
    return this[cType].available;
    }
};
console.log("We have " + carDealer.checkAvail("sedan")+" Sedans in stock");
console.log("Current Price of the sedans: $"+ carDealer.checkPrice("sedan")+"/car");
console.log("We have " + carDealer.checkAvail("SUV")+" SUVS in stock");
console.log("Current Price of the SUV: $"+ carDealer.checkPrice("SUV")+"/SUV");
console.log("We have " + carDealer.checkAvail("Sport")+" Sports car in stock");
console.log("Current Price of the Sports cars: $"+ carDealer.checkPrice("Sport")+"/car");
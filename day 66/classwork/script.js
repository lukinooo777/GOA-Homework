function Flight(flightID, status) {
    this.flightID = flightID;
    this.status = status;
    this.getMessage = function() {
        return "Flight ${this.flightID} has ${this.status}";
    }
}

let flight = new Flight("NGT 929", "landed");

console.log(flight.getMessage());




function changePrice(productID, price, discount){
    let discountedPrice = price - (price * (discount / 100));
    console.log(ProductID + "price:" + price);
    console.log(productOD + "new price:" + Math.round(discountedPrice));
}

changePrice("LD1493", 1700, 15);
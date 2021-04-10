const mongoose  = require('mongoose');
const Schema    = mongoose.Schema;

const carSchema = new Schema({
    mark: String,
    price: Number,
    condition: String,
    origin: String,
    power: String,
    fuel: String,
    mileage: Number,
    numOfSeats: Number,
    gearbox: String,
    color: String
});

const Car = mongoose.model('Car', carSchema);

module.exports = {Car};

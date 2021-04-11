const mongoose = require('mongoose');
const { Car } = require('../../mongo/models/Car');

const checkMongoConnection = (options) => (request, h) => {
    const connectionStates = {
        0: "disconnected",
        1: "connected",
        2: "connecting",
        3: "disconnecting"
    }

    const state = mongoose.connection.readyState;
    if (state === 1) {
        return h.response({
            status: connectionStates[state]
        }).code(200)
    }

    return h.response({
        status: connectionStates[state]
    }).code(500)
}

const getCars = (options) => async (request, h) => {
    return Car.find()
        .then(cars => {
            if (cars)
                return h.response({ cars }).code(200)
            else
                return h.response({ message: 'No cars found!' }).code(400)
        })
        .catch(error => {
            return h.response({
                error: error.message
            }).code(500)
        })
}

const generateData = (options) => async (request, h) => {
    try {
        const car = new Car(request.payload);
        const response = await car.save();

        return h.response({ response }).code(200);
    } catch (error) {
        return h.response({
            error: error.message
        }).code(500);
    }
}

const getAggregation = (options) => (request, h) => {
    const start = process.hrtime();

    return Car.aggregate(
        [
            { $match: {} },
            { $group: { _id: "$mark", totalPrice: { $sum: "$price" } } }
        ]
    )
    .then(response => {
        const duration = process.hrtime(start)[1] / 1000000; // divide by a million to get nano to milli

        return h.response({
            data: response,
            duration: `${duration} ms`
        }).code(200);
    })
    .catch(error => {
        return h.response({
            error: error.message
        }).code(500);
    })
    // return h.response({
    //     data: 'aggregation time goes here'
    // });
}


module.exports = {
    checkMongoConnection,
    getCars,
    generateData,
    getAggregation
}
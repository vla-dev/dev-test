var mongoose        = require('mongoose');
const { Car }       = require('../../mongo/models/Car');

const checkMongoConnection = (options) => (request, h) => {
    const connectionStates = {
        0: "disconnected",
        1: "connected",
        2: "connecting",
        3: "disconnecting"
    }

    const state = mongoose.connection.readyState;
    if(state === 1){
        return h.response({
            status: connectionStates[state]
        }).code(200)
    }

    return h.response({
        status: connectionStates[state]
    }).code(500)   
}

const generateData = (options) => async (request, h) => {
    console.log(request.payload)
    try {
        const car = new Car(request.payload);
        const response = await car.save();
        
        return h.response({response}).code(200);
    } catch (error) {
        return h.response({
            error: error.message
        }).code(500);
    }
}

const getAggregation = (options) => (request, h) => {
    return h.response({
        data: 'aggregation time goes here'
    });
}


module.exports = {
    checkMongoConnection,
    generateData,
    getAggregation
}
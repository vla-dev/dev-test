const mongoose      = require("mongoose");

const connect = ({url, options}) => {        
    mongoose.connect(url, {...options})
            .then(() => {
                console.log('[MongoDB]: Database Connection Established!');
            })
            .catch(error => {
                console.log('[MongoDB]: Database Connection Failed! Error: ', error);
            })
    
    return  mongoose.connection ;
}

module.exports = {connect};
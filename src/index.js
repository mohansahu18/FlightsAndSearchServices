const express = require('express');
const bodyParser = require('body-parser');
const CityRipository = require('./repository/city-repository')
const { PORT } = require('./config/serverConfig');

const setUPAndStartServer = async () => {

    // creating a express server
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))


    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} `);
        const obj = new CityRipository();
        obj.createCity({ name: "bhpalk" })
    });
};



setUPAndStartServer();

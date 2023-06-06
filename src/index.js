const express = require('express');
const bodyParser = require('body-parser');
// const CityRipository = require('./repository/city-repository')
const { PORT } = require('./config/serverConfig');
const ApiRoutes = require("./routes/index")

const setUPAndStartServer = async () => {

    // creating a express server
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use("/api", ApiRoutes);

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} `);
        // const obj = new CityRipository();
        // obj.createCity({ name: "bhpalk" })
    });
};



setUPAndStartServer();

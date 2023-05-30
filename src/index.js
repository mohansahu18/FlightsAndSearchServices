const express = require('express');
const { PORT } = require('./config/serverConfig')

const setUPAndStartServer = async () => {

    // creating a express server
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT} `)
    })

}
setUPAndStartServer();

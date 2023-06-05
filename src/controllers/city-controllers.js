const { CityServices } = require('../services/index')

const cityServices = new CityServices();

const create = async (req, res) => {
    try {
        const city = await CityServices.createCity(req.body)
        return res.status(201).json({
            data: city,
            success: true,
            message: "successfully created a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to  create a city",
            err: error
        })
    }
}

const destory = async (req, res) => {
    try {
        const response = await CityServices.deleteCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully deleted a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to  delete a city",
            err: error
        })
    }
}

const get = async (req, res) => {
    try {
        const response = await CityServices.getCity(req.params.id)
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully fetched a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to  get the city",
            err: error
        })
    }
}

const update = async (req, res) => {
    try {
        const response = await CityServices.updateCity(req.params.id, req.body)
        return res.status(200).json({
            data: response,
            success: true,
            message: "successfully updated a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "not able to  update the city",
            err: error
        })
    }
}
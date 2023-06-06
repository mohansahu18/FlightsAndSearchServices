const { CityRipository } = require('../repository/index');

class CityServices {
    constructor() {
        this.cityRipository = new CityRipository()
    }

    async createCity(data) {
        try {
            const city = await this.cityRipository.createCity(data)
            return city
        } catch (error) {
            console.log("something went wrong in services layer")
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            const response = await this.cityRipository.deleteCity(cityId);
            return response
        } catch (error) {
            console.log("something went wrong in services layer")
            throw { error }
        }
    }

    async updateCity(cityId, data) {
        try {
            const city = await this.cityRipository.updateCity(cityId, data);
            return city
        } catch (error) {
            console.log("something went wrong in services layer")
            throw { error }
        }
    }

    async getCity(cityId) {
        try {
            const city = await this.cityRipository.getCity(cityId)
            return city

        } catch (error) {
            console.log("something went wrong in services layer")
            throw { error }
        }
    }


}
module.exports = CityServices
const City = require('../models/index');

class CityRipository {

    // destructuring the object
    async createCity({ name }) {
        try {
            const city = await City.create(
                {
                    name: name
                }
            )
            return city
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            await City.destory({
                where: {
                    id: cityId
                }
            })
            return true;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error }
        }
    }

    async updateCity(cityId, data) {
        const city = City.update(data, {
            where: {
                id: cityId
            }
        })
        return city;
    }

    async getCity({ cityId }) {
        try {
            const city = await City.findBypk(cityId);
            return city;

        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error }
        }
    }

}

module.exports = CityRipository;
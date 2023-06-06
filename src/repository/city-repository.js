const { city } = require('../models/index');

class CityRipository {

    // destructuring the object
    async createCity({ name }) {
        try {
            const City = await city.create(
                {
                    name: name
                }
            )
            return City
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error }
        }
    }

    async deleteCity(cityId) {
        try {
            await city.destroy({
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
        const City = city.update(data, {
            where: {
                id: cityId
            }
        })
        return City;
    }

    // async getCity({ cityId }) {
    //     try {
    //         const City = await city.findByPk(cityId);
    //         return City;

    //     } catch (error) {
    //         console.log("something went wrong in repository layer");
    //         throw { error }
    //     }
    // }

    async getCity(cityId) {
        try {
            const City = await city.findByPk(cityId);
            return City;
        } catch (error) {
            console.log("something went wrong in repository layer");
            throw { error };
        }
    }

}

module.exports = CityRipository;
import AnimalsService from '../services/AnimalsService.js'

const AnimalsController = {
    async wszystkieAnimals(req, res){
        try {
            const animals = await AnimalsService.wszystkieAnimals();
            res.json(animals);
        }catch (err){
            console.error(err)
        }
    }
}

export default AnimalsController;
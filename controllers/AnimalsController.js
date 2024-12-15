import AnimalsService from '../services/AnimalsService.js'

const AnimalsController = {
    async wszystkieAnimals(req, res){
        try {
            const animals = await AnimalsService.wszystkieAnimals();
            res.json(animals);
        }catch (err){
            console.error(err)
        }
    },

    async pobierzAnimalPoId(req, res) {
        const id = parseInt(req.params.id);
        try {
            const animal = await AnimalsService.pobierzAnimalPoId(id);
            if (animal) {
                res.json(animal);
            } else {
                console.log('Zwierze nie znalezione');
            }
        } catch (err) {
            console.error(err);
        }
    },

    async zagrozoneAnimals(req, res) {
        try {
            const zagrozoneAnimals = await AnimalsService.zagrozoneAnimals();
            res.json(zagrozoneAnimals);
        } catch (err) {
            console.error(err);
        }
    },
    async pobierzAnimalPoHabitat(req, res) {
        const habitat = req.params.habitat;
        try {
            const animals = await AnimalsService.pobierzAnimalPoHabitat(habitat);
            res.json(animals);
        } catch (err) {
            console.error(err);
        }
    }
}

export default AnimalsController;
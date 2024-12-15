import fsPromises from "fs/promises";
import path from "path";

const filePath = path.resolve('data', 'zoo.json');

const AnimalsService = {
    async wszystkieAnimals() {
        const data = await fsPromises.readFile(filePath, 'utf-8');
        return JSON.parse(data)
    },
    async pobierzAnimalPoId(id) {
        const animals = await this.wszystkieAnimals();
        return animals.find(animal => animal.id === id);
    },

    // async zagrozoneAnimals() {
    //     const animals = await this.wszystkieAnimals();
    //     return animals.filter(animal => animal.isEndangered);
    // }


}

export default AnimalsService;
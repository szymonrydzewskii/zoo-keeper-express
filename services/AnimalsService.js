import fsPromises from "fs/promises";
import path from "path";

const filePath = path.resolve('./data', 'zoo.json');

const AnimalsService = {
    async wszystkieAnimals() {
        const data = await fsPromises.readFile(filePath, 'utf-8');
        return JSON.parse(data)
    },
    async pobierzAnimalPoId(id) {
        const animals = await this.wszystkieAnimals();
        return animals.find(animal => animal.id === id);
    },

    async zagrozoneAnimals() {
        const animals = await this.wszystkieAnimals();
        return animals.filter(animal => animal.isEndangered);
    },

    async pobierzAnimalPoHabitat(habitat) {
        const animals = await this.wszystkieAnimals();
        return animals.filter(animal => animal.habitat.toLowerCase() === habitat.toLowerCase());
    },

    async addAnimal(newAnimal) {
        const animals = await this.wszystkieAnimals();
        newAnimal.id = animals.length ? animals[animals.length - 1].id + 1 : 1;
        animals.push(newAnimal);
        await fsPromises.writeFile(filePath, JSON.stringify(animals, null, 2), 'utf-8');
        return newAnimal;
    },

    async deleteAnimal(id) {
        const animals = await this.wszystkieAnimals();
        const index = animals.findIndex(animal => animal.id === id);
        if (index !== -1) {
            animals.splice(index, 1);
            await fsPromises.writeFile(filePath, JSON.stringify(animals, null, 2), 'utf-8');
            return { message: `Zwierzę o id ${id} zostało usunięte` };
        }
        throw new Error('Zwierze nie znalezione');
    }
}

export default AnimalsService;
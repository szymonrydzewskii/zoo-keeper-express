import express from 'express';
import AnimalsController from "./controllers/AnimalsController.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get('/', (req, res) => {
    res.send("<h1>Zoo keeper</h1><br/>" +
        "<a href='http://localhost:3000/animals'>Wszystkie zwierzęta</a>" +
        "<br/>" +
        "<a href='http://localhost:3000/animals/endangered'>Zwierzęta na wyginięciu</a>" +
        "<br/>" +
        "<a href='http://localhost:3000/animals/id/1'>Zwierzę o id 1</a>" +
        "<br/>" +
        "<a href='http://localhost:3000/animals/habitat/ocean'>Zwierzę z Oceanu</a>" +
        "<br/>" +
        "<a href='http://localhost:3000/animals/delete/2'>Usuń zwierzę o id 2</a>")
})
app.get("/animals", AnimalsController.wszystkieAnimals)
app.get('/animals/endangered', AnimalsController.zagrozoneAnimals)
app.get('/animals/id/:id', AnimalsController.pobierzAnimalPoId)
app.get('/animals/habitat/:habitat', AnimalsController.pobierzAnimalPoHabitat)
app.post('/animals/add', AnimalsController.addAnimal);
app.delete('/animals/delete/:id', AnimalsController.deleteAnimal);
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
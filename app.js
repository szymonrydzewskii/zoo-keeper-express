import express from 'express';
import AnimalsController from "./controllers/AnimalsController.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.get("/animals", AnimalsController.wszystkieAnimals)

app.listen(port, () => {
    console.log(`Server started on port ${port}`);
})
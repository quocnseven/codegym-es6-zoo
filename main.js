const animals = new Set(["Monkey", "Pig", "Elephant", "Turtle","Pig", "monkey"]);
const haveAnimal = animals.has("Monkey");
console.log(haveAnimal);
const addAnimal = animals.add("Sparrow");
const deleteAnimal = animals.delete("Monkey");
console.log(deleteAnimal);
const newAnimals = [...animals];
console.log(animals);
console.log(newAnimals);
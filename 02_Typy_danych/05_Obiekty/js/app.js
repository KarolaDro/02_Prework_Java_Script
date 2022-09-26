const car = {
    type: "Sedan",
    color: "green",
    engine: 2.5,
}
const carDescription = car.type + " " + car.color + " " + car.engine;

console.log(carDescription);


const color = {
    red: 100,
    green: 0,
    blue: 50,
};
const referenceColor = color;
    referenceColor.red = 50;
    referenceColor.green = 50;

    console.log(referenceColor);
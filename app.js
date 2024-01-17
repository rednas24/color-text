import chalk from "chalk";

const badJoke = "Jeg pleier å be ungene om å stille seg i hjørnet om de klager på at det er kaldt, er jo 90 grader der.";
const words = badJoke.split(" ");

let colorBadJoke = "";

words.forEach((word) => {
    const randomColor = chalk.rgb(
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256),
        Math.floor(Math.random() * 256)
    );

    colorBadJoke += randomColor(word) + " ";
});

console.log(colorBadJoke.trim());

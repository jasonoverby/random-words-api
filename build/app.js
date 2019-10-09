"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const wordsJson = require("./words.json");
const app = express();
const port = 3000;
const getRandomIndex = (max) => {
    const min = 0;
    if (min === max)
        return min;
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
const { words } = wordsJson;
const wordsLength = words.length;
const numOfIndices = 300;
const getRandomWords = () => {
    const randomIndices = [];
    for (let i = 0; i < numOfIndices; i += 1) {
        const randomIndex = getRandomIndex(wordsLength);
        if (randomIndices.indexOf(randomIndex) === -1) {
            randomIndices.push(randomIndex);
        }
    }
    const randomWords = randomIndices.map((index) => words[index]);
    return randomWords;
};
app.get('/', (req, res) => res.send(getRandomWords()));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
//# sourceMappingURL=app.js.map
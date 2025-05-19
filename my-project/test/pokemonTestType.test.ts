import { describe, expect, test } from '@jest/globals';

type Pokemon = {
    name: string;
    types: string[];
};

const bulbasaur: Pokemon = {
    name: "Bulbasaur",
    types: ["Grass", "Poison"],
};

const charmander: Pokemon = {
    name: "Charmander",
    types: ["Fire"],
};

const squirtle: Pokemon = {
    name: "Squirtle",
    types: ["Water"],
};

describe("Pokemon Types", () => {
    test("Bulbasaur should be of type Grass", () => {

        expect(bulbasaur.types).toContain("Grass");
    });

    test("Charmander should be of type Fire", () => {
        expect(charmander.types).toContain("Fire");
    });

    test("Squirtle should be of type Water", () => {
        expect(squirtle.types).toContain("Water");
    });
});
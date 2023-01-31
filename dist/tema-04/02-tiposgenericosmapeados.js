"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myReadOnlySpecies = {
    animal: "primate",
    variant: "chimpanzee"
};
const myOptionalSpecies = {};
function createSpeciesData(overrides) {
    return Object.assign({ animal: overrides
            ? (overrides.animal
                ? overrides.animal
                : '')
            : '', variant: overrides
            ? (overrides.variant
                ? overrides.variant
                : '')
            : '' }, overrides);
}

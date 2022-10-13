const keysAndValues = {3: "carlos", 1: "joel", 2: "adrian", 4: "fernanda", 5: "cristian"};

const nueva = Object.keys(keysAndValues).sort().reduce((contador, key) => {
    contador[key] = keysAndValues[key];
    return contador;
},{});

console.log(Object.keys(nueva))
console.log(Object.values(nueva))
const keysAndValues = {key1: true, key3: undefined, key2: false};

const nueva = Object.keys(keysAndValues).sort().reduce((contador, key) => {
    contador[key] = keysAndValues[key];
    return contador;
},{});

console.log(Object.keys(nueva))
console.log(Object.values(nueva))
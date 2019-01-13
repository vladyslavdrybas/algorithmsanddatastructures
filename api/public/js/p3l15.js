let names = ['Michael', 'Melissa', 'Andrea'];

let values = [true, {}, [], 2, 'awesome'];

const PI = 3.141593;

console.log(names);
console.log(values);

console.log(PI);

console.log(names.concat(values));

names = names.map(function (value) {
    let v = "|".concat(value.concat('|'));
    console.log(v);
    return v;
});

console.log(names);
function solve(input){
    Object.keys(input)
    .forEach(prop => console.log(`${prop} -> ${input[prop]}`));
}
solve({name: "Sofia",
area: 492,
population: 1238438,
country: "Bulgaria",
postCode: "1000"})
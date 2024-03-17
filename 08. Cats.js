class Cat {
    constructor(name, age) {
        this.name = name;
        this.age = Number(age);
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says Meow`);
    }
}
function solve(input) {

    let cats = [];
    for (const element of input) {
        const [catName, catAge] = element.split(' ')
        let cat = new Cat(catName, catAge);
        cats.push(cat);
    }
    console.log();
    for (const cat of cats) {
        cat.meow();
    }
}
solve(['Mellow 2', 'Tom 5'])
solve(['Candy 1', 'Poppy 3', 'Nyx 2'])

function solve2(input) {

    input
        .map(line => line.split(' '))
        .map(([name, age]) => new Cat(name, age))
        .forEach(cat => cat.meow())
}
solve2(['Mellow 2', 'Tom 5'])
solve2(['Candy 1', 'Poppy 3', 'Nyx 2'])
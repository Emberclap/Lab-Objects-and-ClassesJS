function solve(data){
    let personInfo = JSON.parse(data);
    Object.keys(personInfo)
    .forEach(prop => console.log(`${prop}: ${personInfo[prop]}`));
}
solve('{"name": "George", "age": 40, "town": "Sofia"}')
solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}')
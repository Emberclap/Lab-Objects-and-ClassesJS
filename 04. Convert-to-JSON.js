function solve(firstName, lastName, hairColor){
    let personInfo = {
        name: firstName,
        lastName,
        hairColor,
    }
    console.log(JSON.stringify(personInfo));

}
solve('George', 'Jones', 'Brown')
solve('Peter', 'Smith', 'Blond')
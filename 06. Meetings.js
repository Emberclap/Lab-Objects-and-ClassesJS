function solve(input) {
    const meetings = {};
    for (const meeting of input) {
        const [day, name] = meeting.split(' ');
        
        if(meetings[day]){
            console.log(`Conflict on ${day}!`);
        }
        else{
            meetings[day] = name;
            console.log(`Scheduled for ${day}`);
        }

    }
    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`);
    }

}
solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])
solve(['Friday Bob',
'Saturday Ted',
'Monday Bill',
'Monday John',
'Wednesday George'])
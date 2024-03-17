class Song {
    
    constructor(type, name, time) {
        this.type = type;
        this.name = name;
        this.time = time;
    }

}
function solve(input) {
    
    let numberOfSongs = input.shift();
    let typeList = input.pop();
    let songs = [];
    for (let i = 0; i < numberOfSongs; i++) {
        const [type, name, time] = input[i].split('_');
        let song = new Song(type, name, time);
        songs.push(song);
    }
    if (typeList === 'all'){
        songs.forEach((i) => console.log(i.name));
    }
    else{
        let filtered = songs.filter((i) => i.type === typeList);
        filtered.forEach((i) => console.log(i.name));
    }
}
solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'])
solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all'])
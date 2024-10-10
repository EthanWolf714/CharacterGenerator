
let randomRace;
let randomClass;
let randomAlignment;
let randomBackground;
let backgroundData;
let classData;
let raceData;

const characterInfo = document.getElementById("characterInfo");


var backgrounds = ['Acoltye', 'Charlatan', 'Criminal', 'Entertainer', 'Folk hero', 'Guild Artisan', 'Hermit', 'Knight', 'Noble', 'Outlander', 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Urchin'];

async function getData(url){
    try{
        const response = await fetch(url);
        const data = await response.json(url);
        return data
    }catch(error){
        console.error("Fetch error:", error)
    }

}
async function fetchData(){
    try{
        const fetchPromises = [
            getData('https://www.dnd5eapi.co/api/races'),
            getData('https://www.dnd5eapi.co/api/classes'),
            getData('https://www.dnd5eapi.co/api/alignments')
        ];


        [randomRace,randomClass,randomAlignment] = await Promise.all(fetchPromises)
    }catch(error){
        console.error('Error fetching data:', error);
    }
}
fetchData();
/*
function randomStat() {
    var stat = [];
    for (var i = 0; i < 4; i++) {
        stat.push(Math.floor(Math.random() * 6) + 1);
    }
    stat.sort((a, b) => b - a);
    return stat[0] + stat[1] + stat[3];
}
function genStats() {
    document.getElementById('str').innerText = randomStat();
    document.getElementById('dex').innerText = randomStat();
    document.getElementById('con').innerText = randomStat();
    document.getElementById('int').innerText = randomStat();
    document.getElementById('wis').innerText = randomStat();
    document.getElementById('cha').innerText = randomStat();
    raceStatBonus();
}
function displayBonus(id, bonus){
    console.log(`Displaying bonus for ${id}: +${bonus}`);
    const el = document.getElementById(id);
    el.textContent = `+${bonus}`;
    
    
} */
function generateCharacter(){
    
    const nameInput = document.getElementById("inputName");
    const characterName = nameInput.value;
    const selectedClass = randomClass.results[Math.floor(Math.random() * randomClass.results.length)].name;
    const selectedRace = randomRace.results[Math.floor(Math.random() * randomRace.results.length)].name;
    const selectedAlignment = randomAlignment.results[Math.floor(Math.random() * randomAlignment.results.length)].name;
    const selectedBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const titleDiv = document.getElementById("title");
    const nameDiv = document.getElementById("name");
    if(titleDiv){titleDiv.remove();}
    if(nameDiv){nameDiv.remove();}

    
   const characterInfo =
   `<div id="charName"> 
        <h3> ${characterName}</h3> 
    </div>
    <div id="charClass"> 
        <p>Class: <strong>${selectedClass}</strong></p>
    </div>
    <div>
        <p>Race: <strong>${selectedRace}</strong></p>
    </div>
    <div>
        <p>Alignment: <strong>${selectedAlignment}</strong></p>
    </div>
    <div>
        <p>Background: <strong>${selectedBackground}</strong></p>
    </div>`; 



    document.getElementById('characterInfo').innerHTML = characterInfo;
     
   
   
}





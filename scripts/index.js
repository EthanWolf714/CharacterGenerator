
let randomRace;
let randomClass;
let randomAlightment;
let randomBackground;
let backgroundData;
let classData;
let raceData;


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


        [randomRace,randomClass] = await Promise.all(fetchPromises)
    }catch(error){
        console.error('Error fetching data:', error);
    }
}


/*function randomStat() {
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



function raceStatBonus(){
    const charRace = document.getElementById('inputRace').value;
    resetBonus();
    switch (charRace) {
        case 'Dragonborn':
            displayBonus('strBonus', 2);
            displayBonus('chaBonus', 1);
            break;
        case 'Dwarf':
            displayBonus('conBonus', 2);
            break;
        case 'Elf':
            displayBonus('dexBonus', 2);
            
        case 'Gnome':
            displayBonus();
            break;
        case 'Half-Elf':
            displayBonus();
            break;
        case 'Halflings':
            displayBonus();
            break;
        case 'Half-Orc':
            displayBonus();
            break;
        case 'Human':
            displayBonus();
            break;
        case 'Tiefling':
            displayBonus();
            break;
        default:
            break;
    }
}





function displayBonus(id, bonus){
    console.log(`Displaying bonus for ${id}: +${bonus}`);
    const el = document.getElementById(id);
    el.textContent = `+${bonus}`;
    
    
}


function resetBonus(){
    const bonusIds = ['strBonus', 'dexBonus', 'conBonus', 'intBonus', 'wisBonus', 'chaBonus'];
    bonusIds.forEach(id =>{
        document.getElementById(id).textContent = '';
    });
}
*/
function generateCharacter(event){
   
}




let randomRace;
let randomClass;

var backgrounds = ['Acoltye', 'Charlatan', 'Criminal', 'Entertainer', 'Folk hero', 'Guild Artisan', 'Hermit', 'Knight', 'Noble', 'Outlander', 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Urchin'];


async function fetchData(){

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



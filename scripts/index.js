
let randomRace;
let randomClass;
let randomAlignment;
let randomBackground;
let randomEquipment;
let randomSkills;
let backgroundData;
let classData;
let raceData;

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("genBtn").addEventListener("click", function() {
        generateCharacter();
    });
});





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
            getData('https://www.dnd5eapi.co/api/alignments'),
            getData('https://www.dnd5eapi.co/api/ability-scores'),
            
        ];


        [randomRace,randomClass,randomAlignment, randomEquipment, backgroundData] = await Promise.all(fetchPromises)
    }catch(error){
        console.error('Error fetching data:', error);
    }
}
fetchData();
function randomStat() {
    var stat = [];
    for (var i = 0; i < 4; i++) {
        stat.push(Math.floor(Math.random() * 6) + 1);
    }
    stat.sort((a, b) => b - a);
    return stat[0] + stat[1] + stat[2];
}
/*

function genStats() {
    document.getElementById('str').innerText = randomStat();
    document.getElementById('dex').innerText = randomStat();
    document.getElementById('con').innerText = randomStat();
    document.getElementById('int').innerText = randomStat();
    document.getElementById('wis').innerText = randomStat();
    document.getElementById('cha').innerText = randomStat();
    raceStatBonus();
}
 */




function generateCharacter(){
    
    const nameInput = document.getElementById("inputName");
    const characterName = nameInput.value || "Unknown Hero";
    const selectedClass = randomClass.results[Math.floor(Math.random() * randomClass.results.length)].name;
    const selectedRace = randomRace.results[Math.floor(Math.random() * randomRace.results.length)].name;
    const selectedAlignment = randomAlignment.results[Math.floor(Math.random() * randomAlignment.results.length)].name;
    const selectedBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const str = randomStat();
    const dex = randomStat();
    const con = randomStat();
    const int = randomStat();
    const wis = randomStat();
    const cha = randomStat();
    const titleDiv = document.getElementById("title");
    const nameDiv = document.getElementById("name");
    const diceBtn = document.getElementById("genBtn");
    if(diceBtn){diceBtn.remove();}
    if(titleDiv){titleDiv.remove();}
    if(nameDiv){nameDiv.remove();}

    
   const characterHtml =
   `<div id="charName"> 
        <h3 style="Color: white;"> ${characterName}</h3> 
    </div>
    <div id="charClass"> 
        <p style="Color: white;">Class: <strong>${selectedClass}</strong></p>
    </div>
    <div id="charRace">
        <p style="Color: white;">Race: <strong>${selectedRace}</strong></p>
    </div>
    <div id="charAlign">
        <p style="Color: white;">Alignment: <strong>${selectedAlignment}</strong></p>
    </div>
    <div id="charBackground">
        <p style="Color: white;">Background: <strong>${selectedBackground}</strong></p>
    </div>
    <div class="row justify-content-center" id="charStats">
        <div class="col">
            <p>Str:<strong>${str}</strong></p>
            <p>Dex:<strong>${dex}</strong></p>
            <p>Con:<strong>${con}</strong></p>
            <p>Wis:<strong>${int}</strong></p>
            <p>Int:<strong>${wis}</strong></p>
            <p>Char:<strong>${cha}</strong></p>
        </div>
    </div>
    <div>
        <div>
            <button onclick="window.location.href = 'index.html';"id="backBtn"class="btn btn-secondary"><i class="bi bi-arrow-bar-left"></i></button>
        </div>
    </div>`; 



    document.getElementById('characterInfo').innerHTML = characterHtml;
     
   
   
}





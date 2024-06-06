

window.onload = function(){
    populateSelectBox();
    subRace();
}
var classes = ['Artifcier','Barbarian', 'Bard', 'Cleric','Druid', 'Fighter','Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorccerer', 'Warlock', 'Wizard'];
var races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome','Half-elf', 'Halfings','Half-orc','Human','Tiefling'];
var alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Nuetral', 'Chaotic Neutral', 'Lawful Evil','Neutral Evil','Chaotic Evil'];
var backgrounds = ['Acoltye','Charlatan','Criminal', 'Entertainer','Folk hero','Guild Artisan','Hermit','Knight','Noble','Outlander', 'Pirate','Sage','Sailor', 'Soldier','Urchin'];

function populateSelectBox(){
    var selectClass = document.getElementById('inputClass');
    var selectRace = document.getElementById('inputRace');
    var selectAlign = document.getElementById('inputAlign');
    var selectBackground = document.getElementById('inputBackground');
    for(var i = 0; i < classes.length; i++){
        var  opt = classes[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectClass.appendChild(el);
    }

    for(var i = 0; i < races.length; i++){
        var opt = races[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectRace.appendChild(el);
    }

    for(var i = 0; i < alignments.length; i++){
        var opt = alignments[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectAlign.appendChild(el);
    }

    for(var i = 0; i < backgrounds.length; i++){
        var opt = backgrounds[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectBackground.appendChild(el);
    }
    
}




function randomStat(){
    var stat = [];
    for(var i = 0; i < 4; i++){
        stat.push(Math.floor(Math.random()* 6) + 1);
    }
    stat.sort((a,b) => b - a);
    return stat[0] + stat[1] + stat[3];
}

function genStats(){
    document.getElementById('str').innerText = randomStat();
    document.getElementById('dex').innerText = randomStat();
    document.getElementById('con').innerText = randomStat();
    document.getElementById('int').innerText = randomStat();
    document.getElementById('wis').innerText = randomStat();
    document.getElementById('cha').innerText = randomStat();
}




function subRaceOptions() {
    const race = document.getElementById('inputRace').value;
    const subRace = document.getElementById('inputSubrace');
    

    const subraces = {
        'Dragonborn': [],
        'Dwarf': ['Hill Dwarf', 'Mountain Dwarf'],
        'Elf': ['Dark-Elf(Drow)', 'High-elf','Wood-elf'],
        'Gnome': ['Forest Gnome', 'Deep Gnome'],
        'Half-elf': [],
        'Halfings': ['Lightfoot Halfling', 'Stout Halfling'],
        'Half-orc': [],
        'Human': [],
        'Tiefling': [],
    }
} 
function subClass(){

}

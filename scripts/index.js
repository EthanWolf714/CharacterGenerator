

window.onload = function () {
    populateSelectBox();
    subRaceOptions();
    subClassOptions();
}
var classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorccerer', 'Warlock', 'Wizard'];
var races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-elf', 'Halfings', 'Half-orc', 'Human', 'Tiefling'];
var alignments = ['Lawful Good', 'Neutral Good', 'Chaotic Good', 'Lawful Neutral', 'True Nuetral', 'Chaotic Neutral', 'Lawful Evil', 'Neutral Evil', 'Chaotic Evil'];
var backgrounds = ['Acoltye', 'Charlatan', 'Criminal', 'Entertainer', 'Folk hero', 'Guild Artisan', 'Hermit', 'Knight', 'Noble', 'Outlander', 'Pirate', 'Sage', 'Sailor', 'Soldier', 'Urchin'];

function populateSelectBox() {
    var selectClass = document.getElementById('inputClass');
    var selectRace = document.getElementById('inputRace');
    var selectAlign = document.getElementById('inputAlign');
    var selectBackground = document.getElementById('inputBackground');
    for (var i = 0; i < classes.length; i++) {
        var opt = classes[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectClass.appendChild(el);
    }

    for (var i = 0; i < races.length; i++) {
        var opt = races[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectRace.appendChild(el);
    }

    for (var i = 0; i < alignments.length; i++) {
        var opt = alignments[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectAlign.appendChild(el);
    }

    for (var i = 0; i < backgrounds.length; i++) {
        var opt = backgrounds[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectBackground.appendChild(el);
    }

}




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

function submitCharacter(event){
    event.preventDefault();
    const character = {
        name: document.getElementById('inputName').value,
        class: document.getElementById('inputClass').value,
        subclass: document.getElementById('inputSubclass').value,
        background: document.getElementById('inputBackground').value,
        race: document.getElementById('inputRace').value,
        subrace: document.getElementById('inputSubrace').value,
        alignment: document.getElementById('inputAlign').value,
        stats: {
            str: document.getElementById('str').textContent,
            dex: document.getElementById('dex').textContent ,
            con: document.getElementById('con').textContent ,
            int: document.getElementById('int').textContent ,
            wis: document.getElementById('wis').textContent,
            cha: document.getElementById('cha').textContent 
        },
        statBns: {
            strBonus: document.getElementById('strBonus').textContent,
            dexBonus: document.getElementById('dexBonus').textContent,
            conBonus: document.getElementById('conBonus').textContent,
            intBonus: document.getElementById('intBonus').textContent,
            wisBonus: document.getElementById('wisBonus').textContent,
            chaBonus: document.getElementById('chaBonus').textContent
        }
    };
    localStorage.setItem('character', JSON.stringify(character));
    window.location.href = 'results.html'; 
    return false;
}

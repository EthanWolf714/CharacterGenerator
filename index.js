

window.onload = function () {
    populateSelectBox();
    subRaceOptions();
    subClassOptions();
}
var classes = ['Artifcier', 'Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorccerer', 'Warlock', 'Wizard'];
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
}




function subRaceOptions() {
    const race = document.getElementById('inputRace').value;
    const subraceSelect = document.getElementById('inputSubrace');
    subraceSelect.innerHTML = '';

    const subraces = {
        'Dragonborn': [],
        'Dwarf': ['Hill Dwarf', 'Mountain Dwarf'],
        'Elf': ['Dark-Elf(Drow)', 'High-elf', 'Wood-elf'],
        'Gnome': ['Forest Gnome', 'Rock Gnome'],
        'Half-elf': [],
        'Halfings': ['Lightfoot Halfling', 'Stout Halfling'],
        'Half-orc': [],
        'Human': [],
        'Tiefling': [],
    };

    if (subraces[race]) {
        subraces[race].forEach(subrace => {
            const option = document.createElement('option');
            option.value = subrace;
            option.text = subrace;
            subraceSelect.appendChild(option);
        });
    } else {
        const defaultOption = document.createElement("option");
        defaultOption.value = '';
        defaultOption.text = 'No subrace available';
        subraceSelect.appendChild(defaultOption);

    }
}
function subClassOptions() {
    const charClass = document.getElementById('inputClass').value;
    const subClassSelect = document.getElementById('inputSubclass');
    subClassSelect.innerHTML = '';

    
    const subclasses = {
        'Artifcier':['Alchemist', 'Armorere','Artilerist', 'Battle Smith'],
        'Barbarian': ['Path of Berserker','Path of the Totem Warrior'],
        'Bard': ['College of Lore', 'College of Valor'],
        'Cleric': ['Knowledge Domain', 'Life Domain','Light Domain','Nature Domain','Tempest Domain','Trickery Domain','War Domain'],
        'Druid': ['Circle of the Land','Circle of the Moon'],
        'Fighter': ['Champion','Battle Master', 'Eldritch Knight'],
        'Monk': ['Way of the Open Hand', 'Way of Shadow','Way of Four Elements'],
        'Paladin': ['Oath of Devotion','Oath of Ancients','Oath of Vengance'],
        'Ranger': ['Hunter','Beast Master'],
        'Rogue': ['Theif','Assassin','Arcane Trickster'],
        'Sorcerer': ['Draconic Bloodline','WildMagic'],
        'Warlock': ['Archfey','Great Old One','Feind'],
        'Wizard': ['School of Abjuration','School of Conjuration','School of Divination','School of Enchantment','School of Evocation','School of Illusion','School of Transmutaion'],
    };

    if (subclasses[charClass]) {
        subclasses[charClass].forEach(subclass => {
            const option = document.createElement('option');
            option.value = subclass;
            option.text = subclass;
            subClassSelect.appendChild(option);
        });
    } else {
        const defaultOption = document.createElement('option');
        defaultOption.value = '';
        defaultOption.text = 'No Subclasses Available';
        subClassSelect.appendChild(defaultOption);
    }
    

}

function submitResults(){
    window.location = "results.html"
}

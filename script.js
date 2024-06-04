

window.onload = function(){
    populateSelectBox();
}







function populateSelectBox(){
    var selectClass = document.getElementById('inputClass');
    var classes = ['Artifcier','Barbarian', 'Bard', 'Cleric','Druid', 'Fighter','Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorccerer', 'Warlock', 'Wizard'];
    //var races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome','Half-elf', 'Halfings','Half-orc','Human','Tiefling'];
    

    for(let i = 0; i < classes.length; i++){
        var  opt = classes[i];
        var el = document.createElement("option");
        el.textContent = opt;
        el.value = opt;
        selectClass.appendChild(el);
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






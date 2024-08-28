window.onload = function() {
    const character = JSON.parse(localStorage.getItem('character'));
    if(character){
        document.getElementById('charName').innerText = character.name;
        document.getElementById('charClass').innerText = character.class;
        document.getElementById('charSubclass').innerText = character.subclass;
        document.getElementById('charBackground').innerText = character.background;
        document.getElementById('charRace').innerText = character.race;
        document.getElementById('charSubrace').innerText = character.subrace;
        document.getElementById('charAlignment').innerText = character.alignment;
        document.getElementById('charStr').innerText = character.stats.str;
        document.getElementById('charDex').innerText = character.stats.dex;
        document.getElementById('charCon').innerText = character.stats.con;
        document.getElementById('charInt').innerText = character.stats.int;
        document.getElementById('charWis').innerText = character.stats.wis;
        document.getElementById('charCha').innerText = character.stats.cha;
        document.getElementById('charStrBonus').innerText = character.statBns.strBonus;
        document.getElementById('charDexBonus').innerText = character.statBns.dexBonus;
        document.getElementById('charConBonus').innerText = character.statBns.conBonus;
        document.getElementById('charIntBonus').innerText = character.statBns.intBonus;
        document.getElementById('charWisBonus').innerText = character.statBns.wisBonus;
        document.getElementById('charChaBonus').innerText = character.statBns.chaBonus;
        
    }else{
        document.getElementById('characterInfo').innerHTML = `<p>No character data found.</p>`;
    }
   
};
document.addEventListener('DOMContentLoaded', function(){
    const character = JSON.parse(localStorage.getItem('character'));
    if(character){
        document.getElementById('charName').innerText = character.name;
        document.getElementById('charClass').innerText = character.class;
        document.getElementById('charSubclass').innerText = character.subclass;
        document.getElementById('charRace').innerText = character.race;
        document.getElementById('charSubrace').innerText = character.subrace;
        document.getElementById('charBackground').innerText = character.background;
        document.getElementById('charAlign').innerText = character.alignment;
        document.getElementById('charStr').innerText = character.str;
        document.getElementById('charDex').innerText = character.dex;
        document.getElementById('charCon').innerText = character.con;
        document.getElementById('charInt').innerText = character.int;
        document.getElementById('charWis').innerText = character.wis;
        document.getElementById('charCha').innerText = character.cha;
        
    }else{
        window.location.href = 'index.html';
    }
});
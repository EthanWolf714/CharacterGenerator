document.getElementById('character-form').addEventListener('submit',function(event) {
    event.preventDefault();

    const name = document.getElementById('inputName').value;
    const charClass = document.getElementById('inputSubclass').value;
    const subClass = document.getElementById('inputClass').value;
    const background = document.getElementById('inputBackground').value;
    const race = document.getElementById('inputRace').value;
    const subRace = document.getElementById('inputSubrace').value;
    const align = document.getElementById('inputAlign').value;
    const str = document.getElementById('str').innerText;
    const dex = document.getElementById('dex').innerText;
    const con = document.getElementById('con').innerText;
    const int = document.getElementById('int').innerText;
    const wis = document.getElementById('wis').innerText;
    const cha = document.getElementById('cha').innerText;



    const character = {
        name: name,
        class: charClass,
        subclass: subClass,
        background: background,
        race: race,
        subrace: subRace,
        alignment: align,
        stats:{
            str: str,
                    dex: dex,
                    con: con,
                    int: int,
                    wis: wis,
                    cha: cha
        }


    };
    localStorage.setItem('character', JSON.stringify(character));

    window.location.href = 'results.html';
});
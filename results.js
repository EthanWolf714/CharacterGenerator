function displayCharacter(){
    const character = JSON.parse(localStorage.getItem('charcter'));
    if(character){
        const characterInfo = `
        <p><strong>Name:</strong> ${character.name}</p>
         <p><strong>Class:</strong> ${character.Class}</p>
          <p>Subclass: ${character.subclass}</p>
        
        
        `;
    }else{

    }
    
}
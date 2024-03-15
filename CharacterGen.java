import java.util.Random;

public class CharacterGen{
    private String[][] classes = {
            {"Barbarian"},
            {"Bard"},
            {"Cleric", "Life Domain", "War Domain"},
            {"Druid", "Circle of the Moon"},
            {"Fighter", "Champion", "Battle Master"},
            {"Monk", "Way of the Open Hand", "Way of Shadows"},
            {"Paladin", "Oath of Devotion", "Oath of Vengeance"},
            {"Ranger", "Hunter", "Beastmaster"},
            {"Rogue", "Thief", "Assassin"},
            {"Sorcerer"},
            {"Warlock", "The Archfey", "The Fiend", "The Ancient One"},
            {"Wizard"}
    };
    private String[][] races = {
        {"Dragonborn"},
        {"Dwarf"},
        {"Elf", "High elf", "Wood elf", "Drow"},
        {"Gnome"},
        {"Half-Elf"},
        {"Halfling"},
        {"Half-Orc"},
        {"Human"},
        {"Tiefling"}


};

    public String  generateCharacter(){
        Random random = new Random();

        int raceIndex = random.nextInt(races.length);
        String race = races[raceIndex][0];

        if(races[raceIndex].length > 1){
            int subRaceIndex = random.nextInt(races[raceIndex].length -1 ) + 1;
            race += races[raceIndex][subRaceIndex] + "\n";

        }

        int classIndex = random.nextInt(classes.length);
        String characterClass = classes[classIndex][0];

        if(classes[classIndex].length > 1){
            int subClassIndex = random.nextInt(classes[classIndex].length - 1 ) + 1;
            characterClass += classes[classIndex][subClassIndex] + ")";
        }
       
        return race + " " + characterClass;
    }


}
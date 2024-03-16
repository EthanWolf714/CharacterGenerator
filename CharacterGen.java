import java.util.Random;

public class CharacterGen{
    private String[] classes = {"Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"};
    private String[] subClasses;
    private String[] races = {"Dragonborn", "Dwarf", "Elf", "Gnome", "Half-elf", "Halfling", " Half-Orc", "Human", "Tiefling"};
    private String[] subRaces;

    public String  generateCharacter(){
        Random random = new Random();

        int raceIndex = random.nextInt(races.length);
        String race = races[raceIndex];



        int classIndex = random.nextInt(classes.length);
        String characterClass = classes[classIndex];

        
        

        String characterDescription = "<html>" + race + "<br>" + characterClass + "</html>";
        return characterDescription;
    }


}
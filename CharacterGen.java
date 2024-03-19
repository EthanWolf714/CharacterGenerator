import java.util.Random;
import java.util.Arrays;

public class CharacterGen{
    private String[] classes = {"Barbarian", "Bard", "Cleric", "Druid", "Fighter", "Monk", "Paladin", "Ranger", "Rogue", "Sorcerer", "Warlock", "Wizard"};
    private String[] races = {"Dragonborn", "Dwarf", "Elf", "Gnome", "Half-elf", "Halfling", " Half-Orc", "Human", "Tiefling"};

    public String  generateCharacter(){
        DiceRoller charStats = new DiceRoller();
        int[] stats = charStats.rollStats();
        Random random = new Random();

        int raceIndex = random.nextInt(races.length);
        String race = races[raceIndex];



        int classIndex = random.nextInt(classes.length);
        String characterClass = classes[classIndex];

        
        
        

        String characterDescription = "<html>" +"Race: "+ race + "<br>" +"Class: " + characterClass + 
        "<br>" + Arrays.toString(stats) +"</html>";
        return characterDescription;
    }


}
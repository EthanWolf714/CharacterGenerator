import java.util.Arrays;
import java.util.Random;
public class DiceRoller {
    private Random random;

    public DiceRoller(){
        random = new Random();
    }

    public int[] rollStats(){
        int[] stats = new int[6];
        for(int i = 0; i < 6; i++){
            stats[i] = rollSingeStat();
        }
        return stats;

    }

    private int rollSingeStat(){
        int[] dice = new int[4];

        for(int i = 0; i < 4; i++){
            dice[i] = random.nextInt(6) + 1;

        }
        Arrays.sort(dice);

        int sum = 0;
        for(int i = 1; i < 4; i++){
            sum += dice[i];
        }
        return sum;
    }
    
}

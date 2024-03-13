import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class DNDCharacterGen extends JFrame{
    private JLabel characterLabel;
    private JButton generateBTN;
    private DNDCharacterGen dndCharacter;


    public DNDCharacterGen(){

        setTitle("D&D Character Generator");
        setSize(300, 150);
        setDefaultCloseOperation(EXIT_ON_CLOSE);


        JPanel panel = new JPanel();
        panel.setLayout(new GridLayout(2,1));

        characterLabel = new JLabel("", SwingConstants.CENTER);
        panel.add(characterLabel);

        generateBTN = new JButton("Generate Character");
        generateBTN.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e){
                generateCharacter();
            }    
        });
        panel.add(generateBTN);

        add(panel);
        setVisible(true);

        dndCharacter = new DNDCharacterGen();
        
    }

    private void generateCharacter(){

    }

    public static void main(String[] args){
        new DNDCharacterGen();
    }
}




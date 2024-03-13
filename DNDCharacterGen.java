import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.Random;

public class DNDCharacterGen extends JFrame{
    private JLabel characterLabel;
    private JButton generateBTN;
    private CharacterGen characterGen;


    public DNDCharacterGen(){

        setTitle("D&D Character Generator");
        setSize(300, 200);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setResizable(false);

        JPanel panel = new JPanel();
        panel.setLayout(null);
        

        characterLabel = new JLabel("", SwingConstants.CENTER);
        panel.add(characterLabel);

        generateBTN = new JButton("Generate Character");
        generateBTN.setSize(160, 30);
        generateBTN.setBounds(60, 60, 160, 30);
        generateBTN.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e){
                generateCharacter();
            }    
        });
        panel.add(generateBTN);

        add(panel);
        setVisible(true);

        
        
    }

    private void generateCharacter(){

    }

    public static void main(String[] args){
        new DNDCharacterGen();
    }
}




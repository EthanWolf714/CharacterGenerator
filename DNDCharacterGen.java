import javax.swing.*;
import java.awt.*;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

public class DNDCharacterGen extends JFrame{
    private JLabel characterLabel;
    private JLabel instructionLabel;
    private JButton generateBTN;
    private CharacterGen characterGen;


    public DNDCharacterGen(){

        setTitle("D&D Character Generator");
        setSize(300, 200);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
        setResizable(false);

        JPanel panel = new JPanel(new BorderLayout());

        characterLabel = new JLabel("", SwingConstants.CENTER);
        panel.add(characterLabel, BorderLayout.CENTER);

        instructionLabel = new JLabel("Click to Generate Character!", SwingConstants.CENTER);
        panel.add(instructionLabel, BorderLayout.CENTER);

        JPanel buttonPanel = new JPanel(new FlowLayout(FlowLayout.CENTER)); // Use FlowLayout for buttonPanel
        generateBTN = new JButton("Generate");
        generateBTN.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                generateCharacter();
            }
        });
        buttonPanel.add(generateBTN);
        panel.add(buttonPanel, BorderLayout.SOUTH);

        add(panel);
        setVisible(true);

        
        characterGen = new CharacterGen();
    }

    private void generateCharacter(){
        String character = characterGen.generateCharacter();
        instructionLabel.setText(character);
        setSize(500,500);
    }

    public static void main(String[] args){
        new DNDCharacterGen();
    }
}




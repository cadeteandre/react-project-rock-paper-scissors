import rockMove from "../../../public/rockMove.jpg";
import paperMove from "../../../public/paperMove.jpg";
import scissorsMove from "../../../public/scissorsMove.jpg";
import "./MoveSelector.css";
import IMoveSelectorProps from "../../interfaces/IMoveSelectorsProps";

const computerPossibleMoves: string[] = ['rock', 'paper', 'scissors'];

const MoveSelector: React.FC<IMoveSelectorProps> = (props) => {
    const handleClick = (playerMove: string) => {
        const computerMove = computerPossibleMoves[Math.floor(Math.random() * 3)];

        props.setPlayerMove(playerMove);
        props.setComputerMove(computerMove);

        switch(true) {
            case playerMove === 'rock' && computerMove === 'paper':
            case playerMove === 'paper' && computerMove === 'scissors':
            case playerMove === 'scissors' && computerMove === 'rock':
                props.setComputerWins(props.computerWins + 1);
                props.setDrawGame(false);
                props.setComputerHighlight(true);
                props.setPlayerHighlight(false);
                break;
            case playerMove === 'rock' && computerMove ==='scissors':
            case playerMove === 'paper' && computerMove ==='rock':
            case playerMove === 'scissors' && computerMove ==='paper':
                props.setPlayerWins(props.playerWins + 1);
                props.setDrawGame(false);
                props.setPlayerHighlight(true);
                props.setComputerHighlight(false);
                break;
            default: 
                props.setDrawGame(true);
                props.setPlayerHighlight(false);
                props.setComputerHighlight(false);
        }
    }

    return (  
        <section className="move__selector">
            <h2>Choose your buddy!</h2>
            <div className="move__options">
                <div onClick={() => handleClick('rock')} className="move__img">
                    <img src={rockMove} alt="rock-icon" />
                </div>
                <div onClick={() => handleClick('paper')} className="move__img">
                    <img src={paperMove} alt="paper-icon" />
                </div>
                <div onClick={() => handleClick('scissors')} className="move__img">
                    <img src={scissorsMove} alt="scissors-icon" />
                </div>
            </div>
        </section>
    );
}

export default MoveSelector;
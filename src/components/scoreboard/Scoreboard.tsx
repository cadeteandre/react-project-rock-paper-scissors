import "./Scoreboard.css";
import playerIcon from "../../../public/playerAI.jpg";
import computerIcon from "../../../public/robotAI.jpg";
import rockMove from "../../../public/rockMove.jpg";
import paperMove from "../../../public/paperMove.jpg";
import scissorsMove from "../../../public/scissorsMove.jpg";
import questionIcon from "../../../public/question.png";
import IShowMoveIconProps from "../../interfaces/IShowMoveIconProps";
import drawImg from "../../../public/draGame.png";
import vsGame from "../../../public/vsGameAi.jpg";

const Scoreboard: React.FC<IShowMoveIconProps> = (props) => {

    const showMoveIcon = (player: string): string => {
        
        if(player === 'player') {
            switch(props.playerMove) {
                case 'rock': return rockMove;
                case 'paper': return paperMove;
                case 'scissors': return scissorsMove;
                default: return questionIcon;
            }
        } else {
            switch(props.computerMove) {
                case 'rock': return rockMove;
                case 'paper': return paperMove;
                case 'scissors': return scissorsMove;
                default: return questionIcon;
            }
        }
    }
    return (  
        <section className="scoreboard">
            <div className="player__icon">
                <img src={playerIcon} alt="player-icon" />
            </div>
            <div className={`player__move ${props.playerHighlight ? 'move__img' : ''}`}>
                <img src={showMoveIcon('player')} alt="player-move-icon" />
            </div>
            <div className="wins__counter">
                <h2>{props.playerWins} : {props.computerWins}</h2>
                <div className="vs__img">
                    <img src={props.drawGame ? drawImg : vsGame} alt="draw-icon" />
                </div>
            </div>
            <div className={`computer__move ${props.computerHighlight ? 'move__img' : ''}`}>
                <img src={showMoveIcon('computer')} alt="computer-move-icon" />
            </div>
            <div className="computer__icon">
                <img src={computerIcon} alt="robot-icon" />
            </div>
        </section>
    );
}

export default Scoreboard;
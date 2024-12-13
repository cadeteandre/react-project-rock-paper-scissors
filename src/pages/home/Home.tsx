import { useState } from "react";
import Header from "../../components/header/Header";
import MoveSelector from "../../components/moveSelector/MoveSelector";
import Scoreboard from "../../components/scoreboard/Scoreboard";

const Home = () => {
    const [playerMove, setPlayerMove] = useState<string>('');
    const [computerMove, setComputerMove] = useState<string>('');
    const [playerWins, setPlayerWins] = useState<number>(0);
    const [computerWins, setComputerWins] = useState<number>(0);
    const [drawGame, setDrawGame] = useState<boolean>(false);
    const [playerHighlight, setPlayerHighlight] = useState<boolean>(false);
    const [computerHighlight, setComputerHighlight] = useState<boolean>(false);

    return (  
        <>
            <Header />
            <Scoreboard 
                playerMove={playerMove} 
                computerMove={computerMove}
                playerWins={playerWins}
                computerWins={computerWins}
                drawGame={drawGame}
                playerHighlight={playerHighlight}
                computerHighlight={computerHighlight}
                />
            <MoveSelector 
                setPlayerMove={setPlayerMove} 
                setComputerMove={setComputerMove}
                setPlayerWins={setPlayerWins}
                playerWins={playerWins}
                setComputerWins={setComputerWins}
                computerWins={computerWins}
                setDrawGame={setDrawGame}
                setPlayerHighlight={setPlayerHighlight}
                playerHighlight={playerHighlight}
                setComputerHighlight={setComputerHighlight}
                computerHighlight={computerHighlight}
                />
            <button onClick={() => location.reload()}>restart</button>
        </>
    );
}

export default Home;
interface IMoveSelectorProps {
    setPlayerMove: React.Dispatch<React.SetStateAction<string>>,
    setComputerMove: React.Dispatch<React.SetStateAction<string>>,
    setPlayerWins: React.Dispatch<React.SetStateAction<number>>,
    setComputerWins: React.Dispatch<React.SetStateAction<number>>
    playerWins: number,
    computerWins: number,
    setDrawGame: React.Dispatch<React.SetStateAction<boolean>>,
    setPlayerHighlight: React.Dispatch<React.SetStateAction<boolean>>,
    playerHighlight: boolean,
    setComputerHighlight: React.Dispatch<React.SetStateAction<boolean>>,
    computerHighlight: boolean
}

export default IMoveSelectorProps;
import gameLogo from "../../../public/rock-paper-scissors.png";
import "./Header.css";

const Header = () => {
    return (  
        <header>
            <h1>Rock, Paper Scissors Game</h1>
            <div className="logo">
                <img src={gameLogo} alt="game-logo" />
            </div>
        </header>
    );
}

export default Header;
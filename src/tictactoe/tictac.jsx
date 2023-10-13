import Board from './board';
import Player from "./player";
import "./css/app.css";
import { useState } from 'react';

function Tictac() {

    const [reset, setReset] = useState(false);

    const [winner, setWinner] = useState('');
    const resetBoard = () => {
        setReset(true);
    }
    return (
        <div className="App">
            <Player  />
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                <div className='winner-text'>{winner}</div>
                <button onClick={() => resetBoard()}>
                    Play Again
                </button>
            </div>
            <Board reset={reset} setReset={setReset} winner={winner}
                setWinner={setWinner} />
        </div>
    );
}

export default Tictac;




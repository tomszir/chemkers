import style from './App.module.scss';
import CheckersBoard from '../CheckersBoard';
import GameSettingsOverlay from '../GameSettingsOverlay';
import { CheckersGameEndInfo } from '../CheckersBoard/CheckersBoard';
import Overlay from '../Overlay';
import { useBoard, useBoardDispatch } from '../../context';
import { initBoardAction } from '../../context/board-context/board-context-actions';
import { useEffect, useState } from 'preact/hooks';

function App() {
  const [gameEndInfo, setGameEndInfo] = useState<CheckersGameEndInfo | null>(
    null
  );

  const { gameStarted, gameSettings } = useBoard();
  const boardDispatch = useBoardDispatch();

  const handleNewGame = () => {
    setGameEndInfo(null);
    boardDispatch(initBoardAction());
  };

  const handleGameEnd = (gameEndInfo: CheckersGameEndInfo) => {
    setGameEndInfo(gameEndInfo);
  };

  return (
    <main className={style.main}>
      <div class={style.board}>
        <CheckersBoard onGameEnd={handleGameEnd} />
      </div>
      {!gameStarted && <GameSettingsOverlay />}
      {gameEndInfo && (
        <Overlay>
          <h1>
            {gameEndInfo.winner === gameSettings.playerColor
              ? 'You won!'
              : 'You lost...'}
          </h1>
          <button onClick={handleNewGame}>New game</button>
        </Overlay>
      )}
    </main>
  );
}

export default App;

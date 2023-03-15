import init, { init_panic_hook, Color } from 'wasm-checkers';
import { useEffect, useState } from 'preact/hooks';

import style from './App.module.scss';
import CheckersBoard from '../CheckersBoard';
import GameSettingsOverlay from '../GameSettingsOverlay';
import { CheckersGameSettings } from '../GameSettingsOverlay/GameSettingsOverlay';
import { CheckersGameEndInfo } from '../CheckersBoard/CheckersBoard';
import Overlay from '../Overlay';
import { wasmCheckersWorker } from '../../web-workers';

const defaultGameSettings: CheckersGameSettings = {
  playerColor: Color.White,
  computerDepth: 5,
  gameStarted: false,
};

function App() {
  const [initialized, setInitialized] = useState(false);
  const [gameSettings, setGameSettings] =
    useState<CheckersGameSettings>(defaultGameSettings);
  const [gameEndInfo, setGameEndInfo] = useState<CheckersGameEndInfo | null>(
    null
  );

  useEffect(() => {
    init().then(async () => {
      await wasmCheckersWorker.initWasm();
      setInitialized(true);
    });
  }, []);

  const handleNewGame = () => {
    setGameEndInfo(null);
    setGameSettings(defaultGameSettings);
  };

  const handlePlayerColorSelect = (playerColor: Color) => {
    setGameSettings(Object.assign({}, gameSettings, { playerColor }));
  };

  const handleGameStart = (settings: CheckersGameSettings) => {
    setGameSettings(settings);
  };

  const handleGameEnd = (gameEndInfo: CheckersGameEndInfo) => {
    setGameEndInfo(gameEndInfo);
  };

  if (!initialized) {
    return null;
  }

  return (
    <main className={style.main}>
      <CheckersBoard gameSettings={gameSettings} onGameEnd={handleGameEnd} />
      {!gameSettings.gameStarted && (
        <GameSettingsOverlay
          onGameStart={handleGameStart}
          onPlayerColorSelect={handlePlayerColorSelect}
        />
      )}
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

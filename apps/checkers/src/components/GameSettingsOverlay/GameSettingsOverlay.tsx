import { useState } from 'preact/hooks';
import { Color } from 'wasm-checkers';
import Overlay from '../Overlay';
import style from './GameSettingsOverlay.module.scss';

export interface CheckersGameSettings {
  playerColor: Color;
  gameStarted: boolean;
  computerDepth: number;
}

export interface GameSettingsOverlayProps {
  onGameStart: (settings: CheckersGameSettings) => void;
  onPlayerColorSelect: (playerColor: Color) => void;
}

function GameSettingsOverlay({
  onGameStart,
  onPlayerColorSelect,
}: GameSettingsOverlayProps) {
  const [playerColor, setPlayerColor] = useState<Color>(Color.White);
  const [computerDepth, setComputerDepth] = useState<Color>(5);

  const handleGameStart = () => {
    onGameStart({
      playerColor,
      computerDepth,
      gameStarted: true,
    });
  };

  const handlePlayerColorSelect = (color: Color) => {
    setPlayerColor(color);
    onPlayerColorSelect(color);
  };

  return (
    <Overlay>
      <button onClick={() => handlePlayerColorSelect(Color.White)}>
        white
      </button>
      <button onClick={() => handlePlayerColorSelect(Color.Black)}>
        black
      </button>
      <input
        type="range"
        min={1}
        max={9}
        value={computerDepth}
        onChange={({ target }) => {
          // @ts-ignore
          setComputerDepth(parseInt(target?.value || 5));
        }}
      />
      <div>{computerDepth}</div>
      <button onClick={handleGameStart}>start game</button>
    </Overlay>
  );
}

export default GameSettingsOverlay;

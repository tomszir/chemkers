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
      <h3 className={style.heading}>Select your side</h3>
      <h3 className={style.description}>
        White always goes first - in case you forgot 😊
      </h3>
      <button
        className={[
          style.colorSelectButton,
          playerColor === Color.White && style.colorSelectButtonSelected,
        ].join(' ')}
        onClick={() => handlePlayerColorSelect(Color.White)}
      ></button>
      <button
        className={[
          style.colorSelectButton,
          style.colorSelectButtonBlack,
          playerColor === Color.Black && style.colorSelectButtonSelected,
        ].join(' ')}
        onClick={() => handlePlayerColorSelect(Color.Black)}
      ></button>
      <h3 className={style.heading}></h3>
      <h3 className={style.heading}>Select the difficulty</h3>
      <h3 className={style.description}>
        *The difficulty determines the AI's alpha-beta algorithm's search depth.
      </h3>
      <input
        className={style.difficultySlider}
        type="range"
        min={1}
        max={9}
        value={computerDepth}
        onChange={({ target }) => {
          // @ts-ignore
          setComputerDepth(parseInt(target?.value || 5));
        }}
      />
      <div className={style.difficultySliderNumbers}>
        {Array.from({ length: 9 }).map((_, i) => (
          <span>{i + 1}</span>
        ))}
      </div>
      <h3 className={style.heading}></h3>
      <h3 className={style.heading}>Note</h3>
      <h3 className={style.description}>
        This is a work-in-progress (fuck you)
      </h3>
      <button className={style.startButton} onClick={handleGameStart}>
        Start
      </button>
    </Overlay>
  );
}

export default GameSettingsOverlay;

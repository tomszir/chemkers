import { Color } from 'wasm-checkers';

import { useBoard, useBoardDispatch } from '../../context';
import * as boardActions from '../../context/board-context/board-context-actions';

import Overlay from '../Overlay';
import style from './GameSettingsOverlay.module.scss';

function GameSettingsOverlay() {
  const { gameSettings } = useBoard();
  const boardDispatch = useBoardDispatch();

  const handleGameStart = () => {
    boardDispatch(boardActions.startGame());
  };

  const handlePlayerColorSelect = (color: Color) => {
    boardDispatch(
      boardActions.updateGameSettings({
        ...gameSettings,
        playerColor: color,
      })
    );
  };

  const handleDepthSelect = (target: HTMLInputElement) => {
    console.log(parseInt(target.value));

    boardDispatch(
      boardActions.updateGameSettings({
        ...gameSettings,
        computerDepth: parseInt(target.value),
      })
    );
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
          gameSettings.playerColor === Color.White &&
            style.colorSelectButtonSelected,
        ].join(' ')}
        onClick={() => handlePlayerColorSelect(Color.White)}
      ></button>
      <button
        className={[
          style.colorSelectButton,
          style.colorSelectButtonBlack,
          gameSettings.playerColor === Color.Black &&
            style.colorSelectButtonSelected,
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
        value={gameSettings.computerDepth}
        onChange={({ target }) => handleDepthSelect(target as HTMLInputElement)}
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

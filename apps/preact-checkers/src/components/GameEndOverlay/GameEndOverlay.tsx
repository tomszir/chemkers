import { Color } from 'wasm-checkers';
import { useBoard, useBoardDispatch } from '../../context';

import Overlay from '../ui/Overlay';
import style from './GameEndOverlay.module.scss';

function GameSettingsOverlay({ onClose }: { onClose: () => void }) {
  const { currentEvaluation, currentTurn, startTime, endTime, gameSettings } =
    useBoard();
  const winnerColor = currentEvaluation > 0 ? Color.White : Color.Black;

  return (
    <Overlay
      footerContent={
        <button className={style.closeButton} onClick={onClose}>
          Play Again
        </button>
      }
    >
      <div className={style.content}>
        <h1 className={style.heading}>
          {winnerColor === gameSettings.playerColor
            ? 'You have won! 🎉'
            : 'You lost 🤖'}
        </h1>
        <div className={style.stats}>
          <div className={style.section}>
            <div className={style.sectionHeading}>Score</div>
            {winnerColor === gameSettings.playerColor
              ? Math.abs(currentEvaluation)
              : -Math.abs(currentEvaluation)}
          </div>
          <div className={style.section}>
            <div className={style.sectionHeading}>Turn Count</div>
            {currentTurn}
          </div>
          <div className={style.section}>
            <div className={style.sectionHeading}>Time Taken</div>
            {new Date(endTime.getTime() - startTime.getTime())
              .toISOString()
              .slice(14, 19)}
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default GameSettingsOverlay;

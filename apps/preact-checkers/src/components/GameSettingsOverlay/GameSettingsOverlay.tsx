import { faSquare, faSquareCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'preact/hooks';
import { CheckersSetting, CheckersSettings, Color } from 'wasm-checkers';

import { useBoard, useBoardDispatch } from '../../context';
import * as boardActions from '../../context/board-context/board-context-actions';

import Overlay from '../ui/Overlay';
import style from './GameSettingsOverlay.module.scss';

function GameSettingsOverlay() {
  const { gameSettings, gameStarted } = useBoard();
  const boardDispatch = useBoardDispatch();
  const [selectedSettings, setSelectedSettings] = useState<CheckersSetting[]>([
    CheckersSetting.ForcedCapture,
    CheckersSetting.FlyingKings,
    CheckersSetting.RegularCaptureBackwards,
    CheckersSetting.PromotionMoveTermination,
  ]);

  useEffect(() => {
    boardDispatch(
      boardActions.updateGameSettings({
        ...gameSettings,
        checkersSettings: selectedSettings.reduce((acc, a) => (acc |= a), 0),
      })
    );
  }, [gameStarted, gameSettings.playerColor]);

  const handleGameStart = () => {
    if (gameSettings.playerColor === Color.Empty) {
      boardDispatch(
        boardActions.updateGameSettings({
          ...gameSettings,
          playerColor: Math.floor(Math.random() * 2 + 1),
        })
      );
    }
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

  const handleDepthSelect = (value: number) => {
    boardDispatch(
      boardActions.updateGameSettings({
        ...gameSettings,
        computerDepth: value,
      })
    );
  };

  const checkSetting = (setting: CheckersSetting) => {
    const newSettings = selectedSettings.includes(setting)
      ? selectedSettings.filter((s) => s !== setting)
      : [...selectedSettings, setting];
    boardDispatch(
      boardActions.updateGameSettings({
        ...gameSettings,
        checkersSettings: newSettings.reduce((acc, a) => (acc |= a), 0),
      })
    );
    setSelectedSettings(newSettings);
  };

  return (
    <Overlay
      footerContent={
        <button className={style.startButton} onClick={handleGameStart}>
          Play
        </button>
      }
    >
      <div className={style.content}>
        <div className={style.section}>
          <div className={style.sectionHeader}>
            <h3 className={style.sectionTitle}>Player Color</h3>
          </div>
          <p className={style.sectionDescription}>
            White goes first. Black goes second. You know the drill. 😫
          </p>
          <div className={style.sectionContent}>
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
                style.colorSelectButtonRandom,
                gameSettings.playerColor === Color.Empty &&
                  style.colorSelectButtonSelected,
              ].join(' ')}
              onClick={() => handlePlayerColorSelect(Color.Empty)}
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
          </div>
          <div className={style.sectionContent}>
            <div className={style.colorDescriptor}>
              <p className={style.sectionDescription}>White</p>
            </div>
            <div className={style.colorDescriptor}>
              <p className={style.sectionDescription}>Random</p>
            </div>
            <div className={style.colorDescriptor}>
              <p className={style.sectionDescription}>Black</p>
            </div>
          </div>
        </div>
        <div className={style.section}>
          <div className={style.sectionHeader}>
            <h3 className={style.sectionTitle}>Opponent Difficulty</h3>
          </div>
          <p className={style.sectionDescription}>
            The difficulty slider determines the search-depth for the alpha-beta
            search algorithm. Larger size may take more time for computation,
            but usually not more than 15 seconds at a depth of 9.
          </p>

          <div className={style.difficultyGrid}>
            <div className={style.section}>
              <div className={style.difficultySliderNumbers}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <span
                    className={[
                      style.difficultyNumber,
                      i + 1 === gameSettings.computerDepth
                        ? style.difficultyNumberSelected
                        : '',
                    ].join(' ')}
                    onClick={() => handleDepthSelect(i + 1)}
                  >
                    {i + 1}
                  </span>
                ))}
              </div>
              <div className={style.colorDescriptor}>
                <p className={style.sectionDescription}>Easy</p>
              </div>
            </div>
            <div className={style.section}>
              <div className={style.difficultySliderNumbers}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <span
                    className={[
                      style.difficultyNumber,
                      i + 4 === gameSettings.computerDepth
                        ? style.difficultyNumberSelected
                        : '',
                    ].join(' ')}
                    onClick={() => handleDepthSelect(i + 4)}
                  >
                    {i + 4}
                  </span>
                ))}
              </div>
              <div className={style.colorDescriptor}>
                <p className={style.sectionDescription}>Mediocre</p>
              </div>
            </div>
            <div className={style.section}>
              <div className={style.difficultySliderNumbers}>
                {Array.from({ length: 3 }).map((_, i) => (
                  <span
                    className={[
                      style.difficultyNumber,
                      i + 7 === gameSettings.computerDepth
                        ? style.difficultyNumberSelected
                        : '',
                    ].join(' ')}
                    onClick={() => handleDepthSelect(i + 7)}
                  >
                    {i + 7}
                  </span>
                ))}
              </div>
              <div className={style.colorDescriptor}>
                <p className={style.sectionDescription}>Hard</p>
              </div>
            </div>
          </div>
        </div>

        <div className={style.section}>
          <div className={style.sectionHeader}>
            <h3 className={style.sectionTitle}>Game Rules</h3>
          </div>
          <p className={style.sectionDescription}>
            The rules of checkers can be changed to suit your play-style.
          </p>
          <div className={style.settingsGrid}>
            <button
              className={style.settingsButton}
              onClick={() => checkSetting(CheckersSetting.ForcedCapture)}
            >
              <FontAwesomeIcon
                className={style.settingButtonIcon}
                icon={
                  selectedSettings.includes(CheckersSetting.ForcedCapture)
                    ? faSquareCheck
                    : faSquare
                }
              />
              <div className={style.settingsButtonContent}>
                Forced Captures
                <p className={style.settingsButtonDescription}>
                  Captures are forced. You must take a capture that is presented
                  to you.
                </p>
              </div>
            </button>
            <button
              className={style.settingsButton}
              onClick={() =>
                checkSetting(CheckersSetting.RegularCaptureBackwards)
              }
            >
              <FontAwesomeIcon
                className={style.settingButtonIcon}
                icon={
                  selectedSettings.includes(
                    CheckersSetting.RegularCaptureBackwards
                  )
                    ? faSquareCheck
                    : faSquare
                }
              />
              <div className={style.settingsButtonContent}>
                Non-king Capture Backwards
                <p className={style.settingsButtonDescription}>
                  Pieces that are not Kings can capture other pieces, even if it
                  means going backwards.
                </p>
              </div>
            </button>
            <button
              className={style.settingsButton}
              onClick={() => checkSetting(CheckersSetting.FlyingKings)}
            >
              <FontAwesomeIcon
                className={style.settingButtonIcon}
                icon={
                  selectedSettings.includes(CheckersSetting.FlyingKings)
                    ? faSquareCheck
                    : faSquare
                }
              />
              <div className={style.settingsButtonContent}>
                Flying Kings
                <p className={style.settingsButtonDescription}>
                  Kings can move along diagonals any number of squares.
                </p>
              </div>
            </button>
            <button
              className={style.settingsButton}
              onClick={() =>
                checkSetting(CheckersSetting.PromotionMoveTermination)
              }
            >
              <FontAwesomeIcon
                className={style.settingButtonIcon}
                icon={
                  selectedSettings.includes(
                    CheckersSetting.PromotionMoveTermination
                  )
                    ? faSquareCheck
                    : faSquare
                }
              />
              <div className={style.settingsButtonContent}>
                Promotion Move Termination
                <p className={style.settingsButtonDescription}>
                  Upon promoting to a king your move will end even if you were
                  chaining captures.
                </p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </Overlay>
  );
}

export default GameSettingsOverlay;

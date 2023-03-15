import { ComponentChildren } from 'preact';
import style from './Overlay.module.scss';

export interface OverlayProps {
  children: ComponentChildren;
}

function Overlay({ children }: OverlayProps) {
  return (
    <div className={style.overlay}>
      <div className={style.overlayCard}>{children}</div>
    </div>
  );
}

export default Overlay;

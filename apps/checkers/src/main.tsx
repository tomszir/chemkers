import { render } from 'preact';
import App from './components/App';
import './styles/index.scss';

const rootElement = document.getElementById('root') as HTMLElement;

render(<App />, rootElement);

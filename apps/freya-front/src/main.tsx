import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom';
import { ImaeusContextProvider } from '@oneforx/freya'
import App from './app/app';

ReactDOM.render(
  <StrictMode>
    <ImaeusContextProvider>
      <App />
    </ImaeusContextProvider>
  </StrictMode>,
  document.getElementById('root')
);

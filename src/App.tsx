import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './tailwind.generated.css';
import Pages from './Pages';

const App: React.FC = () => (
  <BrowserRouter>
    <div
      className=""
      // style={{ fontFamily: 'roboto' }}
    >
      <Pages />
    </div>
  </BrowserRouter>
);

export default App;

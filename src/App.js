import Icons from './Icons';
import Intro from './Intro';
import Picture from './Picture';

import './App.css';

function App() {
  return (
    <div className="App">
      <div className="info-container">
        <Icons />
        <Intro />
      </div>
      <Picture />
    </div>
  );
}

export default App;

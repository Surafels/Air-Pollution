import { Route, Routes } from 'react-router-dom';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import Home from './components/homePage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="homePage" element={<Home />} />

        <Route
          path="/"
          element={<FontAwesomeIcon icon={faCog} />}
        />
      </Routes>
    </div>
  );
}

export default App;

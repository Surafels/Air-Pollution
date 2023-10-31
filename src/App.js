import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/homePage';
import Navigation from './components/navList';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
          (
            <div>
              <HomePage />
              <Navigation />
            </div>
 )
        }
        />
      </Routes>
    </div>
  );
}

export default App;

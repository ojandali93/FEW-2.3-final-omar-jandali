import logo from './logo.svg';
import './App.css';
import Home from './Components/Home';

import { HomeContextProvider } from './Context/HomeContext';
import { Search } from './Components/Search';
import CharacterInfo from './Components/CharacterInfo';

function App() {
  return (
    <HomeContextProvider>
      <div className="App">
        <header className="App-header">
          <Home />
          <Search />
          <CharacterInfo />
        </header>
      </div>
    </HomeContextProvider>
  );
}

export default App;

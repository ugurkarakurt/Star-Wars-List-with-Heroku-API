import { Routes, Route } from 'react-router-dom';
import CharacterList from './Pages/CharacterList';
import CharacterAdd from './Pages/CharacterAdd';
import Home from './Pages/Home'
import HomeWorldList from './Pages/HomeWorldList';
import Header from './Components/Header/Header';
import Aside from './Components/Aside/Aside';
import { useState, useEffect } from "react";

const App = () => {
  const [title, setTitle] = useState('');
  const [gridType, setGridType] = useState(4);

  const onGridType = (event) => {
    const gridType = event.currentTarget.dataset.grid
    setGridType(gridType)
  };

  const [homeworlds, setHomeWorlds] = useState([]);

  useEffect(() => {
    fetch("https://star-wars-list-api.herokuapp.com/list/homeworlds")
      .then((response) => response.json())
      .then((characters) => setHomeWorlds(characters));
  }, []);

  return (
    <div className='App'>
      <Aside />
      <main className={`grid-${gridType}`}>
        <Header title={title} gridType={gridType} onClickHandler={onGridType} />
        <Routes>
          <Route path="/" element={<Home props={setTitle} />} />
          <Route path="/character-list" element={<CharacterList props={setTitle} />} />
          <Route path="/homeworld-list" element={<HomeWorldList homeworlds={homeworlds} title={setTitle} />} />
          <Route path="/add-chracter" element={<CharacterAdd props={setTitle} />} />
        </Routes>
      </main>
    </div>
  );
};


export default App;
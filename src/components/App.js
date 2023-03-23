import '../styles/App.scss';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './Landing/Landing';
import CharacterDetail from './CharacterDetail';
import NotFoundPage from './NotFoundPage';
import api from '../services/api';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('gryffindor');
  const [selectedGender, setSelectedGender] = useState('all');
  const [alphaOrder, setAlphaOrder] = useState(false);

  useEffect(() => {
    if (selectedHouse === 'all') {
      api.allCharacters(selectedHouse).then((info) => {
        setData(info);
      });
    } else {
      api.house(selectedHouse).then((info) => {
        setData(info);
      });
    }
  }, [selectedHouse]);

  const dataFiltered = data
    .filter((eachObj) =>
      eachObj.name.toLowerCase().includes(searchValue.toLowerCase())
    )
    .filter((eachObj) =>
      selectedGender !== 'all' ? eachObj.gender === selectedGender : data
    )
    .sort((a, b) => (alphaOrder ? a.name.localeCompare(b.name) : 1));

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              data={data}
              dataFiltered={dataFiltered}
              alphaOrder={alphaOrder}
              setAlphaOrder={setAlphaOrder}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              selectedHouse={selectedHouse}
              setSelectedHouse={setSelectedHouse}
              selectedGender={selectedGender}
              setSelectedGender={setSelectedGender}
            />
          }
        ></Route>
        <Route path="/detail/:id" element={<CharacterDetail />}></Route>
        <Route
          path="*"
          element={
            <NotFoundPage
              text={'La página a la que intenta acceder no existe'}
            />
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;

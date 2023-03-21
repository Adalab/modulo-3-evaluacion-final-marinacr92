import '../styles/App.scss';
import Header from './Header';
import { Route, Routes, useLocation, matchPath } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './Landing/Landing';
import CharacterDetail from './CharacterDetail';
import api from '../services/api';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('gryffindor');

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

  const dataFiltered = data.filter((eachObj) =>
    eachObj.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  const { pathname } = useLocation();
  const dataUrl = matchPath('/detail/:id', pathname);
  const dataId = dataUrl !== null ? dataUrl.params.id : null;
  const dataFind = dataFiltered.find((eachObj) => eachObj.id === dataId);

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
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              selectedHouse={selectedHouse}
              setSelectedHouse={setSelectedHouse}
            />
          }
        ></Route>
        <Route
          path="/detail/:id"
          element={<CharacterDetail dataFind={dataFind} />}
        ></Route>
      </Routes>
    </>
  );
}

export default App;

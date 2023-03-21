import '../styles/App.scss';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './Landing/Landing';
import CharacterDetail from './CharacterDetail';
import callToApi from '../services/api';

function App() {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');
  const [selectedHouse, setSelectedHouse] = useState('gryffindor');

  useEffect(() => {
    callToApi(selectedHouse).then((info) => {
      setData(info);
    });
  }, [selectedHouse]);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route
          path="/"
          element={
            <Landing
              data={data}
              searchValue={searchValue}
              setSearchValue={setSearchValue}
              selectedHouse={selectedHouse}
              setSelectedHouse={setSelectedHouse}
            />
          }
        ></Route>
        <Route path="/detail" element={<CharacterDetail data={data} />}></Route>
      </Routes>
    </>
  );
}

export default App;

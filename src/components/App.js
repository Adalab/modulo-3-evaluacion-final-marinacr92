import '../styles/App.scss';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Landing from './Landing/Landing';
import CharacterDetail from './CharacterDetail';
import callToApi from '../services/api';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    callToApi().then((info) => {
      console.log(info);
      setData(info);
    });
  }, []);

  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Landing data={data} />}></Route>
        <Route path="/detail" element={<CharacterDetail data={data} />}></Route>
      </Routes>
    </>
  );
}

export default App;

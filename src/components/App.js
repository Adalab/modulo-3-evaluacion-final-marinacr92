import '../styles/App.scss';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Landing from './Landing/Landing';
import CharacterDetail from './CharacterDetail';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/detail" element={<CharacterDetail />}></Route>
      </Routes>
    </>
  );
}

export default App;

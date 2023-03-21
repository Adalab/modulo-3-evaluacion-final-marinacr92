import { useState } from 'react';
import CharacterList from './CharacterList';
import Filters from '../Filters/Filters';

const Landing = ({ data }) => {
  const [searchValue, setSearchValue] = useState('');

  const dataFiltered = data.filter((eachObj) =>
    eachObj.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <main>
      <Filters searchValue={searchValue} setSearchValue={setSearchValue} />
      <section>
        <CharacterList data={dataFiltered}></CharacterList>
      </section>
    </main>
  );
};

export default Landing;

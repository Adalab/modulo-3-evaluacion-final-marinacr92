import CharacterList from './CharacterList';
import Filters from '../Filters/Filters';

const Landing = ({
  dataFiltered,
  selectedHouse,
  setSelectedHouse,
  searchValue,
  setSearchValue,
}) => {
  return (
    <main>
      <Filters
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedHouse={selectedHouse}
        setSelectedHouse={setSelectedHouse}
      />
      <section>
        <CharacterList data={dataFiltered}></CharacterList>
      </section>
    </main>
  );
};

export default Landing;

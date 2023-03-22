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
        {dataFiltered.length > 0 ? (
          <CharacterList dataFiltered={dataFiltered}></CharacterList>
        ) : (
          `No hay personajes que coincidan con ${searchValue}`
        )}
      </section>
    </main>
  );
};

export default Landing;

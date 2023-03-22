import CharacterList from './CharacterList';
import Filters from '../Filters/Filters';
import BtnReset from './BtnReset';

const Landing = ({
  dataFiltered,
  selectedHouse,
  setSelectedHouse,
  searchValue,
  setSearchValue,
  selectedGender,
  setSelectedGender,
}) => {
  return (
    <main>
      <Filters
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedHouse={selectedHouse}
        setSelectedHouse={setSelectedHouse}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
      />
      <BtnReset
        setSearchValue={setSearchValue}
        setSelectedHouse={setSelectedHouse}
        setSelectedGender={setSelectedGender}
      />
      <section>
        {dataFiltered.length > 0 ? (
          <CharacterList dataFiltered={dataFiltered} />
        ) : (
          `No hay personajes que coincidan con ${searchValue}`
        )}
      </section>
    </main>
  );
};

export default Landing;

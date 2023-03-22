import CharacterList from './CharacterList';
import Filters from '../Filters/Filters';
import BtnReset from './BtnReset';
import '../../styles/Landing.scss';

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
    <main className="main-landing">
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
      <section className="section-list">
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

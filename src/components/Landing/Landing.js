import CharacterList from './CharacterList';
import Filters from '../Filters/Filters';
import BtnReset from './BtnReset';
import '../../styles/Landing.scss';

const Landing = ({
  dataFiltered,
  alphaOrder,
  setAlphaOrder,
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
        alphaOrder={alphaOrder}
        setAlphaOrder={setAlphaOrder}
      />
      <section className="btn-container">
        <BtnReset
          setSearchValue={setSearchValue}
          setSelectedHouse={setSelectedHouse}
          setSelectedGender={setSelectedGender}
          setAlphaOrder={setAlphaOrder}
        />
      </section>
      <section className="message-not-found">
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

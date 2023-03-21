import CharacterList from './CharacterList';
import Filters from '../Filters/Filters';

const Landing = ({
  data,
  selectedHouse,
  setSelectedHouse,
  searchValue,
  setSearchValue,
}) => {
  const dataFiltered = data.filter((eachObj) =>
    eachObj.name.toLowerCase().includes(searchValue.toLowerCase())
  );

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

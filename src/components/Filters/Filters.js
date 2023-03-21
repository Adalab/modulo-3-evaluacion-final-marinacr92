import FilterCharacter from './FilterCharacter';
import FilterHouse from './FilterHouse';

const Filters = ({
  searchValue,
  setSearchValue,
  selectedHouse,
  setSelectedHouse,
}) => {
  return (
    <section>
      <form>
        <FilterCharacter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <FilterHouse
          selectedHouse={selectedHouse}
          setSelectedHouse={setSelectedHouse}
        />
      </form>
    </section>
  );
};

export default Filters;

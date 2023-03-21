import FilterCharacter from './FilterCharacter';
import FilterHouse from './FilterHouse';

const Filters = ({ searchValue, setSearchValue }) => {
  return (
    <section>
      <form>
        <FilterCharacter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <FilterHouse />
      </form>
    </section>
  );
};

export default Filters;

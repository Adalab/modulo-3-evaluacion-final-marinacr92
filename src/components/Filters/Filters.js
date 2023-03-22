import FilterCharacter from './FilterCharacter';
import FilterHouse from './FilterHouse';

const Filters = ({
  searchValue,
  setSearchValue,
  selectedHouse,
  setSelectedHouse,
}) => {
  const handleSubmit = (ev) => {
    ev.prevent.default();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
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

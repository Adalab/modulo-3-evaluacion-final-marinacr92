import FilterCharacter from './FilterCharacter';
import FilterGender from './FilterGender';
import FilterHouse from './FilterHouse';

const Filters = ({
  searchValue,
  setSearchValue,
  selectedHouse,
  setSelectedHouse,
  selectedGender,
  setSelectedGender,
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
        <FilterGender
          selectedGender={selectedGender}
          setSelectedGender={setSelectedGender}
        />
      </form>
    </section>
  );
};

export default Filters;

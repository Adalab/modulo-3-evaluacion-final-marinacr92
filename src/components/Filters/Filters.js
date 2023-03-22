import FilterCharacter from './FilterCharacter';
import FilterGender from './FilterGender';
import FilterHouse from './FilterHouse';
import '../../styles/Filters.scss';

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
      <form className="form" onSubmit={handleSubmit}>
        <FilterCharacter
          searchValue={searchValue}
          setSearchValue={setSearchValue}
        />
        <section className="form-select">
          <FilterHouse
            selectedHouse={selectedHouse}
            setSelectedHouse={setSelectedHouse}
          />
          <FilterGender
            selectedGender={selectedGender}
            setSelectedGender={setSelectedGender}
          />
        </section>
      </form>
    </section>
  );
};

export default Filters;

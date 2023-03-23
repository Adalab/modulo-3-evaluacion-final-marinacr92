import FilterCharacter from './FilterCharacter';
import FilterGender from './FilterGender';
import FilterHouse from './FilterHouse';
import '../../styles/Filters.scss';
import AlphabeticOrder from './AlphabeticOrder';
import hogwarts from '../../images/hogwarts.png';
import express from '../../images/hogwartsExpress2.png';

const Filters = ({
  searchValue,
  setSearchValue,
  selectedHouse,
  setSelectedHouse,
  selectedGender,
  setSelectedGender,
  alphaOrder,
  handleAlphabeticOrder,
}) => {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  return (
    <section className="section-form">
      <img src={hogwarts} alt="" className="hogwarts" />
      <img src={express} alt="" className="express" />
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
        <AlphabeticOrder
          handleAlphabeticOrder={handleAlphabeticOrder}
          alphaOrder={alphaOrder}
        />
      </form>
    </section>
  );
};

export default Filters;

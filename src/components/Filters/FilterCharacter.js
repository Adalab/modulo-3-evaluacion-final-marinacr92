const FilterCharacter = ({ setSearchValue, searchValue }) => {
  const handleInput = (ev) => {
    console.log(ev.target.value);
    setSearchValue(ev.target.value);
  };

  return (
    <label htmlFor="" className="form-label">
      Filtrar por nombre
      <input
        type="text"
        value={searchValue}
        onInput={handleInput}
        placeholder="Ej.: Harry..."
        className="form-input"
      />
    </label>
  );
};

export default FilterCharacter;

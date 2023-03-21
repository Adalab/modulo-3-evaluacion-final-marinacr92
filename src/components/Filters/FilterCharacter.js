const FilterCharacter = ({ setSearchValue, searchValue }) => {
  const handleInput = (ev) => {
    console.log(ev.target.value);
    setSearchValue(ev.target.value);
  };

  return (
    <>
      <label htmlFor="">Filtrar por nombre</label>
      <input
        type="text"
        value={searchValue}
        onInput={handleInput}
        placeholder="Ej.: Harry..."
      />
    </>
  );
};

export default FilterCharacter;

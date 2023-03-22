const FilterGender = ({ selectedGender, setSelectedGender }) => {
  const handleSelectGender = (ev) => {
    setSelectedGender(ev.target.value);
  };

  return (
    <label htmlFor="" className="form-label">
      Filtrar por género
      <select
        name=""
        id=""
        onChange={handleSelectGender}
        value={selectedGender}
      >
        <option value="all">Todos</option>
        <option value="female">Mujer</option>
        <option value="male">Hombre</option>
      </select>
    </label>
  );
};

export default FilterGender;

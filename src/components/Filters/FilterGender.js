const FilterGender = ({ selectedGender, setSelectedGender }) => {
  const handleSelectGender = (ev) => {
    setSelectedGender(ev.target.value);
  };

  return (
    <select name="" id="" onChange={handleSelectGender} value={selectedGender}>
      <option value="all">Todos</option>
      <option value="female">Mujer</option>
      <option value="male">Hombre</option>
    </select>
  );
};

export default FilterGender;

const FilterHouse = ({ selectedHouse, setSelectedHouse }) => {
  const handleselectHouse = (ev) => {
    setSelectedHouse(ev.target.value);
  };

  return (
    <>
      <label htmlFor="">Filtrar por casa</label>
      <select name="" id="" onChange={handleselectHouse} value={selectedHouse}>
        <option value="all">Todos los personajes</option>
        <option value="gryffindor">Gryffindor</option>
        <option value="hufflepuff">Hufflepuff</option>
        <option value="ravenclaw">Ravenclaw</option>
        <option value="slytherin">Slytherin</option>
      </select>
    </>
  );
};

export default FilterHouse;

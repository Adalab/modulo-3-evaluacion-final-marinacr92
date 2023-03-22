const BtnReset = ({ setSearchValue, setSelectedHouse, setSelectedGender }) => {
  const handleReset = () => {
    setSearchValue('');
    setSelectedHouse('gryffindor');
    setSelectedGender('all');
  };

  return <button onClick={handleReset}>Borrar filtros</button>;
};

export default BtnReset;

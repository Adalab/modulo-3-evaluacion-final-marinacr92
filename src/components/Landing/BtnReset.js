const BtnReset = ({ setSearchValue, setSelectedHouse }) => {
  const handleReset = () => {
    setSearchValue('');
    setSelectedHouse('gryffindor');
  };

  return <button onClick={handleReset}>Borrar filtros</button>;
};

export default BtnReset;

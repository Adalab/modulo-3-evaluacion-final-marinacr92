import '../../styles/BtnReset.scss';

const BtnReset = ({ setSearchValue, setSelectedHouse, setSelectedGender }) => {
  const handleReset = () => {
    setSearchValue('');
    setSelectedHouse('gryffindor');
    setSelectedGender('all');
  };

  return (
    <button onClick={handleReset} className="btn-reset">
      Borrar filtros
    </button>
  );
};

export default BtnReset;

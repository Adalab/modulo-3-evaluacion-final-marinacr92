import '../../styles/BtnReset.scss';

const BtnReset = ({
  setSearchValue,
  setSelectedHouse,
  setSelectedGender,
  setAlphaOrder,
}) => {
  const handleReset = () => {
    setSearchValue('');
    setSelectedHouse('gryffindor');
    setSelectedGender('all');
    setAlphaOrder(false);
  };

  return (
    <button onClick={handleReset} className="btn-reset">
      Borrar filtros
    </button>
  );
};

export default BtnReset;

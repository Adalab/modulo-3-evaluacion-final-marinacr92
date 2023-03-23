import CharacterList from './CharacterList';
import Filters from '../Filters/Filters';
import BtnReset from './BtnReset';
import '../../styles/Landing.scss';
//import { useState } from 'react';

const Landing = ({
  dataFiltered,
  /*setDataFiltered,*/
  selectedHouse,
  setSelectedHouse,
  searchValue,
  setSearchValue,
  selectedGender,
  setSelectedGender,
}) => {
  //const [alphaOrder, setAlphaOrder] = useState(false);
  // const [dataOrdered, setDataOrdered] = useState([]);

  // const handleAlphabeticOrder = () => {
  //   if (alphaOrder) {
  //     const datAlpha = [...dataFiltered].sort((a, b) =>
  //       a.name.localeCompare(b.name)
  //     );
  //     setAlphaOrder(false);
  //     setDataFiltered(datAlpha);
  //   } else {
  //     const datAlpha = [...dataFiltered].sort((a, b) => 1);
  //     setAlphaOrder(true);
  //     setDataFiltered(datAlpha);
  //   }
  // };

  return (
    <main className="main-landing">
      <Filters
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        selectedHouse={selectedHouse}
        setSelectedHouse={setSelectedHouse}
        selectedGender={selectedGender}
        setSelectedGender={setSelectedGender}
        /*handleAlphabeticOrder={handleAlphabeticOrder}
        alphaOrder={alphaOrder}*/
      />
      <section className="btn-container">
        <BtnReset
          setSearchValue={setSearchValue}
          setSelectedHouse={setSelectedHouse}
          setSelectedGender={setSelectedGender}
        />
      </section>
      <section className="message-not-found">
        {dataFiltered.length > 0 ? (
          <CharacterList dataFiltered={dataFiltered} />
        ) : (
          `No hay personajes que coincidan con ${searchValue}`
        )}
      </section>
    </main>
  );
};

export default Landing;

import { Link } from 'react-router-dom';

const CharacterDetail = ({ dataFind }) => {
  const renderAlternateNames = () => {
    const array = dataFind.alternate_names;
    const names = array.map((eachName) => {
      return <li>{eachName}</li>;
    });
    return names;
  };

  return (
    <main>
      <Link to="/">Volver</Link>
      <article>
        <img src={dataFind.image} alt="" />
        <p>{dataFind.name}</p>
        <p>Casa: {dataFind.house}</p>
        <p>Estatus: {dataFind.alive ? 'Vivo' : 'Muerto'}</p>
        <p>Género: {dataFind.gender}</p>
        <p>Especie: {dataFind.species}</p>
        <ul>
          Nombres alternativos:{' '}
          {dataFind.alternate_names.length > 0
            ? renderAlternateNames()
            : 'no tiene'}
        </ul>
      </article>
    </main>
  );
};

export default CharacterDetail;

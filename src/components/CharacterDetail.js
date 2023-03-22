import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss';

const CharacterDetail = ({ dataFind }) => {
  const renderAlternateNames = () => {
    const array = dataFind.alternate_names;
    const names = array.map((eachName) => {
      return <li>{eachName}</li>;
    });
    return names;
  };

  return (
    <main className="main-detail">
      <Link to="/">Volver</Link>
      <article className="gryffindor">
        <img src={dataFind.image} alt="" className="detail-img" />
        <section className="detail-text">
          <h2 className="detail-title">{dataFind.name}</h2>
          <p>Casa: {dataFind.house}</p>
          <p>Estatus: {dataFind.alive ? 'Vivo' : 'Muerto'}</p>
          <p>Género: {dataFind.gender === 'male' ? 'Hombre' : 'Mujer'}</p>
          <p>Especie: {dataFind.species}</p>
          <ul className="alternate-names">
            Nombres alternativos:{' '}
            {dataFind.alternate_names.length > 0
              ? renderAlternateNames()
              : 'no tiene'}
          </ul>
        </section>
      </article>
    </main>
  );
};

export default CharacterDetail;

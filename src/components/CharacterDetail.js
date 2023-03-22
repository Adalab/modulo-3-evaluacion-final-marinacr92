import { Link } from 'react-router-dom';
import '../styles/CharacterDetail.scss';
import backRed from '../images/rojo.jpg';
import backGreen from '../images/verde.jpg';
import backBlue from '../images/azul.jpg';
import backYellow from '../images/amarillo.jpeg';

const CharacterDetail = ({ dataFind }) => {
  const renderAlternateNames = () => {
    const array = dataFind.alternate_names;
    const names = array.map((eachName) => {
      return <li>{eachName}</li>;
    });
    return names;
  };

  const backgroundHouse = () => {
    if (dataFind.house === 'Gryffindor') {
      return `${backRed}`;
    } else if (dataFind.house === 'Slytherin') {
      return `${backGreen}`;
    } else if (dataFind.house === 'Ravenclaw') {
      return `${backBlue}`;
    } else if (dataFind.house === 'Hufflepuff') {
      return `${backYellow}`;
    }
  };

  return (
    <main className="main-detail">
      <Link to="/" className="btn-back">
        Volver
      </Link>
      <article
        className="detail-card"
        style={{
          backgroundImage: `url(${backgroundHouse()})`,
        }}
      >
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

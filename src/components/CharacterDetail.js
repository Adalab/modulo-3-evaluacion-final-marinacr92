import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useLocation, matchPath } from 'react-router-dom';
import api from '../services/api';
import '../styles/CharacterDetail.scss';
import backRed from '../images/rojo.jpg';
import backGreen from '../images/verde.jpg';
import backBlue from '../images/azul.jpg';
import backYellow from '../images/amarillo.jpeg';
import backBlack from '../images/negro.jpg';
import backGrey from '../images/plata.jpg';
import badgeGryff from '../images/badgeGryff.png';
import badgeHuff from '../images/badgeHuff.png';
import badgeRav from '../images/badgeRav.png';
import badgeSlyth from '../images/badgeSlyth.png';
import snitch from '../images/snitch.png';
import alive from '../images/heart.png';
import dead from '../images/dead.png';
import wand from '../images/varita.png';
import defaultImage from '../images/cromoRana.png';
import NotFoundPage from './NotFoundPage';

const CharacterDetail = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    api.allCharacters('all').then((info) => {
      setAllData(info);
    });
  }, []);

  const { pathname } = useLocation();
  const dataUrl = matchPath('/detail/:id', pathname);
  const dataId = dataUrl !== null ? dataUrl.params.id : null;
  const dataFind = allData.find((eachObj) => eachObj.id === dataId);

  const renderAlternateNames = () => {
    const array = dataFind.alternate_names;
    const names = array.map((eachName, index) => {
      return <li key={index}>{eachName}</li>;
    });
    return names;
  };

  const houseBadge = () => {
    if (dataFind.house === 'Gryffindor') {
      return `${badgeGryff}`;
    } else if (dataFind.house === 'Slytherin') {
      return `${badgeSlyth}`;
    } else if (dataFind.house === 'Ravenclaw') {
      return `${badgeRav}`;
    } else if (dataFind.house === 'Hufflepuff') {
      return `${badgeHuff}`;
    }
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
    } else {
      return `${backBlack}`;
    }
  };

  return dataFind && dataFind.id ? (
    <main className="main-detail">
      <Link to="/" className="btn-back">
        <img src={snitch} className="btn-back-img" alt="" />
        Volver al Gran Salón
      </Link>
      <div className="flip">
        <p className="flip-msg">¡Gírame!</p>
        <img src={wand} alt="" />
      </div>
      <section className="detail-card">
        <div className="flip-card">
          <div className="flip-card-inner">
            <article
              className="flip-card-front" //detail-card
              style={{
                backgroundImage: `url(${backgroundHouse()})`,
              }}
            >
              <div
                className="detail-img"
                style={{
                  backgroundImage: `url(${
                    dataFind.image !== '' ? dataFind.image : defaultImage
                  })`,
                }}
              ></div>
              <section className="detail-text">
                <div className="detail-text-header">
                  <h2 className="detail-title">{dataFind.name}</h2>
                  <img
                    src={dataFind.alive ? alive : dead}
                    alt=""
                    className="icon-status"
                  />
                </div>
                <p>Casa: {dataFind.house}</p>
                <p>Estatus: {dataFind.alive ? 'Vivo' : 'Muerto'}</p>
                <p>Género: {dataFind.gender === 'male' ? 'Hombre' : 'Mujer'}</p>
                <p>Especie: {dataFind.species}</p>
                <ul className="alternate-names">
                  Nombres alternativos: <br></br>
                  {dataFind.alternate_names.length > 0
                    ? renderAlternateNames()
                    : 'no tiene'}
                </ul>
              </section>
            </article>
            <div
              className="flip-card-back"
              style={{
                backgroundImage: `url(${backGrey})`,
              }}
            >
              {' '}
              {/*detail-badge*/}
              <img src={houseBadge()} alt="" className="detail-badge-img" />
            </div>
          </div>
        </div>
      </section>
      <div className="container-url">
        <p className="text-url">
          ¿Quieres compartir la tarjeta? Copia la URL de abajo y envíasela a
          quien quieras
        </p>
        <p className="url">
          {`http://beta.adalab.es/modulo-3-evaluacion-final-marinacr92/#/detail/${dataFind.id}`}
        </p>
      </div>
    </main>
  ) : (
    <NotFoundPage text={'El personaje que busca no existe'} />
  );
};

export default CharacterDetail;

import { Link } from 'react-router-dom';
import '../../styles/CharacterCard.scss';
import defaultImage from '../../images/cromoRana.png';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <Link to={`/detail/${eachCharacter.id}`} className="link-character">
      <li id={eachCharacter.id} className="card">
        <div
          className="card-img"
          style={{
            backgroundImage: `url(${
              eachCharacter.image !== '' ? eachCharacter.image : defaultImage
            })`,
          }}
        ></div>

        {/* <img
          src={
            eachCharacter.image !== ''
              ? eachCharacter.image
              : `https://via.placeholder.com/210x295/CDCDCD/666666/?text=${eachCharacter.name}`
          }
          alt=""
          className="card-img"
        /> */}
        <p className="card-name">{eachCharacter.name}</p>
        <p className="card-specie">{eachCharacter.species}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;

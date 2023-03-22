import { Link } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <Link to={`/detail/${eachCharacter.id}`} className="characters">
      <li id={eachCharacter.id} className="container-img">
        <img
          src={
            eachCharacter.image !== ''
              ? eachCharacter.image
              : `https://via.placeholder.com/210x295/CDCDCD/666666/?text=${eachCharacter.name}`
          }
          alt=""
          className="img"
        />
        <p>{eachCharacter.name}</p>
        <p>{eachCharacter.species}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;

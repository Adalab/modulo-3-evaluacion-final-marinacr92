import { Link } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <Link to={`/detail/${eachCharacter.id}`}>
      <li id={eachCharacter.id}>
        <img
          src={
            eachCharacter.image !== ''
              ? eachCharacter.image
              : `https://via.placeholder.com/210x295/CDCDCD/666666/?text=${eachCharacter.name}`
          }
          alt=""
        />
        <p>{eachCharacter.name}</p>
        <p>{eachCharacter.species}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;

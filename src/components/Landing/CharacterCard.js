import { Link } from 'react-router-dom';

const CharacterCard = ({ eachCharacter }) => {
  return (
    <Link to="/detail">
      <li id={eachCharacter.id}>
        <img src={eachCharacter.image} alt="" />
        <p>{eachCharacter.name}</p>
        <p>{eachCharacter.species}</p>
      </li>
    </Link>
  );
};

export default CharacterCard;

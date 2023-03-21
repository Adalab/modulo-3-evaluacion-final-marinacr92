const CharacterCard = ({ eachCharacter }) => {
  return (
    <li id={eachCharacter.id}>
      <img src={eachCharacter.image} alt="" />
      <p>{eachCharacter.name}</p>
      <p>{eachCharacter.species}</p>
    </li>
  );
};

export default CharacterCard;

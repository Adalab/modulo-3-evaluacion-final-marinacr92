import CharacterCard from './CharacterCard';

const CharacterList = ({ data }) => {
  const character = data.map((eachCharacter) => {
    return (
      <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });

  return <ul>{character}</ul>;
};
export default CharacterList;

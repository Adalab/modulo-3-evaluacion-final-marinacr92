import CharacterCard from './CharacterCard';

const CharacterList = ({ dataFiltered }) => {
  const character = dataFiltered.map((eachCharacter) => {
    return (
      <CharacterCard eachCharacter={eachCharacter} key={eachCharacter.id} />
    );
  });

  return <ul>{character}</ul>;
};
export default CharacterList;

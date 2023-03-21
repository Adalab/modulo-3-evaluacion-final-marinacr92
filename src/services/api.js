const house = (houseName) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${houseName}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const allCharacters = () => {
  return fetch('https://hp-api.onrender.com/api/characters')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

const api = {
  house: house,
  allCharacters: allCharacters,
};

export default api;

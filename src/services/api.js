const callToApi = (houseName) => {
  return fetch(`https://hp-api.onrender.com/api/characters/house/${houseName}`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default callToApi;

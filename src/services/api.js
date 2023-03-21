const callToApi = () => {
  return fetch('https://hp-api.onrender.com/api/characters/house/gryffindor')
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export default callToApi;

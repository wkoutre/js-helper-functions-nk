const fetchGooglePlacesCity = ({ searchText, googlePlacesId }) => {
  return axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&types=(cities)&key=${googlePlacesId}
`);
};

module.exports = { fetchGooglePlacesCity };

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
const fetchGooglePlacesCity = exports.fetchGooglePlacesCity = ({ searchText, googlePlacesId }) => {
  return axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&types=(cities)&key=${googlePlacesId}
`);
};
const fetchGooglePlacesAndPlaceIdInfo = async ({
  searchText,
  googlePlacesKey
}) => {
  const placesData = await axios.get(
    `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${searchText}&types=geocode&key=${googlePlacesKey}`
  );

  const placeIdDataPromise = placesData.data.predictions.map(obj =>
    fetchPlaceIdInfo(obj.place_id)
  );

  const placeIdData = await Promise.all(placeIdDataPromise);

  return {
    placesData,
    placeIdData
  };
};

module.exports = { fetchGooglePlacesAndPlaceIdInfo };

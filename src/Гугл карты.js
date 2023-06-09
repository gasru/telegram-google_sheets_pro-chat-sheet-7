function GoogleMap(startAdress, endAdress) {
  var mapObj = Maps.newDirectionFinder();

  mapObj.setOrigin(startAdress);
  mapObj.setDestination(endAdress);

  var direction = mapObj.getDirections();
  var getLeg = direction['routes'][0]['legs'][0];

  var distance = getLeg['distance']['value'];

  Logger.log(distance);
  return (distance / 1000).toFixed(0);
}

const groupObjectBy = (property, array) => {
  return array.reduce((grouped, movie) => {
    movie[property].forEach(propertyValue => {
      grouped[propertyValue.toLowerCase()] = grouped[propertyValue.toLowerCase()] || [];
      grouped[propertyValue.toLowerCase()].push(movie);
    });
    return grouped;
  }, Object.create(null));
};

module.exports = groupObjectBy;

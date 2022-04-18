const groupObjectBy = (property, array) => {
  const groupedBy = array.reduce((grouped, movie) => {
    movie[property].forEach(propertyValue => {
      grouped[propertyValue.toLowerCase()] = grouped[propertyValue.toLowerCase()] || [];
      grouped[propertyValue.toLowerCase()].push(movie);
    });
    return grouped;
  }, Object.create(null));
  return Object.keys(groupedBy).map(group => ({name: group, movies: groupedBy[group]}));
};

module.exports = groupObjectBy;

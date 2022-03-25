const groupObjectBy = (property, array) => {
  let grouped = new Set
  return array.reduce((grouped, movie) => {
    grouped[movie[property]] = grouped[movie[property]] || [];
    grouped[movie[property]].push(movie);
    return grouped;
  }, Object.create(null));
};

module.exports = groupObjectBy;

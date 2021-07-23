const getPagesFromResponseAPI = (response = null) => {
  if (response === null) return response;

  const { query } = response;
  const pages = typeof query === 'undefined' ? [] : query.pages;
  return typeof pages === 'undefined' ? [] : pages;
};

const sortPagesByDistance = (pages = []) => {
  if (pages.length === 0) return pages;

  return pages.sort((a, b) => {
    return a.coordinates[0].dist - b.coordinates[0].dist;
  });
};

export { getPagesFromResponseAPI, sortPagesByDistance };

const { discoverMovie, getMovieById } = require('./index');

describe('API', () => {
  test('Make request', async () => {
    const response = await discoverMovie();
    expect(response).toHaveProperty('status');
    expect(response).toHaveProperty('headers');
    expect(response).toHaveProperty('data.results');
  })

  test('Get ID', async () => {
    const data = await getMovieById(500);
    expect(data.original_title).toBe('Reservoir Dogs');
  });

  test('Get ID failure', async () => {
    const status = await getMovieById(5783);
    expect(status).toEqual(404);
  });
});

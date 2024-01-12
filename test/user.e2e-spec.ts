import { HttpClient } from './utils';

const axios = HttpClient.getAxios();

describe('User Api', () => {
  beforeEach(async () => {
    console.log('Test');
  }, 60000);

  test('Create user', async () => {
    const res = await axios.post(
      '/users',
      {
        username: 'demo',
        email: 'demo@gmail.com',
      }
    );
    console.log(res.data);
  });

  test('Get users', async () => {
    const res = await axios.get('/users', {
      params: {
        skip: 0,
        limit: 1,
      },
    });
    console.log(res.data);
  });

  test('Get user by id', async () => {
    const res = await axios.get('/users/1', {
      params: {},
    });
    console.log(res.data);
  });
});

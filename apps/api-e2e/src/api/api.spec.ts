import axios from 'axios';

describe('GET /API:', () => {
  beforeAll(() => {
    // await prisma.cleanDb();
  });

  it('should return a message', async () => {
    const res = await axios.get(`/api/message`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello API' });
  });

  it('should return a user', async () => {
    const res = await axios.get(`/api/user`);

    expect(res.status).toBe(200);
    expect(res.data).toEqual({ message: 'Hello User' });
  });
});

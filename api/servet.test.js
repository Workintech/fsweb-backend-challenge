const request = require('supertest');
const server = require('../api/server');
const db = require('../data/dbConfig');

afterAll(async ()=>{
  await db.destroy()
})

beforeAll(async () => {
  await db.migrate.rollback();
  await db.migrate.latest();
  await db.seed.run();
})
test('sanity check', () => {
  expect(process.env.NODE_ENV).toBe('testing')
})

describe('REGISTER USER',()=>{
  test('[1] Register User', async()=>{
    //ARRANGE
    const newUser={
      name:'Serkan',
      password:'12345678',
      userEmail:'serkan@gmail.com',
      userName:'Developer1234'
    }
    //ACT
    const res = await request(server).post('/api/auth/register').send(newUser);
    //ASSERT
    expect(res.body).toHaveProperty('userName','Developer1234');
  })
  test('[2] Cannot Register Existing User ', async()=>{
    //ARRANGE
    const newUser={
      name:'Serkan',
      password:'12345678',
      userEmail:'serkan@gmail.com',
      userName:'Developer1234'
    }
    //ACT
    const res = await request(server).post('/api/auth/register').send(newUser);
    //ASSERT
    expect(res.body).toHaveProperty('message','Username is already taken');
  })

  test('[3] Cannot Register if email Exists ', async()=>{
    //ARRANGE
    const newUser={
      name:'Serkan',
      password:'12345678',
      userEmail:'serkan@gmail.com',
      userName:'Engineer'
    }
    //ACT
    const res = await request(server).post('/api/auth/register').send(newUser);
    //ASSERT
    expect(res.body).toHaveProperty('message','E-mail is already taken');
  })
  test('[4] Cannot Register if there is missing data ', async()=>{
    //ARRANGE
    const newUser={
      name:'',
      password:'12345678',
      userEmail:'serkan@gmail.com',
      userName:'Engineer'
    }
    //ACT
    const res = await request(server).post('/api/auth/register').send(newUser);
    //ASSERT
    expect(res.body).toHaveProperty('message','Please fillout all inputs');
  })
})

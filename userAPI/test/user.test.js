const request = require('supertest');
const app = require('../index');
//const eg = require('./user.eg');
let user = ""


beforeAll(async () => {
    user = await request (app)
        .post('/createuser')
        .send({"dadosPessoais": {"nome": "userTeste", "email": "teste@teste.com", "login": "teste"}})
        .expect(201);
});

afterAll (async () => {
    await request (app)
        .delete('/deleteuser/' + user._id)
        .expect(200);
});


describe('Test GET /getusers', () => {

    it('It should response the GET method', () => {
        request(app)
            .get('/getusers')
            .expect(200);
    });
  
});


/*
describe('Test GET /getusers', () => {

  beforeEach(() => {
    const clubeTest = eg.clube1;
    return clubeTest.save();
  });

  it('It should response the PUT method', () => {
    request(app)
      .put('/clubes/' + eg.clube1._id)
      .send({ nome_clube: 'Clube Testado' })
      .expect(200);
  });

  afterEach(() => {
    const clube = eg.Clube.remove({ _id: 'TESTOBJECT01' });
    return clube;
  });

});
*/
const request = require('supertest')
const app = require('../index')
const User = require('../models/user.model')

/*
const userTest = new User({
  dadosPessoais: {
    nome: "Nome teste",
    email: "Email teste",
    login: "Login teste"
  },
  _id: iddeteste123
})
*/

beforeEach(async () => {
  const userTest = new User({
    dadosPessoais: {
      nome: "Nome teste",
      email: "Email teste",
      login: "Login teste"
    },
  _id: "5d113635a1d3702998f27dcd"
  })
  await userTest.save()
  .catch((err) => {return console.log(err)})
})

afterEach(async () => {
  await User.deleteMany()
})

describe('Test GET /getusers', () => {

  it('Espera a resposta 200 de getUsers', () => {
      
    request(app)
        .get('/getusers/')
        .expect(200)
  })

})

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
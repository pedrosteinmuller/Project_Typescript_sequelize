import chait, { expect } from "chai"
import chaitHttp from 'chai-http';
import { response } from "express";
import App from "../../src/App";

chai.use(chaitHttp);

describe('Testes para rota Post', function () {
  const app = new App();

  it('Deve cadastrar um post com sucesso e retornar o objeto criado', async function () {

    const post = {
      title: 'post exemplo',
      content: 'post'
    }

    const response = await chai.request(app.app).post('/post').send(post);
    expect(response.body).to.be.deep.equal(post);
  })
})
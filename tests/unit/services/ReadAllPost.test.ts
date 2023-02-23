import { expect } from "chai";
import { Model } from "sequelize";
import Sinon from "sinon";
import PostService from "../../../src/api/services/PostService";
import PostModel from "../../../src/database/models/PostModel";

describe('Testes de serviço: Read All Post', function() {
  afterEach(function () {
    Sinon.restore();
  })

  it('Caso 1: Deve ler todas as listas de Post', async function () {
 
    const outputMock: PostModel[] = [new PostModel({
      id: 1,
      title: 'exemplo 1',
      content: 'exemplo 1',
      createdAt:  new Date,
      updatedAt: new Date,
    })];

    Sinon.stub(Model, 'findAll').resolves(outputMock);
    const service = new PostService();
    const result = await service.readAll();

    expect(result).to.be.equal(outputMock);
    expect(result.length).to.be.equal(1);
  });
})


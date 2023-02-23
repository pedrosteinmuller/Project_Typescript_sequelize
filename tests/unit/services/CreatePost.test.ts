import { expect } from "chai";
import { Model } from "sequelize";
import Sinon from "sinon";
import IPost from "../../../src/api/interfaces/IPost";
import PostService from "../../../src/api/services/PostService";
import PostModel from "../../../src/database/models/PostModel";

describe('Testes de serviço: Create Post', function() {
  afterEach(function () {
    Sinon.restore();
  })

  it('Caso 1: Deve criar um novo Post', async function () {
    const inputMock: IPost = {
      title: 'exemplo 1',
      content: 'exemplo 1',
      createdAt:  new Date,
      updatedAt: new Date,
    };
    
    const outputMock: PostModel = new PostModel({
      id: 1,
      title: 'exemplo 1',
      content: 'exemplo 1',
      createdAt:  new Date,
      updatedAt: new Date,
    });

    Sinon.stub(Model, 'create').resolves(outputMock);
    const service = new PostService();
    const result = await service.create(inputMock);

    expect(result).to.be.equal(outputMock);
  });
})


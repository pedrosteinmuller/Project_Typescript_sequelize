import { ModelStatic } from "sequelize";
import PostModel from "../../database/models/PostModel";
import idNotFound from "../errors/idNotFound";
import IPost from "../interfaces/IPost";
import IServicePost from "../interfaces/IServicePost";

const ID_NOT_FOUND = 'ID inexistente';

export default class PostService implements IServicePost {

  protected model: ModelStatic<PostModel> = PostModel;

  async create(dta: IPost): Promise<PostModel> {
    return await this.model.create({ ...dta });
  }

  async readAll(): Promise<PostModel[]> {
    return await this.model.findAll();
  }

  async readById(id: number): Promise<PostModel> {
    const post = await this.model.findOne({ where: { id: id }})
    if (!post) throw new idNotFound(ID_NOT_FOUND);
    return post;
  }

  // update(id: string, dta: IPost): Promise<PostModel> {
    
  // }
}
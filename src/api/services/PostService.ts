import { ModelStatic } from "sequelize";
import PostModel from "../../database/models/PostModel";
import IPost from "../interfaces/IPost";
import IServicePost from "../interfaces/IServicePost";

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
    if (!post) throw new Error('id not found');
    return post;
  }

  // update(id: string, dta: IPost): Promise<PostModel> {
    
  // }
}
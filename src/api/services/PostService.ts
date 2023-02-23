import PostModel from "../../database/models/PostModel";
import IPost from "../interfaces/IPost";
import IServicePost from "../interfaces/IServicePost";

export default class PostService implements IServicePost {
  create(dta: IPost): Promise<PostModel> {
    throw new Error("Method not implemented.");
  }
}
import PostModel from "../../database/models/PostModel";
import IPost from "./IPost";

export default interface IServicePost {
  create(dta: IPost): Promise<PostModel>;
  readAll(): Promise<PostModel[]>
  readById(id: number): Promise<PostModel>;
}
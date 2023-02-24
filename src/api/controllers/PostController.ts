import { Request, Response } from "express";
import IServicePost from "../interfaces/IServicePost";

class PostController {
  private _service: IServicePost;

  constructor(service: IServicePost) {
    this._service = service;
  }

  async create(req: Request, response: Response) {
    const { title, content, createdAt, updatedAt } = req.body;
    const result = await this._service.create({ title, content, createdAt, updatedAt })  
    return response.status(201).json(result);
  }

  async readById(req: Request, response: Response) {
    const { id } = req.params;
    const result = await this._service.readById(parseInt(id));
    return response.status(200).json(result);
  }
}

export default PostController;
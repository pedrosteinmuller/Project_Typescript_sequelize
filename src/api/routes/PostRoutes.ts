import { Request, Response, Router } from "express";

const postRoutes = Router();

postRoutes.post('/post', (req: Request, res: Response) => res.status(201).send());

export default postRoutes;
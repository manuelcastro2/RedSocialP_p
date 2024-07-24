import { PostsService } from "../services/postService.js";
import { validatePartialPosts, validatePosts } from "../schemas/postsSchema.js";
import { Request, Response } from "express";

export class PostsController {
  private postsService: PostsService;

  getAll = async (req: Request, res: Response) => {
    const validate = validatePartialPosts({ userId: req.params.userId });
    const post = this.postsService.getAll(validate.data.userId);

    await post
      .then((data) => res.status(200).json({ posts: data }))
      .catch((error) => res.status(400).json({ error: error }));
  };

  getById = async (req: Request, res: Response) => {
    const post = this.postsService.getById(req.params.id);

    await post
      .then((data) => res.status(200).json({ posts: data }))
      .catch((err) => res.status(400).json({ error: err }));
  };

  addPost = async (req: Request, res: Response) => {
    const validate = validatePosts(req.body);
    const post = this.postsService.addPost(validate.data);

    await post
      .then((data) => res.status(201).json({ posts: data }))
      .catch((err) => res.status(400).json({ error: err }));
  };

  RemovePost = async (req: Request, res: Response) => {
    const post = this.postsService.removePost(req.params.id);

    await post
      .then((data) => res.status(200).json({ posts: data }))
      .catch((error) => res.status(400).json({ error: error }));
  };
}

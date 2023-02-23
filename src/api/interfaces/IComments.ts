export default interface IComments {
  id?: number;
  content: string;
  createdAt: Date;
  updatedAt: Date;
  postId: string;
}
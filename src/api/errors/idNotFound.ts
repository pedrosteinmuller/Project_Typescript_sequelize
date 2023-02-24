export default class idNotFound extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'IdNotFoundError';
    this.stack = '404';
  };
};
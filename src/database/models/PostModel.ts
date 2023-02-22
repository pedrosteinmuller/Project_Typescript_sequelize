'use strict';

import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import CommentsModel from './CommentModel';
import UserModel from './UserModel';

class PostModel extends Model {
  declare readonly id: number;
  declare title: string;
  declare content: string;
  declare userId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

PostModel.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  title: {
    type: STRING,
    allowNull: false
  },
  content: {
    type: STRING,
    allowNull: false
  },
  userId: {
    type: INTEGER,
  },
  createdAt: {
    type: DATE,
  },
  updatedAt: {
    type: DATE,
  },
}, {
  sequelize: db,
  modelName: 'posts',
  tableName: 'posts',
  underscored: true,
});

PostModel.belongsTo(UserModel, {
  foreignKey: 'user_id',
  as: 'user_id',
})

PostModel.hasMany(CommentsModel, {
  foreignKey: 'post_id',
  as: 'post_id',
})

export default PostModel;
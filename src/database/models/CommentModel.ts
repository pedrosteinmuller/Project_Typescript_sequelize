'use strict';

import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import PostModel from './PostModel';
import UserModel from './UserModel';

class CommentsModel extends Model {
  declare readonly id: number;
  declare content: string;
  declare userId: number;
  declare postId: number;
  declare createdAt: Date;
  declare updatedAt: Date;
}

CommentsModel.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  content: {
    type: STRING,
    allowNull: false
  },
  userId: {
    type: INTEGER,
    allowNull: false,
    field: 'user_id',
  },
  postId: {
    type: INTEGER,
    allowNull: false,
    field: 'post_id',
  },
  createdAt: {
    type: DATE,
  },
  updatedAt: {
    type: DATE,
  },
}, {
  sequelize: db,
  modelName: 'comments',
  tableName: 'comments',
  underscored: true,
});

CommentsModel.belongsTo(PostModel, {
  foreignKey: 'post_id',
  as: 'post_id',
})

CommentsModel.belongsTo(UserModel, {
  foreignKey: 'user_id',
  as: 'post_id',
})

PostModel.hasMany(CommentsModel, {
  foreignKey: 'post_id',
  as: 'post_id',
})

export default CommentsModel;
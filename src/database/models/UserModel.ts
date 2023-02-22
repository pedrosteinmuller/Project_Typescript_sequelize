'use strict';

import { Model, INTEGER, STRING, DATE } from 'sequelize';
import db from '.';
import CommentsModel from './CommentModel';
import PostModel from './PostModel';

class UserModel extends Model {
  declare readonly id: number;
  declare name: string;
  declare email: string;
  declare password: string;
  declare createdAt: Date;
  declare updatedAt: Date;
}

UserModel.init({
  id: {
    type: INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  },
  name: {
    type: STRING,
    allowNull: false
  },
  email: {
    type: STRING,
    allowNull: false
  },
  password: {
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
  modelName: 'users',
  tableName: 'users',
  underscored: true,
});

UserModel.hasMany(PostModel, {
  foreignKey: 'user_id',
  as: 'user_id',
})

UserModel.hasMany(CommentsModel, {
  foreignKey: 'user_id',
  as: 'user_id',
})

export default UserModel;
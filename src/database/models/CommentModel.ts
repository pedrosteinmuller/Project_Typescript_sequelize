'use strict';

import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

class CommentsModel extends Model {
  declare readonly id: number;
  declare content: string;
  declare userId: number;
  declare postId: number;
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
}, {
  sequelize: db,
  modelName: 'comments',
  tableName: 'comments',
  underscored: true,
});

export default CommentsModel;
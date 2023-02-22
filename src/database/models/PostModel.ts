'use strict';

import { Model, INTEGER, STRING } from 'sequelize';
import db from '.';

module.exports = (sequelize: any, DataTypes: { STRING: any; TEXT: any; INTEGER: any; }) => {
  class PostModel extends Model {
    static associate(models: { Usuario: any; Comentario: any; }) {
      PostModel.belongsTo(models.Usuario, {
        foreignKey: 'userId'
      });
      PostModel.hasMany(models.Comentario, {
        foreignKey: 'postId'
      });
    }
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
  }, {
    sequelize,
    modelName: 'posts',
    tableName: 'posts'
  }), {
    sequelize: db,
    underscored: true,
  }

  return PostModel;
};

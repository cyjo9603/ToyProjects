/* eslint-disable no-unused-vars */
/* eslint-disable lines-between-class-members */
import { Model, DataTypes } from 'sequelize';
import { sequelize } from './sequelize';
import { dbType } from './index';

class User extends Model {
  public readonly id!: number;
  public name!: string;
  public password!: string;
  public gender!: string;
  public refreshToken!: string;
}

User.init(
  {
    name: {
      type: DataTypes.STRING(20),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    gender: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    refreshToken: {
      type: DataTypes.STRING(300),
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: 'User',
    tableName: 'user',
    charset: 'utf8',
    collate: 'utf8_general_ci',
    timestamps: false,
  },
);

export const associate = (db: dbType) => {
  db.User.belongsToMany(db.User, { through: 'Friend', as: 'Friends', timestamps: false });
};

export default User;

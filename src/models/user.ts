import { Model, DataTypes, Optional } from "sequelize";
import db from "../config/db";

interface IUserModel {
   id: number;
   name: string;
   address: string;
   phone: string;
   createdAt?: Date;
   updatedAt?: Date;
}

export interface UserInput extends Optional<IUserModel, "id" | "name" | "phone"> {}
export interface UserOutput extends Required<IUserModel> {}

class User extends Model<UserInput, UserOutput> {
   public id!: number;
   public name!: string;
   public address!: string;
   public phone!: string;

   public readonly createdAt!: Date;
   public readonly updatedAt!: Date;
}

User.init(
   {
      id: {
         type: DataTypes.INTEGER.UNSIGNED,
         autoIncrement: true,
         primaryKey: true,
      },
      name: {
         type: DataTypes.STRING,
         allowNull: false,
      },
      address: {
         type: DataTypes.STRING,
      },
      phone: {
         type: DataTypes.STRING,
      },
      createdAt: {
         type: DataTypes.DATE,
      },
      updatedAt: {
         type: DataTypes.DATE,
      },
   },
   {
      timestamps: true,
      sequelize: db,
      paranoid: true,
   }
);

export default User;

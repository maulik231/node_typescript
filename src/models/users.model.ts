import { DataTypes, Sequelize } from "sequelize";

export default (sequelize: Sequelize) => {
  const Users = sequelize.define(
    "users",
    {
      id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
      },
      full_name: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      password: {
        type: DataTypes.STRING,
      },
      access_level: {
        type: DataTypes.STRING,
      },
      organization_id: {
        type: DataTypes.UUID,
      },
      bay_id: {
        type: DataTypes.UUID,
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
      },
    },
    {
      timestamps: false,
    }
  );

  return Users;
};

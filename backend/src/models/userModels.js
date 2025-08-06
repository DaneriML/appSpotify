import DataTypes from 'sequelize';
import  sequelize  from '../config/connectionDB.js';

const User = sequelize.define('User', {
    userid: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    surname: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }

}, {
    tableName: 'user',
    timestamps: true,
}
);

export default User;

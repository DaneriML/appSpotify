import { DataTypes } from "sequelize";
import db from '../config/connectionDB.js';

const Song = db.define('Song', {
    songId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    number: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    duration: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    fiele: {
        type: DataTypes.STRING,
        allowNull: false
    },  
    albumId: {
        type: DataTypes.INTEGER
    }
}, {
    tableName: 'song',
    timestamps: true,
});

export default Song;
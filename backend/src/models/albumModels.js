import { DataTypes } from "sequelize";
import db from '../config/connectionDB.js';

const album = db.define('Album', {
    albumId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    año: {
        type: DataTypes.INTEGER,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }, 
    artistId: {
        type: DataTypes.INTEGER
        }
}, {
    tableName: 'album',
    timestamps: true,
    }
);
export default album;

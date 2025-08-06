import { DataTypes } from "sequelize";
import db from '../config/connectionDB.js';

const Artist = db.define('Artist', {
    artistId: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.STRING,
        allowNull: true
    },
    image: {
        type: DataTypes.STRING,
        allowNull: true
    }
}, {
    tableName: 'artist',
    timestamps: true,
});

export default Artist;



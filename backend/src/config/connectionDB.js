import { Sequelize } from 'sequelize';
import 'dotenv/config';

const db = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        port: process.env.DB_PORT,
        logging: false, 
        dialectOptions: {
            Options: {
                encrypt: true, // Para conexiones seguras
            },
        },
    }
)

db.authenticate().then(() => {
    console.log('Conexión a la base de datos establecida correctamente.');
}).catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
});

export default db;

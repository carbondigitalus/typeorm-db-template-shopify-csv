// NPM Modules
const tsDBConnect = require('typeorm');
require('reflect-metadata');

// imports
import { ShopifyCSVTemplate } from './db/entity';


// Connect to MySQL DB
tsDBConnect
    .createConnection({
        type: 'mysql2',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        logging: false,
        entities: [ShopifyCSVTemplate]
    })
    .then(() => {
        // here you can start to work with your entities
        console.log('MySQL Database Connection Status: success');
    })
    .catch((error) => console.log(error));

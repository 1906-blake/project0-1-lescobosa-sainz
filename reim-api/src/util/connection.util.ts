import { Pool } from 'pg';

const connectionConfiguration = {
    user: process.env.RIEMNURSEMENTS_DB_USERNAME,
    host: process.env.RIEMNURSEMENTS_DB_URL || 'localhost',
    database: process.env.RIEMNURSEMENTS_DB_NAME || 'Reimbursements',
    password: process.env.RIEMNURSEMENTS_DB_PASSWORD,
    port: +process.env.RIEMNURSEMENTS_DB_PORT || 5432,
    max: 5
} 
// console.log(connectionConfiguration);
export const connectionPool = new Pool(connectionConfiguration)
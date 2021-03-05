const knex = require('knex');
const app = require('./app');
const {
    PORT,
    DATABASE_USER,
    DATABASE_PASS,
    DATABASE
} = require('./config');

db = knex({
    client: 'mssql',
    connection: {
        server: '192.168.1.196',
        user: DATABASE_USER,
        password: DATABASE_PASS,
        database: DATABASE,
        options: {
            port: 1433,
        }
    }
})

app.set('db',db)

app.listen(PORT, () => {
    console.log(`Server listening at http://localhost:${PORT}`)
})
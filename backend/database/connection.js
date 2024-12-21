import { Sequelize } from 'sequelize';
import path from 'path';

// Initialize Sequelize
const sequelize = new Sequelize({
  database: "stock_management_system", // Your database name
  dialect: 'mysql',
  username: "admin", // Default MySQL username in XAMPP
  password: "", // Leave it empty if no password is set
  host: "127.0.0.1", // MySQL host
  port: 3306, // Default MySQL port
  models: [path.resolve('./models')], // Path to your models
  pool: {
    max: 50, 
    min: 5,
    acquire: 60000,
    idle: 10000,
  },
});

// Authenticate connection
sequelize.authenticate()
  .then(() => {
    console.log('Connected to the database!');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// Sync models with the database
sequelize.sync({ force: false })
  .then(() => {
    console.log('Database synchronized!');
  })
  .catch((err) => {
    console.error('Error synchronizing database:', err);
  });

export default sequelize;


// import mysql from 'mysql';

// const connection = mysql.createConnection({
//   host: 'admin',
//   user: 'localhost',
//   password: '',
//   database: 'stock_management_system',
// });

// // Connect to the database
// connection.connect((err) => {
//   if (err) {
//     console.error('Error connecting to the database:', err.message);
//     return;
//   }
//   console.log('Connected to the MySQL database.');
// });

// // Export the connection for reuse
// export default connection;

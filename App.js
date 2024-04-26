const express = require('express');
const http = require("http");
const mysql = require('mysql');
const app = express();
app.use(express.json());

const pool = mysql.createPool({
  connectionLimit: 2, // Maximum number of connections in the pool
  host: '127.0.0.1',
  user: 'root',  
  password: 'ma741369',  
  database: 'databaseTest'  
});


app.get('/get-users', (req, res) => {
  pool.getConnection((err, connection) => {
    if (err) {
      console.error('Error connecting to database:', err.message);
      res.status(500).send(`Error connecting to database ${err.message}`);
      return;
    }

    connection.query('SELECT * FROM users', (err, rows) => {
      // Release the connection back to the pool
      connection.release();

      if (err) {
        console.error('Error executing query:', err.message);
        res.status(500).send(`Error executing query: ${err.message}`);
        return;
      }

      // Send the results as JSON
      res.status(200).json(rows);
    });

  });
});

app.get('/*', (req, res) => {
  res.status(404).json({
    message: "Route not found",
    rout:req.path,
    server:"live",
  });
});

// module.exports=app;
// Start the server
const PORT = 2999;
const server = http.createServer(app);
// console.log(server.address);
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

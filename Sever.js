const http = require("http");
const app = require("./App");

const port = process.env.PORT||2999;
const server = http.createServer(app);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

module.exports = server;
const app = require("./app")

const { PORT } = process.env;

const connectDatabase = require("./config/database");

console.log("DATABASE URI:", process.env.DB_URI);

// Connecting to database
connectDatabase();

console.log("CONNECTED TO DATABASE");

app.listen(PORT, () => {
    console.log(`SERVER RUNNING ON PORT ${PORT}`);
})
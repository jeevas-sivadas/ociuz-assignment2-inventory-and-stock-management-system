import "dotenv/config";
import app from "./app.js";
import connectDB from "./config/db.js";

const port = process.env.PORT || 5000;

async function startServer() {
  
try {
    await connectDB();
app.listen(port, () => {
    console.log(`Your server is running at port ${port}`);
});
} catch (error) {

    console.error(error);
}}
startServer();
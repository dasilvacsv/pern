import app from "./app.js";
import { pool } from "./db.js";


app.listen(80, '0.0.0.0', () => {
    console.log('Server is running on localhost');
});
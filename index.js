import express from 'express';
import productRoutes from './routes/productRoutes.js'
import poll from './config/db.js';

const app = express();
const PORT = 8090;

//middleware
app.use(express.json());

//routes
app.use('/', productRoutes);
// app.use('/', (req, res) => {
//     res.send("Hello World");
// });

app.listen(PORT, async()=> {
    try {
        const connection = await poll.getConnection();
        connection.release();
        console.log(`👍Server is running on http://localhost:${PORT}`);
        console.log('👍Database connection ');
    } catch (error) {
        console.error(`❌Failed to connect to database: ${error.message}`)
        console.log(`⚠️Server is running without database connection`);
    }
});

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });
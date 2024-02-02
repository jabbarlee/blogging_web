const { Pool } = require('pg')
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json())
app.use(cors());

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: '2103',
    port: 5432, // Default PostgreSQL port
})

const getData = async(req, res) => {
    try{
        const data = pool.query(`
            SELECT * FROM blog_posts
        `);

        res.json((await data).rows)
    }catch(error){
        console.warn(error);
    }
}

app.get('/data', getData);

app.post('/post', (req, res) => {
    const title = req.body.title;
    const description = req.body.description;
    const name = req.body.name;

    pool.query(`
        INSERT INTO blog_posts ("title", "description", "fullname")
        VALUES ($1, $2, $3)
    `, [title, description, name], (err) => {
        if(err){
            console.log('Error inserting to database' + err);
            res.status(500).send('Database error'); 
        }   
    });
})
app.listen(PORT, () => {
    console.log(`The server is runnng on port: ${PORT}`);
})
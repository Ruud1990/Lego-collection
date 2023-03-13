
import express from 'express';
import mysql from 'mysql';
import cors from 'cors';

const app = express();


const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "lego_collection"
});


app.use(express.json());
app.use(cors());

app.get('/', function (req, res) {
    res.json('hello!')
})

app.get("/sets", (req, res) => {
  const q = "SELECT * FROM sets";
  db.query(q, (err, data) => {
    if (err) {
      console.log(err);
      return res.json(err);
    }
    return res.json(data);
  });
});

app.post("/sets", (req, res) => {
  const q = "INSERT INTO sets(`name`, `category`, `price`) VALUES (?)";

  const values = [
    req.body.name,
    req.body.category,
    req.body.price,
  ];

  db.query(q, [values], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.delete("/sets/:id", (req, res) => {
  const setId = req.params.id;
  const q = " DELETE FROM sets WHERE id = ? ";

  db.query(q, [setId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});

app.put("/sets/:id", (req, res) => {
  const setId = req.params.id;
  const q = "UPDATE sets SET `name`= ?, `category`= ?, `price`= ? WHERE id = ?";

  const values = [
    req.body.name,
    req.body.category,
    req.body.price,
  ];

  db.query(q, [...values,setId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});


app.listen(8800, () =>{
    console.log('connected!!!')
})
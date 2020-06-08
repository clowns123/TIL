const express = require('express');
const path = require('path');
const app = express();
const port = 5500;
const users = { id: '1234', pass: '1234' };

app.use(express.static('public'));
app;

app.get('/', (req, res) => {
  res.send('hi???');
});

let todos = [
  { id: 1, content: 'HTML', completed: false },
  { id: 2, content: 'CSS', completed: true },
  { id: 3, content: 'Javascript', completed: false },
];
app.get('/todos', (req, res) => {
  res.send(todos);
});

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
  console.log(req.body); // post로 전송했을 때 body에서 꺼내온다.
  res.send('login post');
});
app.listen(port, () => console.log(`Server is running on ${port}`));

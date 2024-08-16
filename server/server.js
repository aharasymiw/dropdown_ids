const express = require('express');
const app = express();

const PORT = process.env.PORT || 5001;

const dataRouter = require('./routes/data.router');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('build'));

app.use('/api/data', dataRouter);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});

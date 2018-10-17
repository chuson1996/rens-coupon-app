import express from 'express';

const app = express();

app.use('/', (_, res) => {
  res.send('Working');
})

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Started server on port ${port}`);
})

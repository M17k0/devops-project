import express from 'express';

const app = express();

app.get('/', (_req, res) => {
  res.send('Hello, Devops Project!\n');
});

export default app;

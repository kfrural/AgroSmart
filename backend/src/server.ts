import app from './app';

const PORT = 3000; //se a aplicacao inicial tiver nessa porta muda pra 8080

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

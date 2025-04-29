const express = require('express');
const path = require('path');
const app = express();

const profile = {
  nama: "Raffi Prayoga Putra",
  nim: "41823010030",
  jurusan: "Sistem iformasi",
  universitas: "Universitas Mercu buana",
  email: "raffiprayoga269@gmail.com"
};

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/api/profile', (req, res) => {
  res.json(profile);
});

const PORT = 3007;
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});

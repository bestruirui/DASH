const os = require('os');
const express = require('express');

const app = express();

// 允许所有域名访问该 API
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/cpu', (req, res) => {
  const cpuUsage = Math.round(os.loadavg()[0] * 10000) / 100;
  res.json({ cpuUsage });
});
app.listen(3001, () => console.log('Server started on port 3000'));

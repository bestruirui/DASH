const os = require('os');
const express = require('express');
const app = express();
app.get('/api', (req, res) => {
  const cpuUsage = Math.round((1 - os.loadavg()[2] / os.cpus().length) * 100 * 100) / 100;
  const memUsage = Math.round((1 - os.freemem() / os.totalmem()) * 100 * 100) / 100;
  const diskUsage = Math.round((1 - os.freemem() / os.totalmem()) * 100 * 100) / 100;

  const data = {
    cpuUsage,
    memUsage,
    diskUsage
  };

  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.json(data);
});

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Server running on port ${port}`));
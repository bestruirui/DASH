const express = require('express');
const { exec } = require('child_process');

const app = express();

app.get('/api', (req, res) => {
  exec('bash server/api.sh', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred while fetching system resources.');
    }
    
    const [cpuUsage, memUsage, diskUsage] = stdout.trim().split('\n');

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

    res.json({
      cpuUsage: parseInt(cpuUsage),
      memUsage: parseInt(memUsage),
      diskUsage: parseInt(diskUsage)
    });
  });
});

app.listen(301, () => {
  console.log('Server listening on port 301');
});

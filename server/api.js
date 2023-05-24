const express = require('express');
const { exec } = require('child_process');

const app = express();

function fetchSystemResources(req, res) {
  exec('bash server/api.sh', (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return res.status(500).send('An error occurred while fetching system resources.');
    }
    
    const [cpuUsage, memUsage, diskUsage] = stdout.trim().split('\n');

    res.json({
      cpuUsage: parseInt(cpuUsage),
      memUsage: parseInt(memUsage),
      diskUsage: parseInt(diskUsage)
    });
  });
}

app.get('/api', fetchSystemResources);

app.listen(301, () => {
  console.log('Server listening on port 301');
});


// const os = require('os');
// const express = require('express');
// const app = express();
// app.get('/api', (req, res) => {
//   const cpuUsage = Math.round((1 - os.loadavg()[2] / os.cpus().length) * 100);
//   const memUsage = Math.round((1 - os.freemem() / os.totalmem()) * 100);
//   const diskUsage = Math.round((1 - os.freemem() / os.totalmem()) * 100);

//   const data = {
//     cpuUsage,
//     memUsage,
//     diskUsage
//   };

//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
//   res.json(data);
// });

// //const port = process.env.PORT || 3121;
// const port = 301;
// app.listen(port, () => console.log(`Server running on port ${port}`));
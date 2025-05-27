
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('.'));

app.post('/api/download', (req, res) => {
  const { url, platform } = req.body;

  // Mock responses for each platform
  if (!url || !platform) {
    return res.status(400).json({ error: 'Missing url or platform' });
  }

  const supportedPlatforms = ['youtube', 'facebook', 'tiktok', 'instagram', 'twitter'];
  if (!supportedPlatforms.includes(platform.toLowerCase())) {
    return res.status(400).json({ error: 'Unsupported platform' });
  }

  // Simulate video URL response
  return res.json({
    message: 'Download link generated successfully',
    data: {
      platform,
      url,
      downloadLink: `https://bbh-cyber-tools.fakecdn.com/downloads/${platform}/${encodeURIComponent(url)}.mp4`
    }
  });
});

app.listen(port, () => {
  console.log(`BBH CYBER TOOLS server running at http://localhost:${port}`);
});

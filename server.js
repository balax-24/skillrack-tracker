const express = require('express');
const puppeteer = require('puppeteer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

const LOG_FILE = path.join(__dirname, 'logs.json');

app.post('/api/scrape', async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: 'URL missing' });

  try {
    const browser = await puppeteer.launch({ headless: true });
 
    await page.goto(url, { waitUntil: 'networkidle0' });

    const result = await page.evaluate(() => {
      // To be Filled
          }
        }
        return 0;
      };

      const getText = (selector) => {
        const el = document.querySelector(selector);
        return el ? el.textContent.trim() : '';
      };

      const getRank = () => {
        // To ve Filled;
      };

      //To be Filled

      const details = {
        //To be Fileld };

      
      };

      return {
       // To be FIlled;
      };
    });

    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const logEntry = {
      timestamp: new Date().toISOString(),
      ip,
      url,
      ...result
    };

    let logs = [];
    if (fs.existsSync(LOG_FILE)) {
      try {
        logs = JSON.parse(fs.readFileSync(LOG_FILE, 'utf8'));
      } catch (e) {
        logs = [];
      }
    }

    logs.push(logEntry);
    fs.writeFileSync(LOG_FILE, JSON.stringify(logs, null, 2));

    await browser.close();
    res.json(result);
  } catch (err) {
    console.error('Scrape error:', err.message);
    res.json({ error: '❌ Failed to scrape SkillRack profile. Try again.' });
  }
});

app.listen(3000, () => {
  console.log('✅ Server running at http://localhost:3000');
});

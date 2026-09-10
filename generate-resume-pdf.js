const puppeteer = require('puppeteer');
const path = require('path');

async function generateResumePDF() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 900 });

  console.log('Navigating to resume page...');
  await page.goto('http://localhost:3000/resume', {
    waitUntil: 'networkidle0',
    timeout: 30000
  });

  // Preloader runs for 2500ms, then exits over ~1000ms animation.
  // Wait 5.5s total to ensure it's completely gone before printing.
  console.log('Waiting 5.5s for preloader to clear...');
  await new Promise(resolve => setTimeout(resolve, 5500));

  console.log('Generating PDF...');
  const outputPath = path.join(__dirname, 'public', 'resume.pdf');
  
  await page.pdf({
    path: outputPath,
    format: 'A4',
    printBackground: true,
    margin: {
      top: '20mm',
      bottom: '20mm',
      left: '15mm',
      right: '15mm'
    },
    displayHeaderFooter: false,
  });

  await browser.close();
  console.log(`✅ PDF generated at: ${outputPath}`);
}

generateResumePDF().catch(err => {
  console.error('❌ Error:', err);
  process.exit(1);
});

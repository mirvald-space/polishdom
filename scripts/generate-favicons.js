import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';

// Get current file's directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Install packages if not already installed
try {
  await import('canvas');
} catch (e) {
  console.log('Installing required packages...');
  execSync('npm install --save-dev canvas');
}

const { createCanvas } = await import('canvas');

const publicDir = path.join(__dirname, '../public');
const sizes = [16, 32, 180, 192, 512];
const colors = {
  primary: '#CA4237',    // Adjust this to match your brand color
  background: '#FFFFFF'  // Background color
};

// Function to generate a simple favicon with text "PD" (PolishDom)
async function generateFavicon(size) {
  // Create a canvas with the desired size
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Fill background
  ctx.fillStyle = colors.background;
  ctx.fillRect(0, 0, size, size);
  
  // Draw a rounded rectangle background
  ctx.fillStyle = colors.primary;
  const cornerRadius = size * 0.15;
  const rectWidth = size * 0.9;
  const rectHeight = size * 0.9;
  const rectX = (size - rectWidth) / 2;
  const rectY = (size - rectHeight) / 2;
  
  ctx.beginPath();
  ctx.moveTo(rectX + cornerRadius, rectY);
  ctx.lineTo(rectX + rectWidth - cornerRadius, rectY);
  ctx.quadraticCurveTo(rectX + rectWidth, rectY, rectX + rectWidth, rectY + cornerRadius);
  ctx.lineTo(rectX + rectWidth, rectY + rectHeight - cornerRadius);
  ctx.quadraticCurveTo(rectX + rectWidth, rectY + rectHeight, rectX + rectWidth - cornerRadius, rectY + rectHeight);
  ctx.lineTo(rectX + cornerRadius, rectY + rectHeight);
  ctx.quadraticCurveTo(rectX, rectY + rectHeight, rectX, rectY + rectHeight - cornerRadius);
  ctx.lineTo(rectX, rectY + cornerRadius);
  ctx.quadraticCurveTo(rectX, rectY, rectX + cornerRadius, rectY);
  ctx.closePath();
  ctx.fill();
  
  // Add text "PD"
  ctx.fillStyle = colors.background;
  ctx.font = `bold ${size * 0.5}px Arial`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText('PD', size / 2, size / 2);
  
  // Convert to buffer
  const buffer = canvas.toBuffer('image/png');
  
  return buffer;
}

async function generateAllFavicons() {
  try {
    // Generate PNG favicons
    for (const size of sizes) {
      const buffer = await generateFavicon(size);
      let filename;
      
      if (size === 16) {
        filename = 'favicon-16x16.png';
      } else if (size === 32) {
        filename = 'favicon-32x32.png';
      } else if (size === 180) {
        filename = 'apple-touch-icon.png';
      } else if (size === 192) {
        filename = 'android-chrome-192x192.png';
      } else if (size === 512) {
        filename = 'android-chrome-512x512.png';
      }
      
      fs.writeFileSync(path.join(publicDir, filename), buffer);
      console.log(`Generated ${filename}`);
    }
    
    // For ICO, we'll use the 32x32 PNG as a direct substitute
    // Note: This isn't a true ICO file, but many modern browsers will accept a PNG as favicon
    const favicon32Buffer = await generateFavicon(32);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), favicon32Buffer);
    console.log('Generated favicon.ico (note: this is actually a PNG file, not ICO format)');
    
    // Create webmanifest file
    const webmanifest = {
      name: 'PolishDom',
      short_name: 'PolishDom',
      icons: [
        {
          src: '/android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: '/android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ],
      theme_color: '#ffffff',
      background_color: '#ffffff',
      display: 'standalone'
    };
    
    fs.writeFileSync(
      path.join(publicDir, 'site.webmanifest'),
      JSON.stringify(webmanifest, null, 2)
    );
    
    console.log('Generated site.webmanifest');
    console.log('All favicon files generated successfully!');
  } catch (error) {
    console.error('Error generating favicons:', error);
  }
}

generateAllFavicons(); 
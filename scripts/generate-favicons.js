const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const sizes = {
  "favicon.ico": [16, 32],
  "icon.png": 32,
  "apple-touch-icon.png": 180,
  "android-chrome-192x192.png": 192,
  "android-chrome-512x512.png": 512,
};

const inputFile = path.join(__dirname, "../public/assets/images/photo.jpg");
const outputDir = path.join(__dirname, "../public/favicon");

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Generate each favicon
Object.entries(sizes).forEach(async ([filename, size]) => {
  const outputPath = path.join(outputDir, filename);

  try {
    if (Array.isArray(size)) {
      // For ICO file, we need to generate multiple sizes
      const buffers = await Promise.all(
        size.map((s) => sharp(inputFile).resize(s, s).toBuffer())
      );

      // Create ICO file from buffers
      await sharp(buffers[0]).toFile(outputPath);
    } else {
      // For PNG files
      await sharp(inputFile).resize(size, size).toFile(outputPath);
    }

    console.log(`Generated ${filename}`);
  } catch (error) {
    console.error(`Error generating ${filename}:`, error);
  }
});

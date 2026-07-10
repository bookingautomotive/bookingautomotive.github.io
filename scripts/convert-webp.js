#!/usr/bin/env node

/**
 * WebP Image Converter for Booking Automotive
 * 
 * Converts PNG/JPG images to WebP format for better SEO and performance.
 * Uses sharp library for high-quality conversion.
 * 
 * Usage: npm run convert:webp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const INPUT_PATTERN = 'assets/images/**/*.{png,jpg,jpeg}';
const OUTPUT_DIR = 'assets/images/webp';

async function convertToWebP() {
  console.log('🔄 Converting images to WebP format...\n');
  
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✅ Created output directory: ${OUTPUT_DIR}\n`);
  }
  
  const files = await glob(INPUT_PATTERN);
  console.log(`Found ${files.length} images to convert\n`);
  
  let successCount = 0;
  let errorCount = 0;
  
  for (const file of files) {
    const fileName = path.basename(file, path.extname(file));
    const outputPath = path.join(OUTPUT_DIR, `${fileName}.webp`);
    
    try {
      const metadata = await sharp(file).metadata();
      const stats = await sharp(file)
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);
      
      const originalSize = fs.statSync(file).size;
      const newSize = stats.size;
      const savings = ((1 - newSize / originalSize) * 100).toFixed(1);
      
      console.log(`✅ ${fileName}.${path.extname(file).slice(1)} → ${fileName}.webp`);
      console.log(`   ${originalSize.toLocaleString()} bytes → ${newSize.toLocaleString()} bytes (${savings}% smaller)\n`);
      
      successCount++;
    } catch (error) {
      console.error(`❌ Error converting ${file}: ${error.message}\n`);
      errorCount++;
    }
  }
  
  console.log('\n========================================');
  console.log(`Conversion complete!`);
  console.log(`✅ Success: ${successCount} images`);
  console.log(`❌ Errors: ${errorCount} images`);
  console.log('========================================\n');
  
  console.log('📊 SEO Impact:');
  console.log('- Faster page load times (WebP is 25-35% smaller)');
  console.log('- Better Core Web Vitals scores');
  console.log('- Improved Google PageSpeed Insights rating');
  console.log('- Modern format support (95%+ browsers)\n');
  
  console.log('💡 Next Steps:');
  console.log('1. Update HTML to use <picture> elements with WebP source');
  console.log('2. Add fallback for older browsers');
  console.log('3. Update image references in CSS/JS files');
  console.log('4. Test with Google Rich Results Test tool\n');
}

convertToWebP().catch(console.error);
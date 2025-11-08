const fs = require('fs');
const path = require('path');
const { SitemapStream, streamToPromise } = require('sitemap');

// 1. Define your website's base URL (Updated for nationalwallpaper.in)
const hostname = 'https://www.nationalwallpaper.in';
const currentDate = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format

// 2. LIST ALL YOUR PUBLIC ROUTES HERE
// IMPORTANT: Add an entry for every page you want indexed
const staticRoutes = [
    // Core Pages
    { url: '/', changefreq: 'daily', priority: 1.0, lastmod: currentDate },
    { url: '/product', changefreq: 'weekly', priority: 0.9, lastmod: currentDate },
    { url: '/gallery', changefreq: 'weekly', priority: 0.8, lastmod: currentDate }, // Added
    { url: '/categories', changefreq: 'weekly', priority: 0.8, lastmod: currentDate }, // Added
    
    // Informational Pages
    { url: '/about', changefreq: 'monthly', priority: 0.7, lastmod: currentDate },
    { url: '/contact', changefreq: 'monthly', priority: 0.7, lastmod: currentDate },
   ];

async function generateSitemap() {
    console.log('Starting sitemap generation...');
    const stream = new SitemapStream({ hostname });

    // Write all defined routes to the stream
    staticRoutes.forEach(route => {
        stream.write(route);
    });

    stream.end();

    const sitemapXml = await streamToPromise(stream);

    // 3. WRITE THE FILE TO THE PUBLIC FOLDER
    // Note: Ensure you have a 'public' directory in the same location as this script
    const outputPath = path.resolve(__dirname, 'public', 'sitemap.xml');

    // Create the 'public' directory if it doesn't exist
    if (!fs.existsSync(path.dirname(outputPath))) {
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });
    }

    fs.writeFileSync(outputPath, sitemapXml.toString());
    console.log(`✅ Sitemap successfully created at ${outputPath}`);
    console.log(`Discovered ${staticRoutes.length} URLs.`);
    console.log(`Don't forget to update the 'staticRoutes' array with all your actual product and category pages!`);
}

generateSitemap().catch(console.error);
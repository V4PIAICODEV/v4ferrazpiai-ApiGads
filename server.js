const express = require('express');
const app = express();
const path = require('path');

// ============================================
// V4 Ferraz Piai Internal Data Hub
// Google Ads API Integration Platform
// ============================================

// Template Engine Configuration (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Static Files (CSS, Images, JS if needed)
app.use(express.static('public'));

// Middleware for JSON parsing (for future API endpoints)
app.use(express.json());

// ============================================
// ROUTES
// ============================================

// Route: Home / Landing Page
app.get('/', (req, res) => {
    res.render('index', { 
        title: 'V4 Ferraz Piai - Internal Data Hub & Automation',
        page: 'home'
    });
});

// Route: Dashboard (Application Interface)
app.get('/dashboard', (req, res) => {
    res.render('dashboard', { 
        title: 'Dashboard - V4 Ferraz Piai Internal Hub',
        page: 'dashboard'
    });
});

// Route: Privacy Policy (REQUIRED for Google API verification)
app.get('/privacy', (req, res) => {
    res.render('privacy', { 
        title: 'Privacy Policy - V4 Ferraz Piai',
        page: 'privacy'
    });
});

// Route: Terms of Service (REQUIRED for Google API verification)
app.get('/terms', (req, res) => {
    res.render('terms', { 
        title: 'Terms of Service - V4 Ferraz Piai',
        page: 'terms'
    });
});

// Route: Health Check (for monitoring and verification)
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'OK',
        service: 'V4 Ferraz Piai Data Hub',
        timestamp: new Date().toISOString()
    });
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 Handler
app.use((req, res) => {
    res.status(404).send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>404 - Page Not Found</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-900 text-white flex items-center justify-center h-screen">
            <div class="text-center">
                <h1 class="text-6xl font-bold mb-4">404</h1>
                <p class="text-xl mb-6">Page Not Found</p>
                <a href="/" class="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition">
                    Return to Home
                </a>
            </div>
        </body>
        </html>
    `);
});

// ============================================
// SERVER INITIALIZATION
// ============================================

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log('========================================');
    console.log('V4 Ferraz Piai Internal Data Hub');
    console.log('========================================');
    console.log(`Server running on port ${PORT}`);
    console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`Access at: http://localhost:${PORT}`);
    console.log('========================================');
});

const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files (CSS, images, client JS) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// ROUTE 1: The Front Door Gateway (Login / Register page)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ROUTE 2: The Secure Dashboard
// When someone visits yoururl.onrender.com/dashboard, give them dashboard.html
app.get('/dashboard', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dashboard.html'));
});

app.listen(PORT, () => {
    console.log(`Server running smoothly on port ${PORT}`);


});

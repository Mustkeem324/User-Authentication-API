const app = require('./app');
const os = require('os');

const PORT = process.env.PORT || 8000;

function getLocalAddress() {
    const interfaces = os.networkInterfaces();
    for (const name of Object.keys(interfaces)) {
        for (const net of interfaces[name]) {
            if (net.family === 'IPv4' && !net.internal) {
                return net.address;
            }
        }
    }
    return 'localhost';
}

app.listen(PORT, () => {
    const localAddress = getLocalAddress();
    console.log(`Server running on port ${PORT}`);
    console.log(`Local: http://${localAddress}:${PORT}`);
});

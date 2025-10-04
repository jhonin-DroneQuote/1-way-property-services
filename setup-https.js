const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create certificates directory
const certDir = path.join(__dirname, 'certs');
if (!fs.existsSync(certDir)) {
  fs.mkdirSync(certDir);
}

const keyPath = path.join(certDir, 'key.pem');
const certPath = path.join(certDir, 'cert.pem');

// Generate self-signed certificate if it doesn't exist
if (!fs.existsSync(keyPath) || !fs.existsSync(certPath)) {
  try {
    console.log('Generating self-signed certificate...');
    execSync(`openssl req -x509 -newkey rsa:4096 -keyout "${keyPath}" -out "${certPath}" -days 365 -nodes -subj "/C=US/ST=State/L=City/O=Organization/CN=localhost"`, { stdio: 'inherit' });
    console.log('Certificate generated successfully!');
  } catch (error) {
    console.log('OpenSSL not found. Please install OpenSSL or use HTTP instead.');
    console.log('Starting HTTP server...');
    process.exit(1);
  }
}

console.log('Starting HTTPS server...');

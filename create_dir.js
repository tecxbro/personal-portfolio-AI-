const fs = require('fs');

const dir = 'public/adventures';

if (!fs.existsSync(dir)) {
  fs.mkdirSync(dir, { recursive: true });
  console.log('Directory created successfully!');
} else {
  console.log('Directory already exists.');
}

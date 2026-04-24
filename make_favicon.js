const fs = require('fs');
const content = fs.readFileSync('app/MapaConcellos.tsx', 'utf-8');

const startMarker = '<path d="M ';
const endMarker = '</g>';

const startIndex = content.indexOf(startMarker);
const endIndex = content.indexOf(endMarker, startIndex);

if (startIndex === -1 || endIndex === -1) {
    console.error('Could not find SVG paths in MapaConcellos.tsx');
    process.exit(1);
}

const paths = content.substring(startIndex, endIndex);

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 619" style="background-color: #95bec8;">
    <g fill="#1e8346" stroke="#95bec8" stroke-width="0.5" stroke-linecap="round" stroke-linejoin="round">
        ${paths}
    </g>
</svg>`;

fs.writeFileSync('app/icon.svg', svg);
console.log('Created app/icon.svg successfully!');

if (fs.existsSync('app/favicon.ico')) {
    fs.unlinkSync('app/favicon.ico');
    console.log('Removed app/favicon.ico');
}

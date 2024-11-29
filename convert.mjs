import webp from "webp-converter";

const inputFile = process.argv[2];
const outputFile = process.argv[3];

if (!inputFile || !outputFile) {
  console.error("Usage: node convert.js <input.jpg> <output.webp>");
  process.exit(1);
}

webp.cwebp(inputFile, outputFile, "-q 80", (status, error) => {
  if (status === 0) {
    console.log(`Conversion successful! Output saved to ${outputFile}`);
  } else {
    console.error(`Error during conversion:`, error);
  }
});

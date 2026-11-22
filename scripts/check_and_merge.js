const fs = require('fs');
const path = require('path');

const targetFile = 'src/data/non_surgical_classification.json';
const dataDir = 'src/data';

if (!fs.existsSync(targetFile)) {
  fs.writeFileSync(targetFile, '[]', 'utf8');
}

const existing = JSON.parse(fs.readFileSync(targetFile, 'utf8'));
const guideFiles = fs
  .readdirSync(dataDir)
  .filter((f) => /^guide_.*\.json$/.test(f))
  .sort();

const validIncoming = [];
const brokenFiles = [];

for (const file of guideFiles) {
  const fullPath = path.join(dataDir, file);
  try {
    const parsed = JSON.parse(fs.readFileSync(fullPath, 'utf8'));
    if (Array.isArray(parsed)) {
      validIncoming.push(...parsed);
    }
  } catch (err) {
    brokenFiles.push({ file, error: err.message });
  }
}

const seenQuestions = new Set();
const bySpecialty = {};
const cleaned = [];

for (const item of [...existing, ...validIncoming]) {
  if (!item || typeof item.question !== 'string') continue;
  const normQ = item.question.trim().toLowerCase();
  if (!normQ || seenQuestions.has(normQ)) continue;
  seenQuestions.add(normQ);
  cleaned.push(item);
  const spec = item.specialty || 'Unknown';
  bySpecialty[spec] = (bySpecialty[spec] || 0) + 1;
}

fs.writeFileSync(targetFile, JSON.stringify(cleaned, null, 2), 'utf8');

console.log('Total unique questions:', cleaned.length);
console.log('By specialty:', bySpecialty);
if (brokenFiles.length > 0) {
  console.log('Broken guide files to rewrite:', brokenFiles);
}

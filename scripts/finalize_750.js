const fs = require("fs");

const mainPath = "src/data/non_surgical_classification.json";
const extraEmerPath = "src/data/guide_emer_extra_12.json";

const raw = JSON.parse(fs.readFileSync(mainPath, "utf8"));
const baseList = Array.isArray(raw) ? raw : (raw.questions || []);

let extraEmer = [];
if (fs.existsSync(extraEmerPath)) {
  try {
    const parsed = JSON.parse(fs.readFileSync(extraEmerPath, "utf8"));
    if (Array.isArray(parsed)) extraEmer = parsed;
  } catch (_) {}
}

const normSpec = (s) => {
  if (s === "Anesthesiology") return "Anesthesia";
  if (s === "Emergency Medicine") return "Emergency";
  return s;
};

const normQ = (q) => (q || "").trim().toLowerCase().replace(/\s+/g, " ");

const seenIds = new Set();
const seenQ = new Set();
const perSpec = {};
const finalList = [];

for (const item of [...baseList, ...extraEmer]) {
  if (!item || !item.question) continue;
  const id = (item.id || "").trim();
  const qKey = normQ(item.question);
  if ((id && seenIds.has(id)) || seenQ.has(qKey)) continue;

  const sp = normSpec(item.specialty);
  perSpec[sp] = perSpec[sp] || 0;
  if (perSpec[sp] >= 50) continue;

  if (id) seenIds.add(id);
  seenQ.add(qKey);
  perSpec[sp]++;
  finalList.push({ ...item, specialty: sp });
}

const out = Array.isArray(raw) ? finalList : { ...raw, questions: finalList };
fs.writeFileSync(mainPath, JSON.stringify(out, null, 2) + "\n", "utf8");

console.log("Final total:", finalList.length);
console.table(perSpec);

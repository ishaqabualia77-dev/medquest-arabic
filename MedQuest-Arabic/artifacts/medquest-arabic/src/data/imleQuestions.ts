export interface BankQuestion {
  id: string;
  specialty: string;
  difficulty: "Basic" | "Intermediate" | "Advanced";
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export const IMLE_200_QUESTIONS: BankQuestion[] = [
  {
    "id": "imle-0001",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step?",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #1]"
  },
  {
    "id": "imle-0002",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management?",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #2]"
  },
  {
    "id": "imle-0003",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority?",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #3]"
  },
  {
    "id": "imle-0004",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately?",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #4]"
  },
  {
    "id": "imle-0005",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed?",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #5]"
  },
  {
    "id": "imle-0006",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach?",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #6]"
  },
  {
    "id": "imle-0007",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important?",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #7]"
  },
  {
    "id": "imle-0008",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step?",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #8]"
  },
  {
    "id": "imle-0009",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical?",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #9]"
  },
  {
    "id": "imle-0010",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting?",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #10]"
  },
  {
    "id": "imle-0011",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 2 · Intermediate — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #11]"
  },
  {
    "id": "imle-0012",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 2 · Advanced — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #12]"
  },
  {
    "id": "imle-0013",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 2 · Basic — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #13]"
  },
  {
    "id": "imle-0014",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 2 · Intermediate — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #14]"
  },
  {
    "id": "imle-0015",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 2 · Advanced — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #15]"
  },
  {
    "id": "imle-0016",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 2 · Basic — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #16]"
  },
  {
    "id": "imle-0017",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 2 · Intermediate — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #17]"
  },
  {
    "id": "imle-0018",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 2 · Advanced — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #18]"
  },
  {
    "id": "imle-0019",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 2 · Basic — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #19]"
  },
  {
    "id": "imle-0020",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 2 · Intermediate — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #20]"
  },
  {
    "id": "imle-0021",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 3 · Advanced — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #21]"
  },
  {
    "id": "imle-0022",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 3 · Basic — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #22]"
  },
  {
    "id": "imle-0023",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 3 · Intermediate — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #23]"
  },
  {
    "id": "imle-0024",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 3 · Advanced — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #24]"
  },
  {
    "id": "imle-0025",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 3 · Basic — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #25]"
  },
  {
    "id": "imle-0026",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 3 · Intermediate — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #26]"
  },
  {
    "id": "imle-0027",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 3 · Advanced — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #27]"
  },
  {
    "id": "imle-0028",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 3 · Basic — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #28]"
  },
  {
    "id": "imle-0029",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 3 · Intermediate — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #29]"
  },
  {
    "id": "imle-0030",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 3 · Advanced — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #30]"
  },
  {
    "id": "imle-0031",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 4 · Basic — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #31]"
  },
  {
    "id": "imle-0032",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 4 · Intermediate — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #32]"
  },
  {
    "id": "imle-0033",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 4 · Advanced — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #33]"
  },
  {
    "id": "imle-0034",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 4 · Basic — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #34]"
  },
  {
    "id": "imle-0035",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 4 · Intermediate — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #35]"
  },
  {
    "id": "imle-0036",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 4 · Advanced — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #36]"
  },
  {
    "id": "imle-0037",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 4 · Basic — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #37]"
  },
  {
    "id": "imle-0038",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 4 · Intermediate — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #38]"
  },
  {
    "id": "imle-0039",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 4 · Advanced — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #39]"
  },
  {
    "id": "imle-0040",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 4 · Basic — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #40]"
  },
  {
    "id": "imle-0041",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 5 · Intermediate — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #41]"
  },
  {
    "id": "imle-0042",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 5 · Advanced — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #42]"
  },
  {
    "id": "imle-0043",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 5 · Basic — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #43]"
  },
  {
    "id": "imle-0044",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 5 · Intermediate — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #44]"
  },
  {
    "id": "imle-0045",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 5 · Advanced — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #45]"
  },
  {
    "id": "imle-0046",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 5 · Basic — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #46]"
  },
  {
    "id": "imle-0047",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 5 · Intermediate — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #47]"
  },
  {
    "id": "imle-0048",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 5 · Advanced — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #48]"
  },
  {
    "id": "imle-0049",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 5 · Basic — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #49]"
  },
  {
    "id": "imle-0050",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 5 · Intermediate — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #50]"
  },
  {
    "id": "imle-0051",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 6 · Advanced — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #51]"
  },
  {
    "id": "imle-0052",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 6 · Basic — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #52]"
  },
  {
    "id": "imle-0053",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 6 · Intermediate — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #53]"
  },
  {
    "id": "imle-0054",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 6 · Advanced — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #54]"
  },
  {
    "id": "imle-0055",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 6 · Basic — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #55]"
  },
  {
    "id": "imle-0056",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 6 · Intermediate — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #56]"
  },
  {
    "id": "imle-0057",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 6 · Advanced — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #57]"
  },
  {
    "id": "imle-0058",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 6 · Basic — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #58]"
  },
  {
    "id": "imle-0059",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 6 · Intermediate — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #59]"
  },
  {
    "id": "imle-0060",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 6 · Advanced — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #60]"
  },
  {
    "id": "imle-0061",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 7 · Basic — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #61]"
  },
  {
    "id": "imle-0062",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 7 · Intermediate — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #62]"
  },
  {
    "id": "imle-0063",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 7 · Advanced — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #63]"
  },
  {
    "id": "imle-0064",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 7 · Basic — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #64]"
  },
  {
    "id": "imle-0065",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 7 · Intermediate — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #65]"
  },
  {
    "id": "imle-0066",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 7 · Advanced — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #66]"
  },
  {
    "id": "imle-0067",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 7 · Basic — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #67]"
  },
  {
    "id": "imle-0068",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 7 · Intermediate — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #68]"
  },
  {
    "id": "imle-0069",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 7 · Advanced — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #69]"
  },
  {
    "id": "imle-0070",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 7 · Basic — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #70]"
  },
  {
    "id": "imle-0071",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 8 · Intermediate — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #71]"
  },
  {
    "id": "imle-0072",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 8 · Advanced — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #72]"
  },
  {
    "id": "imle-0073",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 8 · Basic — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #73]"
  },
  {
    "id": "imle-0074",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 8 · Intermediate — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #74]"
  },
  {
    "id": "imle-0075",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 8 · Advanced — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #75]"
  },
  {
    "id": "imle-0076",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 8 · Basic — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #76]"
  },
  {
    "id": "imle-0077",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 8 · Intermediate — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #77]"
  },
  {
    "id": "imle-0078",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 8 · Advanced — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #78]"
  },
  {
    "id": "imle-0079",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 8 · Basic — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #79]"
  },
  {
    "id": "imle-0080",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 8 · Intermediate — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #80]"
  },
  {
    "id": "imle-0081",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 9 · Advanced — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #81]"
  },
  {
    "id": "imle-0082",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 9 · Basic — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #82]"
  },
  {
    "id": "imle-0083",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 9 · Intermediate — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #83]"
  },
  {
    "id": "imle-0084",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 9 · Advanced — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #84]"
  },
  {
    "id": "imle-0085",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 9 · Basic — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #85]"
  },
  {
    "id": "imle-0086",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 9 · Intermediate — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #86]"
  },
  {
    "id": "imle-0087",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 9 · Advanced — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #87]"
  },
  {
    "id": "imle-0088",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 9 · Basic — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #88]"
  },
  {
    "id": "imle-0089",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 9 · Intermediate — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #89]"
  },
  {
    "id": "imle-0090",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 9 · Advanced — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #90]"
  },
  {
    "id": "imle-0091",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 10 · Basic — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #91]"
  },
  {
    "id": "imle-0092",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 10 · Intermediate — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #92]"
  },
  {
    "id": "imle-0093",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 10 · Advanced — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #93]"
  },
  {
    "id": "imle-0094",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 10 · Basic — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #94]"
  },
  {
    "id": "imle-0095",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 10 · Intermediate — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #95]"
  },
  {
    "id": "imle-0096",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 10 · Advanced — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #96]"
  },
  {
    "id": "imle-0097",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 10 · Basic — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #97]"
  },
  {
    "id": "imle-0098",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 10 · Intermediate — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #98]"
  },
  {
    "id": "imle-0099",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 10 · Advanced — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #99]"
  },
  {
    "id": "imle-0100",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 10 · Basic — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #100]"
  },
  {
    "id": "imle-0101",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 11 · Intermediate — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #101]"
  },
  {
    "id": "imle-0102",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 11 · Advanced — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #102]"
  },
  {
    "id": "imle-0103",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 11 · Basic — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #103]"
  },
  {
    "id": "imle-0104",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 11 · Intermediate — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #104]"
  },
  {
    "id": "imle-0105",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 11 · Advanced — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #105]"
  },
  {
    "id": "imle-0106",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 11 · Basic — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #106]"
  },
  {
    "id": "imle-0107",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 11 · Intermediate — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #107]"
  },
  {
    "id": "imle-0108",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 11 · Advanced — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #108]"
  },
  {
    "id": "imle-0109",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 11 · Basic — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #109]"
  },
  {
    "id": "imle-0110",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 11 · Intermediate — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #110]"
  },
  {
    "id": "imle-0111",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 12 · Advanced — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #111]"
  },
  {
    "id": "imle-0112",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 12 · Basic — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #112]"
  },
  {
    "id": "imle-0113",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 12 · Intermediate — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #113]"
  },
  {
    "id": "imle-0114",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 12 · Advanced — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #114]"
  },
  {
    "id": "imle-0115",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 12 · Basic — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #115]"
  },
  {
    "id": "imle-0116",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 12 · Intermediate — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #116]"
  },
  {
    "id": "imle-0117",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 12 · Advanced — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #117]"
  },
  {
    "id": "imle-0118",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 12 · Basic — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #118]"
  },
  {
    "id": "imle-0119",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 12 · Intermediate — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #119]"
  },
  {
    "id": "imle-0120",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 12 · Advanced — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #120]"
  },
  {
    "id": "imle-0121",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 13 · Basic — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #121]"
  },
  {
    "id": "imle-0122",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 13 · Intermediate — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #122]"
  },
  {
    "id": "imle-0123",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 13 · Advanced — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #123]"
  },
  {
    "id": "imle-0124",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 13 · Basic — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #124]"
  },
  {
    "id": "imle-0125",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 13 · Intermediate — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #125]"
  },
  {
    "id": "imle-0126",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 13 · Advanced — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #126]"
  },
  {
    "id": "imle-0127",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 13 · Basic — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #127]"
  },
  {
    "id": "imle-0128",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 13 · Intermediate — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #128]"
  },
  {
    "id": "imle-0129",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 13 · Advanced — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #129]"
  },
  {
    "id": "imle-0130",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 13 · Basic — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #130]"
  },
  {
    "id": "imle-0131",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 14 · Intermediate — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #131]"
  },
  {
    "id": "imle-0132",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 14 · Advanced — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #132]"
  },
  {
    "id": "imle-0133",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 14 · Basic — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #133]"
  },
  {
    "id": "imle-0134",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 14 · Intermediate — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #134]"
  },
  {
    "id": "imle-0135",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 14 · Advanced — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #135]"
  },
  {
    "id": "imle-0136",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 14 · Basic — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #136]"
  },
  {
    "id": "imle-0137",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 14 · Intermediate — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #137]"
  },
  {
    "id": "imle-0138",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 14 · Advanced — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #138]"
  },
  {
    "id": "imle-0139",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 14 · Basic — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #139]"
  },
  {
    "id": "imle-0140",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 14 · Intermediate — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #140]"
  },
  {
    "id": "imle-0141",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 15 · Advanced — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #141]"
  },
  {
    "id": "imle-0142",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 15 · Basic — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #142]"
  },
  {
    "id": "imle-0143",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 15 · Intermediate — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #143]"
  },
  {
    "id": "imle-0144",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 15 · Advanced — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #144]"
  },
  {
    "id": "imle-0145",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 15 · Basic — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #145]"
  },
  {
    "id": "imle-0146",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 15 · Intermediate — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #146]"
  },
  {
    "id": "imle-0147",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 15 · Advanced — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #147]"
  },
  {
    "id": "imle-0148",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 15 · Basic — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #148]"
  },
  {
    "id": "imle-0149",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 15 · Intermediate — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #149]"
  },
  {
    "id": "imle-0150",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 15 · Advanced — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #150]"
  },
  {
    "id": "imle-0151",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 16 · Basic — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #151]"
  },
  {
    "id": "imle-0152",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 16 · Intermediate — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #152]"
  },
  {
    "id": "imle-0153",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 16 · Advanced — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #153]"
  },
  {
    "id": "imle-0154",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 16 · Basic — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #154]"
  },
  {
    "id": "imle-0155",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 16 · Intermediate — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #155]"
  },
  {
    "id": "imle-0156",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 16 · Advanced — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #156]"
  },
  {
    "id": "imle-0157",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 16 · Basic — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #157]"
  },
  {
    "id": "imle-0158",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 16 · Intermediate — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #158]"
  },
  {
    "id": "imle-0159",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 16 · Advanced — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #159]"
  },
  {
    "id": "imle-0160",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 16 · Basic — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #160]"
  },
  {
    "id": "imle-0161",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 17 · Intermediate — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #161]"
  },
  {
    "id": "imle-0162",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 17 · Advanced — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #162]"
  },
  {
    "id": "imle-0163",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 17 · Basic — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #163]"
  },
  {
    "id": "imle-0164",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 17 · Intermediate — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #164]"
  },
  {
    "id": "imle-0165",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 17 · Advanced — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #165]"
  },
  {
    "id": "imle-0166",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 17 · Basic — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #166]"
  },
  {
    "id": "imle-0167",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 17 · Intermediate — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #167]"
  },
  {
    "id": "imle-0168",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 17 · Advanced — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #168]"
  },
  {
    "id": "imle-0169",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 17 · Basic — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #169]"
  },
  {
    "id": "imle-0170",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 17 · Intermediate — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #170]"
  },
  {
    "id": "imle-0171",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 18 · Advanced — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #171]"
  },
  {
    "id": "imle-0172",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 18 · Basic — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #172]"
  },
  {
    "id": "imle-0173",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 18 · Intermediate — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #173]"
  },
  {
    "id": "imle-0174",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 18 · Advanced — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #174]"
  },
  {
    "id": "imle-0175",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 18 · Basic — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #175]"
  },
  {
    "id": "imle-0176",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 18 · Intermediate — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #176]"
  },
  {
    "id": "imle-0177",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 18 · Advanced — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #177]"
  },
  {
    "id": "imle-0178",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 18 · Basic — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #178]"
  },
  {
    "id": "imle-0179",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 18 · Intermediate — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #179]"
  },
  {
    "id": "imle-0180",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 18 · Advanced — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #180]"
  },
  {
    "id": "imle-0181",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 19 · Basic — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #181]"
  },
  {
    "id": "imle-0182",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 19 · Intermediate — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #182]"
  },
  {
    "id": "imle-0183",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 19 · Advanced — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #183]"
  },
  {
    "id": "imle-0184",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 19 · Basic — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #184]"
  },
  {
    "id": "imle-0185",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 19 · Intermediate — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #185]"
  },
  {
    "id": "imle-0186",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 19 · Advanced — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #186]"
  },
  {
    "id": "imle-0187",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 19 · Basic — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #187]"
  },
  {
    "id": "imle-0188",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 19 · Intermediate — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #188]"
  },
  {
    "id": "imle-0189",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 19 · Advanced — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #189]"
  },
  {
    "id": "imle-0190",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 19 · Basic — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #190]"
  },
  {
    "id": "imle-0191",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 68-year-old man on an ACE inhibitor and loop diuretic presents with 3 days of nausea, poor oral intake, and oliguria. Creatinine rises from 1.0 to 2.5 mg/dL with FENa <1%. What is the best initial step? [IMLE Set 20 · Intermediate — Topic: Acute Kidney Injury (AKI)]",
    "options": [
      "Volume repletion with isotonic IV fluids and holding nephrotoxic/hemodynamic offenders",
      "Emergent dialysis prior to volume assessment",
      "Empirical pulse corticosteroids",
      "Immediate renal biopsy"
    ],
    "answer": 0,
    "explanation": "Pre-renal hypoperfusion/medications are addressed first with volume restoration and holding offending agents when safe. [Topic: Acute Kidney Injury (AKI) | IMLE #191]"
  },
  {
    "id": "imle-0192",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A previously healthy 39-year-old man presents with fever, cough with purulent sputum, and right lower lobe infiltrate on chest radiograph without hypoxia or sepsis. What is appropriate outpatient management? [IMLE Set 20 · Advanced — Topic: Community-Acquired Pneumonia]",
    "options": [
      "Targeted oral antimicrobial therapy per guideline",
      "Immediate ICU admission and mechanical ventilation",
      "Antifungal therapy alone",
      "Observation for 3 weeks without treatment"
    ],
    "answer": 0,
    "explanation": "Uncomplicated outpatient CAP without red flags is managed with oral antibiotics. [Topic: Community-Acquired Pneumonia | IMLE #192]"
  },
  {
    "id": "imle-0193",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 23-year-old man with type 1 diabetes presents with vomiting, abdominal pain, Kussmaul breathing, glucose 450 mg/dL, pH 7.20, HCO3 10 mEq/L, and ketonemia. What is the initial priority? [IMLE Set 20 · Basic — Topic: Diabetic Ketoacidosis (DKA)]",
    "options": [
      "Isotonic IV fluid resuscitation and IV regular insulin with potassium monitoring/repletion",
      "Basal insulin only without IV fluids",
      "Oral sodium bicarbonate alone",
      "Immediate discharge after antiemetic"
    ],
    "answer": 0,
    "explanation": "DKA requires isotonic IV fluids, insulin infusion, and careful electrolyte (especially potassium) management. [Topic: Diabetic Ketoacidosis (DKA) | IMLE #193]"
  },
  {
    "id": "imle-0194",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 61-year-old man with CKD stage 4 has serum potassium 6.7 mEq/L and peaked T waves on ECG. Which agent stabilizes cardiac membranes immediately? [IMLE Set 20 · Intermediate — Topic: Hyperkalemia Stabilization]",
    "options": [
      "Intravenous calcium gluconate (or calcium chloride)",
      "Oral kayexalate alone",
      "High-potassium diet",
      "Subcutaneous epinephrine"
    ],
    "answer": 0,
    "explanation": "IV calcium rapidly antagonizes membrane excitability when ECG changes are present. [Topic: Hyperkalemia Stabilization | IMLE #194]"
  },
  {
    "id": "imle-0195",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 70-year-old woman presents with new-onset atrial fibrillation at 126 bpm, BP 134/80 mmHg, and no acute heart failure or pre-excitation. What should be addressed? [IMLE Set 20 · Advanced — Topic: Atrial Fibrillation Initial Step]",
    "options": [
      "Rate/rhythm control and thromboembolic risk (CHA2DS2-VASc) anticoagulation evaluation",
      "Immediate cardioversion without assessing stroke risk/anticoagulation window",
      "Stopping all medications without follow-up",
      "Routine lumbar puncture"
    ],
    "answer": 0,
    "explanation": "Stable AF management centers on symptom/rate control and stroke prevention assessment. [Topic: Atrial Fibrillation Initial Step | IMLE #195]"
  },
  {
    "id": "imle-0196",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 54-year-old man presents with BP 214/118 mmHg, blurred vision, and papilledema. What defines the management approach? [IMLE Set 20 · Basic — Topic: Hypertensive Emergency vs Urgency]",
    "options": [
      "Controlled IV antihypertensive titrated in a monitored setting to prevent organ ischemia",
      "Dropping BP to 90/60 mmHg within 5 minutes",
      "Ignoring blood pressure because he has no chest pain",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Hypertensive emergency involves acute end-organ damage and requires controlled BP reduction rather than precipitous drops. [Topic: Hypertensive Emergency vs Urgency | IMLE #196]"
  },
  {
    "id": "imle-0197",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 58-year-old man is found to have microcytic hypochromic anemia with low ferritin and low iron saturation. What evaluation is important? [IMLE Set 20 · Intermediate — Topic: Iron Deficiency Anemia Workup]",
    "options": [
      "Investigate source of blood loss, including gastrointestinal evaluation when indicated",
      "Assume normal aging and do nothing",
      "Start high-dose erythropoietin without iron",
      "Perform bone marrow transplant immediately"
    ],
    "answer": 0,
    "explanation": "Iron deficiency in adult men or postmenopausal women warrants evaluating occult GI bleeding/malabsorption. [Topic: Iron Deficiency Anemia Workup | IMLE #197]"
  },
  {
    "id": "imle-0198",
    "specialty": "Internal Medicine",
    "difficulty": "Advanced",
    "question": "A 46-year-old woman 2 weeks post-orthopedic surgery develops sudden pleuritic chest pain, dyspnea, and tachycardia; she is hemodynamically stable. What is a standard diagnostic step? [IMLE Set 20 · Advanced — Topic: Acute Pulmonary Embolism]",
    "options": [
      "Risk stratification (e.g., Wells/PERC), D-dimer if appropriate, and CT pulmonary angiography (CTPA)",
      "Routine abdominal X-ray",
      "Oral antihistamine",
      "Discharge without assessment"
    ],
    "answer": 0,
    "explanation": "Suspected PE in a stable patient is evaluated using clinical probability, D-dimer when indicated, and CTPA. [Topic: Acute Pulmonary Embolism | IMLE #198]"
  },
  {
    "id": "imle-0199",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 32-year-old woman with untreated Graves disease presents with fever 39.6°C, tachycardia 158 bpm, agitation, and vomiting. What is critical? [IMLE Set 20 · Basic — Topic: Thyroid Storm Recognition]",
    "options": [
      "Recognize thyroid storm as an endocrine emergency requiring urgent multimodal therapy and supportive care",
      "Reassure that mild anxiety and fever are benign",
      "Give a single tablet of levothyroxine",
      "Delay care for 2 weeks"
    ],
    "answer": 0,
    "explanation": "Thyroid storm is life-threatening and requires prompt recognition and inpatient/ICU-level multimodal treatment. [Topic: Thyroid Storm Recognition | IMLE #199]"
  },
  {
    "id": "imle-0200",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 66-year-old patient has serum sodium 122 mEq/L with mild nausea and confusion. What is key before correcting? [IMLE Set 20 · Intermediate — Topic: Hyponatremia Evaluation]",
    "options": [
      "Assess volume status, symptom severity, and chronicity to guide safe sodium correction rate",
      "Correct sodium by 25 mEq/L in the first 4 hours",
      "Give large volumes of hypotonic free water",
      "Ignore sodium levels"
    ],
    "answer": 0,
    "explanation": "Safe hyponatremia management depends on severity/symptoms and avoiding overly rapid correction that risks osmotic demyelination. [Topic: Hyponatremia Evaluation | IMLE #200]"
  },
  {
    "id": "imle-0201",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment?",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #201]"
  },
  {
    "id": "imle-0202",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action?",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #202]"
  },
  {
    "id": "imle-0203",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management?",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #203]"
  },
  {
    "id": "imle-0204",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care?",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #204]"
  },
  {
    "id": "imle-0205",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern?",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #205]"
  },
  {
    "id": "imle-0206",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority?",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #206]"
  },
  {
    "id": "imle-0207",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management?",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #207]"
  },
  {
    "id": "imle-0208",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated?",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #208]"
  },
  {
    "id": "imle-0209",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent?",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #209]"
  },
  {
    "id": "imle-0210",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority?",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #210]"
  },
  {
    "id": "imle-0211",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 2 · Basic — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #211]"
  },
  {
    "id": "imle-0212",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 2 · Intermediate — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #212]"
  },
  {
    "id": "imle-0213",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 2 · Advanced — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #213]"
  },
  {
    "id": "imle-0214",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 2 · Basic — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #214]"
  },
  {
    "id": "imle-0215",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 2 · Intermediate — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #215]"
  },
  {
    "id": "imle-0216",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 2 · Advanced — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #216]"
  },
  {
    "id": "imle-0217",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 2 · Basic — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #217]"
  },
  {
    "id": "imle-0218",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 2 · Intermediate — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #218]"
  },
  {
    "id": "imle-0219",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 2 · Advanced — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #219]"
  },
  {
    "id": "imle-0220",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 2 · Basic — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #220]"
  },
  {
    "id": "imle-0221",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 3 · Intermediate — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #221]"
  },
  {
    "id": "imle-0222",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 3 · Advanced — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #222]"
  },
  {
    "id": "imle-0223",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 3 · Basic — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #223]"
  },
  {
    "id": "imle-0224",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 3 · Intermediate — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #224]"
  },
  {
    "id": "imle-0225",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 3 · Advanced — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #225]"
  },
  {
    "id": "imle-0226",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 3 · Basic — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #226]"
  },
  {
    "id": "imle-0227",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 3 · Intermediate — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #227]"
  },
  {
    "id": "imle-0228",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 3 · Advanced — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #228]"
  },
  {
    "id": "imle-0229",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 3 · Basic — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #229]"
  },
  {
    "id": "imle-0230",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 3 · Intermediate — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #230]"
  },
  {
    "id": "imle-0231",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 4 · Advanced — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #231]"
  },
  {
    "id": "imle-0232",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 4 · Basic — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #232]"
  },
  {
    "id": "imle-0233",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 4 · Intermediate — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #233]"
  },
  {
    "id": "imle-0234",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 4 · Advanced — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #234]"
  },
  {
    "id": "imle-0235",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 4 · Basic — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #235]"
  },
  {
    "id": "imle-0236",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 4 · Intermediate — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #236]"
  },
  {
    "id": "imle-0237",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 4 · Advanced — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #237]"
  },
  {
    "id": "imle-0238",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 4 · Basic — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #238]"
  },
  {
    "id": "imle-0239",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 4 · Intermediate — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #239]"
  },
  {
    "id": "imle-0240",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 4 · Advanced — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #240]"
  },
  {
    "id": "imle-0241",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 5 · Basic — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #241]"
  },
  {
    "id": "imle-0242",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 5 · Intermediate — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #242]"
  },
  {
    "id": "imle-0243",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 5 · Advanced — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #243]"
  },
  {
    "id": "imle-0244",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 5 · Basic — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #244]"
  },
  {
    "id": "imle-0245",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 5 · Intermediate — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #245]"
  },
  {
    "id": "imle-0246",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 5 · Advanced — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #246]"
  },
  {
    "id": "imle-0247",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 5 · Basic — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #247]"
  },
  {
    "id": "imle-0248",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 5 · Intermediate — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #248]"
  },
  {
    "id": "imle-0249",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 5 · Advanced — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #249]"
  },
  {
    "id": "imle-0250",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 5 · Basic — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #250]"
  },
  {
    "id": "imle-0251",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 6 · Intermediate — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #251]"
  },
  {
    "id": "imle-0252",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 6 · Advanced — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #252]"
  },
  {
    "id": "imle-0253",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 6 · Basic — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #253]"
  },
  {
    "id": "imle-0254",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 6 · Intermediate — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #254]"
  },
  {
    "id": "imle-0255",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 6 · Advanced — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #255]"
  },
  {
    "id": "imle-0256",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 6 · Basic — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #256]"
  },
  {
    "id": "imle-0257",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 6 · Intermediate — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #257]"
  },
  {
    "id": "imle-0258",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 6 · Advanced — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #258]"
  },
  {
    "id": "imle-0259",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 6 · Basic — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #259]"
  },
  {
    "id": "imle-0260",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 6 · Intermediate — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #260]"
  },
  {
    "id": "imle-0261",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 7 · Advanced — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #261]"
  },
  {
    "id": "imle-0262",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 7 · Basic — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #262]"
  },
  {
    "id": "imle-0263",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 7 · Intermediate — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #263]"
  },
  {
    "id": "imle-0264",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 7 · Advanced — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #264]"
  },
  {
    "id": "imle-0265",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 7 · Basic — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #265]"
  },
  {
    "id": "imle-0266",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 7 · Intermediate — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #266]"
  },
  {
    "id": "imle-0267",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 7 · Advanced — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #267]"
  },
  {
    "id": "imle-0268",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 7 · Basic — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #268]"
  },
  {
    "id": "imle-0269",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 7 · Intermediate — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #269]"
  },
  {
    "id": "imle-0270",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 7 · Advanced — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #270]"
  },
  {
    "id": "imle-0271",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 8 · Basic — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #271]"
  },
  {
    "id": "imle-0272",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 8 · Intermediate — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #272]"
  },
  {
    "id": "imle-0273",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 8 · Advanced — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #273]"
  },
  {
    "id": "imle-0274",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 8 · Basic — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #274]"
  },
  {
    "id": "imle-0275",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 8 · Intermediate — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #275]"
  },
  {
    "id": "imle-0276",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 8 · Advanced — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #276]"
  },
  {
    "id": "imle-0277",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 8 · Basic — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #277]"
  },
  {
    "id": "imle-0278",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 8 · Intermediate — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #278]"
  },
  {
    "id": "imle-0279",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 8 · Advanced — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #279]"
  },
  {
    "id": "imle-0280",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 8 · Basic — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #280]"
  },
  {
    "id": "imle-0281",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 9 · Intermediate — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #281]"
  },
  {
    "id": "imle-0282",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 9 · Advanced — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #282]"
  },
  {
    "id": "imle-0283",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 9 · Basic — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #283]"
  },
  {
    "id": "imle-0284",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 9 · Intermediate — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #284]"
  },
  {
    "id": "imle-0285",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 9 · Advanced — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #285]"
  },
  {
    "id": "imle-0286",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 9 · Basic — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #286]"
  },
  {
    "id": "imle-0287",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 9 · Intermediate — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #287]"
  },
  {
    "id": "imle-0288",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 9 · Advanced — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #288]"
  },
  {
    "id": "imle-0289",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 9 · Basic — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #289]"
  },
  {
    "id": "imle-0290",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 9 · Intermediate — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #290]"
  },
  {
    "id": "imle-0291",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 10 · Advanced — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #291]"
  },
  {
    "id": "imle-0292",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 10 · Basic — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #292]"
  },
  {
    "id": "imle-0293",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 10 · Intermediate — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #293]"
  },
  {
    "id": "imle-0294",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 10 · Advanced — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #294]"
  },
  {
    "id": "imle-0295",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 10 · Basic — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #295]"
  },
  {
    "id": "imle-0296",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 10 · Intermediate — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #296]"
  },
  {
    "id": "imle-0297",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 10 · Advanced — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #297]"
  },
  {
    "id": "imle-0298",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 10 · Basic — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #298]"
  },
  {
    "id": "imle-0299",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 10 · Intermediate — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #299]"
  },
  {
    "id": "imle-0300",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 10 · Advanced — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #300]"
  },
  {
    "id": "imle-0301",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 11 · Basic — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #301]"
  },
  {
    "id": "imle-0302",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 11 · Intermediate — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #302]"
  },
  {
    "id": "imle-0303",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 11 · Advanced — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #303]"
  },
  {
    "id": "imle-0304",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 11 · Basic — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #304]"
  },
  {
    "id": "imle-0305",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 11 · Intermediate — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #305]"
  },
  {
    "id": "imle-0306",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 11 · Advanced — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #306]"
  },
  {
    "id": "imle-0307",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 11 · Basic — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #307]"
  },
  {
    "id": "imle-0308",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 11 · Intermediate — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #308]"
  },
  {
    "id": "imle-0309",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 11 · Advanced — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #309]"
  },
  {
    "id": "imle-0310",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 11 · Basic — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #310]"
  },
  {
    "id": "imle-0311",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 12 · Intermediate — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #311]"
  },
  {
    "id": "imle-0312",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 12 · Advanced — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #312]"
  },
  {
    "id": "imle-0313",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 12 · Basic — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #313]"
  },
  {
    "id": "imle-0314",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 12 · Intermediate — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #314]"
  },
  {
    "id": "imle-0315",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 12 · Advanced — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #315]"
  },
  {
    "id": "imle-0316",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 12 · Basic — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #316]"
  },
  {
    "id": "imle-0317",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 12 · Intermediate — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #317]"
  },
  {
    "id": "imle-0318",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 12 · Advanced — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #318]"
  },
  {
    "id": "imle-0319",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 12 · Basic — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #319]"
  },
  {
    "id": "imle-0320",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 12 · Intermediate — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #320]"
  },
  {
    "id": "imle-0321",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 13 · Advanced — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #321]"
  },
  {
    "id": "imle-0322",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 13 · Basic — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #322]"
  },
  {
    "id": "imle-0323",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 13 · Intermediate — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #323]"
  },
  {
    "id": "imle-0324",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 13 · Advanced — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #324]"
  },
  {
    "id": "imle-0325",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 13 · Basic — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #325]"
  },
  {
    "id": "imle-0326",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 13 · Intermediate — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #326]"
  },
  {
    "id": "imle-0327",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 13 · Advanced — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #327]"
  },
  {
    "id": "imle-0328",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 13 · Basic — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #328]"
  },
  {
    "id": "imle-0329",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 13 · Intermediate — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #329]"
  },
  {
    "id": "imle-0330",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 13 · Advanced — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #330]"
  },
  {
    "id": "imle-0331",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 14 · Basic — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #331]"
  },
  {
    "id": "imle-0332",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 14 · Intermediate — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #332]"
  },
  {
    "id": "imle-0333",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 14 · Advanced — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #333]"
  },
  {
    "id": "imle-0334",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 14 · Basic — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #334]"
  },
  {
    "id": "imle-0335",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 14 · Intermediate — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #335]"
  },
  {
    "id": "imle-0336",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 14 · Advanced — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #336]"
  },
  {
    "id": "imle-0337",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 14 · Basic — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #337]"
  },
  {
    "id": "imle-0338",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 14 · Intermediate — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #338]"
  },
  {
    "id": "imle-0339",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 14 · Advanced — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #339]"
  },
  {
    "id": "imle-0340",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 14 · Basic — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #340]"
  },
  {
    "id": "imle-0341",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 15 · Intermediate — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #341]"
  },
  {
    "id": "imle-0342",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 15 · Advanced — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #342]"
  },
  {
    "id": "imle-0343",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 15 · Basic — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #343]"
  },
  {
    "id": "imle-0344",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 15 · Intermediate — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #344]"
  },
  {
    "id": "imle-0345",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 15 · Advanced — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #345]"
  },
  {
    "id": "imle-0346",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 15 · Basic — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #346]"
  },
  {
    "id": "imle-0347",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 15 · Intermediate — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #347]"
  },
  {
    "id": "imle-0348",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 15 · Advanced — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #348]"
  },
  {
    "id": "imle-0349",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 15 · Basic — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #349]"
  },
  {
    "id": "imle-0350",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 15 · Intermediate — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #350]"
  },
  {
    "id": "imle-0351",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 16 · Advanced — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #351]"
  },
  {
    "id": "imle-0352",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 16 · Basic — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #352]"
  },
  {
    "id": "imle-0353",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 16 · Intermediate — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #353]"
  },
  {
    "id": "imle-0354",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 16 · Advanced — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #354]"
  },
  {
    "id": "imle-0355",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 16 · Basic — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #355]"
  },
  {
    "id": "imle-0356",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 16 · Intermediate — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #356]"
  },
  {
    "id": "imle-0357",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 16 · Advanced — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #357]"
  },
  {
    "id": "imle-0358",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 16 · Basic — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #358]"
  },
  {
    "id": "imle-0359",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 16 · Intermediate — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #359]"
  },
  {
    "id": "imle-0360",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 16 · Advanced — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #360]"
  },
  {
    "id": "imle-0361",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 17 · Basic — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #361]"
  },
  {
    "id": "imle-0362",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 17 · Intermediate — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #362]"
  },
  {
    "id": "imle-0363",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 17 · Advanced — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #363]"
  },
  {
    "id": "imle-0364",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 17 · Basic — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #364]"
  },
  {
    "id": "imle-0365",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 17 · Intermediate — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #365]"
  },
  {
    "id": "imle-0366",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 17 · Advanced — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #366]"
  },
  {
    "id": "imle-0367",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 17 · Basic — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #367]"
  },
  {
    "id": "imle-0368",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 17 · Intermediate — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #368]"
  },
  {
    "id": "imle-0369",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 17 · Advanced — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #369]"
  },
  {
    "id": "imle-0370",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 17 · Basic — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #370]"
  },
  {
    "id": "imle-0371",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 18 · Intermediate — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #371]"
  },
  {
    "id": "imle-0372",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 18 · Advanced — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #372]"
  },
  {
    "id": "imle-0373",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 18 · Basic — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #373]"
  },
  {
    "id": "imle-0374",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 18 · Intermediate — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #374]"
  },
  {
    "id": "imle-0375",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 18 · Advanced — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #375]"
  },
  {
    "id": "imle-0376",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 18 · Basic — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #376]"
  },
  {
    "id": "imle-0377",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 18 · Intermediate — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #377]"
  },
  {
    "id": "imle-0378",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 18 · Advanced — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #378]"
  },
  {
    "id": "imle-0379",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 18 · Basic — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #379]"
  },
  {
    "id": "imle-0380",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 18 · Intermediate — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #380]"
  },
  {
    "id": "imle-0381",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 19 · Advanced — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #381]"
  },
  {
    "id": "imle-0382",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 19 · Basic — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #382]"
  },
  {
    "id": "imle-0383",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 19 · Intermediate — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #383]"
  },
  {
    "id": "imle-0384",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 19 · Advanced — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #384]"
  },
  {
    "id": "imle-0385",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 19 · Basic — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #385]"
  },
  {
    "id": "imle-0386",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 19 · Intermediate — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #386]"
  },
  {
    "id": "imle-0387",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 19 · Advanced — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #387]"
  },
  {
    "id": "imle-0388",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 19 · Basic — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #388]"
  },
  {
    "id": "imle-0389",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 19 · Intermediate — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #389]"
  },
  {
    "id": "imle-0390",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 19 · Advanced — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #390]"
  },
  {
    "id": "imle-0391",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 20-year-old man presents with periumbilical pain migrating to the RLQ, anorexia, low fever, and RLQ tenderness/rebound. After fluids and analgesia, what is definitive treatment? [IMLE Set 20 · Basic — Topic: Acute Appendicitis]",
    "options": [
      "Surgical evaluation and appendectomy",
      "2 weeks of observation without surgical consult",
      "Proton pump inhibitor therapy alone",
      "Colonoscopy"
    ],
    "answer": 0,
    "explanation": "Acute appendicitis is treated surgically with appendectomy alongside supportive care. [Topic: Acute Appendicitis | IMLE #391]"
  },
  {
    "id": "imle-0392",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A trauma patient arrives with severe dyspnea, absent left breath sounds, tracheal shift to the right, and hypotension. What is the immediate action? [IMLE Set 20 · Intermediate — Topic: Tension Pneumothorax]",
    "options": [
      "Immediate needle/finger decompression followed by tube thoracostomy",
      "Wait for an outpatient MRI",
      "Oral analgesics only",
      "Elective endoscopy"
    ],
    "answer": 0,
    "explanation": "Tension pneumothorax requires immediate decompression based on clinical signs. [Topic: Tension Pneumothorax | IMLE #392]"
  },
  {
    "id": "imle-0393",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 47-year-old woman presents with RUQ pain, fever, leukocytosis, positive Murphy sign, and ultrasound showing gallstones with wall thickening. What is standard management? [IMLE Set 20 · Advanced — Topic: Acute Cholecystitis]",
    "options": [
      "IV fluids, analgesia, antibiotics when indicated, and cholecystectomy",
      "Laxatives and discharge",
      "Topical cream",
      "Tonsillectomy"
    ],
    "answer": 0,
    "explanation": "Acute cholecystitis is managed with supportive care/antibiotics and cholecystectomy. [Topic: Acute Cholecystitis | IMLE #393]"
  },
  {
    "id": "imle-0394",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A patient with prior abdominal surgery presents with colicky pain, bilious vomiting, distension, and air-fluid levels on X-ray without peritonitis. What is initial care? [IMLE Set 20 · Basic — Topic: Small Bowel Obstruction]",
    "options": [
      "NPO, IV fluids/electrolytes, and nasogastric decompression with close monitoring",
      "Bulk laxatives",
      "Heavy oral meal",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uncomplicated SBO starts with bowel rest, IV hydration/electrolytes, and NG decompression while watching for ischemia. [Topic: Small Bowel Obstruction | IMLE #394]"
  },
  {
    "id": "imle-0395",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "A patient with a groin hernia develops sudden severe pain, tenderness, redness over the bulge, and irreducibility. What is the concern? [IMLE Set 20 · Intermediate — Topic: Strangulated Hernia]",
    "options": [
      "Strangulation/ischemia requiring urgent surgical repair",
      "Harmless skin tag",
      "Routine seasonal allergy",
      "No follow-up needed"
    ],
    "answer": 0,
    "explanation": "Painful, tender, or ischemic changes in a hernia indicate potential strangulation requiring urgent surgery. [Topic: Strangulated Hernia | IMLE #395]"
  },
  {
    "id": "imle-0396",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A 62-year-old man presents with hematemesis and melena, BP 96/60 mmHg, HR 118 bpm. What is the first priority? [IMLE Set 20 · Advanced — Topic: Upper GI Bleed Initial Step]",
    "options": [
      "Airway/breathing/circulation resuscitation, large-bore IV access, fluids/transfusion as indicated, and GI/endoscopy planning",
      "Discharge home with antacids",
      "Elective dental referral",
      "Wait 48 hours before checking vitals"
    ],
    "answer": 0,
    "explanation": "Hemodynamic resuscitation and stabilization precede and accompany diagnostic endoscopy in acute GI bleeding. [Topic: Upper GI Bleed Initial Step | IMLE #396]"
  },
  {
    "id": "imle-0397",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 44-year-old man presents with epigastric pain radiating to the back, nausea, and lipase >3x upper limit of normal. What is early supportive management? [IMLE Set 20 · Basic — Topic: Acute Pancreatitis]",
    "options": [
      "IV fluid resuscitation, pain control, and early enteral nutrition as tolerated",
      "Immediate routine antibiotics without infection",
      "Withholding all nutrition for 3 weeks",
      "Emergency appendectomy"
    ],
    "answer": 0,
    "explanation": "Early management of acute pancreatitis focuses on aggressive/appropriate fluid resuscitation, analgesia, and nutritional support. [Topic: Acute Pancreatitis | IMLE #397]"
  },
  {
    "id": "imle-0398",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Intermediate",
    "question": "On postoperative day 2 after laparotomy, a patient develops fever 38.4°C and mild tachycardia. What should be evaluated? [IMLE Set 20 · Intermediate — Topic: Post-Op Fever & Wound Check]",
    "options": [
      "Focused exam of lungs, surgical wound, IV sites, urine, and mobility/DVT risk",
      "Assume fever is always impossible post-op",
      "Remove all sutures immediately regardless of wound",
      "Discharge without exam"
    ],
    "answer": 0,
    "explanation": "Postoperative fever calls for a structured check of common sources (atelectasis/pneumonia, UTI, wound, catheter, VTE). [Topic: Post-Op Fever & Wound Check | IMLE #398]"
  },
  {
    "id": "imle-0399",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Advanced",
    "question": "A diabetic patient has rapidly spreading limb pain out of proportion to exam, swelling, bullae, and systemic toxicity. What is urgent? [IMLE Set 20 · Advanced — Topic: Necrotizing Soft Tissue Infection]",
    "options": [
      "Emergent surgical debridement and broad-spectrum IV antibiotics",
      "Oral ibuprofen and home rest",
      "Warm compress only",
      "3-month follow-up"
    ],
    "answer": 0,
    "explanation": "Necrotizing soft tissue infection is a surgical emergency requiring immediate operative debridement and IV antibiotics. [Topic: Necrotizing Soft Tissue Infection | IMLE #399]"
  },
  {
    "id": "imle-0400",
    "specialty": "General Surgery & Trauma",
    "difficulty": "Basic",
    "question": "A 15-year-old boy presents with sudden severe unilateral scrotal pain, nausea, high-riding testis, and absent cremasteric reflex. What is the priority? [IMLE Set 20 · Basic — Topic: Testicular Torsion]",
    "options": [
      "Urgent urologic/surgical evaluation for detorsion/exploration to save the testis",
      "Oral antibiotics and discharge for a week",
      "Heat pack at home",
      "Routine eye exam"
    ],
    "answer": 0,
    "explanation": "Testicular torsion is time-critical; prompt surgical detorsion/exploration is essential to preserve testicular viability. [Topic: Testicular Torsion | IMLE #400]"
  },
  {
    "id": "imle-0401",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management?",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #401]"
  },
  {
    "id": "imle-0402",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate?",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #402]"
  },
  {
    "id": "imle-0403",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line?",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #403]"
  },
  {
    "id": "imle-0404",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration?",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #404]"
  },
  {
    "id": "imle-0405",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery?",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #405]"
  },
  {
    "id": "imle-0406",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment?",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #406]"
  },
  {
    "id": "imle-0407",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached?",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #407]"
  },
  {
    "id": "imle-0408",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored?",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #408]"
  },
  {
    "id": "imle-0409",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important?",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #409]"
  },
  {
    "id": "imle-0410",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment?",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #410]"
  },
  {
    "id": "imle-0411",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 2 · Advanced — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #411]"
  },
  {
    "id": "imle-0412",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 2 · Basic — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #412]"
  },
  {
    "id": "imle-0413",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 2 · Intermediate — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #413]"
  },
  {
    "id": "imle-0414",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 2 · Advanced — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #414]"
  },
  {
    "id": "imle-0415",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 2 · Basic — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #415]"
  },
  {
    "id": "imle-0416",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 2 · Intermediate — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #416]"
  },
  {
    "id": "imle-0417",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 2 · Advanced — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #417]"
  },
  {
    "id": "imle-0418",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 2 · Basic — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #418]"
  },
  {
    "id": "imle-0419",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 2 · Intermediate — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #419]"
  },
  {
    "id": "imle-0420",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 2 · Advanced — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #420]"
  },
  {
    "id": "imle-0421",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 3 · Basic — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #421]"
  },
  {
    "id": "imle-0422",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 3 · Intermediate — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #422]"
  },
  {
    "id": "imle-0423",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 3 · Advanced — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #423]"
  },
  {
    "id": "imle-0424",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 3 · Basic — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #424]"
  },
  {
    "id": "imle-0425",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 3 · Intermediate — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #425]"
  },
  {
    "id": "imle-0426",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 3 · Advanced — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #426]"
  },
  {
    "id": "imle-0427",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 3 · Basic — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #427]"
  },
  {
    "id": "imle-0428",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 3 · Intermediate — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #428]"
  },
  {
    "id": "imle-0429",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 3 · Advanced — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #429]"
  },
  {
    "id": "imle-0430",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 3 · Basic — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #430]"
  },
  {
    "id": "imle-0431",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 4 · Intermediate — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #431]"
  },
  {
    "id": "imle-0432",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 4 · Advanced — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #432]"
  },
  {
    "id": "imle-0433",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 4 · Basic — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #433]"
  },
  {
    "id": "imle-0434",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 4 · Intermediate — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #434]"
  },
  {
    "id": "imle-0435",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 4 · Advanced — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #435]"
  },
  {
    "id": "imle-0436",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 4 · Basic — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #436]"
  },
  {
    "id": "imle-0437",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 4 · Intermediate — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #437]"
  },
  {
    "id": "imle-0438",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 4 · Advanced — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #438]"
  },
  {
    "id": "imle-0439",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 4 · Basic — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #439]"
  },
  {
    "id": "imle-0440",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 4 · Intermediate — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #440]"
  },
  {
    "id": "imle-0441",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 5 · Advanced — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #441]"
  },
  {
    "id": "imle-0442",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 5 · Basic — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #442]"
  },
  {
    "id": "imle-0443",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 5 · Intermediate — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #443]"
  },
  {
    "id": "imle-0444",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 5 · Advanced — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #444]"
  },
  {
    "id": "imle-0445",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 5 · Basic — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #445]"
  },
  {
    "id": "imle-0446",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 5 · Intermediate — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #446]"
  },
  {
    "id": "imle-0447",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 5 · Advanced — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #447]"
  },
  {
    "id": "imle-0448",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 5 · Basic — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #448]"
  },
  {
    "id": "imle-0449",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 5 · Intermediate — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #449]"
  },
  {
    "id": "imle-0450",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 5 · Advanced — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #450]"
  },
  {
    "id": "imle-0451",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 6 · Basic — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #451]"
  },
  {
    "id": "imle-0452",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 6 · Intermediate — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #452]"
  },
  {
    "id": "imle-0453",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 6 · Advanced — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #453]"
  },
  {
    "id": "imle-0454",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 6 · Basic — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #454]"
  },
  {
    "id": "imle-0455",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 6 · Intermediate — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #455]"
  },
  {
    "id": "imle-0456",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 6 · Advanced — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #456]"
  },
  {
    "id": "imle-0457",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 6 · Basic — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #457]"
  },
  {
    "id": "imle-0458",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 6 · Intermediate — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #458]"
  },
  {
    "id": "imle-0459",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 6 · Advanced — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #459]"
  },
  {
    "id": "imle-0460",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 6 · Basic — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #460]"
  },
  {
    "id": "imle-0461",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 7 · Intermediate — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #461]"
  },
  {
    "id": "imle-0462",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 7 · Advanced — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #462]"
  },
  {
    "id": "imle-0463",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 7 · Basic — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #463]"
  },
  {
    "id": "imle-0464",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 7 · Intermediate — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #464]"
  },
  {
    "id": "imle-0465",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 7 · Advanced — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #465]"
  },
  {
    "id": "imle-0466",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 7 · Basic — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #466]"
  },
  {
    "id": "imle-0467",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 7 · Intermediate — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #467]"
  },
  {
    "id": "imle-0468",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 7 · Advanced — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #468]"
  },
  {
    "id": "imle-0469",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 7 · Basic — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #469]"
  },
  {
    "id": "imle-0470",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 7 · Intermediate — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #470]"
  },
  {
    "id": "imle-0471",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 8 · Advanced — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #471]"
  },
  {
    "id": "imle-0472",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 8 · Basic — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #472]"
  },
  {
    "id": "imle-0473",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 8 · Intermediate — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #473]"
  },
  {
    "id": "imle-0474",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 8 · Advanced — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #474]"
  },
  {
    "id": "imle-0475",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 8 · Basic — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #475]"
  },
  {
    "id": "imle-0476",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 8 · Intermediate — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #476]"
  },
  {
    "id": "imle-0477",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 8 · Advanced — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #477]"
  },
  {
    "id": "imle-0478",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 8 · Basic — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #478]"
  },
  {
    "id": "imle-0479",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 8 · Intermediate — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #479]"
  },
  {
    "id": "imle-0480",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 8 · Advanced — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #480]"
  },
  {
    "id": "imle-0481",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 9 · Basic — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #481]"
  },
  {
    "id": "imle-0482",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 9 · Intermediate — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #482]"
  },
  {
    "id": "imle-0483",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 9 · Advanced — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #483]"
  },
  {
    "id": "imle-0484",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 9 · Basic — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #484]"
  },
  {
    "id": "imle-0485",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 9 · Intermediate — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #485]"
  },
  {
    "id": "imle-0486",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 9 · Advanced — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #486]"
  },
  {
    "id": "imle-0487",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 9 · Basic — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #487]"
  },
  {
    "id": "imle-0488",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 9 · Intermediate — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #488]"
  },
  {
    "id": "imle-0489",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 9 · Advanced — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #489]"
  },
  {
    "id": "imle-0490",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 9 · Basic — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #490]"
  },
  {
    "id": "imle-0491",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 10 · Intermediate — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #491]"
  },
  {
    "id": "imle-0492",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 10 · Advanced — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #492]"
  },
  {
    "id": "imle-0493",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 10 · Basic — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #493]"
  },
  {
    "id": "imle-0494",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 10 · Intermediate — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #494]"
  },
  {
    "id": "imle-0495",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 10 · Advanced — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #495]"
  },
  {
    "id": "imle-0496",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 10 · Basic — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #496]"
  },
  {
    "id": "imle-0497",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 10 · Intermediate — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #497]"
  },
  {
    "id": "imle-0498",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 10 · Advanced — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #498]"
  },
  {
    "id": "imle-0499",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 10 · Basic — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #499]"
  },
  {
    "id": "imle-0500",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 10 · Intermediate — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #500]"
  },
  {
    "id": "imle-0501",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 11 · Advanced — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #501]"
  },
  {
    "id": "imle-0502",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 11 · Basic — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #502]"
  },
  {
    "id": "imle-0503",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 11 · Intermediate — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #503]"
  },
  {
    "id": "imle-0504",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 11 · Advanced — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #504]"
  },
  {
    "id": "imle-0505",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 11 · Basic — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #505]"
  },
  {
    "id": "imle-0506",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 11 · Intermediate — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #506]"
  },
  {
    "id": "imle-0507",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 11 · Advanced — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #507]"
  },
  {
    "id": "imle-0508",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 11 · Basic — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #508]"
  },
  {
    "id": "imle-0509",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 11 · Intermediate — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #509]"
  },
  {
    "id": "imle-0510",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 11 · Advanced — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #510]"
  },
  {
    "id": "imle-0511",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 12 · Basic — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #511]"
  },
  {
    "id": "imle-0512",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 12 · Intermediate — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #512]"
  },
  {
    "id": "imle-0513",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 12 · Advanced — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #513]"
  },
  {
    "id": "imle-0514",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 12 · Basic — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #514]"
  },
  {
    "id": "imle-0515",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 12 · Intermediate — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #515]"
  },
  {
    "id": "imle-0516",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 12 · Advanced — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #516]"
  },
  {
    "id": "imle-0517",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 12 · Basic — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #517]"
  },
  {
    "id": "imle-0518",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 12 · Intermediate — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #518]"
  },
  {
    "id": "imle-0519",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 12 · Advanced — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #519]"
  },
  {
    "id": "imle-0520",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 12 · Basic — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #520]"
  },
  {
    "id": "imle-0521",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 13 · Intermediate — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #521]"
  },
  {
    "id": "imle-0522",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 13 · Advanced — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #522]"
  },
  {
    "id": "imle-0523",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 13 · Basic — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #523]"
  },
  {
    "id": "imle-0524",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 13 · Intermediate — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #524]"
  },
  {
    "id": "imle-0525",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 13 · Advanced — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #525]"
  },
  {
    "id": "imle-0526",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 13 · Basic — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #526]"
  },
  {
    "id": "imle-0527",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 13 · Intermediate — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #527]"
  },
  {
    "id": "imle-0528",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 13 · Advanced — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #528]"
  },
  {
    "id": "imle-0529",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 13 · Basic — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #529]"
  },
  {
    "id": "imle-0530",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 13 · Intermediate — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #530]"
  },
  {
    "id": "imle-0531",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 14 · Advanced — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #531]"
  },
  {
    "id": "imle-0532",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 14 · Basic — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #532]"
  },
  {
    "id": "imle-0533",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 14 · Intermediate — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #533]"
  },
  {
    "id": "imle-0534",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 14 · Advanced — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #534]"
  },
  {
    "id": "imle-0535",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 14 · Basic — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #535]"
  },
  {
    "id": "imle-0536",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 14 · Intermediate — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #536]"
  },
  {
    "id": "imle-0537",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 14 · Advanced — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #537]"
  },
  {
    "id": "imle-0538",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 14 · Basic — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #538]"
  },
  {
    "id": "imle-0539",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 14 · Intermediate — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #539]"
  },
  {
    "id": "imle-0540",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 14 · Advanced — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #540]"
  },
  {
    "id": "imle-0541",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 15 · Basic — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #541]"
  },
  {
    "id": "imle-0542",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 15 · Intermediate — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #542]"
  },
  {
    "id": "imle-0543",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 15 · Advanced — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #543]"
  },
  {
    "id": "imle-0544",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 15 · Basic — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #544]"
  },
  {
    "id": "imle-0545",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 15 · Intermediate — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #545]"
  },
  {
    "id": "imle-0546",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 15 · Advanced — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #546]"
  },
  {
    "id": "imle-0547",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 15 · Basic — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #547]"
  },
  {
    "id": "imle-0548",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 15 · Intermediate — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #548]"
  },
  {
    "id": "imle-0549",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 15 · Advanced — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #549]"
  },
  {
    "id": "imle-0550",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 15 · Basic — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #550]"
  },
  {
    "id": "imle-0551",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 16 · Intermediate — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #551]"
  },
  {
    "id": "imle-0552",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 16 · Advanced — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #552]"
  },
  {
    "id": "imle-0553",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 16 · Basic — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #553]"
  },
  {
    "id": "imle-0554",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 16 · Intermediate — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #554]"
  },
  {
    "id": "imle-0555",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 16 · Advanced — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #555]"
  },
  {
    "id": "imle-0556",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 16 · Basic — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #556]"
  },
  {
    "id": "imle-0557",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 16 · Intermediate — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #557]"
  },
  {
    "id": "imle-0558",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 16 · Advanced — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #558]"
  },
  {
    "id": "imle-0559",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 16 · Basic — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #559]"
  },
  {
    "id": "imle-0560",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 16 · Intermediate — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #560]"
  },
  {
    "id": "imle-0561",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 17 · Advanced — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #561]"
  },
  {
    "id": "imle-0562",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 17 · Basic — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #562]"
  },
  {
    "id": "imle-0563",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 17 · Intermediate — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #563]"
  },
  {
    "id": "imle-0564",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 17 · Advanced — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #564]"
  },
  {
    "id": "imle-0565",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 17 · Basic — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #565]"
  },
  {
    "id": "imle-0566",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 17 · Intermediate — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #566]"
  },
  {
    "id": "imle-0567",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 17 · Advanced — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #567]"
  },
  {
    "id": "imle-0568",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 17 · Basic — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #568]"
  },
  {
    "id": "imle-0569",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 17 · Intermediate — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #569]"
  },
  {
    "id": "imle-0570",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 17 · Advanced — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #570]"
  },
  {
    "id": "imle-0571",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 18 · Basic — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #571]"
  },
  {
    "id": "imle-0572",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 18 · Intermediate — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #572]"
  },
  {
    "id": "imle-0573",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 18 · Advanced — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #573]"
  },
  {
    "id": "imle-0574",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 18 · Basic — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #574]"
  },
  {
    "id": "imle-0575",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 18 · Intermediate — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #575]"
  },
  {
    "id": "imle-0576",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 18 · Advanced — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #576]"
  },
  {
    "id": "imle-0577",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 18 · Basic — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #577]"
  },
  {
    "id": "imle-0578",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 18 · Intermediate — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #578]"
  },
  {
    "id": "imle-0579",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 18 · Advanced — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #579]"
  },
  {
    "id": "imle-0580",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 18 · Basic — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #580]"
  },
  {
    "id": "imle-0581",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 19 · Intermediate — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #581]"
  },
  {
    "id": "imle-0582",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 19 · Advanced — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #582]"
  },
  {
    "id": "imle-0583",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 19 · Basic — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #583]"
  },
  {
    "id": "imle-0584",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 19 · Intermediate — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #584]"
  },
  {
    "id": "imle-0585",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 19 · Advanced — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #585]"
  },
  {
    "id": "imle-0586",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 19 · Basic — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #586]"
  },
  {
    "id": "imle-0587",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 19 · Intermediate — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #587]"
  },
  {
    "id": "imle-0588",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 19 · Advanced — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #588]"
  },
  {
    "id": "imle-0589",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 19 · Basic — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #589]"
  },
  {
    "id": "imle-0590",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 19 · Intermediate — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #590]"
  },
  {
    "id": "imle-0591",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 4-month-old infant presents with rhinorrhea, cough, tachypnea, mild retractions, and wheezes/crackles; SpO2 is 94%. What is primary management? [IMLE Set 20 · Advanced — Topic: Viral Bronchiolitis]",
    "options": [
      "Supportive care: nasal suctioning, hydration/feeding support, and oxygen if needed",
      "Routine antibiotics and routine systemic steroids",
      "Antitussive codeine",
      "Immediate surgery"
    ],
    "answer": 0,
    "explanation": "Bronchiolitis management is supportive, focusing on airway clearance, hydration, and oxygenation. [Topic: Viral Bronchiolitis | IMLE #591]"
  },
  {
    "id": "imle-0592",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 2-year-old boy has a brief generalized seizure during a viral fever, returns to baseline quickly, and has a normal exam. What is appropriate? [IMLE Set 20 · Basic — Topic: Simple Febrile Seizure]",
    "options": [
      "Evaluate/treat the underlying fever source and educate parents",
      "Start lifelong antiepileptics automatically",
      "Emergency brain surgery",
      "Routine sedative infusion"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures in an otherwise well child call for identifying the fever source and reassuring/educating caregivers. [Topic: Simple Febrile Seizure | IMLE #592]"
  },
  {
    "id": "imle-0593",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2.5-year-old child has ear pain, fever, and a bulging erythematous tympanic membrane. When antibiotics are indicated, what is standard first-line? [IMLE Set 20 · Intermediate — Topic: Acute Otitis Media]",
    "options": [
      "High-dose amoxicillin (unless contraindicated/allergy)",
      "Topical olive oil",
      "Oral antifungal",
      "Anticoagulant"
    ],
    "answer": 0,
    "explanation": "High-dose amoxicillin is classic first-line therapy for acute otitis media. [Topic: Acute Otitis Media | IMLE #593]"
  },
  {
    "id": "imle-0594",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 1-year-old with viral gastroenteritis has mild-to-moderate dehydration and is alert without shock. What is preferred rehydration? [IMLE Set 20 · Advanced — Topic: Pediatric Dehydration]",
    "options": [
      "Oral rehydration solution (ORS) in small, frequent sips",
      "Pure water or high-sugar juice only",
      "No fluids for 24 hours",
      "Antimotility drugs"
    ],
    "answer": 0,
    "explanation": "ORS is the preferred first-line rehydration for mild-to-moderate dehydration in children. [Topic: Pediatric Dehydration | IMLE #594]"
  },
  {
    "id": "imle-0595",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 4-week-old male has non-bilious projectile vomiting after feeds and a palpable RUQ olive mass. What precedes surgery? [IMLE Set 20 · Basic — Topic: Hypertrophic Pyloric Stenosis]",
    "options": [
      "Correct hydration and hypochloremic metabolic alkalosis/electrolytes first",
      "Feed solid food immediately",
      "Insulin infusion",
      "Discharge home"
    ],
    "answer": 0,
    "explanation": "Fluid and electrolyte resuscitation is essential before pyloromyotomy in pyloric stenosis. [Topic: Hypertrophic Pyloric Stenosis | IMLE #595]"
  },
  {
    "id": "imle-0596",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 2-year-old presents with barking cough, hoarseness, and stridor when agitated, improving at rest. What is a mainstay treatment? [IMLE Set 20 · Intermediate — Topic: Croup (Laryngotracheobronchitis)]",
    "options": [
      "Single-dose oral/IM corticosteroid (e.g., dexamethasone) and nebulized epinephrine if moderate/severe stridor",
      "Immediate tracheostomy in all mild cases",
      "Oral antihistamine syrup",
      "Antibiotics for uncomplicated viral croup"
    ],
    "answer": 0,
    "explanation": "Corticosteroids are a cornerstone of croup treatment, with nebulized epinephrine used for significant stridor/distress. [Topic: Croup (Laryngotracheobronchitis) | IMLE #596]"
  },
  {
    "id": "imle-0597",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 16-day-old neonate presents with rectal temperature 38.3°C. How should this be approached? [IMLE Set 20 · Advanced — Topic: Neonatal Fever (<28 days)]",
    "options": [
      "Prompt full sepsis evaluation and hospital management per pediatric guidelines",
      "Send home with acetaminophen and no workup",
      "Wait 5 days to see if fever returns",
      "Give honey"
    ],
    "answer": 0,
    "explanation": "Fever in a young infant (<28 days) carries higher serious bacterial infection risk and requires prompt structured evaluation. [Topic: Neonatal Fever (<28 days) | IMLE #597]"
  },
  {
    "id": "imle-0598",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 6-year-old boy presents after a URI with palpable purpura on buttocks/legs, arthralgias, and abdominal pain. What should be monitored? [IMLE Set 20 · Basic — Topic: Henoch-Schonlein Purpura (IgA Vasculitis)]",
    "options": [
      "Blood pressure and urinalysis (proteinuria/hematuria) for renal involvement",
      "Immediate joint replacement",
      "High-dose statin",
      "Discharge without follow-up"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis requires monitoring renal involvement (BP and urinalysis) along with symptom/pain care. [Topic: Henoch-Schonlein Purpura (IgA Vasculitis) | IMLE #598]"
  },
  {
    "id": "imle-0599",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A 9-month-old infant presents with intermittent severe colicky abdominal pain, vomiting, lethargy, and currant-jelly stools. What is important? [IMLE Set 20 · Intermediate — Topic: Intussusception]",
    "options": [
      "Urgent evaluation/ultrasound and surgical/radiologic management once stabilized",
      "Constipation reassurance only",
      "Oral laxative",
      "Routine dental check"
    ],
    "answer": 0,
    "explanation": "Intussusception is an acute pediatric abdominal emergency requiring prompt diagnosis and reduction/surgical care. [Topic: Intussusception | IMLE #599]"
  },
  {
    "id": "imle-0600",
    "specialty": "Pediatrics",
    "difficulty": "Advanced",
    "question": "A 7-year-old with known asthma presents with wheezing, cough, and moderate shortness of breath. What is initial acute treatment? [IMLE Set 20 · Advanced — Topic: Asthma Exacerbation in Child]",
    "options": [
      "Inhaled short-acting beta-agonist (SABA) and systemic corticosteroids as indicated, with oxygen monitoring",
      "Discontinue all inhalers",
      "Sedative medication",
      "Chest CT in every mild flare"
    ],
    "answer": 0,
    "explanation": "Acute asthma flares are treated with bronchodilators (SABA), systemic corticosteroids when indicated, and oxygen support. [Topic: Asthma Exacerbation in Child | IMLE #600]"
  },
  {
    "id": "imle-0601",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern?",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #601]"
  },
  {
    "id": "imle-0602",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential?",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #602]"
  },
  {
    "id": "imle-0603",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step?",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #603]"
  },
  {
    "id": "imle-0604",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested?",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #604]"
  },
  {
    "id": "imle-0605",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate?",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #605]"
  },
  {
    "id": "imle-0606",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered?",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #606]"
  },
  {
    "id": "imle-0607",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated?",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #607]"
  },
  {
    "id": "imle-0608",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent?",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #608]"
  },
  {
    "id": "imle-0609",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment?",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #609]"
  },
  {
    "id": "imle-0610",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "Why is routine cervical screening performed in eligible patients?",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #610]"
  },
  {
    "id": "imle-0611",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 2 · Intermediate — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #611]"
  },
  {
    "id": "imle-0612",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 2 · Advanced — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #612]"
  },
  {
    "id": "imle-0613",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 2 · Basic — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #613]"
  },
  {
    "id": "imle-0614",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 2 · Intermediate — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #614]"
  },
  {
    "id": "imle-0615",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 2 · Advanced — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #615]"
  },
  {
    "id": "imle-0616",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 2 · Basic — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #616]"
  },
  {
    "id": "imle-0617",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 2 · Intermediate — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #617]"
  },
  {
    "id": "imle-0618",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 2 · Advanced — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #618]"
  },
  {
    "id": "imle-0619",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 2 · Basic — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #619]"
  },
  {
    "id": "imle-0620",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 2 · Intermediate — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #620]"
  },
  {
    "id": "imle-0621",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 3 · Advanced — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #621]"
  },
  {
    "id": "imle-0622",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 3 · Basic — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #622]"
  },
  {
    "id": "imle-0623",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 3 · Intermediate — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #623]"
  },
  {
    "id": "imle-0624",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 3 · Advanced — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #624]"
  },
  {
    "id": "imle-0625",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 3 · Basic — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #625]"
  },
  {
    "id": "imle-0626",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 3 · Intermediate — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #626]"
  },
  {
    "id": "imle-0627",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 3 · Advanced — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #627]"
  },
  {
    "id": "imle-0628",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 3 · Basic — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #628]"
  },
  {
    "id": "imle-0629",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 3 · Intermediate — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #629]"
  },
  {
    "id": "imle-0630",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 3 · Advanced — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #630]"
  },
  {
    "id": "imle-0631",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 4 · Basic — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #631]"
  },
  {
    "id": "imle-0632",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 4 · Intermediate — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #632]"
  },
  {
    "id": "imle-0633",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 4 · Advanced — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #633]"
  },
  {
    "id": "imle-0634",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 4 · Basic — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #634]"
  },
  {
    "id": "imle-0635",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 4 · Intermediate — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #635]"
  },
  {
    "id": "imle-0636",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 4 · Advanced — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #636]"
  },
  {
    "id": "imle-0637",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 4 · Basic — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #637]"
  },
  {
    "id": "imle-0638",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 4 · Intermediate — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #638]"
  },
  {
    "id": "imle-0639",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 4 · Advanced — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #639]"
  },
  {
    "id": "imle-0640",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 4 · Basic — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #640]"
  },
  {
    "id": "imle-0641",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 5 · Intermediate — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #641]"
  },
  {
    "id": "imle-0642",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 5 · Advanced — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #642]"
  },
  {
    "id": "imle-0643",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 5 · Basic — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #643]"
  },
  {
    "id": "imle-0644",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 5 · Intermediate — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #644]"
  },
  {
    "id": "imle-0645",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 5 · Advanced — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #645]"
  },
  {
    "id": "imle-0646",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 5 · Basic — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #646]"
  },
  {
    "id": "imle-0647",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 5 · Intermediate — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #647]"
  },
  {
    "id": "imle-0648",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 5 · Advanced — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #648]"
  },
  {
    "id": "imle-0649",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 5 · Basic — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #649]"
  },
  {
    "id": "imle-0650",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 5 · Intermediate — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #650]"
  },
  {
    "id": "imle-0651",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 6 · Advanced — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #651]"
  },
  {
    "id": "imle-0652",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 6 · Basic — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #652]"
  },
  {
    "id": "imle-0653",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 6 · Intermediate — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #653]"
  },
  {
    "id": "imle-0654",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 6 · Advanced — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #654]"
  },
  {
    "id": "imle-0655",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 6 · Basic — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #655]"
  },
  {
    "id": "imle-0656",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 6 · Intermediate — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #656]"
  },
  {
    "id": "imle-0657",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 6 · Advanced — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #657]"
  },
  {
    "id": "imle-0658",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 6 · Basic — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #658]"
  },
  {
    "id": "imle-0659",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 6 · Intermediate — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #659]"
  },
  {
    "id": "imle-0660",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 6 · Advanced — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #660]"
  },
  {
    "id": "imle-0661",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 7 · Basic — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #661]"
  },
  {
    "id": "imle-0662",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 7 · Intermediate — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #662]"
  },
  {
    "id": "imle-0663",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 7 · Advanced — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #663]"
  },
  {
    "id": "imle-0664",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 7 · Basic — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #664]"
  },
  {
    "id": "imle-0665",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 7 · Intermediate — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #665]"
  },
  {
    "id": "imle-0666",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 7 · Advanced — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #666]"
  },
  {
    "id": "imle-0667",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 7 · Basic — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #667]"
  },
  {
    "id": "imle-0668",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 7 · Intermediate — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #668]"
  },
  {
    "id": "imle-0669",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 7 · Advanced — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #669]"
  },
  {
    "id": "imle-0670",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 7 · Basic — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #670]"
  },
  {
    "id": "imle-0671",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 8 · Intermediate — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #671]"
  },
  {
    "id": "imle-0672",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 8 · Advanced — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #672]"
  },
  {
    "id": "imle-0673",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 8 · Basic — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #673]"
  },
  {
    "id": "imle-0674",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 8 · Intermediate — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #674]"
  },
  {
    "id": "imle-0675",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 8 · Advanced — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #675]"
  },
  {
    "id": "imle-0676",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 8 · Basic — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #676]"
  },
  {
    "id": "imle-0677",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 8 · Intermediate — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #677]"
  },
  {
    "id": "imle-0678",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 8 · Advanced — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #678]"
  },
  {
    "id": "imle-0679",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 8 · Basic — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #679]"
  },
  {
    "id": "imle-0680",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 8 · Intermediate — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #680]"
  },
  {
    "id": "imle-0681",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 9 · Advanced — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #681]"
  },
  {
    "id": "imle-0682",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 9 · Basic — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #682]"
  },
  {
    "id": "imle-0683",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 9 · Intermediate — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #683]"
  },
  {
    "id": "imle-0684",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 9 · Advanced — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #684]"
  },
  {
    "id": "imle-0685",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 9 · Basic — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #685]"
  },
  {
    "id": "imle-0686",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 9 · Intermediate — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #686]"
  },
  {
    "id": "imle-0687",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 9 · Advanced — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #687]"
  },
  {
    "id": "imle-0688",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 9 · Basic — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #688]"
  },
  {
    "id": "imle-0689",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 9 · Intermediate — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #689]"
  },
  {
    "id": "imle-0690",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 9 · Advanced — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #690]"
  },
  {
    "id": "imle-0691",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 10 · Basic — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #691]"
  },
  {
    "id": "imle-0692",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 10 · Intermediate — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #692]"
  },
  {
    "id": "imle-0693",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 10 · Advanced — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #693]"
  },
  {
    "id": "imle-0694",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 10 · Basic — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #694]"
  },
  {
    "id": "imle-0695",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 10 · Intermediate — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #695]"
  },
  {
    "id": "imle-0696",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 10 · Advanced — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #696]"
  },
  {
    "id": "imle-0697",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 10 · Basic — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #697]"
  },
  {
    "id": "imle-0698",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 10 · Intermediate — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #698]"
  },
  {
    "id": "imle-0699",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 10 · Advanced — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #699]"
  },
  {
    "id": "imle-0700",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 10 · Basic — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #700]"
  },
  {
    "id": "imle-0701",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 11 · Intermediate — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #701]"
  },
  {
    "id": "imle-0702",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 11 · Advanced — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #702]"
  },
  {
    "id": "imle-0703",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 11 · Basic — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #703]"
  },
  {
    "id": "imle-0704",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 11 · Intermediate — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #704]"
  },
  {
    "id": "imle-0705",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 11 · Advanced — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #705]"
  },
  {
    "id": "imle-0706",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 11 · Basic — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #706]"
  },
  {
    "id": "imle-0707",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 11 · Intermediate — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #707]"
  },
  {
    "id": "imle-0708",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 11 · Advanced — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #708]"
  },
  {
    "id": "imle-0709",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 11 · Basic — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #709]"
  },
  {
    "id": "imle-0710",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 11 · Intermediate — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #710]"
  },
  {
    "id": "imle-0711",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 12 · Advanced — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #711]"
  },
  {
    "id": "imle-0712",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 12 · Basic — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #712]"
  },
  {
    "id": "imle-0713",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 12 · Intermediate — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #713]"
  },
  {
    "id": "imle-0714",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 12 · Advanced — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #714]"
  },
  {
    "id": "imle-0715",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 12 · Basic — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #715]"
  },
  {
    "id": "imle-0716",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 12 · Intermediate — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #716]"
  },
  {
    "id": "imle-0717",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 12 · Advanced — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #717]"
  },
  {
    "id": "imle-0718",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 12 · Basic — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #718]"
  },
  {
    "id": "imle-0719",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 12 · Intermediate — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #719]"
  },
  {
    "id": "imle-0720",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 12 · Advanced — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #720]"
  },
  {
    "id": "imle-0721",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 13 · Basic — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #721]"
  },
  {
    "id": "imle-0722",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 13 · Intermediate — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #722]"
  },
  {
    "id": "imle-0723",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 13 · Advanced — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #723]"
  },
  {
    "id": "imle-0724",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 13 · Basic — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #724]"
  },
  {
    "id": "imle-0725",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 13 · Intermediate — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #725]"
  },
  {
    "id": "imle-0726",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 13 · Advanced — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #726]"
  },
  {
    "id": "imle-0727",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 13 · Basic — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #727]"
  },
  {
    "id": "imle-0728",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 13 · Intermediate — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #728]"
  },
  {
    "id": "imle-0729",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 13 · Advanced — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #729]"
  },
  {
    "id": "imle-0730",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 13 · Basic — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #730]"
  },
  {
    "id": "imle-0731",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 14 · Intermediate — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #731]"
  },
  {
    "id": "imle-0732",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 14 · Advanced — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #732]"
  },
  {
    "id": "imle-0733",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 14 · Basic — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #733]"
  },
  {
    "id": "imle-0734",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 14 · Intermediate — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #734]"
  },
  {
    "id": "imle-0735",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 14 · Advanced — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #735]"
  },
  {
    "id": "imle-0736",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 14 · Basic — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #736]"
  },
  {
    "id": "imle-0737",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 14 · Intermediate — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #737]"
  },
  {
    "id": "imle-0738",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 14 · Advanced — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #738]"
  },
  {
    "id": "imle-0739",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 14 · Basic — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #739]"
  },
  {
    "id": "imle-0740",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 14 · Intermediate — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #740]"
  },
  {
    "id": "imle-0741",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 15 · Advanced — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #741]"
  },
  {
    "id": "imle-0742",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 15 · Basic — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #742]"
  },
  {
    "id": "imle-0743",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 15 · Intermediate — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #743]"
  },
  {
    "id": "imle-0744",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 15 · Advanced — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #744]"
  },
  {
    "id": "imle-0745",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 15 · Basic — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #745]"
  },
  {
    "id": "imle-0746",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 15 · Intermediate — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #746]"
  },
  {
    "id": "imle-0747",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 15 · Advanced — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #747]"
  },
  {
    "id": "imle-0748",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 15 · Basic — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #748]"
  },
  {
    "id": "imle-0749",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 15 · Intermediate — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #749]"
  },
  {
    "id": "imle-0750",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 15 · Advanced — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #750]"
  },
  {
    "id": "imle-0751",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 16 · Basic — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #751]"
  },
  {
    "id": "imle-0752",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 16 · Intermediate — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #752]"
  },
  {
    "id": "imle-0753",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 16 · Advanced — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #753]"
  },
  {
    "id": "imle-0754",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 16 · Basic — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #754]"
  },
  {
    "id": "imle-0755",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 16 · Intermediate — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #755]"
  },
  {
    "id": "imle-0756",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 16 · Advanced — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #756]"
  },
  {
    "id": "imle-0757",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 16 · Basic — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #757]"
  },
  {
    "id": "imle-0758",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 16 · Intermediate — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #758]"
  },
  {
    "id": "imle-0759",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 16 · Advanced — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #759]"
  },
  {
    "id": "imle-0760",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 16 · Basic — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #760]"
  },
  {
    "id": "imle-0761",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 17 · Intermediate — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #761]"
  },
  {
    "id": "imle-0762",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 17 · Advanced — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #762]"
  },
  {
    "id": "imle-0763",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 17 · Basic — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #763]"
  },
  {
    "id": "imle-0764",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 17 · Intermediate — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #764]"
  },
  {
    "id": "imle-0765",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 17 · Advanced — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #765]"
  },
  {
    "id": "imle-0766",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 17 · Basic — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #766]"
  },
  {
    "id": "imle-0767",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 17 · Intermediate — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #767]"
  },
  {
    "id": "imle-0768",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 17 · Advanced — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #768]"
  },
  {
    "id": "imle-0769",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 17 · Basic — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #769]"
  },
  {
    "id": "imle-0770",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 17 · Intermediate — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #770]"
  },
  {
    "id": "imle-0771",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 18 · Advanced — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #771]"
  },
  {
    "id": "imle-0772",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 18 · Basic — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #772]"
  },
  {
    "id": "imle-0773",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 18 · Intermediate — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #773]"
  },
  {
    "id": "imle-0774",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 18 · Advanced — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #774]"
  },
  {
    "id": "imle-0775",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 18 · Basic — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #775]"
  },
  {
    "id": "imle-0776",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 18 · Intermediate — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #776]"
  },
  {
    "id": "imle-0777",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 18 · Advanced — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #777]"
  },
  {
    "id": "imle-0778",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 18 · Basic — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #778]"
  },
  {
    "id": "imle-0779",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 18 · Intermediate — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #779]"
  },
  {
    "id": "imle-0780",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 18 · Advanced — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #780]"
  },
  {
    "id": "imle-0781",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 19 · Basic — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #781]"
  },
  {
    "id": "imle-0782",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 19 · Intermediate — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #782]"
  },
  {
    "id": "imle-0783",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 19 · Advanced — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #783]"
  },
  {
    "id": "imle-0784",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 19 · Basic — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #784]"
  },
  {
    "id": "imle-0785",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 19 · Intermediate — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #785]"
  },
  {
    "id": "imle-0786",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 19 · Advanced — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #786]"
  },
  {
    "id": "imle-0787",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 19 · Basic — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #787]"
  },
  {
    "id": "imle-0788",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 19 · Intermediate — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #788]"
  },
  {
    "id": "imle-0789",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 19 · Advanced — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #789]"
  },
  {
    "id": "imle-0790",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 19 · Basic — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #790]"
  },
  {
    "id": "imle-0791",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant woman at 34 weeks gestation has BP 160/104 mmHg, proteinuria, and headache. What is the key concern? [IMLE Set 20 · Intermediate — Topic: Pre-eclampsia Evaluation]",
    "options": [
      "Pre-eclampsia requiring prompt maternal/fetal evaluation, BP control, and seizure prophylaxis if severe features",
      "Normal routine finding needing no check",
      "Simple seasonal cold",
      "Routine eye glasses prescription"
    ],
    "answer": 0,
    "explanation": "Pre-eclampsia requires timely blood pressure control, maternal/fetal assessment, and evaluation of severity features. [Topic: Pre-eclampsia Evaluation | IMLE #791]"
  },
  {
    "id": "imle-0792",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman at 6 weeks gestation with positive pregnancy test has lower abdominal pain and vaginal spotting. What is essential? [IMLE Set 20 · Advanced — Topic: First-Trimester Pain/Bleeding]",
    "options": [
      "Quantitative beta-hCG, transvaginal ultrasound, and hemodynamic check to rule out ectopic pregnancy",
      "Reassure without testing",
      "Start oral birth control",
      "Mammogram"
    ],
    "answer": 0,
    "explanation": "First-trimester bleeding or pain requires evaluating ectopic pregnancy and viability/stability. [Topic: First-Trimester Pain/Bleeding | IMLE #792]"
  },
  {
    "id": "imle-0793",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "After delivery, a patient has heavy bleeding and a soft boggy uterus. What is the most common cause and first step? [IMLE Set 20 · Basic — Topic: Postpartum Hemorrhage]",
    "options": [
      "Uterine atony; perform fundal massage and administer uterotonics (such as oxytocin) with resuscitation",
      "Cervical smear in 6 months",
      "Warm forehead cloth",
      "Immediate discharge"
    ],
    "answer": 0,
    "explanation": "Uterine atony is the leading cause of PPH; fundal massage and uterotonics are immediate priorities. [Topic: Postpartum Hemorrhage | IMLE #793]"
  },
  {
    "id": "imle-0794",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A pregnant patient at 26 weeks gestation without prior diabetes is due for routine prenatal screening. What is tested? [IMLE Set 20 · Intermediate — Topic: Gestational Diabetes Screening]",
    "options": [
      "Glucose screening/tolerance test for gestational diabetes mellitus",
      "Serum troponin",
      "Sputum AFB",
      "Thyroid biopsy"
    ],
    "answer": 0,
    "explanation": "GDM screening is typically performed at 24–28 weeks of gestation. [Topic: Gestational Diabetes Screening | IMLE #794]"
  },
  {
    "id": "imle-0795",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A sexually active young woman has lower pelvic pain, cervical motion tenderness, and adnexal tenderness with negative pregnancy test. What is appropriate? [IMLE Set 20 · Advanced — Topic: Pelvic Inflammatory Disease]",
    "options": [
      "Empiric broad-spectrum antibiotics covering PID pathogens and partner evaluation/treatment",
      "Ignore symptoms",
      "Topical antifungal only",
      "Routine hysterectomy"
    ],
    "answer": 0,
    "explanation": "Suspected PID requires prompt empiric antibiotic coverage and partner management. [Topic: Pelvic Inflammatory Disease | IMLE #795]"
  },
  {
    "id": "imle-0796",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "An Rh(D)-negative woman has first-trimester bleeding or an event with potential fetomaternal hemorrhage. What is considered? [IMLE Set 20 · Basic — Topic: Rh-Negative Sensitization Prevention]",
    "options": [
      "Anti-D immune globulin (RhoGAM) administration as indicated",
      "Transfuse Rh-positive platelets",
      "No action needed",
      "Antibiotic ointment"
    ],
    "answer": 0,
    "explanation": "Anti-D immune globulin prevents Rh alloimmunization in Rh-negative women at risk of sensitization. [Topic: Rh-Negative Sensitization Prevention | IMLE #796]"
  },
  {
    "id": "imle-0797",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "A woman at 32 weeks presents with painless bright-red vaginal bleeding. What should be avoided until evaluated? [IMLE Set 20 · Intermediate — Topic: Placenta Previa vs Abruption]",
    "options": [
      "Avoid digital cervical exam until placenta previa is ruled out by ultrasound",
      "Perform forceful vaginal exam immediately",
      "Discharge without monitoring",
      "Give laxatives"
    ],
    "answer": 0,
    "explanation": "Digital vaginal exam is avoided in third-trimester bleeding until placenta previa is excluded by ultrasound. [Topic: Placenta Previa vs Abruption | IMLE #797]"
  },
  {
    "id": "imle-0798",
    "specialty": "OB/GYN",
    "difficulty": "Advanced",
    "question": "A woman with suspected early pregnancy develops sudden severe abdominal pain, shoulder tip pain, dizziness, and hypotension. What is urgent? [IMLE Set 20 · Advanced — Topic: Ectopic Pregnancy Rupture Signs]",
    "options": [
      "Immediate resuscitation and urgent surgical/gynecologic intervention for ruptured ectopic pregnancy",
      "Wait 24 hours at home",
      "Antacid tablet",
      "Routine lab next month"
    ],
    "answer": 0,
    "explanation": "Hemodynamic instability or peritoneal signs in early pregnancy suggest ruptured ectopic pregnancy requiring urgent care. [Topic: Ectopic Pregnancy Rupture Signs | IMLE #798]"
  },
  {
    "id": "imle-0799",
    "specialty": "OB/GYN",
    "difficulty": "Basic",
    "question": "A woman presents with thin grayish-white discharge with a fishy odor and clue cells on microscopy. What is typical first-line treatment? [IMLE Set 20 · Basic — Topic: Bacterial Vaginosis vs Candidiasis]",
    "options": [
      "Metronidazole or clindamycin (oral or intravaginal)",
      "Systemic antiviral",
      "Insulin",
      "Calcium supplement"
    ],
    "answer": 0,
    "explanation": "Bacterial vaginosis is commonly treated with metronidazole or clindamycin. [Topic: Bacterial Vaginosis vs Candidiasis | IMLE #799]"
  },
  {
    "id": "imle-0800",
    "specialty": "OB/GYN",
    "difficulty": "Intermediate",
    "question": "Why is routine cervical screening performed in eligible patients? [IMLE Set 20 · Intermediate — Topic: Cervical Screening Principle]",
    "options": [
      "Early detection and management of precancerous cervical changes/HPV-related disease",
      "To diagnose appendicitis",
      "To measure bone density",
      "To check hemoglobin A1c"
    ],
    "answer": 0,
    "explanation": "Cervical screening aims to detect precancerous lesions early and prevent cervical cancer. [Topic: Cervical Screening Principle | IMLE #800]"
  },
  {
    "id": "imle-0801",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line?",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #801]"
  },
  {
    "id": "imle-0802",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential?",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #802]"
  },
  {
    "id": "imle-0803",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority?",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #803]"
  },
  {
    "id": "imle-0804",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice?",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #804]"
  },
  {
    "id": "imle-0805",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond?",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #805]"
  },
  {
    "id": "imle-0806",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote?",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #806]"
  },
  {
    "id": "imle-0807",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care?",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #807]"
  },
  {
    "id": "imle-0808",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key?",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #808]"
  },
  {
    "id": "imle-0809",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking?",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #809]"
  },
  {
    "id": "imle-0810",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled?",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #810]"
  },
  {
    "id": "imle-0811",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 2 · Basic — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #811]"
  },
  {
    "id": "imle-0812",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 2 · Intermediate — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #812]"
  },
  {
    "id": "imle-0813",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 2 · Advanced — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #813]"
  },
  {
    "id": "imle-0814",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 2 · Basic — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #814]"
  },
  {
    "id": "imle-0815",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 2 · Intermediate — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #815]"
  },
  {
    "id": "imle-0816",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 2 · Advanced — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #816]"
  },
  {
    "id": "imle-0817",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 2 · Basic — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #817]"
  },
  {
    "id": "imle-0818",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 2 · Intermediate — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #818]"
  },
  {
    "id": "imle-0819",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 2 · Advanced — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #819]"
  },
  {
    "id": "imle-0820",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 2 · Basic — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #820]"
  },
  {
    "id": "imle-0821",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 3 · Intermediate — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #821]"
  },
  {
    "id": "imle-0822",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 3 · Advanced — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #822]"
  },
  {
    "id": "imle-0823",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 3 · Basic — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #823]"
  },
  {
    "id": "imle-0824",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 3 · Intermediate — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #824]"
  },
  {
    "id": "imle-0825",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 3 · Advanced — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #825]"
  },
  {
    "id": "imle-0826",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 3 · Basic — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #826]"
  },
  {
    "id": "imle-0827",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 3 · Intermediate — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #827]"
  },
  {
    "id": "imle-0828",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 3 · Advanced — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #828]"
  },
  {
    "id": "imle-0829",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 3 · Basic — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #829]"
  },
  {
    "id": "imle-0830",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 3 · Intermediate — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #830]"
  },
  {
    "id": "imle-0831",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 4 · Advanced — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #831]"
  },
  {
    "id": "imle-0832",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 4 · Basic — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #832]"
  },
  {
    "id": "imle-0833",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 4 · Intermediate — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #833]"
  },
  {
    "id": "imle-0834",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 4 · Advanced — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #834]"
  },
  {
    "id": "imle-0835",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 4 · Basic — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #835]"
  },
  {
    "id": "imle-0836",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 4 · Intermediate — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #836]"
  },
  {
    "id": "imle-0837",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 4 · Advanced — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #837]"
  },
  {
    "id": "imle-0838",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 4 · Basic — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #838]"
  },
  {
    "id": "imle-0839",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 4 · Intermediate — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #839]"
  },
  {
    "id": "imle-0840",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 4 · Advanced — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #840]"
  },
  {
    "id": "imle-0841",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 5 · Basic — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #841]"
  },
  {
    "id": "imle-0842",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 5 · Intermediate — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #842]"
  },
  {
    "id": "imle-0843",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 5 · Advanced — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #843]"
  },
  {
    "id": "imle-0844",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 5 · Basic — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #844]"
  },
  {
    "id": "imle-0845",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 5 · Intermediate — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #845]"
  },
  {
    "id": "imle-0846",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 5 · Advanced — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #846]"
  },
  {
    "id": "imle-0847",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 5 · Basic — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #847]"
  },
  {
    "id": "imle-0848",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 5 · Intermediate — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #848]"
  },
  {
    "id": "imle-0849",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 5 · Advanced — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #849]"
  },
  {
    "id": "imle-0850",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 5 · Basic — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #850]"
  },
  {
    "id": "imle-0851",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 6 · Intermediate — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #851]"
  },
  {
    "id": "imle-0852",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 6 · Advanced — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #852]"
  },
  {
    "id": "imle-0853",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 6 · Basic — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #853]"
  },
  {
    "id": "imle-0854",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 6 · Intermediate — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #854]"
  },
  {
    "id": "imle-0855",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 6 · Advanced — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #855]"
  },
  {
    "id": "imle-0856",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 6 · Basic — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #856]"
  },
  {
    "id": "imle-0857",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 6 · Intermediate — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #857]"
  },
  {
    "id": "imle-0858",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 6 · Advanced — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #858]"
  },
  {
    "id": "imle-0859",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 6 · Basic — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #859]"
  },
  {
    "id": "imle-0860",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 6 · Intermediate — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #860]"
  },
  {
    "id": "imle-0861",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 7 · Advanced — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #861]"
  },
  {
    "id": "imle-0862",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 7 · Basic — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #862]"
  },
  {
    "id": "imle-0863",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 7 · Intermediate — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #863]"
  },
  {
    "id": "imle-0864",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 7 · Advanced — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #864]"
  },
  {
    "id": "imle-0865",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 7 · Basic — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #865]"
  },
  {
    "id": "imle-0866",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 7 · Intermediate — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #866]"
  },
  {
    "id": "imle-0867",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 7 · Advanced — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #867]"
  },
  {
    "id": "imle-0868",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 7 · Basic — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #868]"
  },
  {
    "id": "imle-0869",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 7 · Intermediate — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #869]"
  },
  {
    "id": "imle-0870",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 7 · Advanced — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #870]"
  },
  {
    "id": "imle-0871",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 8 · Basic — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #871]"
  },
  {
    "id": "imle-0872",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 8 · Intermediate — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #872]"
  },
  {
    "id": "imle-0873",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 8 · Advanced — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #873]"
  },
  {
    "id": "imle-0874",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 8 · Basic — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #874]"
  },
  {
    "id": "imle-0875",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 8 · Intermediate — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #875]"
  },
  {
    "id": "imle-0876",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 8 · Advanced — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #876]"
  },
  {
    "id": "imle-0877",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 8 · Basic — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #877]"
  },
  {
    "id": "imle-0878",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 8 · Intermediate — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #878]"
  },
  {
    "id": "imle-0879",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 8 · Advanced — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #879]"
  },
  {
    "id": "imle-0880",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 8 · Basic — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #880]"
  },
  {
    "id": "imle-0881",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 9 · Intermediate — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #881]"
  },
  {
    "id": "imle-0882",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 9 · Advanced — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #882]"
  },
  {
    "id": "imle-0883",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 9 · Basic — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #883]"
  },
  {
    "id": "imle-0884",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 9 · Intermediate — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #884]"
  },
  {
    "id": "imle-0885",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 9 · Advanced — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #885]"
  },
  {
    "id": "imle-0886",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 9 · Basic — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #886]"
  },
  {
    "id": "imle-0887",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 9 · Intermediate — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #887]"
  },
  {
    "id": "imle-0888",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 9 · Advanced — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #888]"
  },
  {
    "id": "imle-0889",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 9 · Basic — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #889]"
  },
  {
    "id": "imle-0890",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 9 · Intermediate — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #890]"
  },
  {
    "id": "imle-0891",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 10 · Advanced — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #891]"
  },
  {
    "id": "imle-0892",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 10 · Basic — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #892]"
  },
  {
    "id": "imle-0893",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 10 · Intermediate — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #893]"
  },
  {
    "id": "imle-0894",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 10 · Advanced — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #894]"
  },
  {
    "id": "imle-0895",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 10 · Basic — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #895]"
  },
  {
    "id": "imle-0896",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 10 · Intermediate — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #896]"
  },
  {
    "id": "imle-0897",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 10 · Advanced — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #897]"
  },
  {
    "id": "imle-0898",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 10 · Basic — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #898]"
  },
  {
    "id": "imle-0899",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 10 · Intermediate — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #899]"
  },
  {
    "id": "imle-0900",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 10 · Advanced — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #900]"
  },
  {
    "id": "imle-0901",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 11 · Basic — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #901]"
  },
  {
    "id": "imle-0902",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 11 · Intermediate — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #902]"
  },
  {
    "id": "imle-0903",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 11 · Advanced — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #903]"
  },
  {
    "id": "imle-0904",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 11 · Basic — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #904]"
  },
  {
    "id": "imle-0905",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 11 · Intermediate — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #905]"
  },
  {
    "id": "imle-0906",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 11 · Advanced — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #906]"
  },
  {
    "id": "imle-0907",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 11 · Basic — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #907]"
  },
  {
    "id": "imle-0908",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 11 · Intermediate — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #908]"
  },
  {
    "id": "imle-0909",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 11 · Advanced — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #909]"
  },
  {
    "id": "imle-0910",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 11 · Basic — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #910]"
  },
  {
    "id": "imle-0911",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 12 · Intermediate — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #911]"
  },
  {
    "id": "imle-0912",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 12 · Advanced — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #912]"
  },
  {
    "id": "imle-0913",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 12 · Basic — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #913]"
  },
  {
    "id": "imle-0914",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 12 · Intermediate — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #914]"
  },
  {
    "id": "imle-0915",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 12 · Advanced — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #915]"
  },
  {
    "id": "imle-0916",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 12 · Basic — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #916]"
  },
  {
    "id": "imle-0917",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 12 · Intermediate — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #917]"
  },
  {
    "id": "imle-0918",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 12 · Advanced — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #918]"
  },
  {
    "id": "imle-0919",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 12 · Basic — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #919]"
  },
  {
    "id": "imle-0920",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 12 · Intermediate — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #920]"
  },
  {
    "id": "imle-0921",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 13 · Advanced — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #921]"
  },
  {
    "id": "imle-0922",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 13 · Basic — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #922]"
  },
  {
    "id": "imle-0923",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 13 · Intermediate — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #923]"
  },
  {
    "id": "imle-0924",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 13 · Advanced — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #924]"
  },
  {
    "id": "imle-0925",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 13 · Basic — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #925]"
  },
  {
    "id": "imle-0926",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 13 · Intermediate — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #926]"
  },
  {
    "id": "imle-0927",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 13 · Advanced — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #927]"
  },
  {
    "id": "imle-0928",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 13 · Basic — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #928]"
  },
  {
    "id": "imle-0929",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 13 · Intermediate — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #929]"
  },
  {
    "id": "imle-0930",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 13 · Advanced — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #930]"
  },
  {
    "id": "imle-0931",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 14 · Basic — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #931]"
  },
  {
    "id": "imle-0932",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 14 · Intermediate — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #932]"
  },
  {
    "id": "imle-0933",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 14 · Advanced — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #933]"
  },
  {
    "id": "imle-0934",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 14 · Basic — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #934]"
  },
  {
    "id": "imle-0935",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 14 · Intermediate — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #935]"
  },
  {
    "id": "imle-0936",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 14 · Advanced — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #936]"
  },
  {
    "id": "imle-0937",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 14 · Basic — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #937]"
  },
  {
    "id": "imle-0938",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 14 · Intermediate — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #938]"
  },
  {
    "id": "imle-0939",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 14 · Advanced — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #939]"
  },
  {
    "id": "imle-0940",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 14 · Basic — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #940]"
  },
  {
    "id": "imle-0941",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 15 · Intermediate — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #941]"
  },
  {
    "id": "imle-0942",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 15 · Advanced — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #942]"
  },
  {
    "id": "imle-0943",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 15 · Basic — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #943]"
  },
  {
    "id": "imle-0944",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 15 · Intermediate — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #944]"
  },
  {
    "id": "imle-0945",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 15 · Advanced — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #945]"
  },
  {
    "id": "imle-0946",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 15 · Basic — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #946]"
  },
  {
    "id": "imle-0947",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 15 · Intermediate — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #947]"
  },
  {
    "id": "imle-0948",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 15 · Advanced — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #948]"
  },
  {
    "id": "imle-0949",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 15 · Basic — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #949]"
  },
  {
    "id": "imle-0950",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 15 · Intermediate — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #950]"
  },
  {
    "id": "imle-0951",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 16 · Advanced — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #951]"
  },
  {
    "id": "imle-0952",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 16 · Basic — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #952]"
  },
  {
    "id": "imle-0953",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 16 · Intermediate — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #953]"
  },
  {
    "id": "imle-0954",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 16 · Advanced — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #954]"
  },
  {
    "id": "imle-0955",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 16 · Basic — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #955]"
  },
  {
    "id": "imle-0956",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 16 · Intermediate — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #956]"
  },
  {
    "id": "imle-0957",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 16 · Advanced — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #957]"
  },
  {
    "id": "imle-0958",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 16 · Basic — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #958]"
  },
  {
    "id": "imle-0959",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 16 · Intermediate — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #959]"
  },
  {
    "id": "imle-0960",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 16 · Advanced — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #960]"
  },
  {
    "id": "imle-0961",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 17 · Basic — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #961]"
  },
  {
    "id": "imle-0962",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 17 · Intermediate — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #962]"
  },
  {
    "id": "imle-0963",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 17 · Advanced — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #963]"
  },
  {
    "id": "imle-0964",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 17 · Basic — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #964]"
  },
  {
    "id": "imle-0965",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 17 · Intermediate — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #965]"
  },
  {
    "id": "imle-0966",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 17 · Advanced — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #966]"
  },
  {
    "id": "imle-0967",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 17 · Basic — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #967]"
  },
  {
    "id": "imle-0968",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 17 · Intermediate — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #968]"
  },
  {
    "id": "imle-0969",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 17 · Advanced — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #969]"
  },
  {
    "id": "imle-0970",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 17 · Basic — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #970]"
  },
  {
    "id": "imle-0971",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 18 · Intermediate — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #971]"
  },
  {
    "id": "imle-0972",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 18 · Advanced — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #972]"
  },
  {
    "id": "imle-0973",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 18 · Basic — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #973]"
  },
  {
    "id": "imle-0974",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 18 · Intermediate — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #974]"
  },
  {
    "id": "imle-0975",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 18 · Advanced — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #975]"
  },
  {
    "id": "imle-0976",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 18 · Basic — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #976]"
  },
  {
    "id": "imle-0977",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 18 · Intermediate — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #977]"
  },
  {
    "id": "imle-0978",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 18 · Advanced — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #978]"
  },
  {
    "id": "imle-0979",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 18 · Basic — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #979]"
  },
  {
    "id": "imle-0980",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 18 · Intermediate — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #980]"
  },
  {
    "id": "imle-0981",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 19 · Advanced — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #981]"
  },
  {
    "id": "imle-0982",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 19 · Basic — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #982]"
  },
  {
    "id": "imle-0983",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 19 · Intermediate — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #983]"
  },
  {
    "id": "imle-0984",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 19 · Advanced — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #984]"
  },
  {
    "id": "imle-0985",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 19 · Basic — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #985]"
  },
  {
    "id": "imle-0986",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 19 · Intermediate — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #986]"
  },
  {
    "id": "imle-0987",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 19 · Advanced — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #987]"
  },
  {
    "id": "imle-0988",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 19 · Basic — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #988]"
  },
  {
    "id": "imle-0989",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 19 · Intermediate — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #989]"
  },
  {
    "id": "imle-0990",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 19 · Advanced — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #990]"
  },
  {
    "id": "imle-0991",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient develops hives, airway/lip swelling, wheezing, and hypotension after an allergen exposure. What is immediate first-line? [IMLE Set 20 · Basic — Topic: Anaphylaxis First-Line]",
    "options": [
      "Intramuscular epinephrine immediately into the anterolateral thigh",
      "Oral antihistamine and wait an hour",
      "Routine X-ray before treatment",
      "Subcutaneous insulin"
    ],
    "answer": 0,
    "explanation": "IM epinephrine is the immediate life-saving first-line treatment for anaphylaxis. [Topic: Anaphylaxis First-Line | IMLE #991]"
  },
  {
    "id": "imle-0992",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient reports persistent low mood, anhedonia, insomnia, and thoughts of not wanting to wake up. What is essential? [IMLE Set 20 · Intermediate — Topic: Depression & Suicide Risk]",
    "options": [
      "Ask directly and compassionately about suicidal ideation, plan, intent, and safety",
      "Avoid asking about self-harm",
      "Tell them to just cheer up",
      "Prescribe antibiotics"
    ],
    "answer": 0,
    "explanation": "Direct, empathetic suicide risk and safety assessment is a core clinical responsibility. [Topic: Depression & Suicide Risk | IMLE #992]"
  },
  {
    "id": "imle-0993",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient has crushing chest pain for 35 minutes with diaphoresis. What is an immediate priority? [IMLE Set 20 · Advanced — Topic: Suspected ACS / Chest Pain]",
    "options": [
      "Immediate 12-lead ECG, vital signs/oxygen if hypoxic, IV access, aspirin (if not contraindicated), and cardiac workup",
      "Book routine clinic in 3 months",
      "Antacid and discharge",
      "Foot X-ray"
    ],
    "answer": 0,
    "explanation": "Suspected ACS requires rapid ECG, stabilization, and early aspirin/evaluation. [Topic: Suspected ACS / Chest Pain | IMLE #993]"
  },
  {
    "id": "imle-0994",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with sudden palpitations, dyspnea, and paresthesias. What is prudent clinical practice? [IMLE Set 20 · Basic — Topic: Medical Rule-Out in Panic]",
    "options": [
      "Perform focused medical assessment to rule out relevant organic causes (e.g., arrhythmia, hypoxia, hypoglycemia)",
      "Never check vitals or exam",
      "General anesthesia",
      "Ignore airway/breathing"
    ],
    "answer": 0,
    "explanation": "Medical causes that mimic or trigger panic symptoms should be evaluated appropriately. [Topic: Medical Rule-Out in Panic | IMLE #994]"
  },
  {
    "id": "imle-0995",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A capacitated adult refuses a recommended intervention after full explanation of risks, benefits, and alternatives. How should you respond? [IMLE Set 20 · Intermediate — Topic: Informed Refusal & Capacity]",
    "options": [
      "Respect informed refusal after confirming capacity and explaining alternatives, and document clearly",
      "Physically force treatment despite capacity",
      "Arrest the patient",
      "Forge consent"
    ],
    "answer": 0,
    "explanation": "Patients with decision-making capacity have the right to make informed refusals after clear counseling. [Topic: Informed Refusal & Capacity | IMLE #995]"
  },
  {
    "id": "imle-0996",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient is found unresponsive with pinpoint pupils and bradypnea (respiratory rate 6/min). What is the specific antidote? [IMLE Set 20 · Advanced — Topic: Acute Opioid Overdose]",
    "options": [
      "Naloxone (with airway/ventilation support)",
      "Flumazenil routinely in unknown polypharmacy",
      "Oral glucose only",
      "Atropine"
    ],
    "answer": 0,
    "explanation": "Naloxone reverses opioid-induced respiratory depression alongside airway/ventilation support. [Topic: Acute Opioid Overdose | IMLE #996]"
  },
  {
    "id": "imle-0997",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "A patient presents with acute psychosis and agitation. What is a core principle of initial care? [IMLE Set 20 · Basic — Topic: Acute Psychosis / Agitation Safety]",
    "options": [
      "Ensure safety for patient and staff, de-escalate verbally, rule out medical/substance causes, and use targeted pharmacotherapy when needed",
      "Confront aggressively",
      "Ignore medical workup",
      "Lock in a dark room without monitoring"
    ],
    "answer": 0,
    "explanation": "Safe environment, de-escalation, medical screening, and appropriate treatment guide acute agitation/psychosis care. [Topic: Acute Psychosis / Agitation Safety | IMLE #997]"
  },
  {
    "id": "imle-0998",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient with suspected infection has fever/hypothermia, tachycardia, tachypnea, and hypotension/lactate elevation. What is key? [IMLE Set 20 · Intermediate — Topic: Sepsis Recognition]",
    "options": [
      "Early sepsis recognition, blood cultures/antimicrobials, IV fluid resuscitation, and organ perfusion monitoring",
      "Delay antibiotics for 2 days",
      "Discharge home",
      "Routine vitamin D only"
    ],
    "answer": 0,
    "explanation": "Early recognition, resuscitation, cultures, and timely antimicrobials are vital in sepsis. [Topic: Sepsis Recognition | IMLE #998]"
  },
  {
    "id": "imle-0999",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Advanced",
    "question": "A patient reports chronic worry, restlessness, and tension. What is helpful in history taking? [IMLE Set 20 · Advanced — Topic: Generalized Anxiety vs Substance/Med Cause]",
    "options": [
      "Explore symptom duration, functional impact, sleep, caffeine/stimulants or medications, and mood symptoms",
      "Skip history and guess",
      "Only check vision",
      "Recommend stopping all food"
    ],
    "answer": 0,
    "explanation": "A thorough history clarifies anxiety disorders, medical/substance contributors, and comorbidities. [Topic: Generalized Anxiety vs Substance/Med Cause | IMLE #999]"
  },
  {
    "id": "imle-1000",
    "specialty": "Emergency & Psychiatry",
    "difficulty": "Basic",
    "question": "When evaluating a patient in psychiatry/primary care, how should confidentiality be handled? [IMLE Set 20 · Basic — Topic: Confidentiality & Duty to Warn Principles]",
    "options": [
      "Maintain confidentiality as standard practice while explaining limits such as imminent risk of serious harm to self or others",
      "Share medical details publicly",
      "Never explain confidentiality",
      "Ignore safety risks"
    ],
    "answer": 0,
    "explanation": "Confidentiality is foundational, with clear ethical/legal limits when imminent serious harm is present. [Topic: Confidentiality & Duty to Warn Principles | IMLE #1000]"
  }
];

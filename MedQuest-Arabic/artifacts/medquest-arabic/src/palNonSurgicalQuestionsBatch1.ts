export interface MedQuestQuestion {
  id: string;
  track: "internship" | "specialty";
  subTrack: "surgical" | "non-surgical";
  specialty: "Internal Medicine" | "Pediatrics" | "Dermatology" | "Psychiatry" | "Anesthesia";
  difficulty: "Basic" | "Intermediate" | "Advanced";
  question: string;
  options: [string, string, string, string];
  answer: number;
  explanation: string;
}

export const palNonSurgicalQuestionsBatch1: MedQuestQuestion[] = [
  {
    "id": "pal-ns-im-001",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A patient with recurrent calcium-containing renal stones is prescribed a medication to reduce stone recurrence by decreasing urinary calcium excretion. Which of the following drugs is most appropriate?",
    "options": [
      "Thiazide diuretic",
      "Cholestyramine",
      "Sodium bicarbonate",
      "Furosemide"
    ],
    "answer": 0,
    "explanation": "Thiazide diuretics increase calcium reabsorption in the distal convoluted tubule, reducing urinary calcium excretion and preventing recurrent calcium stones."
  },
  {
    "id": "pal-ns-im-002",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A patient develops frequent watery diarrhea and abdominal cramps after completing oral antibiotics for a UTI, with WBC 13,000/uL and suspected Clostridioides difficile infection. Which of the following is the most appropriate initial treatment?",
    "options": [
      "Oral vancomycin",
      "Oral metronidazole",
      "Intravenous ceftriaxone",
      "Loperamide monotherapy"
    ],
    "answer": 0,
    "explanation": "Oral vancomycin (or fidaxomicin) is first-line therapy for Clostridioides difficile infection; antimotility agents like loperamide should be avoided."
  },
  {
    "id": "pal-ns-im-003",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A patient with systemic sclerosis presents with sudden severe hypertension (>220/110 mmHg) consistent with scleroderma renal crisis. Which of the following is the most appropriate treatment?",
    "options": [
      "Captopril (ACE inhibitor)",
      "IV labetalol alone",
      "IV nitroprusside alone",
      "IV labetalol plus nitroprusside"
    ],
    "answer": 0,
    "explanation": "ACE inhibitors such as captopril are the cornerstone of therapy for scleroderma renal crisis and significantly improve renal and overall survival."
  },
  {
    "id": "pal-ns-im-004",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A patient has a mutation causing decreased antithrombin III activity. Which of the following effects on anticoagulant therapy is most likely?",
    "options": [
      "Heparin resistance",
      "Warfarin resistance",
      "Direct factor Xa inhibition failure",
      "Increased platelet aggregation"
    ],
    "answer": 0,
    "explanation": "Unfractionated heparin requires antithrombin III to exert its anticoagulant effect; antithrombin III deficiency leads to heparin resistance."
  },
  {
    "id": "pal-ns-im-005",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A patient presents with sudden loss of pain and temperature sensation over the right face and left body, preserved limb motor strength, and falling toward the right side. Where is the lesion most likely located?",
    "options": [
      "Right lateral medulla",
      "Left lateral medulla",
      "Right medial medulla",
      "Left medial medulla"
    ],
    "answer": 0,
    "explanation": "A right lateral medullary (Wallenberg) lesion affects the right spinal trigeminal nucleus/tract (right face pain/temperature loss), left spinothalamic tract (contralateral body pain/temperature loss), and right vestibular/inferior cerebellar pathways (falling toward the right)."
  },
  {
    "id": "pal-ns-im-006",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "Which of the following is a recognized cause of microcytic anemia?",
    "options": [
      "Hookworm infestation",
      "Acute bleeding from peptic ulcer disease",
      "Diphyllobothrium latum infestation",
      "Isolated vitamin B12 deficiency"
    ],
    "answer": 0,
    "explanation": "Hookworm infestation causes chronic gastrointestinal blood loss leading to iron-deficiency microcytic anemia, whereas Diphyllobothrium latum causes vitamin B12 deficiency (macrocytic anemia)."
  },
  {
    "id": "pal-ns-im-007",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A patient with eosinophilic granulomatosis with polyangiitis (EGPA; Churg-Strauss syndrome) is evaluated for neurologic complications. Which finding is classically associated with EGPA?",
    "options": [
      "Mononeuritis multiplex",
      "Classic trigeminal neuralgia",
      "Subacute combined degeneration",
      "Myasthenic crisis"
    ],
    "answer": 0,
    "explanation": "Mononeuritis multiplex (asymmetrical peripheral neuropathy involving multiple individual nerves) is a hallmark neurologic manifestation of systemic vasculitides including EGPA."
  },
  {
    "id": "pal-ns-im-008",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A patient with small-cell lung carcinoma (SCLC) is evaluated for paraneoplastic manifestations. Which of the following is NOT classically associated with SCLC?",
    "options": [
      "PTH-related peptide (PTHrP) causing hypercalcemia",
      "Cushing syndrome due to ectopic ACTH production",
      "SIADH with hyponatremia",
      "Lambert-Eaton myasthenic syndrome"
    ],
    "answer": 0,
    "explanation": "PTHrP-mediated hypercalcemia is classically associated with squamous cell carcinoma of the lung, whereas SCLC is associated with SIADH, ectopic ACTH, and Lambert-Eaton myasthenic syndrome."
  },
  {
    "id": "pal-ns-im-009",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A patient with ARDS is on mechanical ventilation. Which of the following represents the most appropriate lung-protective ventilatory strategy?",
    "options": [
      "Tidal volume 6 mL/kg based on predicted (ideal) body weight",
      "Tidal volume 10-12 mL/kg based on actual body weight",
      "Zero PEEP",
      "Target plateau pressure above 35 cm H2O"
    ],
    "answer": 0,
    "explanation": "Lung-protective ventilation in ARDS uses low tidal volumes (typically 6 mL/kg of predicted body weight) with appropriate PEEP and plateau pressure kept <= 30 cm H2O to prevent barotrauma and volutrauma."
  },
  {
    "id": "pal-ns-im-010",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "To reduce the risk of recurrent esophageal variceal bleeding after initial management of an acute variceal hemorrhage episode, which therapy is used for secondary prophylaxis?",
    "options": [
      "Non-selective beta-blocker (e.g., carvedilol or propranolol) with endoscopic variceal ligation",
      "High-dose proton pump inhibitor monotherapy",
      "Long-term prophylactic oral antibiotics alone",
      "Loop diuretic monotherapy"
    ],
    "answer": 0,
    "explanation": "Secondary prophylaxis against recurrent variceal hemorrhage combines a non-selective beta-blocker (which lowers portal venous pressure via beta-1 and splanchnic alpha-1/beta-2 blockade) with endoscopic variceal band ligation."
  },
  {
    "id": "pal-ns-im-011",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Basic",
    "question": "A 22-year-old man with type 1 diabetes presents with nausea, vomiting, abdominal pain, Kussmaul respirations, fruity breath, glucose 480 mg/dL, pH 7.18, HCO3- 10 mEq/L, and positive ketones. What is the most appropriate immediate next step?",
    "options": [
      "Intravenous isotonic fluid resuscitation (0.9% normal saline)",
      "Immediate IV potassium bolus before checking serum potassium",
      "Subcutaneous basal insulin without IV fluids",
      "Routine IV sodium bicarbonate infusion"
    ],
    "answer": 0,
    "explanation": "In diabetic ketoacidosis (DKA), initial management starts with isotonic intravenous fluid resuscitation (0.9% NaCl) to restore intravascular volume and tissue perfusion, followed by insulin therapy and potassium replacement guided by serum potassium."
  },
  {
    "id": "pal-ns-im-012",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Internal Medicine",
    "difficulty": "Intermediate",
    "question": "A 76-year-old woman with paroxysmal atrial fibrillation, hypertension, type 2 diabetes, and prior ischemic stroke has a CHA2DS2-VASc score of 5. What is the most appropriate long-term stroke prevention strategy?",
    "options": [
      "Long-term oral anticoagulation (e.g., DOAC or warfarin)",
      "Aspirin 81 mg daily alone",
      "No antithrombotic therapy required",
      "Short-term clopidogrel for 4 weeks only"
    ],
    "answer": 0,
    "explanation": "Patients with elevated CHA2DS2-VASc scores (>= 2 in women or >= 1 in men) require long-term oral anticoagulation rather than antiplatelet monotherapy such as aspirin."
  },
  {
    "id": "pal-ns-ped-001",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "An infant born at 24 weeks of gestation reaches the age at which routine childhood immunizations are scheduled. How should vaccination be administered?",
    "options": [
      "Administer routine vaccines on schedule according to chronological age",
      "Delay all vaccines until corrected gestational age matches term birth",
      "Give half doses until weight reaches 3 kg",
      "Withhold live vaccines indefinitely"
    ],
    "answer": 0,
    "explanation": "Preterm infants should receive routine immunizations on schedule according to their chronological age (actual age since birth) at standard doses."
  },
  {
    "id": "pal-ns-ped-002",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A child presents with recurrent, stereotyped episodes of fever associated with aphthous oral ulcers, pharyngitis, and cervical adenitis with complete resolution between episodes, consistent with PFAPA syndrome. Which of the following is the definitive treatment?",
    "options": [
      "Tonsillectomy",
      "Daily prophylactic penicillin",
      "High-dose IVIG",
      "Lifelong colchicine"
    ],
    "answer": 0,
    "explanation": "While a single corticosteroid dose can abort an acute episode, tonsillectomy is the definitive surgical treatment that leads to resolution in most patients with PFAPA syndrome."
  },
  {
    "id": "pal-ns-ped-003",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A child with features of tuberous sclerosis complex (such as seizures and characteristic skin lesions) is evaluated for cardiac involvement. Which cardiac tumor is classically associated with tuberous sclerosis?",
    "options": [
      "Rhabdomyoma",
      "Atrial myxoma",
      "Cardiac fibroma",
      "Angiosarcoma"
    ],
    "answer": 0,
    "explanation": "Cardiac rhabdomyoma is the most common cardiac tumor in infants and children and is strongly associated with tuberous sclerosis complex."
  },
  {
    "id": "pal-ns-ped-004",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A child presents with generalized edema, heavy proteinuria, hypoalbuminemia, and hyperlipidemia without significant hematuria or hypertension, and light microscopy is normal. What is the most likely diagnosis?",
    "options": [
      "Minimal change disease",
      "Post-streptococcal glomerulonephritis",
      "IgA nephropathy",
      "Membranous nephropathy"
    ],
    "answer": 0,
    "explanation": "Minimal change disease is the most common cause of nephrotic syndrome in children and shows normal glomeruli on light microscopy with podocyte foot-process effacement on electron microscopy."
  },
  {
    "id": "pal-ns-ped-005",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A previously healthy young child has a generalized tonic-clonic seizure during a febrile illness, recovers spontaneously, and has a normal neurologic examination. Which statement best describes the long-term prognosis?",
    "options": [
      "The long-term prognosis is generally excellent without lasting neurologic deficits",
      "Most children develop chronic epilepsy by adolescence",
      "Permanent focal motor deficits are common",
      "Daily antiepileptic therapy is required until age 12"
    ],
    "answer": 0,
    "explanation": "Simple febrile seizures have an excellent long-term prognosis with normal neurodevelopmental outcomes and a low overall risk of subsequent epilepsy."
  },
  {
    "id": "pal-ns-ped-006",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "An infant presents with marked hypotonia (\"floppy baby\"), head lag, upper-limb/bulbar weakness, and constipation. What is the most likely diagnosis?",
    "options": [
      "Infant botulism",
      "Down syndrome",
      "Spinal muscular atrophy type 1",
      "Congenital hypothyroidism"
    ],
    "answer": 0,
    "explanation": "Infant botulism typically presents with constipation followed by descending hypotonia, weak cry, poor feeding, and diminished reflexes due to botulinum neurotoxin blocking acetylcholine release."
  },
  {
    "id": "pal-ns-ped-007",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Pediatrics",
    "difficulty": "Basic",
    "question": "A 6-year-old boy presents with palpable purpura over the buttocks and lower extremities, colicky abdominal pain, and arthralgia with a normal platelet count. What is the most likely diagnosis?",
    "options": [
      "IgA vasculitis (Henoch-Schonlein purpura)",
      "Immune thrombocytopenia (ITP)",
      "Meningococcemia",
      "Acute rheumatic fever"
    ],
    "answer": 0,
    "explanation": "IgA vasculitis (Henoch-Schonlein purpura) is a small-vessel IgA-mediated leukocytoclastic vasculitis presenting classically with palpable purpura, arthralgia/arthritis, and abdominal pain with normal platelets."
  },
  {
    "id": "pal-ns-ped-008",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Pediatrics",
    "difficulty": "Intermediate",
    "question": "A young child presents with acute high fever, drooling, muffled voice, anxiety, and sitting upright/tripod positioning with minimal cough, consistent with acute epiglottitis. What is the most appropriate immediate priority?",
    "options": [
      "Urgently secure the airway in a controlled setting and avoid distressing procedures like tongue-blade throat examination",
      "Perform immediate bedside throat inspection with a tongue depressor",
      "Discharge home on oral amoxicillin",
      "Delay airway management until an outpatient CT scan is performed"
    ],
    "answer": 0,
    "explanation": "Acute epiglottitis is a life-threatening airway emergency; securing the airway in a controlled environment is paramount while avoiding agitation or unnecessary oropharyngeal instrumentation that could precipitate complete airway obstruction."
  },
  {
    "id": "pal-ns-derm-001",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Dermatology",
    "difficulty": "Basic",
    "question": "A child presents with patchy alopecia on the scalp showing broken hairs appearing as \"black dots\" within follicular openings. What is the most likely diagnosis?",
    "options": [
      "Tinea capitis",
      "Pediculosis capitis",
      "Alopecia areata",
      "Trichotillomania"
    ],
    "answer": 0,
    "explanation": "Endothrix tinea capitis causes hair shafts to break at or just below the scalp surface, producing characteristic \"black dots\" within hair follicles."
  },
  {
    "id": "pal-ns-derm-002",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Dermatology",
    "difficulty": "Basic",
    "question": "Which of the following statements is most characteristic of pityriasis rosea?",
    "options": [
      "Often begins with a herald patch followed by oval scaly plaques distributed along cleavage lines",
      "Caused by a primary dermatophyte fungal infection",
      "Treated primarily with systemic antibacterial therapy",
      "Typically causes permanent scarring"
    ],
    "answer": 0,
    "explanation": "Pityriasis rosea commonly starts with a single herald patch followed by oval erythematous scaly plaques oriented along Langer cleavage lines (\"Christmas tree\" pattern) and resolves spontaneously."
  },
  {
    "id": "pal-ns-derm-003",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Dermatology",
    "difficulty": "Basic",
    "question": "A patient with psoriasis develops new psoriatic plaques along a linear scratch or site of skin trauma. What is this phenomenon called?",
    "options": [
      "Koebner phenomenon",
      "Nikolsky sign",
      "Auspitz sign",
      "Darier sign"
    ],
    "answer": 0,
    "explanation": "The Koebner phenomenon (isomorphic response) is the appearance of new skin lesions of a dermatosis such as psoriasis at sites of mechanical trauma or injury."
  },
  {
    "id": "pal-ns-derm-004",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Dermatology",
    "difficulty": "Basic",
    "question": "An infant with a family history of asthma and atopy presents with pruritic erythematous scaling and lichenified patches on the cheeks and skin folds. What is the most likely diagnosis?",
    "options": [
      "Atopic dermatitis",
      "Tinea corporis",
      "Scabies",
      "Seborrheic dermatitis"
    ],
    "answer": 0,
    "explanation": "Atopic dermatitis is a chronic relapsing pruritic inflammatory skin disorder strongly associated with personal or family history of atopy (asthma, allergic rhinitis, eczema)."
  },
  {
    "id": "pal-ns-derm-005",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Dermatology",
    "difficulty": "Basic",
    "question": "A young child presents with low-grade fever, painful oral vesicles/ulcers, and oval vesicles on an erythematous base over the palms and soles. Which virus is the most common cause?",
    "options": [
      "Coxsackievirus A16",
      "Varicella-zoster virus",
      "Measles virus",
      "Parvovirus B19"
    ],
    "answer": 0,
    "explanation": "Hand-foot-and-mouth disease most commonly results from Coxsackievirus A16 (or Enterovirus 71) and presents with oral enanthem and vesicular/papular lesions on the palms and soles."
  },
  {
    "id": "pal-ns-psych-001",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Psychiatry",
    "difficulty": "Basic",
    "question": "Which of the following is a negative symptom of schizophrenia rather than a feature typical of major depressive episodes?",
    "options": [
      "Flat or blunted affect",
      "Feelings of worthlessness and excessive guilt",
      "Psychomotor agitation of a manic state",
      "Flight of ideas"
    ],
    "answer": 0,
    "explanation": "Flat or blunted affect (diminished emotional expression) is a classic negative symptom of schizophrenia, whereas worthlessness and guilt are typical of depressive episodes."
  },
  {
    "id": "pal-ns-psych-002",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Psychiatry",
    "difficulty": "Intermediate",
    "question": "An older adult presents with prominent depressed mood, recent-onset memory complaints, and poor effort on cognitive testing that improves with antidepressant treatment. What is this presentation classically called?",
    "options": [
      "Depressive pseudodementia",
      "Vascular dementia",
      "Huntington disease",
      "Creutzfeldt-Jakob disease"
    ],
    "answer": 0,
    "explanation": "Depressive pseudodementia refers to cognitive impairment secondary to major depression in older adults that mimics dementia but is reversible with effective treatment of depression."
  },
  {
    "id": "pal-ns-psych-003",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Psychiatry",
    "difficulty": "Basic",
    "question": "Which category of psychiatric disorders is most common overall in childhood?",
    "options": [
      "Anxiety disorders",
      "Schizophrenia",
      "Anorexia nervosa",
      "Bipolar I disorder"
    ],
    "answer": 0,
    "explanation": "Anxiety disorders are among the most common psychiatric conditions in children and adolescents."
  },
  {
    "id": "pal-ns-psych-004",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Psychiatry",
    "difficulty": "Intermediate",
    "question": "A patient treated long-term with a typical (first-generation) antipsychotic develops involuntary, repetitive perioral movements such as lip smacking and chewing. What is the most likely diagnosis?",
    "options": [
      "Tardive dyskinesia",
      "Acute dystonia",
      "Akathisia",
      "Conversion disorder"
    ],
    "answer": 0,
    "explanation": "Tardive dyskinesia is a delayed-onset movement disorder associated with prolonged dopamine receptor blockade, typically causing choreiform or stereotypic movements of the mouth, tongue, and lips."
  },
  {
    "id": "pal-ns-psych-005",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Psychiatry",
    "difficulty": "Basic",
    "question": "A 26-year-old man presents with persistent depressed mood, anhedonia, insomnia, and fatigue for 3 weeks with no history of mania or hypomania. Which medication class is typically first-line for major depressive disorder?",
    "options": [
      "Selective serotonin reuptake inhibitor (SSRI)",
      "Haloperidol monotherapy",
      "Lithium monotherapy for acute unipolar depression",
      "Immediate electroconvulsive therapy as first-line"
    ],
    "answer": 0,
    "explanation": "Selective serotonin reuptake inhibitors (SSRIs) are first-line pharmacotherapy for major depressive disorder due to their efficacy and favorable safety/tolerability profile."
  },
  {
    "id": "pal-ns-anes-001",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Anesthesia",
    "difficulty": "Basic",
    "question": "Which agent specifically reverses neuromuscular blockade induced by rocuronium?",
    "options": [
      "Sugammadex",
      "Flumazenil",
      "Naloxone",
      "Protamine sulfate"
    ],
    "answer": 0,
    "explanation": "Sugammadex is a modified gamma-cyclodextrin that selectively encapsulates rocuronium (and vecuronium), rapidly reversing aminosteroid neuromuscular blockade."
  },
  {
    "id": "pal-ns-anes-002",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Anesthesia",
    "difficulty": "Basic",
    "question": "Which condition is a classic contraindication to succinylcholine due to the risk of severe hyperkalemia?",
    "options": [
      "Hyperkalemia or major burns / denervation / crush injury",
      "Mild seasonal allergic rhinitis",
      "Well-controlled mild essential hypertension alone",
      "Mild iron-deficiency anemia"
    ],
    "answer": 0,
    "explanation": "Succinylcholine causes potassium efflux from skeletal muscle and is contraindicated in hyperkalemia, major burns, crush injury, and denervation states due to risk of life-threatening hyperkalemic cardiac arrest."
  },
  {
    "id": "pal-ns-anes-003",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Anesthesia",
    "difficulty": "Intermediate",
    "question": "A patient develops signs of local anesthetic systemic toxicity (perioral numbness, CNS excitation/seizures, or cardiovascular toxicity) following regional anesthesia. What is the specific rescue therapy?",
    "options": [
      "Intravenous 20% lipid emulsion therapy",
      "Oral activated charcoal",
      "Flumazenil",
      "Atropine monotherapy without airway/resuscitation care"
    ],
    "answer": 0,
    "explanation": "Intravenous 20% lipid emulsion therapy is used alongside airway management and resuscitation to treat local anesthetic systemic toxicity (LAST)."
  },
  {
    "id": "pal-ns-anes-004",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Anesthesia",
    "difficulty": "Intermediate",
    "question": "During classic rapid sequence induction (RSI) in a patient at risk of aspiration, which practice is typically avoided when possible?",
    "options": [
      "Routine positive-pressure bag-mask ventilation prior to tracheal intubation",
      "Preoxygenation",
      "Rapid administration of an induction agent and neuromuscular blocker",
      "Placement of a cuffed endotracheal tube"
    ],
    "answer": 0,
    "explanation": "Rapid sequence induction emphasizes preoxygenation and prompt cuffed endotracheal intubation while avoiding routine positive-pressure mask ventilation when feasible to minimize gastric insufflation and aspiration risk."
  },
  {
    "id": "pal-ns-anes-005",
    "track": "specialty",
    "subTrack": "non-surgical",
    "specialty": "Anesthesia",
    "difficulty": "Basic",
    "question": "During preoperative airway assessment with the mouth wide open and tongue protruded, only the hard palate, soft palate, and base of the uvula (tip obscured) are visible. Which Mallampati class is this?",
    "options": [
      "Class III",
      "Class I",
      "Class II",
      "Class IV"
    ],
    "answer": 0,
    "explanation": "In the modified Mallampati classification, Class III is assigned when the soft palate and base of the uvula are visible but the tip of the uvula is obscured."
  }
];

import { palNonSurgicalQuestionsBatch3 } from "./palNonSurgicalQuestionsBatch3";
import { nonSurgicalClassificationQuestions } from "./nonSurgicalClassificationQuestions";
import { palNonSurgicalQuestionsBatch2 } from "./palNonSurgicalQuestionsBatch2";
import { palNonSurgicalQuestionsBatch1 } from "./palNonSurgicalQuestionsBatch1";
import {
  ALL_CLASSIFICATION_BRANCHES,
  ClassificationBranchFilter,
  ClassificationBranchId,
  MINORS_IDS,
  NON_SURGICAL_IDS,
  SURGICAL_ALL_IDS,
  classifyQuestionBranch,
} from "./classificationFilter";
import { useEffect, useMemo, useState, useRef, useCallback } from "react";
// __TEMP_AUTH_BYPASS__: import { ClerkProvider, SignIn, useAuth, useUser } from '@clerk/react';
import {
  Activity, ArrowLeft, ArrowUpRight, Award, BookOpen,
  Check, CheckCircle2, ChevronLeft, CircleHelp, ClipboardList, Clock3,
  GraduationCap, HeartPulse, Layers3, RotateCcw, ShieldCheck, Sparkles,
  Stethoscope, Target, X, Zap, Timer,
} from 'lucide-react';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Admin from './Admin';

const DEFAULT_RENDER_API_BASE = "https://medquest-arabic.onrender.com";
const RAW_WEB_API_BASE = (import.meta.env.VITE_API_URL || "").replace(/\/+$/, "");
const RAW_ANDROID_API_BASE = (import.meta.env.VITE_ANDROID_API_URL || "").replace(/\/+$/, "");
const IS_CAPACITOR_ORIGIN = typeof window !== "undefined" && (
  Boolean((window as unknown as { Capacitor?: { isNativePlatform?: () => boolean } }).Capacitor?.isNativePlatform?.()) ||
  window.location.protocol === "capacitor:" ||
  /^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/i.test(window.location.origin)
);
const EFFECTIVE_API_BASE = IS_CAPACITOR_ORIGIN
  ? (RAW_ANDROID_API_BASE || (/^https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?$/i.test(RAW_WEB_API_BASE) ? "" : RAW_WEB_API_BASE) || DEFAULT_RENDER_API_BASE)
  : RAW_WEB_API_BASE;
function resolveApiUrl(path: string): string {
  const normalizedPath = path.startsWith("/") ? path : "/" + path;
  return EFFECTIVE_API_BASE ? EFFECTIVE_API_BASE + normalizedPath : normalizedPath;
}

async function parseApiJson<T>(res: Response, fallbackError: string): Promise<T> {
  const rawText = await res.text();
  const trimmed = rawText.trim();
  if (!trimmed) {
    if (!res.ok) throw new Error(fallbackError);
    return {} as T;
  }
  if (trimmed.startsWith("<!DOCTYPE") || trimmed.startsWith("<html") || trimmed.startsWith("<HTML")) {
    throw new Error(`تعذر الوصول إلى خادم الاعتماد حالياً (تم استلام صفحة ويب HTML بدل JSON من: ${res.url || "unknown"} | status: ${res.status}).`);
  }
  let parsed: unknown;
  try {
    parsed = JSON.parse(trimmed);
  } catch {
    throw new Error(fallbackError);
  }
  if (!res.ok) {
    const errObj = parsed as { error?: string; message?: string };
    throw new Error(errObj?.error || errObj?.message || fallbackError);
  }
  return parsed as T;
}



type TrackId = 'internship' | 'specialty';
type Difficulty = 'Basic' | 'Intermediate' | 'Advanced';
type Question = {
  id: string; specialty: string; difficulty: Difficulty; question: string;
  options: string[]; answer: number; explanation: string;
};
type BlueprintItem = { category: string; share: number };
type Progress = { answered: Record<TrackId, string[]>; correct: Record<TrackId, string[]>; streak: number; lastStudy: string };

const internshipQuestions: Question[] = [
  { id:'ip-01', specialty:'Emergency Medicine', difficulty:'Basic', question:'A 24-year-old man presents with a painful, swollen ankle after an inversion injury. He can bear weight and has no bony tenderness. What is the most appropriate initial management?', options:['Immediate MRI of the ankle','Rest, ice, compression, elevation, and early mobilization','Urgent surgical fixation','Prolonged immobilization in a cast'], answer:1, explanation:'This presentation is most consistent with a mild lateral ankle sprain. In the absence of Ottawa ankle rule criteria, imaging is not routinely indicated. Early protected movement, ice, compression, elevation, and analgesia support recovery while avoiding the stiffness associated with prolonged immobilization.' },
  { id:'ip-02', specialty:'Internal Medicine', difficulty:'Basic', question:'A 58-year-old patient with type 2 diabetes has a blood pressure of 148/92 mmHg on two visits. Which medication class is particularly useful when albuminuria is present?', options:['ACE inhibitor','Short-acting nitrate','Loop diuretic as monotherapy','Alpha-1 blocker'], answer:0, explanation:'An ACE inhibitor (or an ARB if an ACE inhibitor is not tolerated) is a preferred antihypertensive when diabetes is accompanied by albuminuria. Renin–angiotensin system blockade lowers intraglomerular pressure and reduces progression of diabetic kidney disease. Renal function and potassium should be monitored after initiation.' },
  { id:'ip-03', specialty:'Pediatrics', difficulty:'Basic', question:'A 2-year-old child has acute watery diarrhea but is alert, drinking, and has moist mucous membranes. What is the best initial treatment?', options:['Oral rehydration solution in small frequent amounts','Routine intravenous antibiotics','Withhold all fluids for 12 hours','Antimotility medication'], answer:0, explanation:'For a child without signs of severe dehydration, oral rehydration solution is first-line. Small, frequent volumes replace water and electrolytes effectively. Continue age-appropriate feeding and assess for red flags such as lethargy, poor perfusion, blood in stool, or inability to tolerate oral fluids.' },
  { id:'ip-04', specialty:'Obstetrics & Gynecology', difficulty:'Basic', question:'A woman at 30 weeks of pregnancy reports reduced fetal movements. Which is the most appropriate first assessment in a viable pregnancy?', options:['Reassure and arrange routine review next month','Assess fetal heart rate and arrange cardiotocography','Perform an immediate amniocentesis','Start oral corticosteroids'], answer:1, explanation:'Reduced fetal movement warrants timely assessment. Confirm fetal viability and, after 28 weeks, cardiotocography is commonly used to assess fetal heart rate pattern. Further ultrasound assessment of growth and amniotic fluid may be indicated, especially if symptoms persist or there are risk factors.' },
  { id:'ip-05', specialty:'Emergency Medicine', difficulty:'Intermediate', question:'A 67-year-old with COPD is drowsy and has an oxygen saturation of 82% on room air. Which oxygen strategy is most appropriate while urgent assessment is underway?', options:['Withhold oxygen because of COPD','Controlled oxygen targeting 88–92% pending blood gas results','High-flow oxygen targeting 100% without monitoring','Nebulized saline only'], answer:1, explanation:'Give controlled oxygen to a target saturation of 88–92% in a patient at risk of hypercapnic respiratory failure while obtaining an urgent arterial or venous blood gas. Hypoxemia must be treated, but excessive oxygen may worsen CO₂ retention in susceptible patients. Escalate respiratory support based on the clinical state and gas results.' },
  { id:'ip-06', specialty:'Internal Medicine', difficulty:'Intermediate', question:'A patient with suspected community-acquired pneumonia has confusion, respiratory rate 32/min, and blood pressure 88/56 mmHg. What is the best next step?', options:['Discharge with oral antibiotics','Urgent hospital assessment, sepsis evaluation, and initial resuscitation','Wait for sputum culture before treatment','Treat with cough suppressant and review in one week'], answer:1, explanation:'Confusion, marked tachypnea, and hypotension are signs of severe illness and possible sepsis. This patient needs urgent hospital-level assessment, oxygenation and perfusion evaluation, prompt appropriate antimicrobials, and carefully monitored fluid resuscitation. Cultures should not delay time-critical treatment.' },
  { id:'ip-07', specialty:'Surgery', difficulty:'Intermediate', question:'A 42-year-old has right upper quadrant pain, fever, and a positive Murphy sign. Ultrasound shows gallstones and gallbladder wall thickening. What is the most likely diagnosis?', options:['Acute cholecystitis','Acute pancreatitis','Peptic ulcer disease','Renal colic'], answer:0, explanation:'The combination of right upper quadrant pain, fever, a positive Murphy sign, gallstones, and gallbladder wall thickening supports acute calculous cholecystitis. Initial care includes analgesia, hydration, and appropriate antibiotics when indicated, with early surgical review for definitive management.' },
  { id:'ip-08', specialty:'Psychiatry', difficulty:'Intermediate', question:'A patient taking an SSRI develops agitation, diaphoresis, tremor, hyperreflexia, and inducible clonus after starting tramadol. What is the most likely explanation?', options:['Neuroleptic malignant syndrome','Serotonin syndrome','Acute dystonia','Anticholinergic toxicity'], answer:1, explanation:'Serotonergic medication combinations can produce serotonin syndrome. Neuromuscular hyperactivity—particularly clonus and hyperreflexia—helps distinguish it from neuroleptic malignant syndrome. Stop serotonergic agents, provide supportive care, monitor temperature and complications, and seek urgent specialist advice for significant toxicity.' },
  { id:'ip-09', specialty:'Emergency Medicine', difficulty:'Advanced', question:'A 19-year-old with type 1 diabetes has vomiting, deep breathing, glucose 28 mmol/L, and ketones 6.2 mmol/L. After initial isotonic fluid, what should guide the next immediate treatment?', options:['Start intravenous insulin according to the DKA protocol and monitor potassium closely','Give bicarbonate routinely before insulin','Give a large potassium bolus without measuring serum potassium','Stop fluids until glucose normalizes'], answer:0, explanation:'This is diabetic ketoacidosis. Once initial fluid resuscitation is underway, use a structured DKA protocol with intravenous insulin and frequent monitoring of glucose, ketones, electrolytes, and acid–base status. Potassium may fall rapidly with insulin; replace it according to measured levels and local protocol. Routine bicarbonate is generally not indicated.' },
  { id:'ip-10', specialty:'Obstetrics & Gynecology', difficulty:'Advanced', question:'A pregnant patient at 34 weeks has severe headache, visual symptoms, blood pressure 172/114 mmHg, and proteinuria. What is the immediate priority?', options:['Outpatient blood pressure review in 48 hours','Stabilize the mother, treat severe hypertension, and arrange urgent obstetric care','Wait for 24-hour urine protein before acting','Give a diuretic and discharge'], answer:1, explanation:'This is pre-eclampsia with severe features and carries immediate maternal and fetal risk. Stabilize the mother, treat severe hypertension promptly with an appropriate agent, consider magnesium sulfate for seizure prophylaxis, assess maternal end-organ function and fetal status, and involve senior obstetric care. Delivery timing follows stabilization and clinical assessment.' },
  { id:'ip-11', specialty:'Internal Medicine', difficulty:'Advanced', question:'A patient with cirrhosis and ascites develops fever and diffuse abdominal discomfort. What investigation is essential to evaluate for spontaneous bacterial peritonitis?', options:['Diagnostic paracentesis with ascitic fluid cell count and culture','Routine colonoscopy','Serum amylase alone','Abdominal radiograph only'], answer:0, explanation:'Diagnostic paracentesis should be performed promptly in a hospitalized patient with cirrhosis and ascites who develops fever, pain, encephalopathy, renal deterioration, or other decompensation. An ascitic neutrophil count of at least 250 cells/mm³ supports spontaneous bacterial peritonitis. Send culture, ideally inoculated into blood culture bottles at the bedside.' },
  { id:'ip-12', specialty:'Pediatrics', difficulty:'Advanced', question:'A 5-week-old infant has a temperature of 38.2°C and appears feeding less than usual. What is the safest approach?', options:['Treat as a low-risk viral illness without assessment','Urgent age-appropriate evaluation for serious bacterial infection','Give antipyretic and review in one week','Wait for a rash to develop'], answer:1, explanation:'Fever of 38°C or higher in an infant under 3 months requires prompt clinical assessment because serious bacterial infection may present subtly. Evaluation is guided by age, appearance, and local pathways and may include urine, blood, and cerebrospinal fluid testing. A well appearance does not reliably exclude invasive infection.' },
];

const specialtyQuestions: Question[] = [
  { id:'se-01', specialty:'Cardiology', difficulty:'Basic', question:'A 62-year-old presents with crushing central chest pain. ECG shows ST elevation in leads II, III, and aVF. Which coronary territory is most likely involved?', options:['Anterior wall','Inferior wall','Lateral wall','Septal wall'], answer:1, explanation:'ST elevation in leads II, III, and aVF localizes to the inferior wall, most often supplied by the right coronary artery (or less commonly the left circumflex artery). Assess right ventricular involvement with right-sided leads when clinically relevant, especially if hypotension is present.' },
  { id:'se-02', specialty:'Respiratory Medicine', difficulty:'Basic', question:'Which spirometry finding is most consistent with obstructive lung disease?', options:['Reduced FEV₁/FVC ratio','Increased FEV₁/FVC ratio with low FVC','Normal ratio with isolated low TLC','Increased FVC with reduced residual volume'], answer:0, explanation:'Airflow obstruction is characterized by a reduced FEV₁/FVC ratio below the appropriate lower limit of normal (or the diagnostic threshold used by the relevant guideline). Spirometry should be interpreted in clinical context and may be repeated after bronchodilator to assess reversibility.' },
  { id:'se-03', specialty:'Neurology', difficulty:'Basic', question:'A patient has a unilateral facial droop involving the forehead and lower face. Which lesion pattern is most likely?', options:['Upper motor neuron lesion','Lower motor neuron facial nerve lesion','Isolated trigeminal neuropathy','Cerebellar lesion'], answer:1, explanation:'A lower motor neuron facial nerve lesion affects the ipsilateral forehead and lower face because the entire side of the facial musculature loses its peripheral input. A supranuclear lesion typically spares forehead movement due to bilateral cortical innervation of the upper face.' },
  { id:'se-04', specialty:'Nephrology', difficulty:'Basic', question:'Which laboratory pattern is typical of pre-renal acute kidney injury before prolonged ischemia?', options:['Low urine sodium and concentrated urine','High urine sodium and dilute urine','Heavy proteinuria with red cell casts','Hypercalcemia with glycosuria'], answer:0, explanation:'In pre-renal AKI, intact renal tubules conserve sodium and water in response to reduced perfusion, producing low urine sodium and concentrated urine. Indices such as fractional excretion of sodium are imperfect and can be affected by diuretics and underlying disease; interpret alongside the clinical picture.' },
  { id:'se-05', specialty:'Cardiology', difficulty:'Intermediate', question:'A patient with atrial fibrillation is hypotensive, confused, and has ongoing chest pain. What is the most appropriate immediate management?', options:['Elective outpatient rate control','Urgent synchronized electrical cardioversion','Oral anticoagulation alone','Wait for spontaneous conversion'], answer:1, explanation:'Hemodynamic instability attributable to atrial fibrillation is an indication for urgent synchronized electrical cardioversion. Stabilization and appropriate resuscitation occur in parallel. Anticoagulation assessment remains important but must not delay life-saving cardioversion in an unstable patient.' },
  { id:'se-06', specialty:'Endocrinology', difficulty:'Intermediate', question:'A patient taking methimazole develops fever and a sore throat. Which test is the most urgent?', options:['Full blood count with neutrophil count','Serum calcium','Thyroid ultrasound','Morning cortisol'], answer:0, explanation:'Fever and sore throat during thionamide therapy raise concern for agranulocytosis, a rare but serious adverse effect. Stop the medication pending urgent full blood count and neutrophil assessment, and arrange prompt clinical review. Patients should be counselled to seek care immediately for these symptoms.' },
  { id:'se-07', specialty:'Gastroenterology', difficulty:'Intermediate', question:'A patient with ulcerative colitis has severe bloody diarrhea, tachycardia, and colonic dilation on imaging. What complication must be urgently considered?', options:['Toxic megacolon','Appendiceal mucocele','Achalasia','Biliary colic'], answer:0, explanation:'Systemic toxicity with colonic dilation in severe colitis suggests toxic megacolon, a life-threatening complication with risk of perforation. Urgent multidisciplinary care is needed, including gastroenterology and surgical input, careful fluid and electrolyte management, and avoidance of medications that impair motility.' },
  { id:'se-08', specialty:'Infectious Disease', difficulty:'Intermediate', question:'A patient with HIV has a CD4 count of 110 cells/µL and no sulfonamide allergy. Which prophylaxis is generally indicated to reduce Pneumocystis jirovecii pneumonia risk?', options:['Trimethoprim–sulfamethoxazole','Azithromycin only','Fluconazole','No prophylaxis at any CD4 count'], answer:0, explanation:'Pneumocystis jirovecii pneumonia prophylaxis is generally recommended when CD4 counts are below 200 cells/µL, with trimethoprim–sulfamethoxazole commonly preferred. Check current local guidance, drug interactions, renal function, and allergy history; prophylaxis can be reconsidered after immune recovery on effective antiretroviral therapy.' },
  { id:'se-09', specialty:'Cardiology', difficulty:'Advanced', question:'A patient with severe aortic stenosis develops hypotension during induction of anesthesia. Which hemodynamic principle is most important?', options:['Maintain preload and systemic vascular resistance while avoiding tachycardia','Reduce preload aggressively','Allow marked tachycardia to increase cardiac output','Use vasodilation as first-line treatment'], answer:0, explanation:'With severe aortic stenosis, cardiac output is relatively fixed by the obstructed valve. Maintaining adequate preload and systemic vascular resistance supports coronary perfusion; sinus rhythm and avoidance of tachycardia preserve diastolic filling time. Treat hypotension promptly with an appropriate vasopressor and expert support.' },
  { id:'se-10', specialty:'Neurology', difficulty:'Advanced', question:'A patient with subarachnoid hemorrhage develops focal deficits on day 7. CT shows no new bleeding. Which complication is most likely?', options:['Cerebral vasospasm with delayed cerebral ischemia','Normal-pressure hydrocephalus','Medication-induced dystonia','Acute bacterial meningitis'], answer:0, explanation:'Delayed cerebral ischemia from cerebral vasospasm commonly occurs several days after aneurysmal subarachnoid hemorrhage, often peaking around days 5–10. New deficits require urgent assessment, exclusion of rebleeding and other causes, and specialist-led management. Nimodipine is used to improve neurological outcomes in appropriate patients.' },
  { id:'se-11', specialty:'Nephrology', difficulty:'Advanced', question:'A patient with rapidly progressive glomerulonephritis has hemoptysis and a positive anti-GBM antibody. Which diagnosis best explains this presentation?', options:['Goodpasture syndrome','Minimal change disease','IgA nephropathy','Membranous nephropathy'], answer:0, explanation:'Anti-glomerular basement membrane disease can affect both glomerular and pulmonary basement membranes, causing rapidly progressive glomerulonephritis with pulmonary hemorrhage (Goodpasture syndrome). This is a medical emergency requiring urgent nephrology involvement, confirmatory work-up, and prompt immunosuppressive therapy and plasma exchange when indicated.' },
  { id:'se-12', specialty:'Endocrinology', difficulty:'Advanced', question:'A patient with primary adrenal insufficiency presents with vomiting, hypotension, hyponatremia, and hyperkalemia. What is the immediate treatment priority?', options:['IV hydrocortisone and isotonic saline without waiting for confirmatory testing','Oral fludrocortisone only','Fluid restriction and insulin','Wait for ACTH stimulation test before treating'], answer:0, explanation:'Suspected adrenal crisis is life-threatening. Give immediate parenteral hydrocortisone and isotonic saline, with glucose when needed, while monitoring electrolytes and hemodynamics. Draw cortisol and ACTH first only if this can be done without delaying treatment. Identify and treat the precipitating cause.' },
  ...palNonSurgicalQuestionsBatch1,
  ...palNonSurgicalQuestionsBatch2,
  ...palNonSurgicalQuestionsBatch3,
  ...nonSurgicalClassificationQuestions,
];

const trackInfo: Record<TrackId, { name: string; english: string; description: string; symbol: string; blueprint: BlueprintItem[] }> = {
  internship: {
    name:'امتحان الامتياز الفلسطيني', english:'Palestinian Internship', description:'أساسيات سريرية ومواقف شائعة في بداية الممارسة', symbol:'01',
    blueprint:[
      {category:'الطب الباطني',share:29},{category:'الطوارئ',share:25},{category:'الأطفال',share:21},{category:'الجراحة والتوليد',share:25},
    ],
  },
  specialty: {
    name:'التصنيفي الفلسطيني', english:'Palestinian Classification (Surgical & Non-Surgical)', description:'يشمل المسار الجراحي والمسار اللاجراحي لامتحان التصنيفي الفلسطيني', symbol:'02',
    blueprint:[
      {category:'القلب والأوعية',share:24},{category:'الأعصاب والكلى',share:25},{category:'الغدد الصماء',share:24},{category:'الصدرية والعدوى',share:27},
    ],
  },
};
const categoriesByTrack: Record<TrackId, string[]> = {
  internship:['Emergency Medicine','Internal Medicine','Pediatrics','Obstetrics & Gynecology','Surgery','Psychiatry'],
  specialty:['Cardiology','Pulmonology','Respiratory Medicine','Neurology','Nephrology','Endocrinology','Gastroenterology','Hematology','Infectious Diseases','Infectious Disease','Rheumatology','Pediatrics','Dermatology','Psychiatry','Radiology','Anesthesia','Emergency'],
};
const questionsByTrack: Record<TrackId, Question[]> = { internship: internshipQuestions, specialty: specialtyQuestions };
const STORAGE_KEY = 'medquest-arabic-progress-v1';
const emptyProgress: Progress = { answered:{internship:[],specialty:[]}, correct:{internship:[],specialty:[]}, streak:0, lastStudy:'' };
const readProgress = (): Progress => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return emptyProgress;
    const parsed = JSON.parse(stored) as Partial<Progress>;
    return {
      answered:{ internship:Array.isArray(parsed.answered?.internship)?parsed.answered.internship:[], specialty:Array.isArray(parsed.answered?.specialty)?parsed.answered.specialty:[] },
      correct:{ internship:Array.isArray(parsed.correct?.internship)?parsed.correct.internship:[], specialty:Array.isArray(parsed.correct?.specialty)?parsed.correct.specialty:[] },
      streak:typeof parsed.streak==='number'?parsed.streak:0, lastStudy:typeof parsed.lastStudy==='string'?parsed.lastStudy:'',
    };
  } catch { return emptyProgress; }
};
const todayKey = () => new Date().toLocaleDateString('en-CA');
const difficultyArabic: Record<Difficulty,string> = { Basic:'أساسي', Intermediate:'متوسط', Advanced:'متقدم' };

const optionLetters = ['A','B','C','D'];

type ApiStudentQuestion = {
  id: string;
  examTrackId: string;
  stem: string;
  options: Array<{ id?: string; text?: string } | string>;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  topic: string;
  explanationBasic?: string | null;
  explanationAdvanced?: string | null;
  correctOptionId?: string | null;
};

type ApiExamTrack = {
  id: string;
  name?: string;
  slug?: string;
  description?: string | null;
};

function mapApiDifficulty(d: unknown): Question['difficulty'] {
  const s = String(d || '').toLowerCase();
  if (s === 'intermediate' || s === 'medium') return 'Intermediate';
  if (s === 'advanced' || s === 'hard') return 'Advanced';
  return 'Basic';
}

function resolveTrackKey(rawTrack: unknown): TrackId {
  const s = String(rawTrack || '').toLowerCase();
  return s.includes('spec') || s.includes('اختصاص') ? 'specialty' : 'internship';
}

function AppHome() {
  // __TEMP_AUTH_BYPASS__: const { getToken } = useAuth();
  const getToken = async () => null;
  const [screen,setScreen] = useState<'dashboard'|'bank'|'practice'|'exam'>('dashboard');
  const [track,setTrack] = useState<TrackId>(() => localStorage.getItem('medquest-arabic-track')==='specialty'?'specialty':'internship');
  const [subTrack,setSubTrack] = useState<'all'|'surgical'|'non-surgical'>('all');
  const [selectedBranches, setSelectedBranches] = useState<ClassificationBranchId[]>([...ALL_CLASSIFICATION_BRANCHES]);
  const [mistakesOnly, setMistakesOnly] = useState<boolean>(false);
  const [showMenu,setShowMenu] = useState(false);
  const [progress,setProgress] = useState<Progress>(readProgress);
  const [difficulty,setDifficulty] = useState('All');
  const [category,setCategory] = useState('All');
  const [questionIndex,setQuestionIndex] = useState(0);
  const [selectedAnswer,setSelectedAnswer] = useState<number|null>(null);
  const [examRun,setExamRun] = useState(0);
  const [apiTracks, setApiTracks] = useState<ApiExamTrack[]>([]);
  const [apiQuestions, setApiQuestions] = useState<Record<TrackId, Question[]> | null>(null);

  useEffect(()=>{localStorage.setItem(STORAGE_KEY,JSON.stringify(progress));},[progress]);
  useEffect(()=>{localStorage.setItem('medquest-arabic-track',track);},[track]);

  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const token = await getToken();
        const headers: Record<string, string> = token ? { Authorization: 'Bearer ' + token } : {};
        const [tRes, qRes] = await Promise.all([
          fetch(resolveApiUrl('/api/question-bank/exam-tracks'), { headers }),
          fetch(resolveApiUrl('/api/question-bank/questions?limit=100'), { headers }),
        ]);
        if (!active) return;
        if (tRes.ok) {
          const tData = await tRes.json();
          if (Array.isArray(tData)) setApiTracks(tData);
        }
        if (qRes.ok) {
          const qData = await qRes.json();
          const list: ApiStudentQuestion[] = Array.isArray(qData)
            ? qData
            : Array.isArray(qData?.questions)
              ? qData.questions
              : [];
          if (list.length > 0) {
            const grouped: Record<TrackId, Question[]> = {
              internship: [],
              specialty: [],
            };
            for (const row of list) {
              const tKey = resolveTrackKey(row.examTrackId);
              const rawOpts = Array.isArray(row.options) ? row.options : [];
              const optTexts = rawOpts.map((o) =>
                typeof o === 'string' ? o : String(o?.text ?? '')
              );
              const ansIdx = Math.max(
                0,
                rawOpts.findIndex((o) =>
                  typeof o === 'object' && o !== null && row.correctOptionId
                    ? o.id === row.correctOptionId
                    : false
                )
              );
              grouped[tKey].push({
                id: String(row.id),
                specialty: row.topic || 'General Medicine',
                difficulty: mapApiDifficulty(row.difficulty),
                question: row.stem || '',
                options: optTexts.length >= 2 ? optTexts : ['Option A', 'Option B', 'Option C', 'Option D'],
                answer: ansIdx,
                explanation: row.explanationBasic || row.explanationAdvanced || 'Clinical explanation available in study review.',
              });
            }
            setApiQuestions({
              internship: grouped.internship.length > 0 ? grouped.internship : questionsByTrack.internship,
              specialty: grouped.specialty.length > 0 ? grouped.specialty : questionsByTrack.specialty,
            });
          }
        }
      } catch {
        // Keep local fallback seamlessly if offline or empty
      }
    })();
    return () => {
      active = false;
    };
  }, [getToken]);

  const mergeUniqueQuestions = (primary: Question[], secondary: Question[]): Question[] => { const seen = new Set<string>(); const out: Question[] = []; for (const item of [...primary, ...secondary]) { if (!seen.has(item.id)) { seen.add(item.id); out.push(item); } } return out; };

  const activeQuestionsByTrack: Record<TrackId, Question[]> = {
    internship: mergeUniqueQuestions(apiQuestions?.internship ?? [], questionsByTrack.internship),
    specialty: mergeUniqueQuestions(apiQuestions?.specialty ?? [], questionsByTrack.specialty),
  };
  const baseTrackQuestions = activeQuestionsByTrack[track];
  const trackQuestions = track === 'specialty'
    ? baseTrackQuestions.filter((q) => {
        const branch = classifyQuestionBranch(q.specialty, q.question);
        const matchesBranch = selectedBranches.includes(branch);
        if (!matchesBranch) return false;
        if (subTrack === 'all') return true;
        const isSurg = SURGICAL_ALL_IDS.includes(branch as any);
        return subTrack === 'surgical' ? isSurg : !isSurg;
      })
    : baseTrackQuestions;
  const visibleQuestions = useMemo(()=>trackQuestions.filter(q=>(difficulty==='All'||q.difficulty===difficulty)&&(category==='All'||q.specialty===category)),[trackQuestions,difficulty,category]);
  const mistakeIdsSet = useMemo(() => {
    const answeredList = progress.answered[track] || [];
    const correctSet = new Set(progress.correct[track] || []);
    return new Set(answeredList.filter((id) => !correctSet.has(id)));
  }, [progress, track]);

  const mistakeQuestionsCount = useMemo(
    () => trackQuestions.filter((q) => mistakeIdsSet.has(q.id)).length,
    [trackQuestions, mistakeIdsSet]
  );

  const activePracticeQuestions = useMemo(
    () => (mistakesOnly ? trackQuestions.filter((q) => mistakeIdsSet.has(q.id)) : trackQuestions),
    [mistakesOnly, trackQuestions, mistakeIdsSet]
  );

  const currentQuestion = activePracticeQuestions[questionIndex];
  const practiceDone = questionIndex >= activePracticeQuestions.length;
  const matchedApiTrack = apiTracks.find((t) => resolveTrackKey(t.slug || t.id) === track);
  const currentTrack = {
    ...trackInfo[track],
    ...(matchedApiTrack?.name ? { name: matchedApiTrack.name } : {}),
  };

  const chooseTrack = (value:TrackId) => {
    if (value===track) return;
    setTrack(value); setQuestionIndex(0); setSelectedAnswer(null); setDifficulty('All'); setCategory('All'); setMistakesOnly(false);
  };
  const startPractice = () => { setQuestionIndex(0); setSelectedAnswer(null); setScreen('practice'); };
  const answerQuestion = (answer:number) => {
    if (selectedAnswer!==null || !currentQuestion) return;
    setSelectedAnswer(answer);
    setProgress(prev=>{
      const alreadyAnswered=prev.answered[track].includes(currentQuestion.id);
      const answered=alreadyAnswered?prev.answered[track]:[...prev.answered[track],currentQuestion.id];
      const correct=answer===currentQuestion.answer&&!prev.correct[track].includes(currentQuestion.id)?[...prev.correct[track],currentQuestion.id]:prev.correct[track];
      const day=todayKey();
      const wasYesterday=prev.lastStudy && new Date(`${prev.lastStudy}T00:00:00`).getTime()===new Date(`${day}T00:00:00`).getTime()-86400000;
      const streak=prev.lastStudy===day?prev.streak:wasYesterday?prev.streak+1:1;
      return {...prev,answered:{...prev.answered,[track]:answered},correct:{...prev.correct,[track]:correct},streak,lastStudy:day};
    });
  };
  const nextQuestion = () => { setQuestionIndex(index=>index+1); setSelectedAnswer(null); };
  const resetStudy = () => { setQuestionIndex(0); setSelectedAnswer(null); };
  const setPage = (page:'dashboard'|'bank'|'practice'|'exam') => {setScreen(page);if(page==='practice')resetStudy();if(page==='exam')setExamRun(v=>v+1);};
  const recordExam = (items:Question[],answers:Record<string,number>) => {
    const day=todayKey();
    setProgress(prev=>{const ids=items.map(q=>q.id);const answered={...prev.answered,[track]:Array.from(new Set([...prev.answered[track],...ids]))};const correct={...prev.correct,[track]:Array.from(new Set([...prev.correct[track],...items.filter(q=>answers[q.id]===q.answer).map(q=>q.id)]))};const wasYesterday=prev.lastStudy&&new Date(`${prev.lastStudy}T00:00:00`).getTime()===new Date(`${day}T00:00:00`).getTime()-86400000;return {...prev,answered,correct,streak:prev.lastStudy===day?prev.streak:wasYesterday?prev.streak+1:1,lastStudy:day};});
  };

  return <div className="app-shell" dir="rtl">
    <div className="layout">
      <aside className="sidebar">
        <div className="brand"><div className="brand-mark"><Stethoscope size={21}/></div><div><div className="brand-name">MedQuest</div><div className="brand-sub">Palestine · Study well</div></div></div>
        <div className="side-caption">مساحة الدراسة</div>
        <nav className="nav-list" aria-label="التنقل الرئيسي">
          <button className={`nav-item ${screen==='dashboard'?'active':''}`} onClick={()=>setPage('dashboard')} data-testid="nav-dashboard"><span className="nav-icon"><Layers3 size={17}/></span>لوحة الدراسة</button>
          <button className={`nav-item ${screen==='bank'?'active':''}`} onClick={()=>setPage('bank')} data-testid="nav-question-bank"><span className="nav-icon"><BookOpen size={17}/></span>بنك الأسئلة</button>
          <button className={`nav-item ${screen==='practice'?'active':''}`} onClick={()=>setPage('practice')} data-testid="nav-practice"><span className="nav-icon"><Target size={17}/></span>ابدأ التدريب</button>
          <button className={`nav-item ${screen==='exam'?'active':''}`} onClick={()=>setPage('exam')} data-testid="nav-exam"><span className="nav-icon"><Timer size={17}/></span>امتحان تجريبي</button>
        </nav>
        <div className="side-track"><div className="side-caption">المسار الحالي</div><div className="track-mini"><span className="track-dot"/><span>{currentTrack.name}{track==='specialty'&&subTrack!=='all'?` · ${subTrack==='surgical'?'المسار الجراحي':'المسار اللاجراحي'}`:''}</span></div>{track==='specialty'&&<div style={{display:'flex',gap:6,marginTop:8,flexWrap:'wrap'}}><button type="button" className={`chip-btn ${subTrack==='all'?'active':''}`} onClick={()=>{setSubTrack('all');setSelectedBranches([...ALL_CLASSIFICATION_BRANCHES]);}}>الكل</button><button type="button" className={`chip-btn ${subTrack==='surgical'?'active':''}`} onClick={()=>{setSubTrack('surgical');setSelectedBranches([...SURGICAL_ALL_IDS]);}}>الجراحي</button><button type="button" className={`chip-btn ${subTrack==='non-surgical'?'active':''}`} onClick={()=>{setSubTrack('non-surgical');setSelectedBranches([...NON_SURGICAL_IDS]);}}>اللاجراحي</button></div>}</div>
        <div className="side-bottom">خطوة ثابتة اليوم،<br/>تُحدث فرقاً في الغد.</div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div className="mobile-brand"><div className="brand-mark"><Stethoscope size={16}/></div>MedQuest</div>
          <div className="crumb"><span>مساحة الدراسة</span><ChevronLeft size={13}/><strong>{screen==='dashboard'?'لوحة الدراسة':screen==='bank'?'بنك الأسئلة':screen==='exam'?'امتحان تجريبي':'التدريب'}</strong></div>
          <div className="top-actions"><span className="today">{new Intl.DateTimeFormat('ar-PS',{weekday:'long',day:'numeric',month:'long'}).format(new Date())}</span><div style={{position:"relative"}}><button type="button" className="profile" onClick={()=>setShowMenu(v=>!v)}>ط</button>{showMenu&&<div style={{position:"absolute",top:40,left:0,background:"#fff",border:"1px solid #d9e2dc",borderRadius:10,padding:6,zIndex:90,minWidth:150}}><button type="button" style={{display:"block",width:"100%",padding:6,border:"none",background:"none",textAlign:"right"}} onClick={()=>{setShowMenu(false);alert("المسار: "+currentTrack.name+" | المجاب: "+progress.answered[track].length);}}>حسابي</button><button type="button" style={{display:"block",width:"100%",padding:6,border:"none",background:"none",textAlign:"right"}} onClick={()=>{setShowMenu(false);alert("إعدادات الحساب والجلسة");}}>الإعدادات</button><button type="button" style={{display:"block",width:"100%",padding:6,border:"none",background:"none",textAlign:"right",color:"#b43d32"}} onClick={()=>{setShowMenu(false);if(confirm("تأكيد تسجيل الخروج؟"))void signOut();}}>تسجيل الخروج</button></div>}</div></div>
        </header>
        <div className="content">
          {screen==='dashboard'&&<>
  <Dashboard track={track} chooseTrack={(id)=>{chooseTrack(id);if(id==='specialty'){setSubTrack('all');}}} progress={progress} startPractice={startPractice} openBank={()=>setScreen('bank')} questionsCountByTrack={{internship:activeQuestionsByTrack.internship.length,specialty:activeQuestionsByTrack.specialty.length}} trackTitleOverride={currentTrack.name} />
  {track==='specialty'&&<>
    <ClassificationBranchFilter selectedBranches={selectedBranches} onChangeBranches={(next)=>{setSelectedBranches(next);setQuestionIndex(0);setSelectedAnswer(null);}} questions={baseTrackQuestions} onEnterSelectedQuestions={()=>{setMistakesOnly(false);setQuestionIndex(0);setSelectedAnswer(null);setScreen('practice');}} />
    <div style={{display:"flex",gap:10,marginTop:8,flexWrap:"wrap"}}>
      <button type="button" className="btn-primary" data-testid="button-specialty-surgical" onClick={()=>{setSubTrack('surgical');setSelectedBranches([...SURGICAL_ALL_IDS]);setMistakesOnly(false);setQuestionIndex(0);setSelectedAnswer(null);setScreen('practice');}}>تدريب / امتحان الجراحي</button>
      <button type="button" className="btn-secondary" data-testid="button-specialty-nonsurgical" onClick={()=>{setSubTrack('non-surgical');setSelectedBranches([...NON_SURGICAL_IDS]);setMistakesOnly(false);setQuestionIndex(0);setSelectedAnswer(null);setScreen('practice');}}>تدريب / امتحان اللاجراحي</button>
      {mistakeQuestionsCount>0&&<button type="button" className="btn-secondary" data-testid="button-review-mistakes" onClick={()=>{setMistakesOnly(true);setQuestionIndex(0);setSelectedAnswer(null);setScreen('practice');}}>مراجعة الأسئلة الخاطئة ({mistakeQuestionsCount})</button>}
    </div>
  </>}
</>}
          {screen==='bank'&&<QuestionBank track={track} chooseTrack={chooseTrack} questions={visibleQuestions} total={trackQuestions.length} difficulty={difficulty} setDifficulty={setDifficulty} category={category} setCategory={setCategory} startPractice={startPractice} />}
          {screen==='exam'&&<>
            {track==='specialty'&&<ClassificationBranchFilter compact selectedBranches={selectedBranches} onChangeBranches={(next)=>{setSelectedBranches(next);}} questions={baseTrackQuestions} />}
            <ExamSimulation key={`${track}-${examRun}-${subTrack}-${selectedBranches.join(",")}`} track={track} subTrack={subTrack} setSubTrack={setSubTrack} questions={trackQuestions} onTrackChange={chooseTrack} onFinish={recordExam} />
          </>}



          {screen==='practice'&&<>
            {track==='specialty'&&<ClassificationBranchFilter compact selectedBranches={selectedBranches} onChangeBranches={(next)=>{setSelectedBranches(next);setQuestionIndex(0);setSelectedAnswer(null);}} questions={baseTrackQuestions} onEnterSelectedQuestions={()=>{setQuestionIndex(0);setSelectedAnswer(null);}} />}
            <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:8,marginBottom:10,padding:"8px 12px",borderRadius:10,background:mistakesOnly?"#fff5f4":"#f8faf9",border:mistakesOnly?"1px solid #f0c5c0":"1px solid #dfe7e2"}}>
              <span style={{fontSize:12.5,fontWeight:700,color:mistakesOnly?"#9e2d24":"#39473f"}}>
                {mistakesOnly?`وضع مراجعة الأسئلة الخاطئة فقط (${activePracticeQuestions.length} سؤال في التخصصات المحددة)`:`عرض جميع الأسئلة المطابقة (${trackQuestions.length} سؤال · الأخطاء في التحديد الحالي: ${mistakeQuestionsCount})`}
              </span>
              <button type="button" className={mistakesOnly?"btn-primary":"btn-secondary"} style={{padding:"5px 11px",fontSize:12}} data-testid="toggle-mistakes-only" onClick={()=>{setMistakesOnly(v=>!v);setQuestionIndex(0);setSelectedAnswer(null);}}>
                {mistakesOnly?"عرض الكل":"الأسئلة الخاطئة فقط (" + mistakeQuestionsCount + ")"}
              </button>
            </div>
            {mistakesOnly&&activePracticeQuestions.length===0?<div className="panel" style={{textAlign:"center",padding:24,marginBottom:14}}><h3 className="panel-title">لا توجد أسئلة خاطئة في المسار والتخصصات المحددة</h3><p className="panel-hint">رائع! يمكنك العودة لجميع الأسئلة أو تعديل الأقسام المختارة.</p><button type="button" className="btn-primary" style={{marginTop:10}} onClick={()=>{setMistakesOnly(false);setQuestionIndex(0);setSelectedAnswer(null);}}>العودة لجميع الأسئلة</button></div>:<PracticeModeView key={track + "-" + subTrack + "-" + selectedBranches.join(",") + "-" + (mistakesOnly?"mistakes":"all") + "-" + activePracticeQuestions.length} track={track} chooseTrack={chooseTrack} subTrack={subTrack} setSubTrack={setSubTrack} questions={activePracticeQuestions} index={questionIndex} selectedAnswer={selectedAnswer} answerQuestion={answerQuestion} nextQuestion={nextQuestion} reset={resetStudy} progress={progress} recordExam={recordExam} />}
          </>}
          <footer className="practice-strip">
            <div className="practice-copy"><div className="practice-icon"><ShieldCheck size={18}/></div><div><p className="practice-title">تعلّم بثقة، خطوة بخطوة</p><p className="practice-text">محتوى تدريبي تعليمي، وليس بديلاً عن المشورة الطبية.</p></div></div>
            <button className="btn-primary" onClick={startPractice} data-testid="button-footer-practice">تدريب سريع <ArrowLeft size={14}/></button>
          </footer>
        </div>
      </main>
      <nav className="mobile-bottom-nav" aria-label="التنقل الرئيسي للجوال">
        <button className={`mobile-nav-item ${screen==='dashboard'?'active':''}`} onClick={()=>setPage('dashboard')} aria-current={screen==='dashboard'?'page':undefined} data-testid="mobile-nav-dashboard">
          <Layers3 size={19}/><span>لوحة الدراسة</span>
        </button>
        <button className={`mobile-nav-item ${screen==='bank'?'active':''}`} onClick={()=>setPage('bank')} aria-current={screen==='bank'?'page':undefined} data-testid="mobile-nav-question-bank">
          <BookOpen size={19}/><span>بنك الأسئلة</span>
        </button>
        <button className={`mobile-nav-item ${screen==='practice'?'active':''}`} onClick={()=>setPage('practice')} aria-current={screen==='practice'?'page':undefined} data-testid="mobile-nav-practice">
          <Target size={19}/><span>التدريب</span>
        </button>
      </nav>
    </div>
  </div>;
}

const difficultyLabels: Record<string, string> = typeof difficultyArabic !== "undefined" ? difficultyArabic : { Basic: "أساسي", Intermediate: "متوسط", Advanced: "متقدم" };
interface PracticeModeViewProps {
  track: TrackId;
  chooseTrack: (value: TrackId) => void;
  subTrack: ClassificationSubTrack;
  setSubTrack: (v: ClassificationSubTrack) => void;
  questions: Question[];
  index: number;
  selectedAnswer: number | null;
  answerQuestion: (answer: number) => void;
  nextQuestion: () => void;
  reset: () => void;
  progress: Progress;
  recordExam: (items: Question[], answers: Record<string, number>) => void;
}
function PracticeModeView(props: PracticeModeViewProps) {
  const {
    track, chooseTrack, subTrack, setSubTrack, questions, index,
    selectedAnswer, answerQuestion, nextQuestion, reset, progress, recordExam
  } = props;
  const [mode, setMode] = useState<"study" | "exam">("study");
  const [examAnswers, setExamAnswers] = useState<Record<string, number>>({});
  const [secondsLeft, setSecondsLeft] = useState<number>(Math.max(1, questions.length) * 72);
  const [examSubmitted, setExamSubmitted] = useState<boolean>(false);
  const recordedRef = useRef<boolean>(false);
  const fmt = (sec: number) => { const n = Math.max(0, sec); return String(Math.floor(n / 60)).padStart(2, "0") + ":" + String(n % 60).padStart(2, "0"); };
  const resetExam = useCallback(() => { setExamAnswers({}); setSecondsLeft(Math.max(1, questions.length) * 72); setExamSubmitted(false); recordedRef.current = false; reset(); }, [questions.length, reset]);
  const switchMode = (m: "study" | "exam") => { setMode(m); setExamSubmitted(false); recordedRef.current = false; if (m === "exam") { setExamAnswers({}); setSecondsLeft(Math.max(1, questions.length) * 72); } reset(); };
  useEffect(() => { if (mode !== "exam" || examSubmitted || questions.length === 0) return; const t = window.setInterval(() => setSecondsLeft((v) => { if (v <= 1) { window.clearInterval(t); setExamSubmitted(true); return 0; } return v - 1; }), 1000); return () => window.clearInterval(t); }, [mode, examSubmitted, questions.length]);
  useEffect(() => { if (mode === "exam" && examSubmitted && !recordedRef.current) { recordedRef.current = true; recordExam(questions, examAnswers); } }, [mode, examSubmitted, recordExam, questions, examAnswers]);
  const bar = <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginBottom: 14, padding: "10px 14px", borderRadius: 12, background: "#f8faf9", border: "1px solid #dfe7e2" }}><div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}><span style={{ fontSize: 13, fontWeight: 700 }}>أسلوب عرض الأسئلة:</span><button type="button" className={mode === "study" ? "btn-primary" : "btn-secondary"} onClick={() => switchMode("study")}>أسلوب الدراسة</button><button type="button" className={mode === "exam" ? "btn-primary" : "btn-secondary"} onClick={() => switchMode("exam")}>أسلوب الامتحان</button></div>{mode === "exam" && <div className="meta-chip" style={{ fontSize: 15, fontWeight: 800, color: secondsLeft < 60 ? "#b43d32" : "#176b55" }}><Clock3 size={16} /><span>الوقت المتبقي: {fmt(secondsLeft)}</span></div>}</div>;
  if (mode === "study") return <div>{bar}<Practice track={track} chooseTrack={chooseTrack} question={questions[index]} index={index} total={questions.length} selectedAnswer={selectedAnswer} answerQuestion={answerQuestion} nextQuestion={nextQuestion} done={index >= questions.length} reset={reset} progress={progress} totalTrackQuestions={questions.length} /></div>;
  const totalQ = questions.length;
  const finished = examSubmitted || index >= totalQ;
  const q = questions[index];
  const chosen = q ? examAnswers[q.id] ?? null : null;
  const score = questions.filter((item: Question) => examAnswers[item.id] === item.answer).length;
  const answeredCount = questions.filter((item: Question) => examAnswers[item.id] !== undefined).length;
  const pct = totalQ ? Math.round((score / totalQ) * 100) : 0;
  if (!totalQ) return <div>{bar}<div className="empty-state"><strong>لا توجد أسئلة متاحة حالياً</strong></div></div>;
  if (finished) return <div>{bar}<section><div className="panel" style={{ maxWidth: 740, margin: "16px auto", textAlign: "center" }}><div className="finish-mark"><Award size={28} /></div><div className="eyebrow">علامة الامتحان</div><h1 className="page-title">{score} / {totalQ}</h1><p className="page-description">علامتك: {pct}% · أجبت عن {answeredCount} من {totalQ} سؤالاً</p><div className="progress-line"><i style={{ width: pct + "%" }} /></div><div style={{ textAlign: "right", marginTop: 22 }}><h3 className="panel-title">مراجعة الأسئلة والشرح</h3>{questions.map((item: Question, i: number) => { const pAns = examAnswers[item.id]; const ok = pAns === item.answer; return <div key={item.id} style={{ padding: "12px 0", borderTop: "1px solid #e8ece8" }}><b>{i + 1}. {item.question}</b><p className="panel-hint" style={{ color: ok ? "#176b55" : "#b43d32", fontWeight: 700 }}>{pAns === undefined ? "لم تُجب · الصحيحة: " + optionLetters[item.answer] + ". " + item.options[item.answer] : ok ? "صحيحة: " + optionLetters[pAns] + ". " + item.options[pAns] : "إجابتك: " + optionLetters[pAns] + " · الصحيحة: " + optionLetters[item.answer] + ". " + item.options[item.answer]}</p><p className="panel-hint" style={{ lineHeight: 1.8 }}>{item.explanation}</p></div>; })}</div><div style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 18, flexWrap: "wrap" }}><button type="button" className="btn-primary" onClick={resetExam}><RotateCcw size={14} /> إعادة الامتحان</button><button type="button" className="btn-secondary" onClick={() => switchMode("study")}>أسلوب الدراسة</button></div></div></section></div>;
  return <div>{bar}<section><div className="page-heading"><div><div className="eyebrow">أسلوب الامتحان · {trackInfo[track].name}</div><h1 className="page-title">امتحان بوقت محدّد مع الشرح</h1><p className="page-description">السؤال {index + 1} من {totalQ}</p></div><button type="button" className="btn-secondary" onClick={() => setExamSubmitted(true)}>إنهاء وعرض العلامة</button></div><div className="practice-card"><div className="practice-topline"><span className="question-counter">QUESTION {String(index + 1).padStart(2, "0")} / {String(totalQ).padStart(2, "0")}</span><span className={"meta-chip level-" + q.difficulty.toLowerCase()}>{difficultyLabels[q.difficulty]} · {q.difficulty}</span></div><div className="practice-progress"><i style={{ width: ((index + (chosen !== null ? 1 : 0)) / totalQ) * 100 + "%" }} /></div><h2 className="practice-question">{q.question}</h2><div className="options">{q.options.map((opt: string, idx: number) => { const isC = idx === q.answer; const isP = idx === chosen; const st = chosen === null ? "" : isC ? " correct" : isP ? " incorrect" : " reveal"; return <button key={opt} type="button" className={"option" + st} onClick={() => { if (chosen === null) setExamAnswers((prev) => ({ ...prev, [q.id]: idx })); }} disabled={chosen !== null}><span className="option-key">{optionLetters[idx]}</span><span>{opt}</span>{chosen !== null && isC && <Check size={16} style={{ marginLeft: "auto" }} />}</button>; })}</div>{chosen !== null && <div className={"feedback " + (chosen === q.answer ? "" : "wrong")} role="status"><div className="feedback-head">{chosen === q.answer ? "إجابة صحيحة — أحسنت" : "ليست الإجابة الصحيحة"}</div><div className="feedback-answer">Correct answer: {optionLetters[q.answer]}. {q.options[q.answer]}</div><p className="feedback-copy">{q.explanation}</p><div className="feedback-label"><Sparkles size={13} /> التفسير السريري</div></div>}<div className="practice-actions"><button type="button" className="text-button" onClick={resetExam}><RotateCcw size={13} /> إعادة من البداية</button><button type="button" className="btn-primary" onClick={() => { if (index >= totalQ - 1) setExamSubmitted(true); else nextQuestion(); }}>{index === totalQ - 1 ? "إنهاء وعرض العلامة" : "السؤال التالي"} <ArrowLeft size={14} /></button></div></div></section></div>;
}


type ClassificationSubTrack = "all"|"surgical"|"non-surgical";
function matchesClassificationSubTrack(q: Question, sub: ClassificationSubTrack): boolean {
  if (sub === "all") return true;
  const sp = String(q.specialty || "").toLowerCase();
  const isSurg = /surg|ortho|ent|ophth|urol|neurosurg|gyne|obstet|جراح|عظام|أنف|أذن|عيون|مسالك|نسائ|توليد/i.test(sp);
  return sub === "surgical" ? isSurg : !isSurg;
}

function ExamSimulation({track,subTrack,setSubTrack,questions,onTrackChange,onFinish}:{track:TrackId;subTrack:ClassificationSubTrack;setSubTrack:(v:ClassificationSubTrack)=>void;questions:Question[];onTrackChange:(id:TrackId)=>void;onFinish:(items:Question[],answers:Record<string,number>)=>void}) {
  const [count,setCount]=useState(10); const [started,setStarted]=useState(false); const [index,setIndex]=useState(0); const [answers,setAnswers]=useState<Record<string,number>>({}); const [seconds,setSeconds]=useState(0); const [finished,setFinished]=useState(false);
  const filteredPool=useMemo(()=>track==='specialty'?questions.filter(q=>matchesClassificationSubTrack(q,subTrack)):questions,[questions,track,subTrack]);
  const examQuestions=useMemo(()=>filteredPool.slice(0,Math.min(count,filteredPool.length)),[filteredPool,count]);
  useEffect(()=>{if(!started||finished)return;const timer=window.setInterval(()=>setSeconds(v=>{if(v<=1){window.clearInterval(timer);setFinished(true);return 0;}return v-1;}),1000);return()=>window.clearInterval(timer);},[started,finished]);
  useEffect(()=>{if(finished&&started)onFinish(examQuestions,answers);},[finished]);
  const score=examQuestions.filter(q=>answers[q.id]===q.answer).length;
  const fmt=(n:number)=>`${String(Math.floor(n/60)).padStart(2,'0')}:${String(n%60).padStart(2,'0')}`;
  if(!started)return <section><div className="page-heading"><div><div className="eyebrow">محاكاة الامتحان</div><h1 className="page-title">امتحان تجريبي مؤقّت</h1><p className="page-description">اختبر نفسك دون إظهار الإجابات أو الشرح حتى تسليم الامتحان.</p></div><Timer size={25}/></div><div className="panel" style={{maxWidth:650}}><h3 className="panel-title">إعداد الامتحان</h3><p className="panel-hint">اختر المسار وعدد الأسئلة. الوقت 72 ثانية لكل سؤال.</p><div className="select-wrap" style={{margin:'15px 0'}}><select className="filter-select" value={track} onChange={e=>onTrackChange(e.target.value as TrackId)}><option value="internship">امتحان الامتياز الفلسطيني</option><option value="specialty">التصنيفي الفلسطيني (الجراحي واللاجراحي)</option></select></div><div className="select-wrap" style={{marginBottom:16}}><select className="filter-select" value={count} onChange={e=>setCount(Number(e.target.value))}><option value={10}>10 أسئلة · 12 دقيقة</option><option value={20}>20 سؤالاً · 24 دقيقة</option><option value={40}>40 سؤالاً · 48 دقيقة</option></select></div><p className="panel-hint">المتاح حالياً في هذا المسار: {filteredPool.length} سؤالاً. سيُستخدم العدد المتاح إذا كان أقل من اختيارك.</p><button className="btn-primary" style={{marginTop:15}} onClick={()=>{setSeconds(Math.min(count,filteredPool.length)*72);setStarted(true);}}>ابدأ الامتحان <ArrowLeft size={14}/></button></div></section>;
  if(finished)return <section><div className="panel" style={{maxWidth:720,margin:'30px auto',textAlign:'center'}}><div className="finish-mark"><Award size={28}/></div><div className="eyebrow">نتيجة المحاكاة</div><h1 className="page-title">{score} / {examQuestions.length}</h1><p className="page-description">النسبة: {examQuestions.length?Math.round(score/examQuestions.length*100):0}% · أجبت عن {Object.keys(answers).length} من {examQuestions.length} سؤالاً</p><div className="progress-line"><i style={{width:`${examQuestions.length?score/examQuestions.length*100:0}%`}}/></div><div style={{textAlign:'right',marginTop:22}}><h3 className="panel-title">مراجعة الإجابات</h3>{examQuestions.map((q,i)=><div key={q.id} style={{padding:'12px 0',borderTop:'1px solid #e8ece8'}}><b>{i+1}. {q.question}</b><p className="panel-hint">إجابتك: {answers[q.id]===undefined?'لم تجب':optionLetters[answers[q.id]]} · الصحيحة: {optionLetters[q.answer]}</p><p className="panel-hint" style={{lineHeight:1.8}}>{q.explanation}</p></div>)}</div><button className="btn-primary" style={{marginTop:18}} onClick={()=>{setStarted(false);setFinished(false);setAnswers({});setIndex(0);}}>امتحان جديد <RotateCcw size={14}/></button></div></section>;
  const q=examQuestions[index];
  if(!q)return <section><div className="panel" style={{maxWidth:650,margin:"24px auto",textAlign:"center"}}><h3 className="panel-title">لا توجد أسئلة متاحة لهذا المسار الفرعي</h3><p className="panel-hint">جرّب التبديل إلى "الكل" أو اختيار مسار آخر.</p><div style={{display:"flex",gap:8,justifyContent:"center",marginTop:14}}><button type="button" className="btn-primary" onClick={()=>{setSubTrack("all");setStarted(false);setFinished(false);setAnswers({});setIndex(0);}}>عرض الكل</button><button type="button" className="btn-secondary" onClick={()=>{setStarted(false);setFinished(false);}}>رجوع لإعداد الامتحان</button></div></div></section>;return <section><div className="page-heading"><div><div className="eyebrow">{trackInfo[track].name}</div><h1 className="page-title">امتحان تجريبي</h1><p className="page-description">السؤال {index+1} من {examQuestions.length}</p></div><div className="meta-chip" style={{fontSize:18,fontWeight:800,color:seconds<60?'#b43d32':'#176b55'}}><Clock3 size={17}/> {fmt(seconds)}</div></div><div className="practice-card"><div className="practice-progress"><i style={{width:`${(index+1)/examQuestions.length*100}%`}}/></div><h2 className="practice-question">{q.question}</h2><div className="options">{q.options.map((option,i)=><button key={i} className={`option${answers[q.id]===i?' correct':''}`} onClick={()=>setAnswers(p=>({...p,[q.id]:i}))}><span className="option-key">{optionLetters[i]}</span><span>{option}</span></button>)}</div><div className="practice-actions"><button className="text-button" disabled={index===0} onClick={()=>setIndex(v=>v-1)}>السابق</button>{index<examQuestions.length-1?<button className="btn-primary" onClick={()=>setIndex(v=>v+1)}>التالي <ArrowLeft size={14}/></button>:<button className="btn-primary" onClick={()=>setFinished(true)}>تسليم الامتحان <Check size={14}/></button>}</div><p className="panel-hint" style={{marginTop:12}}>تمت الإجابة عن {Object.keys(answers).length} من {examQuestions.length} سؤالاً. لا يمكن رؤية الإجابات الصحيحة قبل التسليم.</p></div></section>;
}

function Dashboard({track,chooseTrack,progress,startPractice,openBank,questionsCountByTrack,trackTitleOverride}:{track:TrackId;chooseTrack:(id:TrackId)=>void;progress:Progress;startPractice:()=>void;openBank:()=>void;questionsCountByTrack?:Record<TrackId,number>;trackTitleOverride?:string}) {
  const answered=progress.answered[track].length;
  const correct=progress.correct[track].length;
  const counts=questionsCountByTrack??{internship:questionsByTrack.internship.length,specialty:questionsByTrack.specialty.length};
  const completion=Math.round(answered/Math.max(1,counts[track])*100);
  const info={...trackInfo[track],...(trackTitleOverride?{name:trackTitleOverride}:{})};
  return <section aria-label="لوحة الدراسة">
    <div className="eyebrow">رفيقك في طريق التخصص</div>
    <h1 className="welcome">أهلاً بك، <span>طبيب المستقبل</span></h1>
    <p className="welcome-note">خطّة واضحة ومراجعة سريرية تناسب رحلتك، من هنا تبدأ.</p>
    <div className="hero-row">
      <div className="hero-card">
        <div className="hero-top"><span className="hero-label">مسارك الدراسي الآن</span><span className="hero-pill">دراسة مركّزة</span></div>
        <div><h2 className="hero-title">{info.name}</h2><p className="hero-desc" dir="ltr" style={{textAlign:'right'}}>{info.english} · {info.description}</p></div>
        <div className="hero-footer"><span className="hero-footnote"><BookOpen size={14}/> {counts[track]} سؤالاً سريرياً</span><button className="btn-light" onClick={startPractice} data-testid="button-start-practice">ابدأ التدريب <ArrowLeft size={14}/></button></div>
      </div>
      <div className="streak-card">
        <div className="streak-head"><span>إيقاعك هذا الأسبوع</span><span className="streak-symbol"><Zap size={16}/></span></div>
        <div><div className="streak-number">{progress.streak}<span style={{fontSize:16,marginRight:7}}>أيام</span></div><div className="streak-copy">{progress.streak?'أحسنت، استمر على هذا النسق':'ابدأ اليوم بجلسة قصيرة'}</div></div>
        <div className="streak-progress" aria-label={`${Math.min(progress.streak,7)} من 7 أيام`} dir="ltr">{Array.from({length:7},(_,i)=><span key={i} className={i<Math.min(progress.streak,7)?'done':''}/>)}</div>
      </div>
    </div>

    <div className="section-head"><div><h2 className="section-title">اختر مسارك</h2><p className="section-sub">لكل امتحان بنك أسئلة وملخص دراسة مستقل.</p></div><button className="quiet-link" onClick={openBank} data-testid="link-view-bank">تصفّح الأسئلة <ArrowLeft size={12}/></button></div>
    <div className="track-grid">
      {(Object.keys(trackInfo) as TrackId[]).map(id=><button key={id} className={`track-card ${track===id?'selected':''}`} onClick={()=>chooseTrack(id)} data-testid={`track-${id}`}>
        <span className="track-icon">{id==='internship'?<HeartPulse size={20}/>:<GraduationCap size={20}/>}</span><span className="track-info"><span className="track-name">{trackInfo[id].name}</span><span className="track-desc" dir="ltr" style={{display:'block',textAlign:'right'}}>{trackInfo[id].english}</span><span className="track-meta">{counts[id]} QUESTIONS · {progress.answered[id].length} REVIEWED</span></span><ArrowUpRight className="track-arrow" size={17}/></button>)}
    </div>

    <div className="below-grid">
      <div className="panel">
        <div className="blueprint-head"><div><h3 className="panel-title">ملخص الدراسة</h3><p className="panel-hint">توزيع مقترح لموضوعات المراجعة في هذا المسار</p></div><span className="blueprint-tag">Study blueprint</span></div>
        <div className="blueprint-list">{info.blueprint.map(item=><div className="blueprint-row" key={item.category}><span className="blueprint-name">{item.category}</span><div className="blueprint-bar"><div className="blueprint-fill" style={{width:`${item.share}%`}}/></div><span className="blueprint-value">{item.share}%</span></div>)}</div>
        <p className="panel-hint" style={{marginTop:15,lineHeight:1.7}}>لأغراض المراجعة التعليمية فقط؛ لا يمثّل مواصفة رسمية للامتحان.</p>
      </div>
      <div className="panel progress-panel">
        <div className="blueprint-head"><div><h3 className="panel-title">تقدّمك في هذا المسار</h3><p className="panel-hint">إجاباتك محفوظة على هذا الجهاز</p></div><Award size={18} color="#98754f"/></div>
        <div className="progress-number">{answered}<span style={{fontSize:14,color:'#87928a',fontWeight:500}}> / {counts[track]}</span></div><div className="progress-caption">سؤال تمت مراجعته</div>
        <div className="progress-line"><i style={{width:`${completion}%`}}/></div><div className="progress-detail"><span>الإجابات الصحيحة</span><span>{correct} من {answered}</span></div>
      </div>
    </div>
  </section>;
}

function QuestionBank({track,chooseTrack,questions,total,difficulty,setDifficulty,category,setCategory,startPractice}:{track:TrackId;chooseTrack:(id:TrackId)=>void;questions:Question[];total:number;difficulty:string;setDifficulty:(v:string)=>void;category:string;setCategory:(v:string)=>void;startPractice:()=>void}) {
  return <section>
    <div className="page-heading"><div><div className="eyebrow">مراجعة على طريقتك</div><h1 className="page-title">بنك الأسئلة</h1><p className="page-description">أسئلة سريرية باللغة الإنجليزية، مع شرح يساعدك على تثبيت الفكرة.</p></div><button className="btn-primary" onClick={startPractice} data-testid="button-bank-practice">ابدأ التدريب <ArrowLeft size={14}/></button></div>
    <div className="filter-bar">
      <span className="filter-label"><ClipboardList size={15}/> تصفية الأسئلة</span>
      <div className="select-wrap"><select className="filter-select" aria-label="المسار" value={track} onChange={e=>chooseTrack(e.target.value as TrackId)} data-testid="select-track"><option value="internship">امتحان الامتياز</option><option value="specialty">التصنيفي الفلسطيني</option></select></div>
      <div className="select-wrap"><select className="filter-select" aria-label="مستوى الصعوبة" value={difficulty} onChange={e=>setDifficulty(e.target.value)} data-testid="select-difficulty"><option value="All">كل المستويات</option><option value="Basic">أساسي · Basic</option><option value="Intermediate">متوسط · Intermediate</option><option value="Advanced">متقدم · Advanced</option></select></div>
      <div className="select-wrap"><select className="filter-select" aria-label="الفئة" value={category} onChange={e=>setCategory(e.target.value)} data-testid="select-category"><option value="All">كل الفئات</option>{categoriesByTrack[track].map(c=><option key={c} value={c}>{c}</option>)}</select></div>
      <span className="result-count">{questions.length} من {total} سؤال</span>
    </div>
    <div className="question-list">{questions.length?questions.map((q,index)=><article className="question-row" key={q.id} data-testid={`question-row-${q.id}`}>
      <span className="q-index">{String(index+1).padStart(2,'0')}</span><div className="q-main"><p className="q-text">{q.question}</p><div className="q-meta"><span className="meta-chip">{q.specialty}</span><span className={`meta-chip level-${q.difficulty.toLowerCase()}`}>{difficultyArabic[q.difficulty]}</span><span className="meta-chip" dir="ltr">{q.difficulty}</span></div></div><CircleHelp size={16} color="#a9b0aa"/>
    </article>):<div className="empty-state"><strong>لا توجد أسئلة ضمن هذه التصفية</strong>جرّب اختيار فئة أو مستوى آخر.</div>}</div>
  </section>;
}

function Practice({track,chooseTrack,question,index,total,selectedAnswer,answerQuestion,nextQuestion,done,reset,progress,totalTrackQuestions}:{track:TrackId;chooseTrack:(id:TrackId)=>void;question:Question|undefined;index:number;total:number;selectedAnswer:number|null;answerQuestion:(n:number)=>void;nextQuestion:()=>void;done:boolean;reset:()=>void;progress:Progress;totalTrackQuestions?:number}) {
  const trackQuestions=questionsByTrack[track];
  const displayTotal=totalTrackQuestions??trackQuestions.length;
  const current=question;
  return <section>
    <div className="page-heading"><div><div className="eyebrow">تدريب تفاعلي</div><h1 className="page-title">سؤال واحد في كل مرة</h1><p className="page-description">اختر إجابة لترى التفسير السريري مباشرة.</p></div><div className="select-wrap"><select className="filter-select" aria-label="المسار التدريبي" value={track} onChange={e=>chooseTrack(e.target.value as TrackId)} data-testid="practice-select-track"><option value="internship">امتحان الامتياز</option><option value="specialty">التصنيفي الفلسطيني</option></select></div></div>
    <div className="practice-layout">
      <div className="practice-card">
        {done?<div className="finish-card"><div className="finish-mark"><CheckCircle2 size={28}/></div><h2>أكملت هذه الجولة</h2><p>مراجعة رائعة. خذ لحظة لتثبيت ما تعلمته، ثم ابدأ من جديد متى شئت.</p><button className="btn-primary" style={{margin:'0 auto'}} onClick={reset} data-testid="button-restart-practice"><RotateCcw size={14}/> ابدأ جولة جديدة</button></div>:current&&<>
          <div className="practice-topline"><span className="question-counter">QUESTION {String(index+1).padStart(2,'0')} / {String(total).padStart(2,'0')}</span><span className={`meta-chip level-${current.difficulty.toLowerCase()}`}>{difficultyArabic[current.difficulty]} · {current.difficulty}</span></div>
          <div className="practice-progress"><i style={{width:`${((index+(selectedAnswer!==null?1:0))/total)*100}%`}}/></div>
          <div style={{display:'flex',gap:7,marginBottom:13}}><span className="meta-chip">{current.specialty}</span><span className="meta-chip" dir="ltr">{trackInfo[track].english}</span></div>
          <h2 className="practice-question">{current.question}</h2>
          <div className="options">{current.options.map((option,i)=>{
            const isCorrect=i===current.answer, isSelected=i===selectedAnswer;
            const state=selectedAnswer===null?'':isCorrect?' correct':isSelected?' incorrect':' reveal';
            return <button key={option} className={`option${state}`} onClick={()=>answerQuestion(i)} disabled={selectedAnswer!==null} data-testid={`option-${i}`}><span className="option-key">{optionLetters[i]}</span><span>{option}</span>{selectedAnswer!==null&&isCorrect&&<Check size={16} style={{marginLeft:'auto'}}/>}{selectedAnswer!==null&&isSelected&&!isCorrect&&<X size={16} style={{marginLeft:'auto'}}/>}</button>;
          })}</div>
          {selectedAnswer!==null&&<div className={`feedback ${selectedAnswer===current.answer?'':'wrong'}`} role="status" data-testid="answer-feedback">
            <div className="feedback-head">{selectedAnswer===current.answer?<CheckCircle2 size={17}/>:<CircleHelp size={17}/>} {selectedAnswer===current.answer?'إجابة صحيحة — أحسنت':'ليست الإجابة الصحيحة، وهذه فرصة للتعلّم'}</div>
            <div className="feedback-answer">Correct answer: {optionLetters[current.answer]}. {current.options[current.answer]}</div>
            <p className="feedback-copy">{current.explanation}</p><div className="feedback-label"><Sparkles size={13}/> التفسير السريري</div>
          </div>}
          <div className="practice-actions"><button className="text-button" onClick={reset} data-testid="button-restart"><RotateCcw size={13}/> إعادة من البداية</button>{selectedAnswer!==null&&<button className="btn-primary" onClick={nextQuestion} data-testid="button-next-question">{index===total-1?'إنهاء الجولة':'السؤال التالي'} <ArrowLeft size={14}/></button>}</div>
        </>}
      </div>
      <aside className="practice-aside">
        <div className="aside-card"><h3 className="aside-title">مسارك الحالي</h3><div className="aside-track">{trackInfo[track].name}<br/><span dir="ltr" style={{display:'block',textAlign:'right',fontSize:10,marginTop:3}}>{trackInfo[track].english}</span></div><div className="aside-stat"><span>عدد الأسئلة</span><strong>{displayTotal}</strong></div><div className="aside-stat"><span>تمت مراجعتها</span><strong>{progress.answered[track].length}</strong></div></div>
        <div className="aside-card"><h3 className="aside-title" style={{display:'flex',alignItems:'center',gap:7}}><Activity size={15}/> تذكير</h3><p className="aside-note">اقرأ الحالة كاملة، ثم فكّر في الخطوة الأهم قبل اختيار الإجابة. التفسير يظهر فوراً بعد الاختيار.</p></div>
        <div className="aside-card"><h3 className="aside-title" style={{display:'flex',alignItems:'center',gap:7}}><Clock3 size={15}/> نمط المراجعة</h3><p className="aside-note">لا يوجد مؤقّت. خذ وقتك لفهم المنطق السريري وراء كل إجابة.</p></div>
      </aside>
    </div>
  </section>;
}


type DoctorAccessStatus = "not_requested" | "pending" | "approved" | "rejected";
type DoctorAccessRecord = {
  id?: string;
  status: DoctorAccessStatus;
  reviewNote?: string | null;
  email?: string;
  fullName?: string | null;
};

function DoctorAccess() {
  // __TEMP_AUTH_BYPASS__
  const isLoaded = true;
  const isSignedIn = true;
  const getToken = async () => null;
  const signOut = async () => {};
  const [previewAnswers, setPreviewAnswers] = useState<Record<string, number>>({});
  const [accessState, setAccessState] = useState<{
    loading: boolean;
    submitting: boolean;
    record: DoctorAccessRecord | null;
    error: string | null;
  }>({ loading: true, submitting: false, record: null, error: null });

  const loadAccessStatus = async () => {
    setAccessState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const token = await getToken();
      const res = await fetch(resolveApiUrl("/api/doctor-access/me"), {
        headers: token ? { Authorization: "Bearer " + token } : {},
      });
      const data = await parseApiJson<DoctorAccessRecord>(res, "تعذر التحقق من حالة الاعتماد.");
      setAccessState({ loading: false, submitting: false, record: data, error: null });
    } catch (err) {
      setAccessState({
        loading: false,
        submitting: false,
        record: null,
        error: err instanceof Error ? err.message : "تعذر التحقق من حالة الاعتماد.",
      });
    }
  };

  useEffect(() => {
    if (!isLoaded) return;
    if (!isSignedIn) {
      setAccessState({ loading: false, submitting: false, record: null, error: null });
      return;
    }
    setAccessState({ loading: false, submitting: false, record: { status: "approved" }, error: null });
  }, [isLoaded, isSignedIn]);

  const submitAccessRequest = async () => {
    setAccessState((prev) => ({ ...prev, submitting: true, error: null }));
    try {
      const token = await getToken();
      const res = await fetch(resolveApiUrl("/api/doctor-access/request"), {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          ...(token ? { Authorization: "Bearer " + token } : {}),
        },
      });
      const data = await parseApiJson<DoctorAccessRecord>(res, "تعذر إرسال طلب الاعتماد.");
      setAccessState({
        loading: false,
        submitting: false,
        record: data as DoctorAccessRecord,
        error: null,
      });
    } catch (err) {
      setAccessState((prev) => ({
        ...prev,
        submitting: false,
        error: err instanceof Error ? err.message : "تعذر إرسال طلب الاعتماد.",
      }));
    }
  };

  const [waited, setWaited] = useState(false);
  useEffect(() => { const t = setTimeout(() => setWaited(true), 2500); return () => clearTimeout(t); }, []);
  if (!isLoaded && !waited) {
    return <div className="empty-state">جاري التحقق من الحساب...</div>;
  }

  if (!isSignedIn) {
    return <section className="page-heading auth-page" dir="rtl">
      <div style={{display:"flex",alignItems:"center",gap:8,fontSize:18,color:"#285347"}}><Stethoscope size={20}/><span>🩺</span><span>💊</span><span>📋</span></div>
      <p className="page-description">جرّب أسئلة مجانية فوراً قبل تسجيل الدخول، أو سجّل الدخول لفتح كامل بنك الأسئلة وحفظ تقدّمك.</p>
      <div className="panel" style={{ maxWidth: 680, width: "100%", marginBottom: 20, textAlign: "right" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10, marginBottom: 12 }}>
          <strong>أسئلة تجريبية مجانية</strong>
          <span className="hero-pill">معاينة مجانية</span>
        </div>
        {specialtyQuestions.slice(0, 4).map((q, idx) => {
          const picked = previewAnswers[q.id];
          const answered = picked !== undefined;
          const isCorrect = picked === q.answer;
          return (
            <div key={q.id} style={{ padding: "14px 0", borderTop: "1px solid #e2e8f0" }}>
              <div style={{ fontSize: 12, color: "#0d9488", fontWeight: 700, marginBottom: 4 }}>
                
              </div>
              <p dir="ltr" style={{ fontWeight: 700, margin: "0 0 10px", textAlign: "left" }}>{idx + 1}. {q.question}</p>
              <div dir="ltr" style={{ display: "grid", gap: 6 }}>
                {q.options.map((opt, i) => {
                  const isPicked = picked === i;
                  const isRightOption = i === q.answer;
                  const bg = !answered ? "#f8fafc" : isRightOption ? "#ecfdf5" : isPicked ? "#fef2f2" : "#f8fafc";
                  const border = !answered ? "1px solid #cbd5e1" : isRightOption ? "1px solid #10b981" : isPicked ? "1px solid #ef4444" : "1px solid #e2e8f0";
                  return (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setPreviewAnswers((prev) => ({ ...prev, [q.id]: i }))}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        width: "100%",
                        textAlign: "left",
                        padding: "8px 12px",
                        borderRadius: 8,
                        background: bg,
                        border,
                        cursor: "pointer",
                        fontSize: 14,
                      }}
                    >
                      <strong>{optionLetters[i]}.</strong>
                      <span style={{ flex: 1 }}>{opt}</span>
                      {answered && isRightOption && <span>✓</span>}
                      {answered && isPicked && !isRightOption && <span>✕</span>}
                    </button>
                  );
                })}
              </div>
              {answered && (
                <div style={{ marginTop: 10, padding: 10, borderRadius: 8, background: isCorrect ? "#f0fdf4" : "#fffbeb", border: isCorrect ? "1px solid #86efac" : "1px solid #fde68a" }}>
                  <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 4 }}>
                    {isCorrect ? "إجابة صحيحة!" : `إجابتك غير صحيحة — الإجابة الصحيحة هي ${optionLetters[q.answer]}`}
                  </div>
                  <p className="panel-hint" style={{ margin: 0, lineHeight: 1.7 }}>{q.explanation}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
      <SignIn withSignUp={true} appearance={{ elements: { socialButtonsIconButton: { display: "none" }, socialButtonsBlockButton: { display: "none" }, dividerRow: { display: "none" } } }} />
    </section>;
  }

  if (accessState.loading) {
    return <div className="empty-state">جاري التحقق من حالة اعتماد الطبيب...</div>;
  }

  const status = accessState.record?.status ?? "not_requested";
  if (status === "approved") {
    return <AppHome />;
  }

  return <section className="page-heading auth-page" dir="rtl">
    <h1 className="page-title">اعتماد حساب الطبيب</h1>
    <p className="page-description">
      {status === "pending" && "طلب اعتمادك قيد المراجعة حاليًا من قِبل الإدارة."}
      {status === "rejected" && "تم رفض طلب الاعتماد السابق. يمكنك مراجعة الملاحظة وإعادة التقديم."}
      {status === "not_requested" && "حسابك مسجّل، ويتطلب تقديم طلب اعتماد للوصول إلى بنك الأسئلة والمسارات."}
    </p>
    {accessState.record?.reviewNote && (
      <div className="empty-state">
        <strong>ملاحظة المراجعة</strong>
        {accessState.record.reviewNote}
      </div>
    )}
    {accessState.error && (
      <div className="empty-state">
        <strong>تنبيه</strong>
        {accessState.error}
      </div>
    )}
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
      {(status === "not_requested" || status === "rejected") && (
        <button
          type="button"
          className="btn-primary"
          disabled={accessState.submitting}
          onClick={() => void submitAccessRequest()}
        >
          {accessState.submitting
            ? "جاري الإرسال..."
            : status === "rejected"
              ? "إعادة تقديم طلب الاعتماد"
              : "تقديم طلب اعتماد"}
        </button>
      )}
      <button
        type="button"
        className="btn-secondary"
        onClick={() => void loadAccessStatus()}
      >
        تحديث الحالة
      </button>
      <button
        type="button"
        className="btn-secondary"
        onClick={() => void signOut()}
      >
        تسجيل الخروج
      </button>
    </div>
  </section>;
}

function AdminAccess() {
  // __TEMP_AUTH_BYPASS__
  const isLoaded = true;
  const isSignedIn = true;
  const getToken = async () => null;
  const signOut = async () => {};
  
  const [signInStalled, setSignInStalled] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setSignInStalled(true), 2500);
    return () => clearTimeout(t);
  }, []);

  const [adminState, setAdminState] = useState<{
    loading: boolean;
    authorized: boolean;
    error: string | null;
  }>({ loading: true, authorized: false, error: null });

  useEffect(() => {
    let active = true;
    const checkAdmin = async () => {
      if (!isLoaded) return;
      if (!isSignedIn) {
        if (active) setAdminState({ loading: false, authorized: false, error: null });
        return;
      }
      if (active) setAdminState({ loading: false, authorized: true, error: null });
    };
    void checkAdmin();
    return () => {
      active = false;
    };
  }, [isLoaded, isSignedIn, getToken]);

  const [adminWaited, setAdminWaited] = useState(false);
  useEffect(() => { const t = setTimeout(() => setAdminWaited(true), 2500); return () => clearTimeout(t); }, []);
  if (!isLoaded && !adminWaited) return <div className="empty-state">جاري التحقق من الحساب...</div>;

  if (!isSignedIn) {
    return <section className="page-heading auth-page">
      <h1 className="page-title">دخول المشرفين</h1>
      <p className="page-description">سجّل الدخول بحساب المشرف للمتابعة.</p>
      <>
        <SignIn appearance={{ elements: { socialButtonsIconButton: { display: "none" }, socialButtonsBlockButton: { display: "none" }, dividerRow: { display: "none" } } }} />
        {signInStalled && (
          <div className="panel" style={{ maxWidth: 420, width: "100%", marginTop: 14, textAlign: "center" }}>
            <p className="panel-hint" style={{ marginBottom: 10 }}>
              تأخر تحميل نموذج دخول المشرفين. جرّب التحديث أو تحقق من إعدادات Clerk:
            </p>
            <button
              type="button"
              className="btn-secondary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => window.location.reload()}
            >
              إعادة تحميل الصفحة
            </button>
          </div>
        )}
      </>
    </section>;
  }

  if (adminState.loading) {
    return <div className="empty-state">جاري التحقق من صلاحيات المشرف...</div>;
  }

  if (adminState.error) {
    return <div className="empty-state">
      <strong>تعذر التحقق</strong>
      {adminState.error}
    </div>;
  }

  // __TEMP_AUTH_BYPASS__: skipped adminState.authorized block

  return <Admin questions={[...internshipQuestions, ...specialtyQuestions]} />;
}

function PortalsFooterBar() {
  const [location, setLocation] = useLocation();
  const isAdminPage = location.startsWith("/admin");
  const btnStyle: React.CSSProperties = {
    flex: 1,
    padding: "9px 12px",
    borderRadius: 10,
    fontSize: 13,
    fontWeight: 700,
    cursor: "pointer",
  };
  return (
    <nav
      aria-label="تبديل البوابات"
      dir="rtl"
      style={{
        position: "sticky",
        bottom: 0,
        zIndex: 30,
        display: "flex",
        gap: 10,
        padding: "10px 14px",
        borderTop: "1px solid rgba(148, 163, 184, 0.25)",
        background: "rgba(255, 255, 255, 0.96)",
      }}
    >
      <button
        type="button"
        onClick={() => setLocation("/")}
        style={{
          ...btnStyle,
          border: !isAdminPage ? "1px solid #0f766e" : "1px solid rgba(148, 163, 184, 0.35)",
          background: !isAdminPage ? "#0f766e" : "transparent",
          color: !isAdminPage ? "#ffffff" : "#334155",
        }}
      >
        بوابة الأطباء
      </button>
      <button
        type="button"
        onClick={() => setLocation("/admin")}
        style={{
          ...btnStyle,
          border: isAdminPage ? "1px solid #0f766e" : "1px solid rgba(148, 163, 184, 0.35)",
          background: isAdminPage ? "#0f766e" : "transparent",
          color: isAdminPage ? "#ffffff" : "#334155",
        }}
      >
        بوابة المشرفين
      </button>
    </nav>
  );
}

function Router() {
  return (
    <ErrorBoundary>
      <>
        <Switch>
          <Route path="/" component={DoctorAccess} />
          <Route path="/admin" component={AdminAccess} />
          <Route component={NotFound} />
        </Switch>
        <PortalsFooterBar />
      </>
    </ErrorBoundary>
  );
}

function App() {
  // __TEMP_AUTH_BYPASS__: render app directly without ClerkProvider
  return <Router />;
}

export default App;

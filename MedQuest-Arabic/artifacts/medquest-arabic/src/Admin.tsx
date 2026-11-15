import { useMemo, useState } from 'react';
import {
  Activity, BookOpen, ClipboardList, LayoutDashboard,
  Plus, Search, ShieldCheck, Users, CheckCircle2,
  Clock3, ArrowLeft, Stethoscope
} from 'lucide-react';

type Question = {
  id: string;
  specialty: string;
  difficulty: 'Basic' | 'Intermediate' | 'Advanced';
  question: string;
  options: string[];
  answer: number;
  explanation: string;
};

type Props = { questions: Question[] };

export default function Admin({ questions }: Props) {
  const [page, setPage] = useState<'overview'|'questions'|'add'>('overview');
  const [search, setSearch] = useState('');
  const [track, setTrack] = useState<'all'|'internship'|'specialty'>('all');
  const [items, setItems] = useState(() =>
    questions.map(q => ({ ...q, track: q.id.startsWith('ip-') ? 'internship' : 'specialty' }))
  );
  const [form, setForm] = useState({
    track: 'internship', specialty: '', difficulty: 'Basic',
    question: '', a: '', b: '', c: '', d: '',
    answer: '0', explanation: ''
  });

  const filtered = useMemo(() => items.filter(q =>
    (track === 'all' || q.track === track) &&
    (q.question.toLowerCase().includes(search.toLowerCase()) ||
     q.specialty.toLowerCase().includes(search.toLowerCase()))
  ), [items, track, search]);

  const addQuestion = () => {
    if (!form.specialty.trim() || !form.question.trim() ||
        !form.a.trim() || !form.b.trim() || !form.c.trim() ||
        !form.d.trim() || !form.explanation.trim()) {
      alert('يرجى تعبئة جميع الحقول');
      return;
    }
    const id = `admin-${Date.now()}`;
    setItems(prev => [...prev, {
      id, track: form.track, specialty: form.specialty,
      difficulty: form.difficulty as Question['difficulty'],
      question: form.question,
      options: [form.a, form.b, form.c, form.d],
      answer: Number(form.answer),
      explanation: form.explanation
    }]);
    setForm({
      track:'internship', specialty:'', difficulty:'Basic',
      question:'', a:'', b:'', c:'', d:'',
      answer:'0', explanation:''
    });
    setPage('questions');
  };

  const nav = [
    { id:'overview', label:'لوحة التحكم', icon:LayoutDashboard },
    { id:'questions', label:'إدارة الأسئلة', icon:BookOpen },
    { id:'add', label:'إضافة سؤال', icon:Plus }
  ] as const;

  const field = (label:string, key:keyof typeof form, placeholder:string, area=false) => (
    <label className="admin-field">
      <span>{label}</span>
      {area
        ? <textarea value={form[key]} onChange={e=>setForm(p=>({...p,[key]:e.target.value}))} placeholder={placeholder}/>
        : <input value={form[key]} onChange={e=>setForm(p=>({...p,[key]:e.target.value}))} placeholder={placeholder}/>
      }
    </label>
  );

  return <div className="admin-shell" dir="rtl">
    <aside className="admin-sidebar">
      <div className="admin-brand">
        <div className="admin-logo"><Stethoscope size={22}/></div>
        <div><strong>MedQuest</strong><small>ADMINISTRATION</small></div>
      </div>
      <div className="admin-caption">إدارة المنصة</div>
      {nav.map(item => {
        const Icon = item.icon;
        return <button key={item.id} className={`admin-nav ${page===item.id?'active':''}`} onClick={()=>setPage(item.id)}>
          <Icon size={18}/>{item.label}
        </button>;
      })}
      <div className="admin-sidebar-bottom">
        <ShieldCheck size={17}/>
        <span>مساحة المشرف<br/><small>واجهة إدارة مستقلة</small></span>
      </div>
    </aside>

    <main className="admin-main">
      <header className="admin-topbar">
        <div>
          <div className="admin-eyebrow">MEDQUEST ARABIC / ADMIN</div>
          <h1>{page==='overview'?'لوحة التحكم':page==='questions'?'إدارة بنك الأسئلة':'إضافة سؤال جديد'}</h1>
        </div>
        <div className="admin-avatar">A</div>
      </header>

      {page==='overview' && <>
        <section className="admin-welcome">
          <div><span>مرحباً بك في لوحة الإدارة</span><h2>إدارة المحتوى التعليمي</h2>
            <p>تابع الأسئلة والمسارات التعليمية من مكان واحد.</p></div>
          <ShieldCheck size={42}/>
        </section>
        <div className="admin-stats">
          <div className="admin-stat"><BookOpen/><span>إجمالي الأسئلة</span><strong>{items.length}</strong></div>
          <div className="admin-stat"><ClipboardList/><span>مسار الامتياز</span><strong>{items.filter(q=>q.track==='internship').length}</strong></div>
          <div className="admin-stat"><Activity/><span>دخول الاختصاص</span><strong>{items.filter(q=>q.track==='specialty').length}</strong></div>
          <div className="admin-stat"><Users/><span>المستخدمون</span><strong>—</strong><small>يُفعّل عند ربط الحسابات</small></div>
        </div>
        <section className="admin-panel">
          <div className="admin-panel-head"><div><h3>إجراءات سريعة</h3><p>اختر المهمة التي تريد تنفيذها</p></div></div>
          <div className="admin-actions">
            <button onClick={()=>setPage('add')}><Plus/><strong>إضافة سؤال</strong><span>أضف سؤالًا جديدًا إلى البنك</span></button>
            <button onClick={()=>setPage('questions')}><BookOpen/><strong>مراجعة الأسئلة</strong><span>استعرض الأسئلة الموجودة</span></button>
          </div>
        </section>
        <div className="admin-notice"><Clock3 size={17}/> هذه نسخة أولية للواجهة. حفظ التعديلات وربطها بحسابات المشرفين وقاعدة البيانات سيكون في مرحلة الربط.</div>
      </>}

      {page==='questions' && <section className="admin-panel">
        <div className="admin-panel-head">
          <div><h3>بنك الأسئلة</h3><p>استعراض الأسئلة حسب المسار والبحث عنها</p></div>
          <button className="admin-primary" onClick={()=>setPage('add')}><Plus size={16}/> إضافة سؤال</button>
        </div>
        <div className="admin-filters">
          <label className="admin-search"><Search size={17}/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="ابحث في الأسئلة أو التخصص..."/></label>
          <select value={track} onChange={e=>setTrack(e.target.value as typeof track)}>
            <option value="all">كل المسارات</option>
            <option value="internship">الامتياز الفلسطيني</option>
            <option value="specialty">دخول الاختصاص</option>
          </select>
        </div>
        <div className="admin-question-list">
          {filtered.map((q,i)=><article className="admin-question" key={q.id}>
            <div className="admin-question-meta">
              <span>{q.track==='internship'?'الامتياز':'دخول الاختصاص'}</span>
              <span>{q.specialty}</span>
              <span>{q.difficulty}</span>
            </div>
            <p>{i+1}. {q.question}</p>
            <small>{q.options.length} خيارات · الإجابة الصحيحة: {['A','B','C','D'][q.answer]}</small>
          </article>)}
          {filtered.length===0 && <p className="admin-empty">لا توجد نتائج مطابقة للبحث.</p>}
        </div>
      </section>}

      {page==='add' && <section className="admin-panel">
        <div className="admin-panel-head"><div><h3>إضافة سؤال إلى بنك الأسئلة</h3><p>أدخل السؤال والخيارات والتفسير السريري</p></div></div>
        <div className="admin-form">
          <label className="admin-field"><span>المسار</span><select value={form.track} onChange={e=>setForm(p=>({...p,track:e.target.value}))}><option value="internship">امتحان الامتياز الفلسطيني</option><option value="specialty">دخول الاختصاص</option></select></label>
          {field('التخصص','specialty','مثال: Internal Medicine')}
          <label className="admin-field"><span>المستوى</span><select value={form.difficulty} onChange={e=>setForm(p=>({...p,difficulty:e.target.value}))}><option value="Basic">Basic - أساسي</option><option value="Intermediate">Intermediate - متوسط</option><option value="Advanced">Advanced - متقدم</option></select></label>
          {field('نص السؤال','question','اكتب نص السؤال السريري...',true)}
          {field('الخيار A','a','الخيار الأول')}
          {field('الخيار B','b','الخيار الثاني')}
          {field('الخيار C','c','الخيار الثالث')}
          {field('الخيار D','d','الخيار الرابع')}
          <label className="admin-field"><span>الإجابة الصحيحة</span><select value={form.answer} onChange={e=>setForm(p=>({...p,answer:e.target.value}))}><option value="0">A</option><option value="1">B</option><option value="2">C</option><option value="3">D</option></select></label>
          {field('التفسير السريري','explanation','اشرح سبب صحة الإجابة...',true)}
        </div>
        <div className="admin-form-footer"><button className="admin-primary" onClick={addQuestion}><CheckCircle2 size={17}/> إضافة السؤال</button><button className="admin-secondary" onClick={()=>setPage('questions')}>إلغاء</button></div>
      </section>}
      <footer className="admin-footer">MedQuest Arabic · Admin Workspace</footer>
    </main>
  </div>;
}
